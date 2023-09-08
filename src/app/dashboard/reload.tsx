"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function ReloadButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <>
      <Button
        className={cn("w-6 h-6 rounded-full", isPending && "animate-spin")}
        onClick={() => startTransition(() => router.refresh())}
        size="icon"
        variant="ghost"
        disabled={isPending}
      >
        <Icons.reload />
      </Button>
    </>
  );
}
