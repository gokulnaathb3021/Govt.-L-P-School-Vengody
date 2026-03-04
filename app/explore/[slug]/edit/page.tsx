import SectionHeader from "@/components/common/section-header";
import StudentEditForm from "@/components/forms/student-edit-form";
import { getAStudent } from "@/lib/student-actions/add-edit-del";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { Edit } from "lucide-react";

export default async function EditStudent({
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
            icon={Edit}
            title={`Edit student - ${s.student_name}`}
            description=""
          />
        </div>
        <StudentEditForm s={s} />{" "}
      </div>
    </section>
  );
}
