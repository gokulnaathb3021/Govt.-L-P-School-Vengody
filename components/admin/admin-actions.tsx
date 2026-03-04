"use client";
import { approveTeacher, rejectTeacher } from "@/lib/admin-actions/app-rej-del";
import { Button } from "../ui/button";
import { toast } from "react-hot-toast";
import { Check, X } from "lucide-react";

export default function AdminActions({ email }: { email: string }) {
  const approve = async () => {
    const toastId = toast.loading("Approving...");
    const res = await approveTeacher(email);
    if (res.success) toast.success(`${res.message}`, { id: toastId });
    if (!res.success)
      toast.error(`${res.message}`, {
        id: toastId,
      });
  };
  const reject = async () => {
    const toastId = toast.loading("Rejecting...");
    const res = await rejectTeacher(email);
    if (res.success) toast.success(`${res.message}`, { id: toastId });
    if (!res.success) toast.error(`${res.message}`, { id: toastId });
  };
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="default"
        className="hover:cursor-pointer"
        onClick={approve}
      >
        <Check />
        Approve
      </Button>
      <Button
        variant="destructive"
        className="hover:cursor-pointer"
        onClick={reject}
      >
        <X />
        Reject
      </Button>
    </div>
  );
}
