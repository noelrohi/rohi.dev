import { clsx, type ClassValue } from "clsx"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { twMerge } from "tailwind-merge"

dayjs.extend(relativeTime)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = (url: URL) => fetch(url).then((res) => res.json())

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const getAge = () =>
  (
    dayjs().diff("1999-09-03", "milliseconds") /
    (365.25 * 24 * 60 * 60 * 1000)
  ).toFixed(9)

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function getRelativeTime(input: string | number): string {
  const date = new Date(input)
  return dayjs(date).fromNow()
}
