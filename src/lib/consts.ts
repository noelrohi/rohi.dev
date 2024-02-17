export const author = {
  handle: "@gneiru",
};

export const projectURL = "https://rohi.dev";

export const links: Array<{
  path: `/${string}`;
  label: string;
  hidden?: boolean;
}> = [
  {
    path: "/",
    label: "home",
  },
  { path: "/blog", label: "blog" },
  { path: "/guestbook", label: "guestbook" },
  { path: "/activity", label: "activity" },
  { path: "/uses", label: "uses", hidden: true },
];
