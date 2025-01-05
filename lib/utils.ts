import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(title: string): string {
  return title
    .trim() // trim whitespace
    .toLowerCase() // convert to lowercase
    .normalize("NFD") // normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // remove accent marks
    .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumeric chars (keep spaces and hyphens)
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-") // collapse multiple hyphens
    .replace(/^-|-$/g, ""); // remove starting or ending hyphen
}

export function getImagePath(
  path1: string | null | undefined,
  path2: string | null | undefined
): string {
  const path = path1
  ? path1.startsWith("http")
    ? path1
    : "https://dev-api.alplayer.ir" + (path1.startsWith("/") ? path1 : "/" + path1)
  : path2
  ? path2.startsWith("http")
    ? path2
    : "https://dev-api.alplayer.ir" + (path2.startsWith("/") ? path2 : "/" + path2)
  : "/svg/imageloader.svg";
  console.log("path is: "+path)
  return path
}


export function getDaysToExpire(expireDateString: string) {
  // Convert the expiration date string to a Date object
  const expireDate: Date = new Date(expireDateString);

  // Get the current date
  const currentDate: Date = new Date();

  // Check if the parsed date is valid
  if (isNaN(expireDate.getTime())) {
    throw new Error("Invalid expiration date format.");
  }

  // Calculate the difference in time (in milliseconds)
  const timeDifference: number = expireDate.getTime() - currentDate.getTime();

  // Check if the expiration date has passed
  const isNotExpired = timeDifference > 0;

  if (isNotExpired) {
    // Convert the difference to days and hours
    const totalHours = Math.floor(timeDifference / (1000 * 60 * 60)); // Total hours remaining
    const daysLeft = Math.floor(totalHours / 24); // Days remaining
    const hoursLeft = totalHours % 24; // Hours remaining after removing days

    // Return the result as an object
    return { daysLeft, hoursLeft };
  }

  // If the expiration date has passed, return false
  return false;
}
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
