ALTER TABLE "students" DROP CONSTRAINT "students_class_division_roll_number_pk";--> statement-breakpoint
ALTER TABLE "students" ADD PRIMARY KEY ("admission_number");--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "child_sme_status" varchar NOT NULL;