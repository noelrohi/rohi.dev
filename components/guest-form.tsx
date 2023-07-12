"use client"

import { sendGuestMessage } from "@/app/_actions/message"
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs"
import { useState, useTransition } from "react"
import { toast } from "sonner"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export default function GuestForm() {
    const { signOut, openSignIn } = useClerk()
    const [message, setMessage] = useState("")
    const [isPending, startTransition] = useTransition()

    const handlePost = () =>
        startTransition(async () => {
            toast.promise(sendGuestMessage({ message }), {
                loading: 'Posting...',
                success: () => {
                    setMessage("")
                    return `Your guest message has been been added`;
                },
                error: "Something went wrong, try again later."
                ,
            });
        })
    return (
        <div className="space-y-2">
            <Textarea name="message" onChange={(e) => setMessage(e.target.value)} value={message} />
            <SignedIn>
                <div className="space-x-4">
                    <Button disabled={isPending} onClick={handlePost}>{isPending && <Icons.loader className="animate-spin h-4 w-4" />} Post message</Button>

                    <Button variant={"secondary"} onClick={() => signOut()}>
                        Sign Out
                    </Button>
                </div>
            </SignedIn>

            <SignedOut>
                <Button
                    onClick={() =>
                        openSignIn({
                            redirectUrl: "/guestbook",
                            appearance: {
                                variables: {
                                    colorPrimary: "#0C0A09",
                                },
                            },
                        })
                    }
                >
                    Sign In to Post
                </Button>
            </SignedOut>
        </div>
    )
}
