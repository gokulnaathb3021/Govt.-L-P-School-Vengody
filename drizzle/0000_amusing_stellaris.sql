CREATE TABLE "teachers" (
	"t_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(120) NOT NULL,
	"subject" varchar(120) NOT NULL
);
