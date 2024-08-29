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
  episodeNumber: number;
  preview: string; // URL or path to the image
  files: { resolution: number; size: number; url: string }[];
}

// Define the type for a Similar Anime
export interface SimilarAnime {
  title: string;
  image: string; // URL or path to the image
}

// Define the type for a Character
export interface Character {
  name: string;
  role: "main" | "supporting";
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
  id: number;
  user: {
    name: string;
    avatar: string; // URL or path to the avatar
  };
  comment: string;
  time: string;
  date: string;
  spoiler: boolean;
  replies?: Comment[];
}

// Define the type for the Staff section
export interface Staff {
  characters: CharacterWithVoice[];
  producers: Producer[];
}

export interface Trailer {
  preview: string;
  title: string;
  url: string;
}

// Define the main Anime type
export interface Anime {
  type: "series" | "movie";
  status: "ongoing" | "completed" | "notAired";
  startDate?: string;
  trailers?: Trailer[];
  endDate?: string;
  studio: string;
  genres: string[];
  themes: string[];
  producers: string[];
  source: "manga" | "ln" | "vn" | "original";
  season?: "spring" | "summer" | "fall" | "winter";
  year?: number;
  language: string;
  title: string;
  image: string;
  imageLg: string;
  rating: number;
  votesCount: number;
  malRating: number;
  anilistRating: number;
  summary: string;
  episodesCount?: number;
  episodeTime?: number;
  episodes: Episode[];
  similars: SimilarAnime[];
  staff: Staff;
  comments: Comment[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  isVip: boolean;
  vipExpiresIn: number;
  bio: string;
  animeCount: number;
  watchTime: number;
  averageRating: number;
  subtitles: Subtitle[];
  animeShows: UserAnime[];
  movies: UserMovie[];
  series: UserSeries[];
  dramas: UserDrama[];
  favorites: UserFavorite[];
  announcements: UserAnnounce[];
  tickets: UserTicket[];
}

export interface Subtitle {
  episode: Episode;
  translator: User;
  href: string;
  downloadUrl: string;
}

export interface UserAnime extends Anime {
  userRating: number;
}
export interface UserMovie extends Movie {
  userRating: number;
}
export interface UserSeries extends Series {
  userRating: number;
}
export interface UserDrama extends Drama {
  userRating: number;
}

export interface UserFavorite {
  animeShows: UserAnime[];
  movies: UserMovie[];
  series: UserSeries[];
  dramas: UserDrama[];
}

export interface UserAnnounce {
  type: any;
  body: string;
  createdAt: number;
}
export interface UserTicket {
  title: string;
  body: string;
  type: string;
  createdAt: string;
  number: number;
  status: "pending" | "replied" | "closed";
}
