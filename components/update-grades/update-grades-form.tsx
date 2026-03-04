"use client";

import { about_term, extracurricular, HAQTable, term_skill } from "@/db/schema";
import { useState } from "react";
import { Button } from "../ui/button";
import EditTermXGrades from "./edit-term-x";
import EditHAQGrades from "./edit-HAQ";
import EditExCurrGrades from "./edit-ex-curr";

export default function UpdateGradesForm({
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
  const [testType, setTestType] = useState("");
  const n = aboutTermT.length;
  const buttons = [];
  if (n >= 1) {
    buttons.push(
      <Button
        className="hover:cursor-pointer"
        onClick={() => setTestType("Term 1")}
      >
        Edit Term 1 Grades
      </Button>,
    );
    if (HAQT.length >= 1) {
      buttons.push(
        <Button
          className="hover:cursor-pointer"
          onClick={() => setTestType("Quarterly")}
        >
          Edit Quarterly Grades
        </Button>,
      );
      if (n >= 2) {
        buttons.push(
          <Button
            className="hover:cursor-pointer"
            onClick={() => setTestType("Term 2")}
          >
            Edit Term 2 Grades
          </Button>,
        );
        if (HAQT.length >= 2) {
          buttons.push(
            <Button
              className="hover:cursor-pointer"
              onClick={() => setTestType("Half-Yearly")}
            >
              Edit Half-Yearly Grades
            </Button>,
          );
          if (n === 3) {
            buttons.push(
              <Button
                className="hover:cursor-pointer"
                onClick={() => setTestType("Term 3")}
              >
                Edit Term 3 Grades
              </Button>,
            );
            if (HAQT.length === 3) {
              buttons.push(
                <Button
                  className="hover:cursor-pointer"
                  onClick={() => setTestType("Annual")}
                >
                  Edit Annual Grades
                </Button>,
              );
              if (exCurrT.length === 1) {
                buttons.push(
                  <Button
                    className="hover:cursor-pointer"
                    onClick={() => setTestType("ExCurr")}
                  >
                    Edit Extracurricular Activities Grades
                  </Button>,
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
      <div className="flex gap-4 flex-wrap">
        {buttons.map((b, i) => (
          <div key={i}>{b}</div>
        ))}
      </div>
      <div className="py-10">
        {["Term 1", "Term 2", "Term 3"].includes(testType) && (
          <EditTermXGrades
            key={testType}
            aboutTermT={aboutTermT}
            termSkillT={termSkillT}
            term={testType === "Term 1" ? 1 : testType === "Term 2" ? 2 : 3}
          />
        )}
        {["Quarterly", "Half-Yearly", "Annual"].includes(testType) && (
          <EditHAQGrades key={testType} HAQT={HAQT} testType={testType} />
        )}
        {testType === "ExCurr" && (
          <EditExCurrGrades
            key={testType}
            exCurrT={exCurrT}
            testType={testType}
          />
        )}
      </div>
    </div>
  );
}
