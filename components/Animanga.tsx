import Image from "next/image"

import { lanyard } from "@/lib/api"
import { capitalize, cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

import { Icons } from "./icons"

export async function AnimeCard() {
  const { discord_user: user, discord_status: status } = await lanyard()
  return (
    <Card className="w-[350px]">
      <CardContent className="flex justify-between py-4">
        <div className="flex flex-col space-y-2">
          <div>{`${user.username}#${user.discriminator}`}</div>
          <div
            className={cn(
              "flex gap-2",
              status === "dnd" && "text-red-500",
              status === "online" && "text-[#23A55A]",
              status === "idle" && "text-yellow-500",
              status === "offline" && "text-gray-500"
            )}
          >
            <Icons.discord className="h-5 w-5" />
            {status !== "dnd" ? capitalize(status) : "Do Not Disturb"}
          </div>
        </div>
        <Image
          src={`https://api.lanyard.rest/${user.id}.png`}
          alt={user.username}
          width={64}
          height={64}
          className="rounded-full"
        />
      </CardContent>
    </Card>
  )
}

export async function MangaCard() {
    const { discord_user: user, discord_status: status } = await lanyard()
    return (
      <Card className="w-[350px]">
        <CardContent className="flex justify-between py-4">
          <div className="flex flex-col space-y-2">
            <div>{`${user.username}#${user.discriminator}`}</div>
            <div
              className={cn(
                "flex gap-2",
                status === "dnd" && "text-red-500",
                status === "online" && "text-[#23A55A]",
                status === "idle" && "text-yellow-500",
                status === "offline" && "text-gray-500"
              )}
            >
              <Icons.discord className="h-5 w-5" />
              {status !== "dnd" ? capitalize(status) : "Do Not Disturb"}
            </div>
          </div>
          <Image
            src={`https://api.lanyard.rest/${user.id}.png`}
            alt={user.username}
            width={64}
            height={64}
            className="rounded-full"
          />
        </CardContent>
      </Card>
    )
  }
  