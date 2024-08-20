export interface Main {
  data: Data;
}

interface Data {
  MediaListCollection: MediaListCollection;
}

interface MediaListCollection {
  lists: List[];
}

interface List {
  entries: Entry[];
}

interface Entry {
  updatedAt: number;
  status: "COMPLETED" | "REPEATING" | "CURRENT";
  id: number;
  progress: number;
  media: Media;
}

interface Media {
  coverImage: CoverImage;
  title: Title;
  id: number;
}

interface CoverImage {
  extraLarge: string;
}

interface Title {
  userPreferred: string;
  english: string;
}
