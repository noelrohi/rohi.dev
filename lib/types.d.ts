interface node {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
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
    status: animeStatus;
    score: number;
    num_episodes_watched: number;
    is_rewatching: boolean;
    // updated_at: '2017-11-11T19:52:16+00:00';
    updated_at: string;
  };
  
  type mangaListStatus = {
    status: mangaStatus;
    score: number;
    num_volumes_read: number;
    num_chapters_read: number;
    is_rereading: boolean;
    // updated_at: '2017-11-11T19:52:16+00:00';
    updated_at: string;
  };
  
  export interface RecentlyWatchedResponse {
    data: {
      node: node;
      list_status: animeListStatus;
    }[];
    paging: {
      next: string;
    };
  }
  
  export interface RecentlyReadResponse {
    data: {
      node: node;
      list_status: mangaListStatus;
    }[];
    paging: {
      next: string;
    };
  }
  
  export interface PinnedReposResponse {
    owner: string;
    repo: string;
    link: string;
    description: string;
    image: string;
    language: string;
    languageColor: string;
    stars: string;
    forks: number;
    website?: string;
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