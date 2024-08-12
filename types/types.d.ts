import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id?: string;
    accessToken: string;
    refreshToken: string;
    expiration: number;
    email?: string;
    emailVerified?: Date | null;
  }

  interface Session {
    user?: User;
    token: JWT;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    id?: string;
    accessToken: string;
    refreshToken: string;
    expiration: number;
    email?: string;
    emailVerified?: Date | null;
    user: User;
  }
}

export interface NavMenu {
  label: string;
  href?: string;
  subMenus?: {
    label: string;
    href: string;
  }[];
}
