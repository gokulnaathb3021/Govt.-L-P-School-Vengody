import SDownloadButton from "@/components/students/sDownloadButton";
import AcademicsTable from "@/components/tables/academics-table";
import { Button } from "@/components/ui/button";
import { getAStudent } from "@/lib/student-actions/add-edit-del";
import getAdmissionNumber from "@/lib/useful_fns/getAdmissionNumber";
import { Check, X } from "lucide-react";
import Link from "next/link";

export default async function SpecificStudent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const admissionNumber = getAdmissionNumber(slug);
  const { student } = await getAStudent(admissionNumber);
  const s = student![0];
  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-4 sm:p-8">
      <SDownloadButton />
      <h1 className="text-lg sm:text-2xl text-center mb-4 font-bold">
        {s.student_name.toUpperCase()}
      </h1>
      <div className="overflow-x-auto">
        <h1 className="mt-1 pl-0 ml-0 font-medium">
          Class: <p className="inline text-sm font-normal">{s.class}</p>
        </h1>
        <h1 className="mt-1 pl-0 ml-0 font-medium">
          Division: <p className="inline text-sm font-normal">{s.division}</p>
        </h1>
        <h1 className="mt-1 mb-5 pl-0 ml-0 font-medium">
          Roll number:{" "}
          <p className="inline text-sm font-normal">{s.roll_number}</p>
        </h1>
        <table className="w-full border border-collapse text-sm">
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Admission Number</td>
              <td className="border p-2">{s.admission_number}</td>
              <td className="border p-2 font-medium">Aadhar Number</td>
              <td className="border p-2">{s.aadhar_number}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Mother</td>
              <td className="border p-2">{s.mother_name}</td>
              <td className="border p-2 font-medium">DoB</td>
              <td className="border p-2">{s.dob}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Father</td>
              <td className="border p-2">{s.father_name}</td>
              <td className="border p-2 font-medium">Panchayat</td>
              <td className="border p-2">{s.panchayat}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">House name</td>
              <td className="border p-2">{s.house_name}</td>
              <td className="border p-2 font-medium">Ward</td>
              <td className="border p-2">{s.ward}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Place</td>
              <td className="p-2" colSpan={5}>
                {s.place}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full border border-collapse text-sm">
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Gender</td>
              <td className="border p-2">{s.gender}</td>
              <td className="border p-2 font-medium">Religion</td>
              <td className="border p-2">{s.religion}</td>
              <td className="border p-2 font-medium">Caste</td>
              <td className="border p-2">{s.caste}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">APL/BPL</td>
              <td className="border p-2">{s.poverty_line}</td>
              <td className="border p-2 font-medium">Medium</td>
              <td className="border p-2">{s.medium}</td>
              <td className="border p-2 font-medium">Phone number</td>
              <td className="border p-2">{s.phone_number}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="m-5 pl-0 ml-0 underline font-medium">
          Family Background
        </h1>
        <p>House:</p>
        <table className="w-full border border-collapse text-sm">
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Own House</td>
              <td className="border p-2 font-medium">Rented House</td>
              <td className="border p-2 font-medium">Tile-Roofed House</td>
              <td className="border p-2 font-medium">Concrete House</td>
            </tr>
            <tr>
              <td className="border p-2">
                {s.house_ownership === "Own House" ? <Check /> : ""}
              </td>
              <td className="border p-2">
                {s.house_ownership === "Rented House" ? <Check /> : ""}
              </td>
              <td className="border p-2">
                {s.house_type === "Tile-Roofed House" ? <Check /> : ""}
              </td>
              <td className="border p-2">
                {s.house_type === "Concrete" ? <Check /> : ""}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full border border-collapse text-sm mt-5">
          <tbody>
            <tr>
              <td className="border p-2"></td>
              <td className="border p-2 font-medium">
                Educational Qualification
              </td>
              <td className="border p-2 font-medium">Job</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Father</td>
              <td className="border p-2">
                {s.father_educational_qualification}
              </td>
              <td className="border p-2">{s.father_job}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Mother</td>
              <td className="border p-2">
                {s.mother_educational_qualification}
              </td>
              <td className="border p-2">{s.mother_job}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="m-5 pl-0 ml-0 font-medium">
          Other members in family:{" "}
          <p className="inline text-sm font-normal">{s.other_family_members}</p>
        </h1>
        <h1 className="m-5 pl-0 ml-0 font-medium">
          Annual Income:{" "}
          <p className="inline text-sm font-normal">{s.annual_income}</p>
        </h1>
        <h1 className="m-5 pl-0 ml-0 underline font-medium">
          Study Environment
        </h1>
        <h1 className="m-5 pl-0 ml-0">Study facilities</h1>
        <table className="w-full border border-collapse text-sm mt-5">
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Study room</td>
              <td className="border p-2 font-medium">Study table</td>
            </tr>
            <tr>
              <td className="border p-2">
                {s.study_room === "Yes" ? <Check /> : <X />}
              </td>
              <td className="border p-2">
                {s.study_table === "Yes" ? <Check /> : <X />}
              </td>
            </tr>
          </tbody>
        </table>
        <h1 className="m-5 pl-0 ml-0 font-medium">
          Study time:{" "}
          <p className="inline text-sm font-normal">
            {s.study_time > 1
              ? `${s.study_time} hours`
              : `${s.study_time} hour`}
          </p>
        </h1>
        <h1 className="m-5 pl-0 ml-0 font-medium">
          Difficulties/Obstacles:{" "}
          <p className="inline text-sm font-normal">
            {s.difficulties_obstacles}
          </p>
        </h1>
        <h1 className="m-5 pl-0 ml-0 font-medium">
          Special study support:{" "}
          <p className="inline text-sm font-normal">
            {s.special_study_support}
          </p>
        </h1>
        <h1 className="m-5 pl-0 ml-0 font-medium">
          Parental involvement:{" "}
          <p className="inline text-sm font-normal">{s.parental_involvement}</p>
        </h1>
        <h1 className="m-5 pl-0 ml-0 font-medium">
          Child health status:{" "}
          <p className="inline text-sm font-normal">{s.child_health_status}</p>
        </h1>
        <h1 className="mt-5 mb-1 pl-0 ml-0 font-medium underline">
          Child social/mental/emotional status:{" "}
        </h1>
        <p className="text-sm font-normal">{s.child_sme_status}</p>
        {/* grades from here */}
        <AcademicsTable admissionNumber={admissionNumber} />
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href={`/explore/${admissionNumber}/edit`}>
          <div className="flex mt-6 print:hidden">
            <Button className="hover:cursor-pointer text-sm p-1">
              Edit details
            </Button>
          </div>
        </Link>
        <Link href={`/explore/${admissionNumber}/add-grades`}>
          <div className="flex mt-6 print:hidden">
            <Button className="hover:cursor-pointer text-sm p-1">
              Add grades
            </Button>
          </div>
        </Link>
        <Link href={`/explore/${admissionNumber}/edit-grades`}>
          <div className="flex mt-6 print:hidden">
            <Button className="hover:cursor-pointer text-sm p-1">
              Edit grades
            </Button>
          </div>
        </Link>
        <Link href={`/explore/${admissionNumber}/delete`}>
          <div className="flex mt-6 print:hidden">
            <Button className="hover:cursor-pointer text-sm p-1 bg-destructive">
              Delete Student
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
