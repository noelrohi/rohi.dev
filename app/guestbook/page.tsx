import Heading from "@/components/Heading";
import DeleteButton from "@/components/delete-button";
import GuestForm from "@/components/guest-form";
import { UserAvatar } from "@/components/user-avatar";
import { db } from "@/drizzle";
import { messages } from "@/drizzle/schema/message";
import { UTCToPHT } from "@/lib/utils";
import { clerkClient, currentUser } from "@clerk/nextjs";
import { desc } from "drizzle-orm";

// Disable once Edge function size errors
export const runtime = "edge"

export default async function Guestbook() {
    const msgs = (await db.select().from(messages).orderBy(desc(messages.createdAt)).limit(100));
    const cuser = await currentUser()
    const messagesWithUserObject = await Promise.all(msgs.map(async (msg) => {
        const user = await clerkClient.users.getUser(msg.userId);
        return {
            ...msg, src: user.imageUrl, name: `${user.firstName ?? ''} ${user.lastName ?? ''}`
        };
    }))

    return (
        <section className="container pb-8 pt-6 md:pt-10 space-y-4">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <Heading>Guestbook</Heading>
                <p className="max-w-[700px] text-muted-foreground">
                    Say something nice to me
                </p>
            </div>
            <GuestForm />
            <div className="h-60 overflow-y-scroll">
                {messagesWithUserObject.map((msg) => (
                    <div key={msg.id} className="flex gap-2 py-4 grow">
                        <UserAvatar src={msg.src} name={msg.name} />
                        <div className="w-full">
                            <div className="flex justify-between">
                                <div className="font-bold">{msg.name}<span className="font-thin"> - {UTCToPHT(msg.createdAt)}</span></div>
                                {cuser?.id === msg.userId && <DeleteButton id={msg.id} />}
                            </div>
                            <p>{msg.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
