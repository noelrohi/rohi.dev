import { env } from "@/env";
import type { Main } from "@/types/anilist";
import type { Track } from "@/types/spotify";
import { z } from "zod";

const projectSchema = z.array(
  z.object({
    name: z.string().optional().nullable(),
    html_url: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    homepage: z.string().optional().nullable(),
    language: z.string().optional().nullable(),
    stargazers_count: z.union([z.string(), z.number()]),
    forks_count: z.number(),
    private: z.boolean(),
  }),
);

// export async function getGithubRepoData() {
//   try {
//     const url = new URL("https://api.github.com/users/noelrohi/repos");
//     url.searchParams.set("type", "owner");
//     url.searchParams.set("sort", "pushed");
//     url.searchParams.set("per_page", "10");
//     const res = await fetch(url);
//     const repos = projectSchema.parse(await res.json());
//     return repos
//       .filter((repo) => repo.private === false)
//       .sort((a, b) => Number(b.stargazers_count) - Number(a.stargazers_count))
//       .slice(0, 6)
//       .map((repo) => ({
//         repoUrl: repo.html_url,
//         homePage: repo.homepage,
//         description: repo.description,
//         name: repo.name,
//         stars: repo.stargazers_count,
//         forks: repo.forks_count,
//         language: repo.language,
//       }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

function getAnilistQuery(type: "MANGA" | "ANIME") {
  return `query($username: String) {
            MediaListCollection(userName: $username, type: ${type}, 
              status_in: [CURRENT, COMPLETED], sort: UPDATED_TIME_DESC) {
              lists {
                entries {
                  updatedAt
                  status
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
  const entry = data.data.MediaListCollection.lists
    ?.flatMap((list) => list.entries)
    .sort((a, b) => b.updatedAt - a.updatedAt)[0];

  return entry;
}

export async function recentTrack() {
  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=noelrohi&api_key=${env.LAST_FM_API_KEY}&format=json`,
  );
  const data = await res.json();
  const trakcs: Track[] = data.recenttracks.track;
  return trakcs[0];
}

export async function getKdramaActivity() {
  const res = await fetch("https://kd.rohi.dev/api/user/activity", {
    headers: {
      Authorization: `Bearer ${env.KNEXT_API_KEY}`,
    },
  });
  if (!res.ok) return null;
  const data: {
    title: string;
    date: string;
    episode: number;
    status: "finished" | "watching";
    url: string;
  }[] = await res.json();
  return data;
}
