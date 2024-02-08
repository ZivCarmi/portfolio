import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function removePunctuation(text: string) {
  const punctuation = /[\.,?!]/g;
  const newText = text.replace(punctuation, "");
  return newText;
}

export function zeroPad(num: number, places: number) {
  return String(num).padStart(places, "0");
}
