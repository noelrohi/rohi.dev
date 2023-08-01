import { env } from "@/env.mjs";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  providers: [
    GitHub({
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string,
    }),
    Discord({
      clientId: env.DISCORD_CLIENT_ID as string,
      clientSecret: env.DISCORD_CLIENT_SECRET as string,
    }),
    Google({
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
});
