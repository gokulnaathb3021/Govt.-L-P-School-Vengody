import Fallback from "@/components/common/fallback";
import { Suspense } from "react";

export default function MyStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<Fallback fText="Loading My Student form..." />}>
        {children}
      </Suspense>
    </div>
  );
}
