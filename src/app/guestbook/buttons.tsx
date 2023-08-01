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
        <Button onClick={() => signIn("github")} size="icon">
          <Icons.github className="w-6 h-6" />
        </Button>
        <Button onClick={() => signIn("discord")} size="icon">
          <Icons.discord className="w-6 h-6" />
        </Button>
        <Button onClick={() => signIn("google")} size="icon">
          <Icons.google className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
}
