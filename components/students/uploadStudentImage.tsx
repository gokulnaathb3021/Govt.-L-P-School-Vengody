"use client";

import { supabase } from "@/lib/supabase";
import SectionHeader from "../common/section-header";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import Image from "next/image";
import { setImageUrl } from "@/lib/student-actions/add-edit-del";
import { toast } from "react-hot-toast";

export default function UploadStudentImage({
  admissionNumber,
}: {
  admissionNumber: number;
}) {
  const [imgUrl, setImgUrl] = useState("");
  const [cacheBuster, setCacheBuster] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  async function uploadImage(file: File) {
    const toastId = toast.loading("Uploading image...");
    const filePath = `students/${admissionNumber}.jpg`;

    const { error } = await supabase.storage
      .from("G L P S Vengody students")
      .upload(filePath, file, { upsert: true });

    if (error) {
      console.error(error);
      toast.error(`Couldn't upload photo. Error: ${error}`, { id: toastId });
      return;
    }

    const { data } = supabase.storage
      .from("G L P S Vengody students")
      .getPublicUrl(filePath);

    const imageUrl = data.publicUrl;

    await setImageUrl(admissionNumber, imageUrl);
    setImgUrl(imageUrl);
    setCacheBuster(Date.now());
    console.log(imageUrl);
    toast.success("Uploaded image successfully.", {
      id: toastId,
    });
  }

  async function changeImage(file: File) {
    const toastId = toast.loading("Changing image...");
    const { error } = await supabase.storage
      .from("G L P S Vengody students")
      .upload(`students/${admissionNumber}.jpg`, file, {
        upsert: true,
      });
    if (error) {
      toast.error(`Couldn't change image. Error: ${error}`, { id: toastId });
      console.log(error);
    }
    setCacheBuster(Date.now());
    toast.success("Image change successful.", { id: toastId });
  }

  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          icon={Camera}
          title="Upload student's photo"
          description=""
        />

        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files) return;
            if (imgUrl == "") uploadImage(e.target.files[0]);
            else changeImage(e.target.files[0]);
          }}
          hidden
          ref={inputRef}
        />
        {imgUrl != "" && (
          <Image
            src={`${imgUrl}?t=${cacheBuster}`}
            alt="Student's photo"
            width={150}
            height={150}
          />
        )}
        <Button
          className="cursor-pointer mt-5"
          onClick={() => inputRef.current?.click()}
          hidden={imgUrl != ""}
        >
          Upload photo
        </Button>
        <Button
          className="cursor-pointer mt-5"
          onClick={() => inputRef.current?.click()}
          hidden={imgUrl == ""}
        >
          Change photo
        </Button>
      </div>
    </div>
  );
}
