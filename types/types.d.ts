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

export interface MediaCardType {
  imgUrl: string;
  name: string;
  desc: string;
  href: string;
}

export type EpisodeCardType = {
  type: "episode" | "userEpisode";
  name: string;
  imgUrl: string;
  episode: number;
  tags?: string[];
  time?: string;
  href: string;
  malScore?: number;
  aniScore?: number;
  episodes?: number;
  watched?: number;
};
// Define the type for an Episode
export interface Episode {
  animeTitle: string;
  episodeTitle: string;
  preview: string; // URL or path to the image
}

// Define the type for a Similar Anime
export interface SimilarAnime {
  title: string;
  image: string; // URL or path to the image
}

// Define the type for a Character
export interface Character {
  name: string;
  role: string;
  image: string; // URL or path to the image
}

// Define the type for a Voice Actor
export interface VoiceActor {
  name: string;
  language: string;
  image: string; // URL or path to the image
}

// Define the type for a Character with its Voice Actor
export interface CharacterWithVoice {
  character: Character;
  voice: VoiceActor;
}

// Define the type for a Producer
export interface Producer {
  name: string;
  role: string;
  image: string; // URL or path to the image
}

// Define the type for a Comment
export interface Comment {
  user: {
    name: string;
    avatar: string; // URL or path to the avatar
  };
  comment: string;
  time: string;
  date: string;
  spoiler: boolean;
}

// Define the type for the Staff section
export interface Staff {
  characters: CharacterWithVoice[];
  producers: Producer[];
}

// Define the main Anime type
export interface Anime {
  type: string;
  language: string;
  title: string;
  image: string; // URL or path to the image
  rating: number;
  votesCount: number;
  malRating: number;
  anilistRating: number;
  summary: string;
  episodes: Episode[];
  similars: SimilarAnime[];
  staff: Staff;
  comments: Comment[];
}
