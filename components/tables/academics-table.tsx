import {
  getExCurrGrades,
  getHAQGrades,
  getNumRows,
  getTermGrades,
} from "@/lib/grades-actions/get-grades";
import TermTable from "./term-table";
import HAQtable from "./HAQ-table";
import ExCurrTable from "./ex-curr-table";
import { get_AIContent } from "@/lib/student-actions/add-edit-del";
import { generateQuote } from "@/lib/ai/generateQuote";
import { Zap } from "lucide-react";

export default async function AcademicsTable({
  admissionNumber,
}: {
  admissionNumber: number;
}) {
  const { res1: aboutTermT, res2: termSkillT } =
    await getTermGrades(admissionNumber);
  // aboutTermT?.length means: "If aboutTermT exists, get length, otherwise return undefined."
  let TermTable1;
  let QuarterlyTable;
  let TermTable2;
  let HalfyearlyTable;
  let TermTable3;
  let AnnualTable;
  let ExCurrT;
  if (aboutTermT?.length !== undefined && aboutTermT?.length >= 1) {
    TermTable1 = (
      <TermTable aboutTermT={aboutTermT} termSkillT={termSkillT!} term={1} />
    );
    const { res: HAQT } = await getHAQGrades(admissionNumber);
    if (HAQT?.length !== undefined && HAQT.length >= 1) {
      QuarterlyTable = <HAQtable HAQT={HAQT} assessment_type="quarterly" />;
      if (aboutTermT.length >= 2) {
        TermTable2 = (
          <TermTable
            aboutTermT={aboutTermT}
            termSkillT={termSkillT!}
            term={2}
          />
        );
        if (HAQT.length >= 2) {
          HalfyearlyTable = (
            <HAQtable HAQT={HAQT} assessment_type="half-yearly" />
          );
          if (aboutTermT.length === 3) {
            TermTable3 = (
              <TermTable
                aboutTermT={aboutTermT}
                termSkillT={termSkillT!}
                term={3}
              />
            );
            if (HAQT.length === 3) {
              AnnualTable = <HAQtable HAQT={HAQT} assessment_type="annual" />;
              const { eCRes } = await getExCurrGrades(admissionNumber);
              if (eCRes!.length === 0) {
                ExCurrT = <></>;
              } else {
                ExCurrT = eCRes?.length !== undefined && (
                  <ExCurrTable eCT={eCRes} />
                );
              }
            }
          }
        }
      }
    }
  }
  const { countAboutTerm } = (await getNumRows(admissionNumber, "about_term"))!;
  const { countHAQ } = (await getNumRows(admissionNumber, "HAQTable"))!;
  const { countExtracurricular } = (await getNumRows(
    admissionNumber,
    "extracurricular",
  ))!;
  let ai_content_uptoQuarterly = "";
  let ai_content_uptoHalfyearly = "";
  let ai_content_uptoAnnual = "";
  let ai_content_uptoExtracurricular = "";
  let quote = "";
  if (countAboutTerm! >= 1 && countHAQ! >= 1) {
    ai_content_uptoQuarterly = (await get_AIContent(
      admissionNumber,
      "uptoQuarterly",
    ))!;
  }
  if (countAboutTerm! >= 2 && countHAQ! >= 2) {
    ai_content_uptoHalfyearly = (await get_AIContent(
      admissionNumber,
      "uptoHalfyearly",
    ))!;
  }
  if (countAboutTerm! >= 3 && countHAQ! >= 3) {
    ai_content_uptoAnnual = (await get_AIContent(
      admissionNumber,
      "uptoAnnual",
    ))!;
  }
  if (countExtracurricular === 1) {
    ai_content_uptoExtracurricular = (await get_AIContent(
      admissionNumber,
      "uptoExtracurricular",
    ))!;
    quote = (await generateQuote(ai_content_uptoExtracurricular))!;
  }
  return (
    <div>
      {TermTable1} {QuarterlyTable}
      {ai_content_uptoQuarterly !== "" && (
        <div className="mt-5">
          <h1 className="mb-3 text-xl font-bold underline">
            Upto Quarterly Feedback
          </h1>
          <p className="text-lg">{ai_content_uptoQuarterly}</p>
        </div>
      )}
      {TermTable2} {HalfyearlyTable}
      {ai_content_uptoHalfyearly !== "" && (
        <div className="mt-5">
          <h1 className="mb-3 text-xl font-bold underline">
            Upto Half-Yearly Feedback
          </h1>
          <p className="text-lg">{ai_content_uptoHalfyearly}</p>
        </div>
      )}
      {TermTable3} {AnnualTable}
      {ai_content_uptoAnnual !== "" && (
        <div className="mt-5">
          <h1 className="mb-3 text-xl font-bold underline">
            Upto Annual Feedback
          </h1>
          <p className="text-lg">{ai_content_uptoAnnual}</p>
        </div>
      )}
      {ExCurrT}
      {ai_content_uptoExtracurricular !== "" && (
        <div className="mt-5">
          <h1 className="mb-3 text-xl font-bold underline">
            Overall Performance Summary
          </h1>
          <p className="text-lg">{ai_content_uptoExtracurricular}</p>
        </div>
      )}
      {ai_content_uptoExtracurricular !== "" && (
        <div className="mt-10">
          <h1 className="underline font-bold text-xl mb-2 gap-1 flex">
            SPARK
            <Zap />
          </h1>
          <div className="p-2 border-2 border-green-600 bg-green-100">
            <p>{quote}</p>
          </div>
        </div>
      )}
    </div>
  );
}
