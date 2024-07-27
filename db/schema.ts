import { date, pgTable, serial, text } from "drizzle-orm/pg-core";

export const artistTable = pgTable("artists_table", {
  id: serial("id").primaryKey(),
  artistName: text("artist_name").notNull().unique(),
  managerEmail: text("manager_email"),
  bookingAgentEmail: text("booking_agent_email")
});

export const festivalTable = pgTable("festival_table", {
  id: serial("festival_id").primaryKey(),
  festivalName: text("festival_name").notNull().unique(),
  festivalStartDate: date("festival_start_date").notNull(),
  festivalEndDate: date("festival_end_date").notNull(),
});

export type InsertArtist = typeof artistTable.$inferInsert;
export type SelectArtist = typeof artistTable.$inferSelect;
