"use client"

import { sendGuestMessage } from "@/app/_actions/guest"
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs"
import { Suspense, useState, useTransition } from "react"
import { toast } from "sonner"
import { ZodError } from "zod"
import { SignInButton } from "./auth/sign-in"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Icons } from "./icons"

export default function GuestForm() {
    const { signOut } = useClerk()
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
            <Suspense fallback={"Loading"}>
                <SignedIn>
                    <div className="space-x-4">
                        <Button disabled={isPending} onClick={handlePost}>{isPending && <Icons.loader className="animate-spin h-4 w-4" />} Post message</Button>

                        <Button variant={"secondary"} onClick={() => signOut()}>
                            Sign Out
                        </Button>
                    </div>
                </SignedIn>
            </Suspense>

            <SignedOut>
                <SignInButton />
            </SignedOut>
        </div>
    )
}
