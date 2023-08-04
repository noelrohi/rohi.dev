export type Repo = {
  stargazers_count: number;
  name: string;
  description: string;
  html_url: string;
  forks_count: number;
  topics: string[];
  homepage: string;
  language: string;
};

export interface RepoDetails {
  website: string;
  topics: string[];
}

export type LanyardResponse = {
  discord_user: {
    username: string;
    discriminator: string;
    avatar: string;
    id: string;
  };
  discord_status: string;
};

export type WakatimeResponse = {
  data: {
    decimal: string;
    digital: string;
    is_up_to_date: boolean;
    percent_calculated: number;
    range: {
      end: string;
      end_date: string;
      end_text: string;
      start: string;
      start_date: string;
      start_text: string;
      timezone: string;
    };
    text: string;
    timeout: number;
    total_seconds: number;
  };
};

export type LastFmUserResponse = {
  url: string;
  playcount: number;
};
export type Track = {
  artist: {
    "#text": string;
  };
  name: string;
  "@attr"?: {
    nowplaying: "true";
  };
  date: {
    uts: EpochTimeStamp;
  };
};

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}
