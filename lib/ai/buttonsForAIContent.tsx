"use client";

import { Button } from "@/components/ui/button";
import { about_term, extracurricular, HAQTable, term_skill } from "@/db/schema";
import { generateStudentFeedback } from "./generateAIEvaluation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { set_AIContent } from "../student-actions/add-edit-del";

export default function ButtonsForAIContent({
  res1,
  res2,
  res,
  eCRes,
  admissionNumber,
}: {
  res1: (typeof about_term.$inferSelect)[];
  res2: (typeof term_skill.$inferSelect)[];
  res: (typeof HAQTable.$inferSelect)[];
  eCRes: (typeof extracurricular.$inferSelect)[];
  admissionNumber: number;
}) {
  const [aiContent, setAIContent] = useState("");
  const gradesObject1: Record<string, Record<string, string>> = {};
  let gradesObject2: Record<string, Record<string, string>> = {};
  let gradesObject3: Record<string, Record<string, string>> = {};
  let gradesObject4: Record<string, Record<string, string>> = {};

  if (res1!.length >= 1 && res!.length >= 1) {
    gradesObject1[res1![0].term] = {
      classroom_participation: res1![0].classroom_participation,
      strengths: res1![0].strengths,
      limitations: res1![0].limitations,
      malayalam_reading: res2![0].reading!,
      malayalam_writing: res2![0].writing!,
      english_reading: res2![1].reading!,
      english_writing: res2![1].writing!,
      maths: res2![2].skill_level_in_general!,
      evs: res2![3].skill_level_in_general!,
    };
    gradesObject1[res![0].assessment_type] = {
      malayalam: res![0].malayalam,
      english: res![0].english,
      maths: res![0].maths,
      evs: res![0].evs,
    };
    if (res1!.length >= 2 && res!.length >= 2) {
      gradesObject2 = { ...gradesObject1 };
      gradesObject2[res1![1].term] = {
        classroom_participation: res1![1].classroom_participation,
        strengths: res1![1].strengths,
        limitations: res1![1].limitations,
        malayalam_reading: res2![4].reading!,
        malayalam_writing: res2![4].writing!,
        english_reading: res2![5].reading!,
        english_writing: res2![5].writing!,
        maths: res2![6].skill_level_in_general!,
        evs: res2![7].skill_level_in_general!,
      };
      gradesObject2[res![1].assessment_type] = {
        malayalam: res![1].malayalam,
        english: res![1].english,
        maths: res![1].maths,
        evs: res![1].evs,
      };
      if (res1!.length >= 3 && res!.length >= 3) {
        gradesObject3 = { ...gradesObject2 };
        gradesObject3[res1![2].term] = {
          classroom_participation: res1![2].classroom_participation,
          strengths: res1![2].strengths,
          limitations: res1![2].limitations,
          malayalam_reading: res2![8].reading!,
          malayalam_writing: res2![8].writing!,
          english_reading: res2![9].reading!,
          english_writing: res2![9].writing!,
          maths: res2![10].skill_level_in_general!,
          evs: res2![11].skill_level_in_general!,
        };
        gradesObject3[res![2].assessment_type] = {
          malayalam: res![2].malayalam,
          english: res![2].english,
          maths: res![2].maths,
          evs: res![2].evs,
        };
        if (eCRes!.length > 0) {
          gradesObject4 = { ...gradesObject3 };
          gradesObject4["extracurricular_activities"] = {
            readings: eCRes![0].readings,
            writings: eCRes![0].writings,
            art: eCRes![0].art,
            sports: eCRes![0].sports,
            construction: eCRes![0].construction,
          };
        }
      }
    }
  }
  const askAI = async (
    grades: Record<string, Record<string, string>>,
    upto: string,
  ) => {
    const toastId = toast.loading("Generating AI feedback...");
    const content = (await generateStudentFeedback(grades))!;
    setAIContent(content);
    await set_AIContent(admissionNumber, content, upto);
    toast.success("AI feedback generated.", {
      id: toastId,
    });
  };

  return (
    <>
      {res1!.length === 0 && res!.length === 0 && (
        <div className="p-4 border-2 border-yellow-500 bg-yellow-100">
          Add at least up to quarterly grades to generate AI feedback.
        </div>
      )}
      {res1!.length >= 1 && res!.length >= 1 && (
        <Button
          onClick={() => askAI(gradesObject1, "upto_quarterly")}
          className="cursor-pointer"
        >
          Generate upto quarterly AI feedback
        </Button>
      )}
      {res1!.length >= 2 && res!.length >= 2 && (
        <Button
          onClick={() => askAI(gradesObject2, "upto_halfyearly")}
          className="cursor-pointer"
        >
          Generate upto half-yearly AI feedback
        </Button>
      )}
      {res1!.length >= 3 && res!.length >= 3 && (
        <Button
          onClick={() => askAI(gradesObject3, "upto_annual")}
          className="cursor-pointer"
        >
          Generate upto annual AI feedback
        </Button>
      )}
      {eCRes!.length > 0 && (
        <Button
          onClick={() => askAI(gradesObject4, "upto_extracurricular")}
          className="cursor-pointer"
        >
          Generate current academic year AI feedback
        </Button>
      )}
      {aiContent !== "" && (
        <p className="p-2 border-4 rounded-lg border-green-600 bg-green-100">
          {aiContent}
        </p>
      )}
    </>
  );
}
