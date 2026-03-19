import { about_term, term_skill } from "@/db/schema";
import { Check } from "lucide-react";

export default function TermTable({
  aboutTermT,
  termSkillT,
  term,
}: {
  aboutTermT: (typeof about_term.$inferSelect)[];
  termSkillT: (typeof term_skill.$inferSelect)[];
  term: number;
}) {
  const indices =
    term === 1 ? [0, 1, 2, 3] : term === 2 ? [4, 5, 6, 7] : [8, 9, 10, 11];
  return (
    <div>
      <h1 className="font-bold mt-5">{aboutTermT[term - 1].term}</h1>
      <h1 className="m-5 pl-0 ml-0 font-medium">
        Classroom Participation:{" "}
        <p className="inline text-sm font-normal">
          {aboutTermT[term - 1].classroom_participation}
        </p>
      </h1>
      <h1 className="m-5 pl-0 ml-0 font-medium">
        Strengths:{" "}
        <p className="inline text-sm font-normal">
          {aboutTermT[term - 1].strengths}
        </p>
      </h1>
      <h1 className="m-5 pl-0 ml-0 font-medium">
        Limitations:{" "}
        <p className="inline text-sm font-normal">
          {aboutTermT[term - 1].limitations}
        </p>
      </h1>
      <table className="w-full border border-collapse text-sm mt-5">
        <tbody>
          <tr>
            <th className="border p-2">
              Language, EVS, and Mathematical Skills
            </th>
            <th className="border p-2">Below Average</th>
            <th className="border p-2">Average</th>
            <th className="border p-2">Good</th>
            <th className="border p-2">Excellent</th>
          </tr>
          <tr>
            <td className="border p-2">Malayalam (Writing)</td>
            <td className="border p-2">
              {termSkillT![indices[0]].writing === "Below Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[0]].writing === "Average" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[0]].writing === "Good" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[0]].writing === "Excellent" ? <Check /> : ""}
            </td>
          </tr>
          <tr>
            <td className="border p-2">Malayalam (Reading)</td>
            <td className="border p-2">
              {termSkillT![indices[0]].reading === "Below Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[0]].reading === "Average" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[0]].reading === "Good" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[0]].reading === "Excellent" ? <Check /> : ""}
            </td>
          </tr>
          <tr>
            <td className="border p-2">English (Writing)</td>
            <td className="border p-2">
              {termSkillT![indices[1]].writing === "Below Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[1]].writing === "Average" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[1]].writing === "Good" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[1]].writing === "Excellent" ? <Check /> : ""}
            </td>
          </tr>
          <tr>
            <td className="border p-2">English (Reading)</td>
            <td className="border p-2">
              {termSkillT![indices[1]].reading === "Below Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[1]].reading === "Average" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[1]].reading === "Good" ? <Check /> : ""}
            </td>
            <td className="border p-2">
              {termSkillT![indices[1]].reading === "Excellent" ? <Check /> : ""}
            </td>
          </tr>
          <tr>
            <td className="border p-2">Maths (Basic Skills)</td>
            <td className="border p-2">
              {termSkillT![indices[2]].skill_level_in_general ===
              "Below Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[2]].skill_level_in_general === "Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[2]].skill_level_in_general === "Good" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[2]].skill_level_in_general ===
              "Excellent" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
          </tr>
          <tr>
            <td className="border p-2">EVS</td>
            <td className="border p-2">
              {termSkillT![indices[3]].skill_level_in_general ===
              "Below Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[3]].skill_level_in_general === "Average" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[3]].skill_level_in_general === "Good" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
            <td className="border p-2">
              {termSkillT![indices[3]].skill_level_in_general ===
              "Excellent" ? (
                <Check />
              ) : (
                ""
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
