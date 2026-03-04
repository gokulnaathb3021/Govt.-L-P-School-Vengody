"use client";
import { Search } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Input } from "../ui/input";
import { useMemo, useState } from "react";
import { students } from "@/db/schema";
import StudentCard from "./StudentCard";

export default function StudentSearch({
  allStudents,
}: {
  allStudents: (typeof students.$inferSelect)[];
}) {
  const [searchQ, setSearchQ] = useState("");
  const filteredStudents = useMemo(() => {
    const filtered = [...allStudents!];
    return filtered.filter((s) =>
      s.student_name.toLowerCase().startsWith(searchQ.toLowerCase()),
    );
  }, [searchQ, allStudents]);
  return (
    <div>
      <SectionHeader icon={Search} title="Look up students" description="" />
      <form
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        className="my-5"
      >
        <Input
          id="name"
          name="name"
          placeholder="Enter student's name"
          className="pl-5 sm:pl-10 text-xs sm:text-sm w-3/4"
          onChange={(e) => setSearchQ(e.target.value)}
          autoComplete="off"
        />
      </form>
      <div className="flex flex-wrap gap-4 mb-10">
        {searchQ.length > 0 ? (
          filteredStudents.map((s) => (
            <StudentCard key={s.admission_number} student={s} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
