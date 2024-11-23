import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInt(param: { min: number; max: number }) {
  const min = Math.ceil(param.min);
  const max = Math.floor(param.max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function getNumberOfViews(date: string) {
  const startedDate = new Date(date);
  const dateNow = new Date();
  const timeDiff = dateNow.getTime() - startedDate.getTime();
  const numberOfViews = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  return numberOfViews;
}
