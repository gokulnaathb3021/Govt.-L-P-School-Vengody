"use client";

import { HAQTable } from "@/db/schema";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useActionState } from "react";
import { updateHAQGrades } from "@/lib/grades-actions/update-grades";
import { Button } from "../ui/button";
import { Loader2Icon, SparklesIcon } from "lucide-react";

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
export default function EditHAQGrades({
  HAQT,
  testType,
}: {
  HAQT: (typeof HAQTable.$inferSelect)[];
  testType: string;
}) {
  const index =
    testType === "Quarterly" ? 0 : testType === "Half-Yearly" ? 1 : 2;
  const [state, formAction, isPending] = useActionState(
    updateHAQGrades,
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
      action={formAction}
    >
      {!success && (
        <div className="border border-red-500 rounded-lg bg-red-100 p-2 mb-5">
          {!success && <p className="font-bold">{errors[0]}</p>}
          {!success && <p>{message}</p>}
        </div>
      )}
      <div className="space-y-6">
        <h1 className="font-bold text-lg mb-3">{`${testType} Assessment`}</h1>
        <Input
          hidden
          defaultValue={HAQT[index].admission_number}
          name="admission_number"
        />
        <Input hidden defaultValue={testType} name="assessment_type" />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="malayalam">Malayalam</Label>
            <Input
              id="malayalam"
              placeholder="Malayalam"
              name="malayalam"
              readOnly
              defaultValue="Malayalam"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="m_grade">Grade</label>
            <select
              id="m_grade"
              name="m_grade"
              defaultValue={HAQT[index].malayalam}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="english">English</Label>
            <Input
              id="english"
              placeholder="English"
              name="english"
              readOnly
              defaultValue="English"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="eng_grade">Grade</label>
            <select
              id="eng_grade"
              name="eng_grade"
              defaultValue={HAQT[index].english}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="maths">Maths</Label>
            <Input
              id="maths"
              placeholder="Maths"
              name="maths"
              readOnly
              defaultValue="Maths"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="math_grade">Grade</label>
            <select
              id="math_grade"
              name="math_grade"
              defaultValue={HAQT[index].maths}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="evs">EVS</Label>
            <Input
              id="evs"
              placeholder="EVS"
              name="evs"
              readOnly
              defaultValue="EVS"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="evs_grade">Grade</label>
            <select
              id="evs_grade"
              name="evs_grade"
              defaultValue={HAQT[index].evs}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
        </div>
      </div>
      <Button type="submit" className="w-full mt-5 hover:cursor-pointer">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Update Grades
          </>
        )}
      </Button>
    </form>
  );
}
