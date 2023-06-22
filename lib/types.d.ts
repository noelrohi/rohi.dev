interface node {
  id: number
  title: string
  main_picture: {
    medium: string
    large: string
  }
}

enum animeStatus {
  dropped,
  plan_to_watch,
  completed,
  watching,
  on_hold,
}
enum mangaStatus {
  reading,
  completed,
  on_hold,
  dropped,
  plan_to_read,
}
type animeListStatus = {
  status: animeStatus
  score: number
  num_episodes_watched: number
  is_rewatching: boolean
  // updated_at: '2017-11-11T19:52:16+00:00';
  updated_at: string
}

type mangaListStatus = {
  status: mangaStatus
  score: number
  num_volumes_read: number
  num_chapters_read: number
  is_rereading: boolean
  // updated_at: '2017-11-11T19:52:16+00:00';
  updated_at: string
}

export interface RecentlyWatchedResponse {
  data: {
    node: node
    list_status: animeListStatus
  }[]
  paging: {
    next: string
  }
}

export interface RecentlyReadResponse {
  data: {
    node: node
    list_status: mangaListStatus
  }[]
  paging: {
    next: string
  }
}

export interface PinnedRepo {
  topics: string[]
  website: string
  title: string
  description: string
  link: string
  language: string
  languageColor: string | undefined
  forks: number
  stars: number
  owner: string
}

export interface PinnedReposResponse {
  data: PinnedRepo[]
  baseurl: string
  username: string
}

export interface RepoDetails {
  website: string
  topics: string[]
}

export type LanyardResponse = {
  discord_user: {
    username: string
    discriminator: string
    avatar: string
    id: string
  }
  discord_status: string
}

export type WakatimeResponse = {
  data: {
    decimal: string
    digital: string
    is_up_to_date: boolean
    percent_calculated: number
    range: {
      end: string
      end_date: string
      end_text: string
      start: string
      start_date: string
      start_text: string
      timezone: string
    }
    text: string
    timeout: number
    total_seconds: number
  }
}

export type LastFmUserResponse = {
  url: string
  playcount: number
}
export type Track = {
  artist: {
    "#text": string
  }
  name: string
  "@attr"?: {
    nowplaying: "true"
  }
  date: {
    uts: EpochTimeStamp
  }
}
