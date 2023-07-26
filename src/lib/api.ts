import { env } from "@/env.mjs";
import { me } from "@/config/site";

import {
  LanyardResponse,
  LastFmUserResponse,
  RecentlyReadResponse,
  RecentlyWatchedResponse,
  Repo,
  Track,
  WakatimeResponse,
} from "@/types";
import { pinnedRepos } from "@/config/gh";

export async function getGithubRepoData() {
  try {
    const data = await Promise.all(
      pinnedRepos.map(async (repo) => {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            Accept: "application/vnd.github+json",
          },
          next: {
            revalidate: 60,
          },
        });

        const data = (await response.json()) as Repo;

        return data;
      })
    );
    return data;
  } catch (error) {
    return null;
  }
}

export async function recentlyWatched() {
  const res = await fetch(
    "https://api.myanimelist.net/v2/users/gneiru/animelist?sort=list_updated_at&fields=list_status&limit=1&status=watching",
    {
      headers: {
        "X-MAL-CLIENT-ID": env.MAL_CLIENT_ID,
      },
      next: { revalidate: 15, tags: ["mal"] },
    }
  );
  const data: RecentlyWatchedResponse = await res.json();
  return data.data[0];
}

export async function recentlyRead() {
  const res = await fetch(
    "https://api.myanimelist.net/v2/users/gneiru/mangalist?sort=list_updated_at&fields=list_status&limit=1&status=reading",
    {
      headers: {
        "X-MAL-CLIENT-ID": env.MAL_CLIENT_ID,
      },
      next: { revalidate: 15, tags: ["mal"] },
    }
  );
  const data: RecentlyReadResponse = await res.json();
  return data.data[0];
}

export async function lanyard() {
  const resp = await fetch(
    `https://api.lanyard.rest/v1/users/${me.discordID}`,
    {
      cache: "no-cache",
    }
  );
  const response = await resp.json();
  const lanyard = response.data as LanyardResponse;
  return lanyard;
}

export const wakatime = {
  alltime: async () => {
    const resp = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
            "base64"
          )}`,
        },
      }
    );
    const data: WakatimeResponse = await resp.json();
    return data;
  },
  stats: async () => {
    const resp = await fetch(
      "https://wakatime.com/api/v1/users/current/stats",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
            "base64"
          )}`,
        },
      }
    );
    const data = await resp.json();
    return data;
  },
};

export const spotify = {
  totalPlays: async function () {
    const res = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${me.tag}&api_key=${env.LAST_FM_API_KEY}&format=json`,
      { next: { revalidate: 0 } }
    );
    const data = await res.json();
    const user: LastFmUserResponse = data.user;
    return user;
  },
  recentTracks: async function () {
    const res = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${me.tag}&api_key=${env.LAST_FM_API_KEY}&format=json`,
      { next: { revalidate: 0 } }
    );
    const data = await res.json();
    const trakcs: Track[] = data.recenttracks.track;
    return trakcs;
  },
};
