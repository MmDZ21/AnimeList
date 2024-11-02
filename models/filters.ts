import { genres } from "@/constants";
import { optional, z } from "zod";

const genresArray = genres.map((genres) => genres.title);

export const genreEnums = z.enum(["هرچی", ...genresArray]);
export type GenreEnum = z.infer<typeof genreEnums>;
export const typeEnums = z.enum(["هرچی", "سریالی", "سینمایی", "OVA"]);
export type TypeEnums = z.infer<typeof typeEnums>;
export const countryEnums = z.enum(["هرچی", "ژاپن", "چین"]);
export type CountryEnums = z.infer<typeof countryEnums>;
export const ratingEnums = z.enum([
  "هرچی",
  "10",
  " 9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
]);
export type RatingEnums = z.infer<typeof ratingEnums>;

export const languageEnums = z.enum(["هرچی", "ژاپنی", "چینی"]);
export type LanguageEnums = z.infer<typeof languageEnums>;

const filtersSchema = z.object({
  genre: optional(genreEnums),
  type: optional(typeEnums),
  country: optional(countryEnums),
  rating: optional(ratingEnums),
  language: optional(languageEnums),
  actor: z.string().optional(),
  director: z.string().optional(),
});

export default filtersSchema;
