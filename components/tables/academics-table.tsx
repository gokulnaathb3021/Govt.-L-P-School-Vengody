import {
  getExCurrGrades,
  getHAQGrades,
  getTermGrades,
} from "@/lib/grades-actions/get-grades";
import TermTable from "./term-table";
import HAQtable from "./HAQ-table";
import ExCurrTable from "./ex-curr-table";

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
  return (
    <div>
      {TermTable1} {QuarterlyTable} {TermTable2} {HalfyearlyTable} {TermTable3}{" "}
      {AnnualTable} {ExCurrT}
    </div>
  );
}
