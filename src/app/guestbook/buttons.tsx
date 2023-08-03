"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button onClick={() => signOut()} className="text-xs">
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <>
      <div className="text-sm">Sign in with: </div>
      <div className="flex space-x-2">
        <Button
          onClick={() => signIn("github")}
          aria-label="github"
          className="inline-flex gap-2"
        >
          <Icons.github />
          Github
        </Button>
        <Button
          onClick={() => signIn("discord")}
          aria-label="discord"
          className="inline-flex gap-2"
        >
          <Icons.discord />
          Discord
        </Button>
        <Button
          onClick={() => signIn("google")}
          aria-label="google"
          className="inline-flex gap-2"
        >
          <Icons.google />
          Google
        </Button>
      </div>
    </>
  );
}
