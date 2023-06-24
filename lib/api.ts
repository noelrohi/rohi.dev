import { load } from "cheerio"

import { me } from "@/config/site"

import {
  LanyardResponse,
  LastFmUserResponse,
  RecentlyReadResponse,
  RecentlyWatchedResponse,
  Track,
  WakatimeResponse,
} from "./types"
import { myEnv } from "./utils"

export async function pinnedRepos(username: string) {
  const baseurl = `https://github.com/${username}`
  const res = await fetch(baseurl, { next: { revalidate: 60 } })
  const $ = load(await res.text())
  const pinned = $(".js-pinned-items-reorder-list li")
    .toArray()
    .map((el) => {
      const $el = $(el)
      const title = $el.find("span.repo").text()
      const description = $el.find(".pinned-item-desc").text().trim()
      const language = $el.find('span[itemprop="programmingLanguage"]').text()
      const languageColor = $el
        .find(".repo-language-color")
        .attr("style")
        ?.split(": ")[1]
      const forks =
        parseInt($el.find('svg[aria-label="fork"]').parent().text().trim()) || 0
      const stars =
        parseInt($el.find('svg[aria-label="star"]').parent().text().trim()) || 0
      const link = "https://github.com" + $el.find("a").attr("href")
      const owner = $el.find("span.owner").text()
        ? $el.find("span.owner").text()
        : username
      return {
        title,
        description,
        link,
        language,
        languageColor,
        forks,
        stars,
        owner,
      }
    })
  const overallData = await Promise.all(
    pinned.map(async (repo) => {
      const res = await fetch(repo.link, { next: { revalidate: 60 } })
      const $ = load(await res.text())
      const website = $("a[role='link']").first().text().trim()
        ? "https://" + $("a[role='link']").first().text().trim()
        : ""
      const topics = $("a[data-ga-click^='Topic']")
        .map((i, el) => $(el).text().trim())
        .get()
      const repodata = { topics, website }
      return {
        ...repo,
        ...repodata,
      }
    })
  )
  return { data: overallData, baseurl, username }
}

export async function recentlyWatched() {
  const res = await fetch(
    "https://api.myanimelist.net/v2/users/gneiru/animelist?sort=list_updated_at&fields=list_status&limit=1",
    {
      headers: {
        "X-MAL-CLIENT-ID": myEnv.MAL_CLIENT_ID,
      },
      next: { revalidate: 15, tags: ["mal"] },
    }
  )
  const data: RecentlyWatchedResponse = await res.json()
  return data.data[0]
}

export async function recentlyRead() {
  const res = await fetch(
    "https://api.myanimelist.net/v2/users/gneiru/mangalist?sort=list_updated_at&fields=list_status&limit=1",
    {
      headers: {
        "X-MAL-CLIENT-ID": myEnv.MAL_CLIENT_ID,
      },
      next: { revalidate: 15, tags: ["mal"] },
    }
  )
  const data: RecentlyReadResponse = await res.json()
  return data.data[0]
}

export async function lanyard() {
  const resp = await fetch(
    `https://api.lanyard.rest/v1/users/${me.discordID}`,
    {
      cache: "no-cache",
    }
  )
  const response = await resp.json()
  const lanyard = response.data as LanyardResponse
  return lanyard
}

export const wakatime = {
  alltime: async () => {
    const resp = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(myEnv.WAKATIME_API_KEY).toString(
            "base64"
          )}`,
        },
      }
    )
    const data: WakatimeResponse = await resp.json()
    return data
  },
  stats: async () => {
    const resp = await fetch(
      "https://wakatime.com/api/v1/users/current/stats",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(myEnv.WAKATIME_API_KEY).toString(
            "base64"
          )}`,
        },
      }
    )
    const data = await resp.json()
    return data
  },
}

export const spotify = {
  totalPlays: async function () {
    const res = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${me.tag}&api_key=${myEnv.LAST_FM_API_KEY}&format=json`,
      { next: { revalidate: 0 } }
    )
    const data = await res.json()
    const user: LastFmUserResponse = data.user
    return user
  },
  recentTracks: async function () {
    const res = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${me.tag}&api_key=${myEnv.LAST_FM_API_KEY}&format=json`,
      { next: { revalidate: 0 } }
    )
    const data = await res.json()
    const trakcs: Track[] = data.recenttracks.track
    return trakcs
  },
}
