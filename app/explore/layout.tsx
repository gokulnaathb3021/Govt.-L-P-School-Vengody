import Fallback from "@/components/common/fallback";
import { Suspense } from "react";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<Fallback fText="Loading Explore..." />}>
        {children}
      </Suspense>
    </div>
  );
}
