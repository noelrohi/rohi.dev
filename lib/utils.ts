import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = (url: URL) => fetch(url).then((res) => res.json())

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)