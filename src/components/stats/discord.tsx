import Image from "next/image";

import { lanyard } from "@/lib/api";
import { capitalize, cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export async function DiscordCard() {
  const { discord_user: user, discord_status: status } = await lanyard();
  return (
    <Card className="hover:border-2 hover:border-black dark:hover:border-white">
      <CardContent className="flex justify-between py-4">
        <div className="flex flex-col space-y-2">
          <div>{user.username}</div>
          <div
            className={cn(
              "flex items-center gap-2",
              status === "dnd" && "text-red-500",
              status === "online" && "text-[#23A55A]",
              status === "idle" && "text-yellow-500",
              status === "offline" && "text-gray-500"
            )}
          >
            <Icons.discord className="w-8 h-8" />
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
  );
}
