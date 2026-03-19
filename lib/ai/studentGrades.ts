"use server";
import {
  getExCurrGrades,
  getHAQGrades,
  getTermGrades,
} from "../grades-actions/get-grades";

export const getStudentGrades = async (admissionNumber: number) => {
  const aboutTerm = await getTermGrades(admissionNumber);
  const HAQGrades = await getHAQGrades(admissionNumber);
  const exCurrGrades = await getExCurrGrades(admissionNumber);
  const { res1, res2 } = aboutTerm;
  const { res } = HAQGrades;
  const { eCRes } = exCurrGrades;
  // console.log(res1);
  // console.log(res2);
  // console.log(res);
  // console.log(eCRes);
  return { res1, res2, res, eCRes };
};
