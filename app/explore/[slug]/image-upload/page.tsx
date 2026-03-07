import UploadStudentImage from "@/components/students/uploadStudentImage";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";

export default async function ImageUpload({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const admissionNumber = getAdmissionNumber(slug);
  return <UploadStudentImage admissionNumber={admissionNumber} />;
}
