import { ButtonsOnPdf } from "@/components/common/buttons-on-pdf";
import PersonalDetails from "@/components/students/personalDetails";
import { getAStudent, getImageUrl } from "@/lib/student-actions/add-edit-del";
import { approvalCheck } from "@/lib/useful_fns/approval-check";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { redirect } from "next/navigation";

export default async function SpecificStudent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const approved = await approvalCheck();
  if (!approved) redirect("/");
  const { slug } = await params;
  const admissionNumber = getAdmissionNumber(slug);
  const { student } = await getAStudent(admissionNumber);
  const s = student![0];
  const imageUrl = await getImageUrl(admissionNumber);
  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-4 sm:p-8">
      <PersonalDetails
        s={s}
        imageUrl={imageUrl}
        admissionNumber={admissionNumber}
        key={JSON.stringify(s)}
      />
      <div className="flex justify-between mt-20">
        <p>Headmaster/Headmistress</p>
        <p>Class teacher</p>
      </div>
      <ButtonsOnPdf admissionNumber={admissionNumber} />
    </div>
  );
}
