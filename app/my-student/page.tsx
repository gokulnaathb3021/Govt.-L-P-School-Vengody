import SectionHeader from "@/components/common/section-header";
import StudentSubmitForm from "@/components/forms/student-submit-form";
import { approvalCheck } from "@/lib/useful_fns/approval-check";
import { UserPlus } from "lucide-react";

export default async function MyStudent() {
  const approved = await approvalCheck();
  if (!approved) {
    return (
      <div className="max-w-lg mx-10 sm:mx-auto mt-10 p-4 sm:p-6 border rounded-lg bg-yellow-50 text-yellow-900 text-sm sm:text-base text-center">
        Your account is yet to be approved by the admin. Once it gets approved,
        you can add student details. You will receive a mail on approval.
      </div>
    );
  }
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Add a student"
            icon={UserPlus}
            description="Fill in this form with the details of the student you want to add."
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <StudentSubmitForm />
        </div>
      </div>
    </section>
  );
}
