"use server";

import { db } from "@/db";
import {
  about_term,
  AIContent,
  extracurricular,
  HAQTable,
  studentImages,
  students,
  term_skill,
} from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

type FormState = {
  success: boolean;
  errors: string[];
  message: string;
};

export const addStudentAction = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData.entries());
  const { Admission_Number } = rawFormData;
  const res = await db
    .select()
    .from(students)
    .where(eq(students.admission_number, Number(Admission_Number)));
  if (res.length === 1) {
    return {
      success: false,
      errors: ["Admission number duplication is not allowed!"],
      message:
        "A student with this admission number exists. Choose a unique admission number.",
    };
  }
  const {
    name,
    Class,
    division,
    Roll_Number,
    Aadhar_Number,
    mother_name,
    DoB,
    father_name,
    Panchayat,
    house_name,
    Ward,
    Place,
    gender,
    Religion,
    Caste,
    poverty_line,
    medium,
    phone_number,
    house,
    house_type,
    father_educational_qualification,
    father_job,
    mother_educational_qualification,
    mother_job,
    other_family_members,
    annual_income,
    studyroom,
    studytable,
    study_time,
    difficulties_obstacles,
    special_study_support,
    parental_involvement,
    child_health_status,
    child_sme_status,
  } = rawFormData;
  const insertData: typeof students.$inferInsert = {
    student_name: name as string,
    class: Number(Class),
    division: division as string,
    roll_number: Number(Roll_Number),
    admission_number: Number(Admission_Number),
    aadhar_number: Aadhar_Number as string,
    mother_name: mother_name as string,
    dob: DoB as string,
    father_name: father_name as string,
    panchayat: Panchayat as string,
    ward: Number(Ward),
    place: Place as string,
    house_name: house_name as string,
    gender: gender as string,
    religion: Religion as string,
    caste: Caste as string,
    poverty_line: poverty_line as string,
    medium: medium as string,
    phone_number: phone_number as string,
    house_ownership: house as string,
    house_type: house_type as string,
    father_educational_qualification:
      father_educational_qualification as string,
    father_job: father_job as string,
    mother_educational_qualification:
      mother_educational_qualification as string,
    mother_job: mother_job as string,
    other_family_members: other_family_members as string,
    annual_income: Number(annual_income),
    study_room: studyroom as string,
    study_table: studytable as string,
    study_time: Number(study_time),
    difficulties_obstacles: difficulties_obstacles as string,
    special_study_support: special_study_support as string,
    parental_involvement: parental_involvement as string,
    child_health_status: child_health_status as string,
    child_sme_status: child_sme_status as string,
  };
  try {
    await db.transaction(async (tx) => {
      await tx.insert(students).values(insertData);
      await tx.insert(studentImages).values({
        admission_number: Number(Admission_Number),
        image_url: "",
      });
      await tx.insert(AIContent).values({
        admission_number: Number(Admission_Number),
        upto_quarterly: "",
        upto_halfyearly: "",
        upto_annual: "",
        upto_extracurricular: "",
      });
    });

    return {
      success: true,
      errors: [],
      message: "Student added successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: [`${error}`],
      message: "Couldn't add student, please try again.",
    };
  }
};

export const getAllStudents = async () => {
  try {
    const allStudents = await db.select().from(students);
    return {
      allStudents,
      success: true,
      errors: {},
      message: "Fetched all students successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: { error },
      message: "Couldn't fetch students.",
    };
  }
};

export const getAStudent = async (admissionNumber: number) => {
  try {
    const student = await db
      .select()
      .from(students)
      .where(eq(students.admission_number, admissionNumber));
    return {
      student,
      success: true,
      errors: {},
      message: "Student fetched successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: { error },
      message: "Couldn't fetch student, please try again.",
    };
  }
};

