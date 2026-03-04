import Fallback from "@/components/common/fallback";
import { Suspense } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<Fallback fText="Loading Admin Panel..." />}>
        {children}
      </Suspense>
    </div>
  );
}
