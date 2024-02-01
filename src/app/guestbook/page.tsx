import { SubmitButton } from "@/components/buttons/submit";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/db";
import { guestbook } from "@/db/schema/main";
import { auth, signOut } from "@/lib/auth";
import { sendEmail } from "@/lib/resend";
import { cn, getRandomInt } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { Metadata } from "next/types";
import { Suspense } from "react";
import { SignIn } from "./form";

export const metadata: Metadata = {
  title: "Guestbook",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        sign my guestbook
      </div>
      <Suspense fallback={<Skeleton className="h-10 w-20" />}>
        <GuestBookForm />
      </Suspense>
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
            <Skeleton className="h-[20px] w-1/2" />
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

async function GuestBookForm() {
  const session = await auth();
  if (!session)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Sign In</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <SignIn />
        </DialogContent>
      </Dialog>
    );

  return (
    <div key={Math.random()} className="space-y-2">
      <form className="flex gap-2">
        <Input
          name="message"
          className="max-w-sm"
          placeholder="your message ..."
        />
        <SubmitButton
          formAction={async (formData: FormData) => {
            "use server";
            const message = formData.get("message") as string;
            const createdBy = session.user.name || "Anonymous";
            await db.insert(guestbook).values({
              createdBy,
              message,
            });
            await sendEmail(
              `${createdBy} has sent you a guestbook message. Message: ${message}`,
            );
            revalidatePath("/guestbook");
          }}
        >
          Sign
        </SubmitButton>
      </form>
      <form>
        <SubmitButton
          variant={"ghost"}
          size={"sm"}
          className="text-muted-foreground text-xs"
          formAction={async () => {
            "use server";
            await signOut();
          }}
        >
          Sign Out
        </SubmitButton>
      </form>
    </div>
  );
}

async function Entries() {
  const guestbookEntries = await db.query.guestbook.findMany({
    limit: 100,
    orderBy: (table, { desc }) => [desc(table.createdAt)],
  });
  return (
    <div className="space-y-4">
      {guestbookEntries.map((entry) => (
        <div key={entry.id} className="w-full break-words text-sm">
          <span className="text-muted-foreground">{entry.createdBy}</span> :{" "}
          {entry.message}
        </div>
      ))}
    </div>
  );
}
