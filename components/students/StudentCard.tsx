import { students } from "@/db/schema";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "../ui/card";

export default function StudentCard({
  student,
}: {
  student: typeof students.$inferSelect;
}) {
  return (
    <Link href={`/explore/${student.admission_number}`}>
      <Card className="group card-hover hover:bg-primary/10 border-solid border-green-500 border-4 min-h-30 p-2 sm:p-5 w-fit">
        <CardTitle className="text-sm sm:text-lg text-primary">
          {student.student_name}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          <p>
            <span className="font-bold">DoB</span>: {student.dob}
          </p>
          <p>
            <span className="font-bold">Class</span>: {student.class}
          </p>
          <p>
            <span className="font-bold">Division</span>: {student.division}
          </p>
        </CardDescription>
      </Card>
    </Link>
  );
}
