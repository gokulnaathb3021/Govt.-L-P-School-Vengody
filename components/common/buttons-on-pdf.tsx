"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const ButtonsOnPdf = ({
  admissionNumber,
}: {
  admissionNumber: number;
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex gap-2">
        <div className="flex print:hidden">
          <Button
            className="hover:cursor-pointer text-sm p-1"
            onClick={() => router.push(`/explore/${admissionNumber}/edit`)}
          >
            Edit details
          </Button>
        </div>

        <div className="flex print:hidden">
          <Button
            className="hover:cursor-pointer text-sm p-1"
            onClick={() =>
              router.push(`/explore/${admissionNumber}/image-upload`)
            }
          >
            Upload student image
          </Button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex print:hidden">
          <Button
            className="hover:cursor-pointer text-sm p-1"
            onClick={() =>
              router.push(`/explore/${admissionNumber}/add-grades`)
            }
          >
            Add grades
          </Button>
        </div>
        <div className="flex print:hidden">
          <Button
            className="hover:cursor-pointer text-sm p-1"
            onClick={() =>
              router.push(`/explore/${admissionNumber}/edit-grades`)
            }
          >
            Edit grades
          </Button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex print:hidden">
          <Button
            className="hover:cursor-pointer text-sm p-1"
            onClick={() => router.push(`/explore/${admissionNumber}/ai`)}
          >
            Generate AI feedback
          </Button>
        </div>

        <div className="flex print:hidden">
          <Button
            className="hover:cursor-pointer text-sm p-1 bg-destructive"
            onClick={() => router.push(`/explore/${admissionNumber}/delete`)}
          >
            Delete Student
          </Button>
        </div>
      </div>
    </div>
  );
};
