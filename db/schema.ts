import {
  pgTable,
  varchar,
  uuid,
  integer,
  date,
  primaryKey,
  serial,
} from "drizzle-orm/pg-core";

export const teachers = pgTable("teachers", {
  t_id: uuid("t_id").defaultRandom().primaryKey(),
  email: varchar("email").notNull(),
  name: varchar("name", { length: 120 }).notNull(),
  status: varchar("status", { length: 30 }),
});

export const students = pgTable("students", {
  student_name: varchar("student_name").notNull(),
  class: integer("class").notNull(),
  division: varchar("division").notNull(),
  roll_number: integer("roll_number").notNull(),

  admission_number: integer("admission_number").notNull().primaryKey(),
  aadhar_number: varchar("aadhar_number").notNull(),
  mother_name: varchar("mother_name").notNull(),
  dob: date("dob").notNull(),
  father_name: varchar("father_name").notNull(),
  panchayat: varchar("panchayat").notNull(),
  ward: integer("ward").notNull(),
  place: varchar("place").notNull(),
  house_name: varchar("house_name").notNull(),
  gender: varchar("gender").notNull(),
  religion: varchar("religion").notNull(),
  caste: varchar("caste").notNull(),
  poverty_line: varchar("poverty_line").notNull(),
  medium: varchar("medium").notNull(),
  phone_number: varchar("phone_number").notNull(),

  house_ownership: varchar("house_ownership").notNull(),
  house_type: varchar("house_type").notNull(),
  father_educational_qualification: varchar(
    "father_educational_qualification",
  ).notNull(),
  father_job: varchar("father_job").notNull(),
  mother_educational_qualification: varchar(
    "mother_educational_qualification",
  ).notNull(),
  mother_job: varchar("mother_job").notNull(),
  other_family_members: varchar("other_family_members").notNull(),
  annual_income: integer("annual_income").notNull(),

  study_room: varchar("study_room").notNull(),
  study_table: varchar("study_table").notNull(),
  study_time: integer("study_time").notNull(),
  difficulties_obstacles: varchar("difficulties_obstacles").notNull(),
  special_study_support: varchar("special_study_support").notNull(),
  parental_involvement: varchar("parental_involvement").notNull(),
  child_health_status: varchar("child_health_status").notNull(),
  child_sme_status: varchar("child_sme_status").notNull(),
});

export const about_term = pgTable(
  "about_term",
  {
    admission_number: integer("admission_number").notNull(),
    term: varchar("term").notNull(),
    classroom_participation: varchar("classroom_participation").notNull(),
    strengths: varchar("strengths").notNull(),
    limitations: varchar("limitations").notNull(),
  },
  (table) => [primaryKey({ columns: [table.admission_number, table.term] })],
);

export const term_skill = pgTable("term_skill", {
  id: serial("id").primaryKey(),
  admission_number: integer("admission_number").notNull(),
  term: varchar("term").notNull(),
  subject: varchar("subject").notNull(),
  reading: varchar("reading"),
  writing: varchar("writing"),
  skill_level_in_general: varchar("skill_level_in_general"),
});

export const HAQTable = pgTable(
  "HAQTable",
  {
    admission_number: integer("admission_number").notNull(),
    assessment_type: varchar("assessment_type").notNull(),
    malayalam: varchar("malayalam").notNull(),
    english: varchar("english").notNull(),
    maths: varchar("maths").notNull(),
    evs: varchar("evs").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.admission_number, table.assessment_type] }),
  ],
);

export const extracurricular = pgTable(
  "extracurricular",
  {
    admission_number: integer("admission_number").notNull(),
    assessment_type: varchar("assessment_type").notNull(),
    readings: varchar("readings").notNull(),
    writings: varchar("writings").notNull(),
    art: varchar("art").notNull(),
    sports: varchar("sports").notNull(),
    construction: varchar("construction").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.admission_number, table.assessment_type] }),
  ],
);

export const studentImages = pgTable("student_images", {
  admission_number: integer("admission_number").notNull().primaryKey(),
  image_url: varchar("image_url").notNull(),
});

export const AIContent = pgTable("AIContent", {
  admission_number: integer("admission_number").notNull().primaryKey(),
  ai_content: varchar("ai_content").notNull(),
});
