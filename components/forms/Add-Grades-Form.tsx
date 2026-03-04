"use client";

import { useActionState, useState } from "react";
import AddTermGradesForm from "./add-term-grades";
import AddQHAGradesForm from "./Add-Q-H-A-Grades-Form";
import AddECAGradesForm from "./Add-ECA-Grades-Form";
import { Button } from "../ui/button";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { addGrades } from "@/lib/grades-actions/add-grades";

type FormState = {
  success: boolean;
  errors: string[];
  message: string;
};
const initialState: FormState = {
  success: true,
  errors: [],
  message: "",
};
export default function AddGradesForm({
  admissionNumber,
  quarterly,
  halfYearly,
  annual,
  extracurricular,
  term2,
  term3,
}: {
  admissionNumber: number;
  quarterly: boolean;
  halfYearly: boolean;
  annual: boolean;
  extracurricular: boolean;
  term2: boolean;
  term3: boolean;
}) {
  const [assessmentType, setAssessmentType] = useState("Term 1");
  const [state, formAction, isPending] = useActionState(
    addGrades,
    initialState,
  );
  const success = state.success;
  const errors = state.errors;
  const message = state.message;
  return (
    <form
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
      className="space-y-6"
      action={formAction}
    >
      {!success && (
        <div className="border border-red-500 rounded-lg bg-red-100 p-2 mb-5">
          {!success && <p className="font-bold">{errors[0]}</p>}
          {!success && <p>{message}</p>}
        </div>
      )}
      <div className="gap-2 sm:space-y-2 w-full border flex flex-col sm:flex-row sm:justify-between px-3">
        <label htmlFor="assessment_type">Assessment Type</label>
        <select
          name="assessment_type"
          id="assessment_type"
          onChange={(e) => setAssessmentType(e.target.value)}
        >
          <option value="Term 1">Term 1</option>
          <option value="Term 2" disabled={!term2}>
            Term 2
          </option>
          <option value="Term 3" disabled={!term3}>
            Term 3
          </option>
          <option value="Quarterly" disabled={!quarterly}>
            Quarterly
          </option>
          <option value="Half-Yearly" disabled={!halfYearly}>
            Half-Yearly
          </option>
          <option value="Annual" disabled={!annual}>
            Annual
          </option>
          <option
            value="Extracurricular Activities"
            disabled={!extracurricular}
          >
            Extracurricular Activities
          </option>
        </select>
      </div>
      {assessmentType === "Term 1" ||
      assessmentType === "Term 2" ||
      assessmentType === "Term 3" ? (
        <AddTermGradesForm
          term={assessmentType}
          admissionNumber={admissionNumber}
        />
      ) : assessmentType === "Quarterly" ||
        assessmentType === "Half-Yearly" ||
        assessmentType === "Annual" ? (
        <AddQHAGradesForm
          exam={assessmentType}
          admissionNumber={admissionNumber}
        />
      ) : (
        <AddECAGradesForm admissionNumber={admissionNumber} />
      )}
      <Button type="submit" className="w-full mt-5 hover:cursor-pointer">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Add Grades
          </>
        )}
      </Button>
    </form>
  );
}
