import { languageColor } from "@/config/gh";
import { env } from "@/env.mjs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: URL) => fetch(url).then((res) => res.json());

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function getAge() {
  const birthdate = new Date("1999-09-03");
  const today = new Date();
  const ageInMillis = today.getTime() - birthdate.getTime();
  const ageInDecimal = (ageInMillis / (365.25 * 24 * 60 * 60 * 1000)).toFixed(
    9
  );

  return ageInDecimal;
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function fromNow(unix: EpochTimeStamp, showAgo?: Boolean) {
  const date = new Date();
  const timestamp = date.getTime();
  const seconds = Math.floor(timestamp / 1000);
  const difference = seconds - unix;
  if (difference < 60) {
    return `${difference}s ${showAgo ? " ago" : ""}`;
  } else if (difference < 3600) {
    return `${Math.floor(difference / 60)}m ${showAgo ? " ago" : ""}`;
  } else if (difference < 86400) {
    return `${Math.floor(difference / 3600)}h ${showAgo ? " ago" : ""}`;
  } else if (difference < 2620800) {
    return `${Math.floor(difference / 86400)}d ${showAgo ? " ago" : ""}`;
  } else if (difference < 31449600) {
    return `${Math.floor(difference / 2620800)}mo ${showAgo ? " ago" : ""}`;
  } else {
    return `${Math.floor(difference / 31449600)}y ${showAgo ? " ago" : ""}`;
  }
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function getLanguageColor(lang: string) {
  // check if language is in languageColor keys, if so return the value of that key
  return Object.keys(languageColor).includes(lang)
    ? languageColor[lang]
    : "#ffffff";
}
