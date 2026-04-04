import SectionHeader from "@/components/common/section-header";
import AddGradesForm from "@/components/forms/Add-Grades-Form";
import { getHAQGrades, getTermGrades } from "@/lib/grades-actions/get-grades";
import { approvalCheck } from "@/lib/useful_fns/approval-check";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { GraduationCap } from "lucide-react";
import { redirect } from "next/navigation";

export default async function AddGrades({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const approved = await approvalCheck();
  if (!approved) redirect("/");
  const { slug } = await params;
  const admissionNumber = getAdmissionNumber(slug);
  const { res1 } = await getTermGrades(admissionNumber);
  const { res } = await getHAQGrades(admissionNumber);
  let term2 = false,
    term3 = false,
    quarterly = false,
    halfYearly = false,
    annual = false,
    extracurricular = false;
  if (res1?.length !== undefined && res1.length >= 1) {
    quarterly = true;
    if (res?.length !== undefined && res.length >= 1) {
      term2 = true;
      if (res1.length >= 2) {
        halfYearly = true;
        if (res.length >= 2) {
          term3 = true;
          if (res1.length === 3) {
            annual = true;
            if (res.length === 3) {
              extracurricular = true;
            }
          }
        }
      }
    }
  }
  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-7">
          <SectionHeader
            icon={GraduationCap}
            title="Add Grades"
            description=""
          />
        </div>
        <AddGradesForm
          admissionNumber={admissionNumber}
          quarterly={quarterly}
          halfYearly={halfYearly}
          annual={annual}
          extracurricular={extracurricular}
          term2={term2}
          term3={term3}
        />
      </div>
    </div>
  );
}
