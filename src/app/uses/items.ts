interface Item {
  category: string;
  items: Array<string>;
}

export const itemList = [
  {
    category: "What's on my desk",
    items: ["MacBook Air M1"],
  },
  {
    category: "Development",
    items: [
      "Editor: VSCode",
      "Theme: Github Dark Colorblind (Beta)",
      "Framework: Next.js",
      "Styling: Tailwind CSS",
      "UI: Shadcn-UI",
      "Database: Neon PostgreSQL",
      "ORM: Drizzle",
      "Linter and Formatter: Biome",
      "Copilot: Supermaven",
      "Hosting: Vercel",
      "Database GUI: TablePlus",
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
    category: "Apparel and Accessories",
    items: ["Asics", "Casio", "Uniqlo", "Shien (mainly for pants)"],
  },
] satisfies Array<Item>;
