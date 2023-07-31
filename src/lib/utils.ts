import { languageColor } from "@/config/gh";
import { env } from "@/env.mjs";
import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { twMerge } from "tailwind-merge";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: { ...dayjs.Ls.en.relativeTime },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: URL) => fetch(url).then((res) => res.json());

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getAge = () =>
  (
    dayjs().diff("1999-09-03", "milliseconds") /
    (365.25 * 24 * 60 * 60 * 1000)
  ).toFixed(9);

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const relatime = {
  date: async function (input: string | number) {
    return dayjs(new Date(input)).fromNow();
  },
  unix: function (input: EpochTimeStamp, ago: boolean = false) {
    return dayjs.unix(input).fromNow(ago);
  },
};

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function getLanguageColor(lang: string) {
  // check if language is in languageColor keys, if so return the value of that key
  return Object.keys(languageColor).includes(lang)
    ? languageColor[lang]
    : "#ffffff";
}
