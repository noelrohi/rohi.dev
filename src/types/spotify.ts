export type Track = {
  artist: {
    "#text": string;
  };
  name: string;
  url: string;
  "@attr"?: {
    nowplaying: "true";
  };
  date: {
    uts: EpochTimeStamp;
  };
};
