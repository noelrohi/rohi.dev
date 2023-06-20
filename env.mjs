import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    // DATABASE_URL: z.string().url(),
    // OPEN_AI_API_KEY: z.string().min(1),
    LAST_FM_API_KEY: z.string(),
    MAL_CLIENT_ID: z.string().min(1),
    WAKATIME_API_KEY: z.string().startsWith('waka_')
  },
  client: {
    // NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    // DATABASE_URL: process.env.DATABASE_URL,
    // OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    // NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    LAST_FM_API_KEY: process.env.LAST_FM_API_KEY,
    MAL_CLIENT_ID: process.env.MAL_CLIENT_ID,
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});