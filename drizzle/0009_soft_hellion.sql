ALTER TABLE "HAQTable" ADD COLUMN "malayalam" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "HAQTable" ADD COLUMN "english" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "HAQTable" ADD COLUMN "maths" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "HAQTable" ADD COLUMN "evs" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "HAQTable" DROP COLUMN "subject";--> statement-breakpoint
ALTER TABLE "HAQTable" DROP COLUMN "grade";