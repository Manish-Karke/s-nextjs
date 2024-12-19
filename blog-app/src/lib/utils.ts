import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("np-NP", {
    month: "long", // Correctly use a string instead of backticks
    day: "numeric",
    year: "numeric",
  });
}
