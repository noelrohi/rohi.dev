import Link from "next/link";
import { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AgeCard from "./age";
import { AnimeCard, MangaCard } from "./animanga";
import { CodingCard } from "./coding";
import { DiscordCard } from "./discord";
import { SpotifyPlay } from "./spotify";

export function ItemCard({
  link,
  title,
  children,
  newtab,
}: {
  link: string;
  title: string;
  children: ReactNode;
  newtab?: boolean;
}) {
  return (
    <Link
      href={link}
      target={newtab == false ? "" : "_blank"}
      rel="noopener noreferrer"
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </Link>
  );
}

export { AgeCard, AnimeCard, CodingCard, DiscordCard, MangaCard, SpotifyPlay };
