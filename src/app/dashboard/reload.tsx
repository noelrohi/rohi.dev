"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { revalidate } from "../_actions";
import { cn } from "@/lib/utils";

export default function ReloadButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <Button
        className={cn("w-6 h-6 rounded-full", isPending && "animate-spin")}
        onClick={() =>
          startTransition(async () => await revalidate("/dashboard"))
        }
        size="icon"
        variant="ghost"
        disabled={isPending}
      >
        <Icons.reload />
      </Button>
    </>
  );
}
