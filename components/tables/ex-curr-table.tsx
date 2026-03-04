import { extracurricular } from "@/db/schema";

export default function ExCurrTable({
  eCT,
}: {
  eCT: (typeof extracurricular.$inferSelect)[];
}) {
  return (
    <div>
      <h1 className="font-bold mt-5">{eCT[0].assessment_type}</h1>
      <table className="w-full border border-collapse text-sm mt-5">
        <tbody>
          <tr>
            <th className="border p-2 text-center">Readings</th>
            <th className="border p-2 text-center">Writings</th>
            <th className="border p-2 text-center">Art</th>
            <th className="border p-2 text-center">Sports</th>
            <th className="border p-2 text-center">Construction</th>
          </tr>
          <tr>
            <td className="border p-2 text-center">{eCT[0].readings}</td>
            <td className="border p-2 text-center">{eCT[0].writings}</td>
            <td className="border p-2 text-center">{eCT[0].art}</td>
            <td className="border p-2 text-center">{eCT[0].sports}</td>
            <td className="border p-2 text-center">{eCT[0].construction}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
