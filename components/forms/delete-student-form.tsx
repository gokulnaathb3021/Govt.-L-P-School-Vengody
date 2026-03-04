"use client";

import { deleteStudent } from "@/lib/student-actions/add-edit-del";
import { useActionState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import DeleteStudentButton from "../students/deleteStudentButton";

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
export default function DeleteStudentForm({
  admissionNumber,
}: {
  admissionNumber: number;
}) {
  const [state, formAction] = useActionState(deleteStudent, initialState);

  const success = state.success;
  const errors = state.errors;
  const message = state.message;
  const router = useRouter();
  useEffect(() => {
    if (message === "Successfully deleted student.") {
      router.push("/explore");
    }
  }, [message, router]);
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
      <DeleteStudentButton />
    </form>
  );
}
