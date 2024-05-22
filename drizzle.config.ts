import { env } from "@/env.mjs";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema",
  migrations: {
    table: "rohidev_migrations",
    schema: "public",
  },
  dialect: "postgresql",
  out: "migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["rohidev_*"],
  verbose: true,
  strict: true,
});
