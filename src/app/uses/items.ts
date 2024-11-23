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
        name: "Cursor",
        description: "Favorite AI editor for coding, Fork of VSCode.",
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
        name: "Shadcn/ui",
        description: "UI library",
      },
      {
        name: "Turso LibSQL",
        description: "Database, Fork of SQLite",
      },
      {
        name: "Drizzle",
        description: "Database ORM",
      },
      { name: "Biome", description: "Linter and formatter" },
      { name: "Supermaven", description: "Copilot" },
      { name: "Vercel", description: "Hosting" },
      { name: "Uploadthing", description: "File storage / uploads" },
      { name: "TablePlus", description: "Database GUI" },
    ],
  },
  // {
  //   category: "Fashion and Accessories",
  //   items: [
  //     {
  //       name: "Uniqlo",
  //       description: "Shirts, Jackets, Socks",
  //     },
  //     {
  //       name: "Shein",
  //       description: "Pants",
  //     },
  //     {
  //       name: "Homura",
  //       description: "Necklace and Rings",
  //     },
  //     {
  //       name: "Nike / Puma / New Balance",
  //       description: "Shoes",
  //     },
  //   ],
  // },
] satisfies Array<Item>;
