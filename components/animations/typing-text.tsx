"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const text = "A school providing a unique experience.";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      setIndex((prev) => prev + 1);

      if (index === text.length) {
        setIndex(0);
        setDisplayed("");
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <h2 className="text-sm sm:text-2xl font-medium text-amber-950">
      {displayed}
    </h2>
  );
}
