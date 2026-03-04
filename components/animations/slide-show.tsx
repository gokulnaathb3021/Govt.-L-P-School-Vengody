"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/GLPS_SCHOOL_1.JPG",
    width: 1280,
    height: 960,
    alt: "Students in front of school building.",
  },
  {
    src: "/GLPS_SCHOOL_3.JPG",
    width: 1280,
    height: 854,
    alt: "School opening ceremony.",
  },
  {
    src: "/GLPS_ASSEMBLY.jpeg",
    width: 1280,
    height: 908,
    alt: "School assembly.",
  },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-lg">
      <Image
        src={images[index].src}
        alt={images[index].alt}
        width={images[index].width}
        height={images[index].height}
      />
    </div>
  );
}
