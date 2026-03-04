"use client";

import { extracurricular } from "@/db/schema";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useActionState } from "react";
import { updateExCurrGrades } from "@/lib/grades-actions/update-grades";
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
export default function EditExCurrGrades({
  exCurrT,
}: {
  exCurrT: (typeof extracurricular.$inferSelect)[];
  testType: string;
}) {
  const [state, formAction, isPending] = useActionState(
    updateExCurrGrades,
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
        <h1 className="font-bold text-lg mb-3">Extracurricular Activities</h1>
        <Input
          hidden
          defaultValue={exCurrT[0].admission_number}
          name="admission_number"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="readings">Readings</Label>
            <Input
              id="readings"
              placeholder="Readings"
              name="readings"
              readOnly
              defaultValue="Readings"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="read_grade">Grade</label>
            <select
              id="read_grade"
              name="read_grade"
              defaultValue={exCurrT[0].readings}
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
            <Label htmlFor="writings">Writings</Label>
            <Input
              id="writings"
              placeholder="Writings"
              name="writings"
              readOnly
              defaultValue="Writings"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="write_grade">Grade</label>
            <select
              id="write_grade"
              name="write_grade"
              defaultValue={exCurrT[0].writings}
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
            <Label htmlFor="art">Art</Label>
            <Input
              id="art"
              placeholder="Art"
              name="art"
              readOnly
              defaultValue="Art"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="art_grade">Grade</label>
            <select
              id="art_grade"
              name="art_grade"
              defaultValue={exCurrT[0].art}
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
            <Label htmlFor="sports">Sports</Label>
            <Input
              id="sports"
              placeholder="Sports"
              name="sports"
              readOnly
              defaultValue="Sports"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="sports_grade">Grade</label>
            <select
              id="sports_grade"
              name="sports_grade"
              defaultValue={exCurrT[0].sports}
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
            <Label htmlFor="construction">Construction</Label>
            <Input
              id="construction"
              placeholder="Construction"
              name="construction"
              readOnly
              defaultValue="Construction"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="ctrn_grade">Grade</label>
            <select
              id="ctrn_grade"
              name="ctrn_grade"
              defaultValue={exCurrT[0].construction}
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
