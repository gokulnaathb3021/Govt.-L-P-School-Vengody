CREATE TABLE "HAQTable" (
	"admission_number" integer NOT NULL,
	"assessment_type" varchar NOT NULL,
	"subject" varchar NOT NULL,
	"grade" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "about_term" (
	"admission_number" integer NOT NULL,
	"term" varchar NOT NULL,
	"classroom_participation" varchar NOT NULL,
	"strengths" varchar NOT NULL,
	"limitations" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "term_skill" (
	"admission_number" integer NOT NULL,
	"term" varchar NOT NULL,
	"subject" varchar NOT NULL,
	"reading" varchar,
	"writing" varchar,
	"skill_level_in_general" varchar
);
