import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import djs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

djs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dayjs = djs;