"use client";
import { Button } from "../ui/button";

export default function SDownloadButton() {
  return (
    <div className="flex justify-start mb-6 print:hidden">
      <Button
        className="hover:cursor-pointer text-sm p-1"
        onClick={() => window.print()}
      >
        Download as PDF
      </Button>
    </div>
  );
}
