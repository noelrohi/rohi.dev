import { env } from "@/env.mjs";
import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface GuestbookTable {
  id: Generated<number>;
  email: string;
  body: string;
  created_by: string;
  updated_at?: string;
}

interface Database {
  guestbook: GuestbookTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: env.DATABASE_URL,
  }),
});
