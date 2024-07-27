CREATE TABLE IF NOT EXISTS "artists_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"artist_name" text NOT NULL,
	"manager_email" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "festival_table" (
	"festival_id" serial PRIMARY KEY NOT NULL,
	"festival_name" text NOT NULL,
	"festival_start_date" date NOT NULL,
	"festival_end_date" date NOT NULL
);
