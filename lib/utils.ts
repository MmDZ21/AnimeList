import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSlug(title: string): string {
  return title
    .trim()                             // trim whitespace
    .toLowerCase()                      // convert to lowercase
    .normalize("NFD")                   // normalize accented characters
    .replace(/[\u0300-\u036f]/g, "")    // remove accent marks
    .replace(/[^a-z0-9\s-]/g, "")       // remove non-alphanumeric chars (keep spaces and hyphens)
    .replace(/\s+/g, "-")               // replace spaces with hyphens
    .replace(/-+/g, "-")                // collapse multiple hyphens
    .replace(/^-|-$/g, "");             // remove starting or ending hyphen
}