"use server";

import { db } from "@/db";
import { about_term, extracurricular, HAQTable, term_skill } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

type FormState = {
  success: boolean;
  errors: string[];
  message: string;
};
export const addGrades = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData.entries());
  const { assessment_type } = rawFormData;
  if (
    assessment_type === "Term 1" ||
    assessment_type === "Term 2" ||
    assessment_type === "Term 3"
  ) {
    try {
      const result = await db
        .select()
        .from(about_term)
        .where(
          and(
            eq(
              about_term.admission_number,
              Number(rawFormData.admission_number),
            ),
            eq(about_term.term, String(rawFormData.assessment_type)),
          ),
        )
        .limit(1);
      if (result.length > 0) {
        return {
          success: false,
          errors: [
            "Re-adding grades not allowed. You can edit them if you want to.",
          ],
          message: `You've already added the ${String(rawFormData.assessment_type)} grades for this student. You can edit their ${String(rawFormData.assessment_type)} grades if you want to.`,
        };
      }
      await db.transaction(async (tx) => {
        await tx.insert(about_term).values({
          admission_number: Number(rawFormData.admission_number),
          term: String(rawFormData.assessment_type),
          classroom_participation: String(rawFormData.classroom_participation),
          strengths: String(rawFormData.strengths),
          limitations: String(rawFormData.limitations),
        });
        await tx.insert(term_skill).values([
          {
            admission_number: Number(rawFormData.admission_number),
            term: String(rawFormData.assessment_type),
            subject: String(rawFormData.malayalam),
            reading: String(rawFormData.m_reading),
            writing: String(rawFormData.m_writing),
            skill_level_in_general: "",
          },
          {
            admission_number: Number(rawFormData.admission_number),
            term: String(rawFormData.assessment_type),
            subject: String(rawFormData.english),
            reading: String(rawFormData.eng_reading),
            writing: String(rawFormData.eng_writing),
            skill_level_in_general: "",
          },
          {
            admission_number: Number(rawFormData.admission_number),
            term: String(rawFormData.assessment_type),
            subject: String(rawFormData.maths),
            reading: "",
            writing: "",
            skill_level_in_general: String(rawFormData.math_skill),
          },
          {
            admission_number: Number(rawFormData.admission_number),
            term: String(rawFormData.assessment_type),
            subject: String(rawFormData.EVS),
            reading: "",
            writing: "",
            skill_level_in_general: String(rawFormData.evs_skill),
          },
        ]);
      });

      revalidatePath(`/explore/${rawFormData.admission_number}`);
      return {
        success: true,
        errors: [],
        message: "Grades submitted successfully.",
      };
    } catch (error) {
      return {
        success: false,
        errors: [`${error}`],
        message: "Couldn't submit the grades, please try again.",
      };
    }
  }
  if (assessment_type === "Extracurricular Activities") {
    try {
      const result = await db
        .select()
        .from(extracurricular)
        .where(
          and(
            eq(
              extracurricular.admission_number,
              Number(rawFormData.admission_number),
            ),
            eq(
              extracurricular.assessment_type,
              String(rawFormData.assessment_type),
            ),
          ),
        );
      if (result.length === 1) {
        return {
          success: false,
          errors: [
            "Re-adding grades not allowed. You can edit them if you want to.",
          ],
          message: `You've already added the Extracurricular Activities grades for this student. You can edit their Extracurricular Activities grades if you want to.`,
        };
      }
      await db.insert(extracurricular).values({
        admission_number: Number(rawFormData.admission_number),
        assessment_type: String(rawFormData.assessment_type),
        readings: String(rawFormData.read_grade),
        writings: String(rawFormData.write_grade),
        art: String(rawFormData.art_grade),
        sports: String(rawFormData.sports_grade),
        construction: String(rawFormData.ctrn_grade),
      });
      revalidatePath(`/explore/${rawFormData.admission_number}`);
      return {
        success: true,
        errors: [],
        message: "Grades submitted successfully.",
      };
    } catch (error) {
      return {
        success: false,
        errors: [`${error}`],
        message: "Couldn't submit the grades, please try again.",
      };
    }
  }
  try {
    const result = await db
      .select()
      .from(HAQTable)
      .where(
        and(
          eq(HAQTable.admission_number, Number(rawFormData.admission_number)),
          eq(HAQTable.assessment_type, String(rawFormData.assessment_type)),
        ),
      )
      .limit(1);
    if (result.length > 0) {
      return {
        success: false,
        errors: [
          "Re-adding grades not allowed. You can edit them if you want to.",
        ],
        message: `You've already added the ${String(rawFormData.assessment_type)} grades for this student. You can edit their ${String(rawFormData.assessment_type)} grades if you want to.`,
      };
    }
    await db.insert(HAQTable).values({
      admission_number: Number(rawFormData.admission_number),
      assessment_type: String(rawFormData.assessment_type),
      malayalam: String(rawFormData.m_grade),
      english: String(rawFormData.eng_grade),
      maths: String(rawFormData.math_grade),
      evs: String(rawFormData.evs_grade),
    });
    revalidatePath(`/explore/${rawFormData.admission_number}`);
    return {
      success: true,
      errors: [],
      message: "Grades submitted successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: [`${error}`],
      message: "Couldn't submit the grades, please try again.",
    };
  }
};
