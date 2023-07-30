import { env } from "@/env.mjs";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  providers: [
    GitHub({
      clientId: env.OAUTH_CLIENT_KEY as string,
      clientSecret: env.OAUTH_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
});
