import { sql } from "drizzle-orm";
import { index, integer, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { idCreator, projectTable } from "./_table";

export const guestbook = projectTable(
  "guestbook",
  {
    id: idCreator,
    message: text("message").notNull(),
    createdBy: varchar("created_by", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp("updated_at"),
  },
  (table) => ({
    createdByIdx: index("createdByIdx").on(table.createdBy),
  }),
);

export const views = projectTable("blog_views", {
  id: idCreator,
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  count: integer("count").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at"),
});
