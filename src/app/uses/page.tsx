import type { Metadata } from "next/types";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's what stuff I'm currently using.",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        here's everything I'm currently using
      </div>
      {itemList.map(({ items, category }) => (
        <Fragment key={category}>
          <div className="font-medium text-lg tracking-tighter">{category}</div>
          <ul className="list-disc pl-6 text-foreground/80">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </section>
  );
}

interface Item {
  category: string;
  items: Array<string>;
}

const itemList = [
  {
    category: "What's on my office desk",
    items: [
      "Asus TUF Gaming F15 FX506LHB",
      '27" Samsung CR50',
      "Garuda Falcon1",
      "Dark Alien K710 Keyboard",
    ],
  },
  {
    category: "Development",
    items: [
      "Editor: VSCode",
      "Theme: Github Dark Colorblind (Beta)",
      "Framework: Next.js",
      "Database: PlanetScale MySQL",
      "Styling: Tailwind CSS",
      "UI: Shadcn-UI",
      "ORM: Drizzle",
      "Linter and Formatter: Biome",
      "Hosting: Vercel",
    ],
  },
  {
    category: "Software",
    items: [
      "Messenger",
      "Discord",
      "Spotify",
      "Grammarly",
      "Arc Search",
      "Dime: Budget & Expense Tracker",
    ],
  },
  {
    category: "Apparel and Accessories",
    items: [
      "Nike Air Force 1",
      "Casio F-91W",
      "Uniqlo drawstring bag",
      "Shien dazy pants",
      "Made in MNL polo shirts",
      "Conceit t-shirts",
    ],
  },
] satisfies Array<Item>;
