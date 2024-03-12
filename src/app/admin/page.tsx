import { SubmitButton } from "@/components/buttons/submit";
import { db } from "@/db";
import { guestbook } from "@/db/schema/main";
import { auth } from "@/lib/auth";
import { TrashIcon } from "@radix-ui/react-icons";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";

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
      {/* We don't want to wrap this in suspense so it won't display this page with fallback */}
      <Entries />
    </section>
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
            <SubmitButton variant="destructive">
              <TrashIcon />
            </SubmitButton>
          </form>
        </div>
      ))}
    </div>
  );
}
