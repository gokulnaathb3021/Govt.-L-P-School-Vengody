import SectionHeader from "@/components/common/section-header";
import {
  getExCurrGrades,
  getHAQGrades,
  getTermGrades,
} from "@/lib/grades-actions/get-grades";
import { getAStudent } from "@/lib/student-actions/add-edit-del";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { Edit2 } from "lucide-react";
import UpdateGradesWrapper from "@/components/update-grades/update-grades-wrapper";
import { approvalCheck } from "@/lib/useful_fns/approval-check";
import { redirect } from "next/navigation";

export default async function EditGrades({
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
  const { res1: aboutTermT, res2: termSkillT } =
    await getTermGrades(admissionNumber);
  const { res: HAQT } = await getHAQGrades(admissionNumber);
  const { eCRes: exCurrT } = await getExCurrGrades(admissionNumber);
  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-5">
          <SectionHeader
            icon={Edit2}
            title={`Edit Grades of ${s.student_name}`}
            description=""
          />
        </div>
        {aboutTermT?.length !== undefined && aboutTermT.length === 0 && (
          <h1 className="mx-auto font-bold text-2xl text-center">
            There are no grades to edit.
          </h1>
        )}
        <UpdateGradesWrapper
          aboutTermT={aboutTermT ?? []}
          termSkillT={termSkillT ?? []}
          HAQT={HAQT ?? []}
          exCurrT={exCurrT ?? []}
        />
      </div>
    </div>
  );
}
