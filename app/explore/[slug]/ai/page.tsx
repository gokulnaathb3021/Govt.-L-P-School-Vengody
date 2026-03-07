import SectionHeader from "@/components/common/section-header";
import ButtonsForAIContent from "@/lib/ai/buttonsForAIContent";
import { getStudentGrades } from "@/lib/ai/studentGrades";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { BrainCircuit } from "lucide-react";

export default async function getAIEvaluation({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const admissionNumber = getAdmissionNumber(slug);
  const { res1, res2, res, eCRes } = await getStudentGrades(admissionNumber);

  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          icon={BrainCircuit}
          title="Generate AI feedback"
          description=""
        />
        <div className="flex flex-col gap-5 mt-5">
          <ButtonsForAIContent
            res1={res1!}
            res2={res2!}
            res={res!}
            eCRes={eCRes!}
            admissionNumber={admissionNumber}
          />
        </div>
      </div>
    </div>
  );
}
