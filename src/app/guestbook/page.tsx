import { Metadata } from "next";

import Heading from "@/components/heading";
import { auth } from "@/lib/auth";
import { queryBuilder } from "@/lib/planetscale";
import { SignIn, SignOut } from "./buttons";
import { GuestbookForm } from "./form";

async function getGuestbook() {
  const data = await queryBuilder
    .selectFrom("guestbook")
    .select(["id", "body", "created_by", "created_at"])
    .orderBy("created_at", "desc")
    .limit(100)
    .execute();

  return data;
}

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Say something nice to me",
};

export const dynamic = "force-dynamic";
// export const runtime = "edge";

export default async function GuestbookPage() {
  let entries;
  let session;

  try {
    const [guestbookRes, sessionRes] = await Promise.allSettled([
      getGuestbook(),
      auth(),
    ]);

    if (guestbookRes.status === "fulfilled" && guestbookRes.value[0]) {
      entries = guestbookRes.value;
    } else {
      console.error(guestbookRes);
    }

    if (sessionRes.status === "fulfilled") {
      session = sessionRes.value;
    } else {
      console.error(sessionRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="space-y-4">
      <Heading>Guestbook</Heading>

      {session?.user ? (
        <>
          <GuestbookForm />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      <div className="mt-5 flex flex-col space-y-1">
        {!entries && <>Nothing, try sending one...</>}
        {entries?.map((entry) => (
          <div className="w-full break-words" key={entry.id}>
            <span className="text-muted-foreground mr-1">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        ))}
      </div>
    </div>
  );
}
