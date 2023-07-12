import { mysqlTable, mysqlSchema, AnyMySqlColumn, serial, text, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const users = mysqlTable("users", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).default(sql`(now())`),
});