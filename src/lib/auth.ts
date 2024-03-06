import type { DefaultSession } from "@auth/core/types";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

import { db, tableCreator } from "@/db";

import { env } from "@/env.mjs";
import { sendEmail } from "./resend";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db, tableCreator),
  providers: [
    DiscordProvider({
      clientSecret: env.DISCORD_CLIENT_SECRET,
      clientId: env.DISCORD_CLIENT_ID,
    }),
    GoogleProvider({
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      clientId: env.GOOGLE_CLIENT_ID,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  trustHost: true,
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
    authorized({ request, auth }) {
      return !!auth?.user;
    },
  },
  events: {
    signIn: async ({ isNewUser, user }) => {
      if (isNewUser) {
        await sendEmail(
          `User ${user.name}(${user.email}) has signed up in rohi.dev.`,
        );
      }
    },
  },
});
