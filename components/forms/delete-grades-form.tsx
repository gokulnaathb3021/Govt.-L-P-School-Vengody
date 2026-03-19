"use client";

import { deleteStudentGrades } from "@/lib/student-actions/add-edit-del";
import { useActionState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import DeleteButton from "../students/deleteButton";

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
export default function DeleteGradesForm({
  admissionNumber,
}: {
  admissionNumber: number;
}) {
  const [state, formAction] = useActionState(deleteStudentGrades, initialState);

  const success = state.success;
  const errors = state.errors;
  const message = state.message;
  const router = useRouter();
  useEffect(() => {
    if (message === "Successfully deleted grades.") {
      router.push(`/explore/${admissionNumber}`);
    }
  }, [message, router, admissionNumber]);
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
      <div>
        <Label htmlFor="ad_num_of_del" className="mb-1">
          Admission number
        </Label>
        <Input
          id="ad_num_of_del"
          name="ad_num_of_del"
          defaultValue={admissionNumber}
          readOnly
        />
      </div>
      <DeleteButton textToDisplay="Delete grades permanently" />
    </form>
  );
}
