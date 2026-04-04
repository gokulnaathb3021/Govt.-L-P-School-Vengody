import UploadStudentImage from "@/components/students/uploadStudentImage";
import { approvalCheck } from "@/lib/useful_fns/approval-check";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { redirect } from "next/navigation";

export default async function ImageUpload({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const approved = await approvalCheck();
  if (!approved) redirect("/");
  const { slug } = await params;
  const admissionNumber = getAdmissionNumber(slug);
  return <UploadStudentImage admissionNumber={admissionNumber} />;
}
