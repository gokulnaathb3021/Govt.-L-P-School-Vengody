"use client";
import { students } from "@/db/schema";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function StudentCard({
  student,
}: {
  student: typeof students.$inferSelect;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const stopSpin = () => {
      setIsLoading(false);
    };
    stopSpin();
  }, [pathname]);

  return (
    <Link
      href={`/explore/${student.admission_number}`}
      onClick={() => setIsLoading(true)}
    >
      <Card className="group card-hover hover:bg-primary/10 border-solid border-green-500 border-4 min-h-30 p-2 sm:p-5 w-fit">
        {/* React preserves the client component state in memory when using the browser back button with Next.js. So your spinner shows even though navigation is done. */}
        {isLoading && <Loader2Icon className="animate-spin" />}
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
