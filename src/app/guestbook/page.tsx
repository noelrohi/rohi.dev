import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/db";
import { guestbook } from "@/db/schema/main";
import { auth, signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        sign my guestbook
      </div>
      <GuestBookForm />
      <Entries />
    </section>
  );
}

async function GuestBookForm() {
  const session = await auth();
  if (!session)
    return (
      <Link href={"/guestbook/signin"} className={buttonVariants()}>
        Sign In
      </Link>
    );

  return (
    <form
      key={Math.random()}
      className="space-y-2"
      action={async (formData: FormData) => {
        "use server";
        const message = formData.get("message") as string;
        const createdBy = session.user.name || "Anonymous";
        await db.insert(guestbook).values({
          createdBy,
          message,
        });
        revalidatePath("/guestbook");
      }}
    >
      <div className="flex gap-2">
        <Input
          name="message"
          className="max-w-sm"
          placeholder="your message ..."
        />
        <Button>Sign</Button>
      </div>
      <Button
        variant={"ghost"}
        size={"sm"}
        className="text-muted-foreground text-xs"
        formAction={async () => {
          "use server";
          await signOut();
        }}
      >
        Sign Out
      </Button>
    </form>
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
