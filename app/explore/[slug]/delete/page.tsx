import SectionHeader from "@/components/common/section-header";
import DeleteStudentForm from "@/components/forms/delete-student-form";
import { getAStudent } from "@/lib/student-actions/add-edit-del";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { Trash } from "lucide-react";

export default async function DeleteStudent({
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
            title={`Delete student - ${s.student_name}`}
            description="Once you click the 'Delete student permanently' button, the action can't be undone!"
          />
        </div>
        <DeleteStudentForm admissionNumber={admissionNumber} />
      </div>
    </section>
  );
}
