import StudentSearch from "@/components/students/StudentSearch";
import { getAllStudents } from "@/lib/student-actions/add-edit-del";
import { approvalCheck } from "@/lib/useful_fns/approval-check";

export default async function ExploreStudents() {
  const approved = await approvalCheck();
  if (!approved) {
    return (
      <div className="max-w-lg mx-10 sm:mx-auto mt-10 p-4 sm:p-6 border rounded-lg bg-yellow-50 text-yellow-900 text-sm sm:text-base text-center">
        Your account is yet to be approved by the admin. Once it gets approved,
        you can explore students. You will receive an email when approval
        happens.
      </div>
    );
  }
  const res = await getAllStudents();
  return (
    <div className="mt-15">
      <div className="wrapper">
        <StudentSearch allStudents={res.allStudents ?? []} />
      </div>
    </div>
  );
}
