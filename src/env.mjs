import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    // OPEN_AI_API_KEY: z.string().min(1),
    RESEND_API_KEY: z.string().startsWith('re_'),
    LAST_FM_API_KEY: z.string(),
    MAL_CLIENT_ID: z.string().min(1),
    WAKATIME_API_KEY: z.string().startsWith('waka_'),
    KV_REST_API_URL: z.string(),
    KV_REST_API_TOKEN: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    AUTH_SECRET: z.string(),
  },
  client: {
    // NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    // OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    // NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    LAST_FM_API_KEY: process.env.LAST_FM_API_KEY,
    MAL_CLIENT_ID: process.env.MAL_CLIENT_ID,
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
});