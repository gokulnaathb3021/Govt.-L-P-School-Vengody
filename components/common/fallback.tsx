import { Loader2 } from "lucide-react";

export default function Fallback({ fText }: { fText: string }) {
  return (
    <div className="flex items-center justify-center min-h-75">
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-muted/40 backdrop-blur-sm shadow-sm border">
        <Loader2 className="size-8 animate-spin text-primary" />

        <p className="text-sm font-medium text-muted-foreground">{fText}</p>
      </div>
    </div>
  );
}
