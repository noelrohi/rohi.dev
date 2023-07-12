"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";


export const SignInButton = () => {
    const { openSignIn } = useClerk();

    return (
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
            Sign In
        </Button>
    );
};