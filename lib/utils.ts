import { env as myEnv } from "@/env"
import { clsx, type ClassValue } from "clsx"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocale from "dayjs/plugin/updateLocale"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

import { emailBodySchema } from "./validations"

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "1s",
    m: "1m",
    mm: "%dm",
    h: "1hr",
    hh: "%dhr",
    d: "1 day",
    dd: "%d days",
    M: "1mo",
    MM: "%dmo",
    y: "1y",
    yy: "%dy",
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = (url: URL) => fetch(url).then((res) => res.json())
export const fetcherWithHeaders = (url: URL, token: string) =>
  fetch(url, { headers: { Authorization: token } }).then((res) => res.json())
export const emailFetcher = (url: URL, body: z.infer<typeof emailBodySchema>) =>
  fetch(url, { body: JSON.stringify(body) }).then((res) => res.json())

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

export const relatime = {
  date: async function (input: string | number) {
    return dayjs(new Date(input)).fromNow()
  },
  unix: function (input: EpochTimeStamp, ago: boolean = false) {
    return dayjs.unix(input).fromNow(ago)
  },
}

export function absoluteUrl(path: string) {
  return `${myEnv.NEXT_PUBLIC_APP_URL}${path}`
}

export { myEnv }
