import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.AUTH_SECRET;
const key = new TextEncoder().encode(secretKey);

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};
export type SessionPayload = {
  user: User;
  expiresAt: number;
  accessToken: string;
  refreshToken: string;
};
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(
  user: User,
  expiresAt: number,
  accessToken: string,
  refreshToken: string
) {
  const session = await encrypt({
    user,
    accessToken,
    expiresAt,
    refreshToken,
  });

  const expires = new Date(Date.now() + 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires,
  });
  console.log("expires at: ", expiresAt);
  redirect("/dashboard");
}

export async function verifySession() {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.user) {
    redirect("/login");
  }

  return {
    isAuth: true,
    user: session.user,
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
  };
}

export async function updateSession(
  expiresAt: number,
  refreshToken: string,
  accessToken: string
) {
  const session = await getSession();
  const expires = new Date(Date.now() + 60 * 60 * 1000);

  const newSession = {
    ...session,
    accessToken,
    refreshToken,
    expiresAt,
    user: session?.user as User,
  };
  const encryptedSession = await encrypt(newSession);
  cookies().set("session", encryptedSession, {
    httpOnly: true,
    secure: true,
    expires,
  });
}

export function deleteSession() {
  cookies().delete("session");
  redirect("/login");
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
