import Fallback from "@/components/common/fallback";
import { Suspense } from "react";

export default function Feedback({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense
        fallback={<Fallback fText="Loading new teacher sign-up feedback..." />}
      >
        {children}
      </Suspense>
    </div>
  );
}
