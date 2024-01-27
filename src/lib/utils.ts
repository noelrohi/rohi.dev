import { type ClassValue, clsx } from "clsx";
import djs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { twMerge } from "tailwind-merge";

djs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dayjs = djs;

export function generateImage({ title, date }: { date?: Date; title: string }) {
  const postDate = date
    ? date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
  return `https://og.rohi.dev/blog?date=${postDate}&title=${title}`;
}

export function getRandomInt(param: { min: number; max: number }) {
  const min = Math.ceil(param.min);
  const max = Math.floor(param.max);
  return Math.floor(Math.random() * (max - min) + min);
}
