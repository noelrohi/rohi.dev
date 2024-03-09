import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as auth from "./schema/auth";
import * as main from "./schema/main";
import * as relations from "./schema/relations";
import { env } from "@/env.mjs";

export const schema = { ...auth, ...main, ...relations };

export { projectTable as tableCreator } from "./schema/_table";

// Create the connection
const client = postgres(env.DATABASE_URL, { prepare: false });
export const db = drizzle(client, { schema });
