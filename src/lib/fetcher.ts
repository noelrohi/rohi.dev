import type { Repo } from "@/types";
import type { Main } from "@/types/anilist";
import type { Track } from "@/types/spotify";

export async function getGithubRepoData() {
  try {
    const res = await fetch(
      "https://gh.rohi.dev/api/pinned?username=gneiru"
    );
    const repos: Repo[] = await res.json();
    return repos;
  } catch (error) {
    return null;
  }
}

function getAnilistQuery(type: "MANGA" | "ANIME") {
  return `query($username: String) {
            MediaListCollection(userName: $username, forceSingleCompletedList: true, 
              type: ${type}, status: CURRENT, sort: UPDATED_TIME_DESC) {
              lists {
                entries {
                  updatedAt,
                  id
                  progress
                  media {
                    id
                    coverImage {
                      extraLarge
                    }
                    title {
                      userPreferred
                      english
                    }
                  }
                }
              }
            }
          }`;
}

export async function recentActivity(type: "MANGA" | "ANIME") {
  const variables = {
    username: "nrohi",
  };
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: getAnilistQuery(type),
      variables,
    }),
  });
  if (!res.ok) return null;
  const data: Main = await res.json();
  return data.data.MediaListCollection.lists[0]?.entries[0];
}

export async function recentTrack(){
  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=gneiru&api_key=${import.meta.env.LAST_FM_API_KEY}&format=json`,
  );
  const data = await res.json();
  const trakcs: Track[] = data.recenttracks.track;
  return trakcs[0];
}