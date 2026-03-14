"use client";

import { about_term, term_skill } from "@/db/schema";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useActionState } from "react";
import { updateTermGrades } from "@/lib/grades-actions/update-grades";
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
export default function EditTermXGrades({
  aboutTermT,
  termSkillT,
  term,
}: {
  aboutTermT: (typeof about_term.$inferSelect)[];
  termSkillT: (typeof term_skill.$inferSelect)[];
  term: number;
}) {
  const indices =
    term === 1 ? [0, 1, 2, 3] : term === 2 ? [4, 5, 6, 7] : [8, 9, 10, 11];
  const [state, formAction, isPending] = useActionState(
    updateTermGrades,
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
        <h1 className="font-bold text-lg mb-3">{`Term ${term}`}</h1>
        <Input hidden defaultValue={`Term ${term}`} name="term" />
        <Input hidden defaultValue={termSkillT[indices[0]].id} name="id1" />
        <Input hidden defaultValue={termSkillT[indices[1]].id} name="id2" />
        <Input hidden defaultValue={termSkillT[indices[2]].id} name="id3" />
        <Input hidden defaultValue={termSkillT[indices[3]].id} name="id4" />
        <Input
          hidden
          defaultValue={aboutTermT[term - 1].admission_number}
          name="admission_number"
        />
        <div className="space-y-2">
          <Label htmlFor="classroom_participation">
            Classroom Participation
          </Label>
          <Textarea
            name="classroom_participation"
            id="classroom_participation"
            placeholder="Classroom participation"
            required={true}
            defaultValue={aboutTermT[term - 1].classroom_participation}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="strengths">Strengths</Label>
          <Textarea
            name="strengths"
            id="strengths"
            placeholder="Strengths"
            required={true}
            defaultValue={aboutTermT[term - 1].strengths}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="limitations">Limitations</Label>
          <Textarea
            name="limitations"
            id="limitations"
            placeholder="Limitations"
            required={true}
            defaultValue={aboutTermT[term - 1].limitations}
          />
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="subject1">Malayalam</Label>
            <Input
              id="subject1"
              name="malayalam"
              placeholder="Malayalam"
              readOnly
              defaultValue="Malayalam"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="reading1">Reading</label>
            <select
              name="m_reading"
              id="reading1"
              defaultValue={termSkillT[indices[0]].reading ?? ""}
            >
              <option value="Below Average">Below Average</option>
              <option value="Average">Average</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="writing1">Writing</label>
            <select
              name="m_writing"
              id="writing1"
              defaultValue={termSkillT[indices[0]].writing ?? ""}
            >
              <option value="Below Average">Below Average</option>
              <option value="Average">Average</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="subject2">English</Label>
            <Input
              id="subject2"
              name="english"
              placeholder="English"
              readOnly
              defaultValue="English"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="reading2">Reading</label>
            <select
              name="eng_reading"
              id="reading2"
              defaultValue={termSkillT[indices[1]].reading ?? ""}
            >
              <option value="Below Average">Below Average</option>
              <option value="Average">Average</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="writing2">Writing</label>
            <select
              name="eng_writing"
              id="writing2"
              defaultValue={termSkillT[indices[1]].writing ?? ""}
            >
              <option value="Below Average">Below Average</option>
              <option value="Average">Average</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="subject3">Maths</Label>
            <Input
              id="subject3"
              name="maths"
              placeholder="Maths (Basic Skills)"
              readOnly
              defaultValue="Maths (Basic Skills)"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="math_skill">Skill level</label>
            <select
              name="math_skill"
              id="math_skill"
              defaultValue={termSkillT[indices[2]].skill_level_in_general ?? ""}
            >
              <option value="Below Average">Below Average</option>
              <option value="Average">Average</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="subject4">EVS</Label>
            <Input
              id="subject4"
              name="EVS"
              placeholder="EVS"
              readOnly
              defaultValue="EVS"
            />
          </div>
          <div className="w-full border flex items-center justify-between px-3">
            <label htmlFor="evs_skill">Skill level</label>
            <select
              name="evs_skill"
              id="evs_skill"
              defaultValue={termSkillT[indices[3]].skill_level_in_general ?? ""}
            >
              <option value="Below Average">Below Average</option>
              <option value="Average">Average</option>
              <option value="Excellent">Excellent</option>
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