export const editAStudent = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData.entries());
  const {
    name,
    Class,
    division,
    roll_number,
    admission_number,
    aadhar_number,
    mother_name,
    DoB,
    father_name,
    panchayat,
    house_name,
    ward,
    place,
    gender,
    religion,
    caste,
    poverty_line,
    medium,
    phone_number,
    house,
    house_type,
    father_educational_qualification,
    father_job,
    mother_educational_qualification,
    mother_job,
    other_family_members,
    annual_income,
    study_room,
    study_table,
    study_time,
    difficulties_obstacles,
    special_study_support,
    parental_involvement,
    child_health_status,
    child_sme_status,
  } = rawFormData;

  const updatedData: typeof students.$inferInsert = {
    student_name: name as string,
    class: Number(Class),
    division: division as string,
    roll_number: Number(roll_number),
    admission_number: Number(admission_number),
    aadhar_number: aadhar_number as string,
    mother_name: mother_name as string,
    dob: DoB as string,
    father_name: father_name as string,
    panchayat: panchayat as string,
    ward: Number(ward),
    place: place as string,
    house_name: house_name as string,
    gender: gender as string,
    religion: religion as string,
    caste: caste as string,
    poverty_line: poverty_line as string,
    medium: medium as string,
    phone_number: phone_number as string,
    house_ownership: house as string,
    house_type: house_type as string,
    father_educational_qualification:
      father_educational_qualification as string,
    father_job: father_job as string,
    mother_educational_qualification:
      mother_educational_qualification as string,
    mother_job: mother_job as string,
    other_family_members: other_family_members as string,
    annual_income: Number(annual_income),
    study_room: study_room as string,
    study_table: study_table as string,
    study_time: Number(study_time),
    difficulties_obstacles: difficulties_obstacles as string,
    special_study_support: special_study_support as string,
    parental_involvement: parental_involvement as string,
    child_health_status: child_health_status as string,
    child_sme_status: child_sme_status as string,
  };
  try {
    await db
      .update(students)
      .set(updatedData)
      .where(eq(students.admission_number, updatedData.admission_number));
    revalidatePath(`/explore/${updatedData.admission_number}/edit`);
    // revalidatePath(`/explore/${updatedData.admission_number}`);
    return {
      success: true,
      errors: [],
      message: "Successfully updated student.",
    };
  } catch (error) {
    return {
      success: false,
      errors: [`${error}`],
      message: "Couldn't update the student, please try again.",
    };
  }
};

export const deleteStudent = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  try {
    const rawFormData = Object.fromEntries(formData.entries());
    const { ad_num_of_del } = rawFormData;
    await db.transaction(async (tx) => {
      await tx
        .delete(students)
        .where(eq(students.admission_number, Number(ad_num_of_del)));
      await tx
        .delete(about_term)
        .where(eq(about_term.admission_number, Number(ad_num_of_del)));
      await tx
        .delete(term_skill)
        .where(eq(term_skill.admission_number, Number(ad_num_of_del)));
      await tx
        .delete(HAQTable)
        .where(eq(HAQTable.admission_number, Number(ad_num_of_del)));
      await tx
        .delete(extracurricular)
        .where(eq(extracurricular.admission_number, Number(ad_num_of_del)));
    });
    return {
      success: true,
      errors: [],
      message: "Successfully deleted student.",
    };
  } catch (error) {
    return {
      success: false,
      errors: [`error: ${error}`],
      message: "Couldn't delete the student, please try again.",
    };
  }
};

export const setImageUrl = async (
  admissionNumber: number,
  imageUrl: string,
) => {
  try {
    await db
      .update(studentImages)
      .set({
        image_url: String(imageUrl),
      })
      .where(eq(studentImages.admission_number, Number(admissionNumber)));
    revalidatePath(`/explore/${admissionNumber}`);
    return {
      success: true,
      errors: {},
      message: "Image url set successfully.",
    };
  } catch (error) {
    return {
      success: false,
      errors: { error },
      message: "Couldn't set image url, please try again.",
    };
  }
};

export const getImageUrl = async (admissionNumber: number) => {
  const res = await db
    .select()
    .from(studentImages)
    .where(eq(studentImages.admission_number, Number(admissionNumber)));
  return res[0].image_url;
};

export const set_AIContent = async (
  admissionNumber: number,
  ai_content: string,
  upto: string,
) => {
  await db
    .update(AIContent)
    .set({
      [upto]: String(ai_content),
    })
    .where(eq(AIContent.admission_number, Number(admissionNumber)));
  revalidatePath(`/explore/${admissionNumber}`);
};

export const get_AIContent = async (admissionNumber: number, upto: string) => {
  const res = await db
    .select()
    .from(AIContent)
    .where(eq(AIContent.admission_number, Number(admissionNumber)));
  if (upto === "uptoQuarterly") return res[0].upto_quarterly;
  if (upto === "uptoHalfyearly") return res[0].upto_halfyearly;
  if (upto === "uptoAnnual") return res[0].upto_annual;
  if (upto === "uptoExtracurricular") return res[0].upto_extracurricular;
};
