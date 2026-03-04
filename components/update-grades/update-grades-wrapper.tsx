"use client";

import { usePathname } from "next/navigation";
import UpdateGradesForm from "./update-grades-form";
import { about_term, extracurricular, HAQTable, term_skill } from "@/db/schema";

export default function UpdateGradesWrapper({
  aboutTermT,
  termSkillT,
  HAQT,
  exCurrT,
}: {
  aboutTermT: (typeof about_term.$inferSelect)[];
  termSkillT: (typeof term_skill.$inferSelect)[];
  HAQT: (typeof HAQTable.$inferSelect)[];
  exCurrT: (typeof extracurricular.$inferSelect)[];
}) {
  const pathname = usePathname();

  return (
    <UpdateGradesForm
      key={pathname}
      aboutTermT={aboutTermT}
      termSkillT={termSkillT}
      HAQT={HAQT}
      exCurrT={exCurrT}
    />
  );
}
