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
