"use server";

import { db } from "@/db";
import { about_term, extracurricular, HAQTable, term_skill } from "@/db/schema";
import { count, eq, sql } from "drizzle-orm";

export const getTermGrades = async (admissionNumber: number) => {
  try {
    const res1 = await db
      .select()
      .from(about_term)
      .where(eq(about_term.admission_number, admissionNumber))
      .orderBy(
        sql`
    CASE
      WHEN ${about_term.term} = 'Term 1' THEN 1
      WHEN ${about_term.term} = 'Term 2' THEN 2
      WHEN ${about_term.term} = 'Term 3' THEN 3
    END
  `,
      );
    const res2 = await db
      .select()
      .from(term_skill)
      .where(eq(term_skill.admission_number, admissionNumber))
      .orderBy(
        sql`
    CASE
      WHEN ${term_skill.term} = 'Term 1' THEN 1
      WHEN ${term_skill.term} = 'Term 2' THEN 2
      WHEN ${term_skill.term} = 'Term 3' THEN 3
    END
  `,
        sql`
      CASE
        WHEN ${term_skill.subject} = 'Malayalam' THEN 1
        WHEN ${term_skill.subject} = 'English' THEN 2
        WHEN ${term_skill.subject} = 'Maths (Basic Skills)' THEN 3
        WHEN ${term_skill.subject} = 'EVS' THEN 4
      END
    `,
      );
    return {
      res1,
      res2,
      success: true,
      errors: {},
      message: "Grades fetched successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: { error },
      message: "Couldn't fetch grades, please try again.",
    };
  }
};

export const getHAQGrades = async (admissionNumber: number) => {
  try {
    const res = await db
      .select()
      .from(HAQTable)
      .where(eq(HAQTable.admission_number, admissionNumber))
      .orderBy(
        sql`
      CASE
        WHEN ${HAQTable.assessment_type} = 'Quarterly' THEN 1
        WHEN ${HAQTable.assessment_type} = 'Half-Yearly' THEN 2
        WHEN ${HAQTable.assessment_type} = 'Annual' THEN 3
      END
    `,
      );
    return {
      res,
      success: true,
      errors: {},
      message: "Grades fetched successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: { error },
      message: "Couldn't fetch the grades, please try again.",
    };
  }
};

export const getExCurrGrades = async (admissionNumber: number) => {
  try {
    const eCRes = await db
      .select()
      .from(extracurricular)
      .where(eq(extracurricular.admission_number, admissionNumber));
    return {
      eCRes,
      success: true,
      errors: {},
      message: "Grades fetched successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: { error },
      message: "Couldn't fetch the grades, please try again.",
    };
  }
};

export const getNumRows = async (
  admissionNumber: number,
  tableName: string,
) => {
  try {
    if (tableName === "about_term") {
      const res = await db
        .select({ count: count() })
        .from(about_term)
        .where(eq(about_term.admission_number, Number(admissionNumber)));
      return {
        countAboutTerm: res[0].count,
        success: true,
        errors: {},
        message: "Count fetched.",
      };
    }
    if (tableName === "HAQTable") {
      const res = await db
        .select({ count: count() })
        .from(HAQTable)
        .where(eq(HAQTable.admission_number, Number(admissionNumber)));
      return {
        countHAQ: res[0].count,
        success: true,
        errors: {},
        message: "Count fetched.",
      };
    }
    if (tableName === "extracurricular") {
      const res = await db
        .select({ count: count() })
        .from(extracurricular)
        .where(eq(extracurricular.admission_number, Number(admissionNumber)));
      return {
        countExtracurricular: res[0].count,
        success: true,
        errors: {},
        message: "Count fetched.",
      };
    }
  } catch (error) {
    return {
      success: false,
      errors: { error },
      message: "Couldn't fetch the count, please try again.",
    };
  }
};
