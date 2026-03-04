"use client";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  deleteClerkUserByEmail,
  deleteTeacher,
} from "@/lib/admin-actions/app-rej-del";
import toast from "react-hot-toast";

export default function AdminDelete({
  email,
  status,
}: {
  email: string;
  status: string;
}) {
  const _delete = async () => {
    const toastId = toast.loading("Deleting teacher...");
    const res1 = await deleteTeacher(email);
    let res2;
    if (status === "pending") {
      res2 = await deleteClerkUserByEmail(email);
    }
    if (res1.success && res2?.success) {
      toast.success("Teacher deleted successfully.", { id: toastId });
    } else if (res1.success && status !== "pending") {
      toast.success("Teacher deleted successfully.", { id: toastId });
    } else if (!res1.success || !res2?.success) {
      toast.error("Couldn't delete teacher, please try again.", {
        id: toastId,
      });
    }
  };
  return (
    <div>
      <Button
        variant="outline"
        className="hover:cursor-pointer hover:bg-red-100"
        onClick={_delete}
      >
        <Trash />
        Delete Teacher
      </Button>
    </div>
  );
}
