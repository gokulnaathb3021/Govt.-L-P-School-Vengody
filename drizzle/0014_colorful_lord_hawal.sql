ALTER TABLE "AIContent" ADD COLUMN "upto_quarterly" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "AIContent" ADD COLUMN "upto_halfyearly" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "AIContent" ADD COLUMN "upto_annual" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "AIContent" ADD COLUMN "upto_extracurricular" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "AIContent" DROP COLUMN "ai_content";