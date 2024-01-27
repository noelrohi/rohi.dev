import { SubmitButton } from "@/components/buttons/submit";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/db";
import { guestbook } from "@/db/schema/main";
import { auth, signOut } from "@/lib/auth";
import { cn, getRandomInt } from "@/lib/utils";
import { notify } from "@/lib/webhooks/slack";
import { TrashIcon } from "@radix-ui/react-icons";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    follow: false,
    index: false,
  },
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        admin only here
      </div>
      <Suspense fallback={<EntriesFallback />}>
        <Entries />
      </Suspense>
    </section>
  );
}

function EntriesFallback() {
  return (
    <>
      {Array.from({ length: 100 }).map((_, index) => {
        const rand = getRandomInt({ min: 1, max: 100 });
        return (
          <div className="flex gap-2" key={index}>
            <Skeleton className="h-[20px] w-12" />
            <Skeleton
              className={cn(
                "h-[20px]",
                rand > 49 || index === 0 ? "w-full" : "w-1/2",
              )}
            />
          </div>
        );
      })}
    </>
  );
}

async function Entries() {
  const session = await auth();
  if (session?.user.email !== "noelrohi59@gmail.com") notFound();
  const guestbookEntries = await db.query.guestbook.findMany({
    limit: 100,
    orderBy: (table, { desc }) => [desc(table.createdAt)],
  });
  return (
    <div className="space-y-4">
      {guestbookEntries.map((entry) => (
        <div
          key={entry.id}
          className="flex w-full justify-between break-words text-sm hover:bg-muted"
        >
          <div>
            <span className="text-muted-foreground">{entry.createdBy}</span> :{" "}
            {entry.message}
          </div>
          <form
            className="ml-10 inline-flex"
            action={async () => {
              "use server";
              await db.delete(guestbook).where(eq(guestbook.id, entry.id));
              revalidatePath("/admin");
              revalidatePath("/guestbook");
            }}
          >
            <SubmitButton variant="destructive" size="icon" className="size-6">
              <TrashIcon />
            </SubmitButton>
          </form>
        </div>
      ))}
    </div>
  );
}
