import Image from "next/image";
import Link from "next/link";

import { cn, fromNow } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentActivity } from "@/lib/api";

const MediaCard = ({
  imageSrc,
  number,
  link,
  type,
  title,
  updated_at,
}: {
  imageSrc: string;
  number: number;
  link: string;
  type: "MANGA" | "ANIME";
  title: string;
  updated_at: number;
}) => {
  const mediaType = type === "MANGA" ? "Chapter" : "Episode";
  const action = type === "MANGA" ? "Read" : "Watched";

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div>
        <Card
          className={cn(
            "hover:border-2 hover:border-black dark:hover:border-white",
            imageSrc && "flex justify-between"
          )}
        >
          <div>
            <CardHeader>
              <CardTitle className="h-10">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm ">
                {`${mediaType} ${number}`}
                <div className="text-muted-foreground">
                  {action} {fromNow(updated_at, true)}
                </div>
              </div>
            </CardContent>
          </div>
          <div className="p-4">
            <Image
              src={imageSrc}
              alt={title}
              width={64}
              height={64}
              className="rounded-lg object-contain"
            />
          </div>
        </Card>
      </div>
    </Link>
  );
};

export async function AnimeCard() {
  const data = await recentActivity("ANIME");
  if (!data) return null;
  const { media, updatedAt, progress } = data;
  const link = `https://anilist.co/user/nrohi/animelist`;

  return (
    <MediaCard
      title={media.title.userPreferred}
      number={progress}
      imageSrc={media.coverImage.extraLarge}
      updated_at={updatedAt}
      link={link}
      type="ANIME"
    />
  );
}

export async function MangaCard() {
  const data = await recentActivity("MANGA");
  if (!data) return null;
  const { media, updatedAt, progress } = data;
  const link = `https://anilist.co/user/nrohi/mangalist`;

  return (
    <MediaCard
      title={media.title.userPreferred}
      number={progress}
      imageSrc={media.coverImage.extraLarge}
      updated_at={updatedAt}
      link={link}
      type="MANGA"
    />
  );
}
