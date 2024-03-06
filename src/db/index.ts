import { env } from "@/env.mjs";
import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as auth from "./schema/auth";
import * as main from "./schema/main";
import * as relations from "./schema/relations";

export const schema = { ...auth, ...main, ...relations };

export { projectTable as tableCreator } from "./schema/_table";

// Create the connection
const connection = new Client({
  url: env.DATABASE_URL,
});
export const db = drizzle(connection, { schema });
