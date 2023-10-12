import type { Repo } from "@/types";


export async function getGithubRepoData() {
  try {
    const res = await fetch("https://gh-pinned-repos.egoist.dev/?username=gneiru");
    const repos: Repo[] = await res.json();
    return repos;
  } catch (error) {
    return null;
  }
}
