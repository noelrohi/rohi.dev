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
    <Button onClick={() => signIn("github")}>
      <Icons.github className="mr-2 h-4 w-4" />
      Sign in with Github
    </Button>
  );
}