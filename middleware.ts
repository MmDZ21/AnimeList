import { NextResponse, type NextMiddleware, type NextRequest } from "next/server";
import { encode, getToken, type JWT } from "next-auth/jwt";
import { RefreshTokenDocument, RefreshTokenMutation, RefreshTokenMutationVariables } from "./generated/graphql";
import { getAuthClient } from "./lib/apolloClient";

export const SIGNIN_SUB_URL = "/login";
export const SESSION_TIMEOUT = 600; // 10 mins
export const TOKEN_REFRESH_BUFFER_SECONDS = 10;
const SESSION_SECURE = process.env.AUTH_URL?.startsWith('https://');
const SESSION_COOKIE = SESSION_SECURE ? '__Secure-authjs.session-token' : 'authjs.session-token';

let isRefreshing = false;

export function shouldUpdateToken(token: JWT): boolean {
  const timeInSeconds = Math.floor(Date.now() / 1000);
  return timeInSeconds >= token?.expiration - TOKEN_REFRESH_BUFFER_SECONDS;
}

export async function refreshAccessToken(token: JWT): Promise<JWT | null> {

  if (isRefreshing) {
    return token;
  }

  const timeInSeconds = Math.floor(Date.now() / 1000);
  isRefreshing = true;

  try {
    const { data, errors,extensions } = await getAuthClient().mutate<
      RefreshTokenMutation,
      RefreshTokenMutationVariables
    >({
      mutation: RefreshTokenDocument,
      variables: {
        input: {
          refresh_token: token.refreshToken,
        },
      },
    });

    if (errors || !data?.refreshToken) {


      // Check for invalid refresh token error
      const invalidRefreshTokenError = errors?.find((err) =>
		// @ts-expect-error
        err.extensions.reason.includes("invalid refresh token")
      );
      if (invalidRefreshTokenError) {

        return null; // Return null to signal logout
      }

      throw new Error(`Token refresh failed with errors: ${JSON.stringify(errors)}`);
    }

    const newTokens = data.refreshToken;
    return {
      ...token,
      accessToken: newTokens?.access_token ?? token?.accessToken,
      expiration: newTokens?.expires_in + timeInSeconds,
      refreshToken: newTokens?.refresh_token ?? token?.refreshToken,
    };
  } catch (e) {
    console.error("Error refreshing token:", e);
    return null; // Return null if the refresh token mutation fails
  } finally {
    isRefreshing = false;
  }
}

export function updateCookie(
  sessionToken: string | null,
  request: NextRequest,
  response: NextResponse
): NextResponse<unknown> {
  /*
   * BASIC IDEA:
   *
   * 1. Set request cookies for the incoming getServerSession to read new session
   * 2. Updated request cookie can only be passed to server if it's passed down here after setting its updates
   * 3. Set response cookies to send back to browser
   */

  if (sessionToken) {
    // Set the session token in the request and response cookies for a valid session
    request.cookies.set(SESSION_COOKIE, sessionToken);
    response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
    response.cookies.set(SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      maxAge: SESSION_TIMEOUT,
      secure: SESSION_SECURE,
      sameSite: "lax",
    });
  } else {
    request.cookies.delete(SESSION_COOKIE);
    return NextResponse.redirect(new URL(SIGNIN_SUB_URL, request.url));
  }

  return response;
}

export const middleware: NextMiddleware = async (request: NextRequest) => {
	const token = await getToken({
	  req: request,
	  secret: process.env.AUTH_SECRET,
	  cookieName: SESSION_COOKIE,
	  salt: SESSION_COOKIE,
	});
  
  
	let response = NextResponse.next();
  
	if (!token) {
	  console.warn("No token found. Redirecting to login...");
	  return NextResponse.redirect(new URL(SIGNIN_SUB_URL, request.url));
	}
  
	if (shouldUpdateToken(token)) {
	  try {
		const refreshedToken = await refreshAccessToken(token);
  
		if (!refreshedToken) {
		  // Token refresh failed, clear session and redirect to login
		  console.warn("Invalid or expired token detected. Clearing session and redirecting...");
		  return updateCookie(null, request, response);
		}
  
		// Refresh was successful, update the session cookie
		const newSessionToken = await encode({
		  secret: process.env.AUTH_SECRET!,
		  token: refreshedToken,
		  maxAge: SESSION_TIMEOUT,
		  salt: SESSION_COOKIE,
		});
  
		response = updateCookie(newSessionToken, request, response);
	  } catch (error) {
		console.error("Error refreshing token:", error);
		// Ensure session is cleared and user is redirected to login
		return updateCookie(null, request, response);
	  }
	}
  
	return response;
  };
  

export const config = {
  matcher: ["/dashboard/:path*", "/downloads/:path*"],
};
