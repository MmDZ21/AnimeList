import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { ImgHTMLAttributes } from "react";

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

export interface HeroAction {
  type: "button" | "link";
  label: string;
  variant?: "outline" | "default";
  icon?: string;
  mobileIconOnly?: boolean;
  href?: string;
  fn?: (...args: any[]) => any;
}

export type HeroSlide = {
  title: string;
  imageUrl: string;
  desc: string;
  actions?: HeroAction[];
  justifyFa: "start" | "end" | "center";
  justifyEn: "start" | "end" | "center";
  imgMobilePosition?: "right" | "left" | "center";
};
