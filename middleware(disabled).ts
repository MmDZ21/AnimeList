import { NextRequest, NextResponse } from "next/server";
import { decrypt, encrypt, getSession, updateSession } from "./lib/authUtils";
import { cookies } from "next/headers";
import { refresh } from "./actions/refresh";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup", "/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 2. Decrypt the session from the cookie
  const session = await getSession();

  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 3. Check if the token needs to be refreshed
  if (session?.expiresAt && +session.expiresAt < Date.now() / 1000 + 10) {
    console.log("token is expired", {
      now: Date.now() / 1000,
      expiredAt: session.expiresAt,
    });
    try {
      await refresh(session.refreshToken as string);
      const response = NextResponse.next();
      return response;
    } catch (error) {
      console.error("Error refreshing token: ", error);
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  if (
    isPublicRoute &&
    session?.user &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",
    "/dashboard/:path*", // Example for additional route protection
  ],
};
