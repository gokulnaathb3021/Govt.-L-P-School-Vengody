import SectionHeader from "@/components/common/section-header";
import DeleteGradesForm from "@/components/forms/delete-grades-form";
import { getAStudent } from "@/lib/student-actions/add-edit-del";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { Trash } from "lucide-react";

export default async function DeleteStudentGrades({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const admissionNumber = getAdmissionNumber(slug);
  const { student } = await getAStudent(admissionNumber);
  const s = student![0];
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            icon={Trash}
            title={`Delete gardes of student- ${s.student_name.toUpperCase()}`}
            description="Once you click the 'Delete grades permanently' button, the action can't be undone!"
          />
        </div>
        <DeleteGradesForm admissionNumber={admissionNumber} />
      </div>
    </section>
  );
}
