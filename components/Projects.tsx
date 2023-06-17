import Link from "next/link"
import { Circle, Star } from "lucide-react"

import { me, siteConfig } from "@/config/site"
import { getPinnedRepos } from "@/lib/api"
import { PinnedReposResponse } from "@/lib/types"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Heading from "./Heading"
import { Icons } from "./icons"

export const Projects = async () => {
  const datas = await getPinnedRepos()

  return (
    <section>
      <Heading>
        <Link href={siteConfig.links.github}>Projects</Link>
      </Heading>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 ">
        {/* {JSON.stringify(datas)} */}
        {datas.map((data, idx) => (
          <ProjectCard key={idx} {...data} />
        ))}
        <Link
          href={`https://github.com/${me.tag}?tab=repositories`}
          className="underline"
        >
          See more ...
        </Link>
      </div>
    </section>
  )
}

function ProjectCard({
  description,
  repo,
  language,
  stars,
  link,
  website,
}: PinnedReposResponse) {
  return (
    <Link href={website ?? link}>
      <Card className=" w-[350px]">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">
              <p>{repo}</p>
              <Icons.external className="opacity-40" />
            </div>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardContent className="p-0">
            <div className="flex justify-between gap-4 space-x-0 text-sm text-muted-foreground">
              <div className="flex items-center ">
                <Circle
                  className={cn(
                    "mr-1 h-3 w-3",
                    language === "JavaScript"
                      ? "fill-javascript"
                      : language === "TypeScript"
                      ? "fill-typescript"
                      : language === "Python"
                      ? "fill-python"
                      : language === "Svelte"
                      ? "fill-svelte"
                      : "fill-black"
                  )}
                />
                {language}
              </div>
              <div className="flex justify-between gap-4">
                <span className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <p>{stars}</p>
                </span>
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  )
}
