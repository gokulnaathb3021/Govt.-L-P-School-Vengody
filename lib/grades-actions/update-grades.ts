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

export const updateTermGrades = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData.entries());
  try {
    await db.transaction(async (tx) => {
      await tx
        .update(about_term)
        .set({
          admission_number: Number(rawFormData.admission_number),
          term: String(rawFormData.term),
          classroom_participation: String(rawFormData.classroom_participation),
          strengths: String(rawFormData.strengths),
          limitations: String(rawFormData.limitations),
        })
        .where(
          and(
            eq(
              about_term.admission_number,
              Number(rawFormData.admission_number),
            ),
            eq(about_term.term, String(rawFormData.term)),
          ),
        );
      await tx
        .update(term_skill)
        .set({
          admission_number: Number(rawFormData.admission_number),
          term: String(rawFormData.term),
          subject: String(rawFormData.malayalam),
          reading: String(rawFormData.m_reading),
          writing: String(rawFormData.m_writing),
          skill_level_in_general: "",
        })
        .where(eq(term_skill.id, Number(rawFormData.id1)));
      await tx
        .update(term_skill)
        .set({
          admission_number: Number(rawFormData.admission_number),
          term: String(rawFormData.term),
          subject: String(rawFormData.english),
          reading: String(rawFormData.eng_reading),
          writing: String(rawFormData.eng_writing),
          skill_level_in_general: "",
        })
        .where(eq(term_skill.id, Number(rawFormData.id2)));
      await tx
        .update(term_skill)
        .set({
          admission_number: Number(rawFormData.admission_number),
          term: String(rawFormData.term),
          subject: String(rawFormData.maths),
          reading: "",
          writing: "",
          skill_level_in_general: String(rawFormData.math_skill),
        })
        .where(eq(term_skill.id, Number(rawFormData.id3)));
      await tx
        .update(term_skill)
        .set({
          admission_number: Number(rawFormData.admission_number),
          term: String(rawFormData.term),
          subject: String(rawFormData.EVS),
          reading: "",
          writing: "",
          skill_level_in_general: String(rawFormData.evs_skill),
        })
        .where(eq(term_skill.id, Number(rawFormData.id4)));
    });
    revalidatePath(`/explore/${rawFormData.admission_number}/edit-grades`);
    // revalidatePath(`/explore/${rawFormData.admission_number}`);
    return {
      success: true,
      errors: [],
      message: "Grades updates successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: [`${error}`],
      message: "Couldn't update grades, please try again.",
    };
  }
};

export const updateHAQGrades = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData.entries());
  try {
    await db
      .update(HAQTable)
      .set({
        admission_number: Number(rawFormData.admission_number),
        assessment_type: String(rawFormData.assessment_type),
        malayalam: String(rawFormData.m_grade),
        english: String(rawFormData.eng_grade),
        maths: String(rawFormData.math_grade),
        evs: String(rawFormData.evs_grade),
      })
      .where(
        and(
          eq(HAQTable.admission_number, Number(rawFormData.admission_number)),
          eq(HAQTable.assessment_type, String(rawFormData.assessment_type)),
        ),
      );
    // revalidatePath(`/explore/${rawFormData.admission_number}`);
    return {
      success: true,
      errors: [],
      message: "Grades updates successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: [`${error}`],
      message: "Couldn't update grades, please try again.",
    };
  }
};

export const updateExCurrGrades = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData.entries());
  try {
    await db
      .update(extracurricular)
      .set({
        admission_number: Number(rawFormData.admission_number),
        assessment_type: "Extracurricular Activities",
        readings: String(rawFormData.read_grade),
        writings: String(rawFormData.write_grade),
        art: String(rawFormData.art_grade),
        sports: String(rawFormData.sports_grade),
        construction: String(rawFormData.ctrn_grade),
      })
      .where(
        and(
          eq(
            extracurricular.admission_number,
            Number(rawFormData.admission_number),
          ),
          eq(extracurricular.assessment_type, "Extracurricular Activities"),
        ),
      );
    // revalidatePath(`/explore/${rawFormData.admission_number}`);
    return {
      success: true,
      errors: [],
      message: "Grades updates successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: [`${error}`],
      message: "Couldn't update grades, please try again.",
    };
  }
};
