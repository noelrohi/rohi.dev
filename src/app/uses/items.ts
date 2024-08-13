interface Item {
  category: string;
  items: Array<string | { type: string; itemName: string }>;
}

export const itemList = [
  {
    category: "What's on my desk",
    items: ["MacBook Air M1"],
  },
  {
    category: "Development",
    items: [
      { type: "Editor", itemName: "VSCode" },
      { type: "Theme", itemName: "Github Dark Colorblind (Beta)" },
      { type: "Framework", itemName: "Next.js" },
      { type: "Styling", itemName: "Tailwind CSS" },
      { type: "UI", itemName: "Shadcn-UI" },
      { type: "Database", itemName: "Neon PostgreSQL" },
      { type: "ORM", itemName: "Drizzle" },
      { type: "Linter and Formatter", itemName: "Biome" },
      { type: "Copilot", itemName: "Supermaven" },
      { type: "Hosting", itemName: "Vercel" },
      { type: "Database GUI", itemName: "TablePlus" },
    ],
  },
  {
    category: "Software",
    items: [
      "Discord",
      "Instagram",
      "Spotify",
      "Grammarly",
      "Arc Browser",
      "Arc Search (Mobile)",
    ],
  },
  {
    category: "Fashion and Accessories",
    items: ["Puma", "Casio", "Uniqlo", "Shein"],
  },
] satisfies Array<Item>;
