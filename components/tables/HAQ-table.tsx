import { HAQTable } from "@/db/schema";
export default function HAQtable({
  HAQT,
  assessment_type,
}: {
  HAQT: (typeof HAQTable.$inferSelect)[];
  assessment_type: string;
}) {
  const index =
    assessment_type === "quarterly"
      ? 0
      : assessment_type === "half-yearly"
        ? 1
        : 2;
  return (
    <div>
      <h1 className="font-bold mt-5">{`${HAQT[index].assessment_type} Assessment`}</h1>
      <table className="w-full border border-collapse text-sm mt-5">
        <tbody>
          <tr>
            <th className="border p-2 text-center">Subject</th>
            <th className="border p-2 text-center">Malayalam</th>
            <th className="border p-2 text-center">English</th>
            <th className="border p-2 text-center">Maths</th>
            <th className="border p-2 text-center">EVS</th>
          </tr>
          <tr>
            <th className="border p-2 text-center">Grade</th>
            <td className="border p-2 text-center">{HAQT[index].malayalam}</td>
            <td className="border p-2 text-center">{HAQT[index].english}</td>
            <td className="border p-2 text-center">{HAQT[index].maths}</td>
            <td className="border p-2 text-center">{HAQT[index].evs}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
