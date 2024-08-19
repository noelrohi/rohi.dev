interface Item {
  category: string;
  items: Array<{ name: string; description?: string }>;
}

export const itemList = [
  {
    category: "Desk",
    items: [
      {
        name: "MacBook Air M1",
        description: "A beast in terms of development and productivity.",
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        name: "VSCode",
        description: "Favorite editor for coding.",
      },
      {
        name: "Github Dark Colorblind (Beta)",
        description: "Theme for VSCode.",
      },
      {
        name: "Next.js",
        description: "React framework",
      },
      {
        name: "Tailwind CSS",
        description: "Styling",
      },
      {
        name: "Shadcn-UI",
        description: "UI library",
      },
      {
        name: "Neon PostgreSQL",
        description: "Database",
      },
      {
        name: "Drizzle",
        description: "ORM",
      },
      { name: "Biome", description: "Linter and formatter" },
      { name: "Supermaven", description: "Copilot" },
      { name: "Vercel", description: "Hosting" },
      { name: "TablePlus", description: "Database GUI" },
    ],
  },
  // {
  //   category: "Fashion and Accessories",
  //   items: [
  //     {
  //       name: "Puma",
  //       description: "Speedcat or Palermo",
  //     },
  //     {
  //       name: "Uniqlo",
  //       description: "Airism Shirt, Socks, Utility Jacket",
  //     },
  //     {
  //       name: "Shein",
  //       description: "Vintage Pants, Caps",
  //     },
  //   ],
  // },
] satisfies Array<Item>;
