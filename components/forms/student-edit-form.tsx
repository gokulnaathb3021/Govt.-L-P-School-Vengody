"use client";
import { students } from "@/db/schema";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { useActionState, useEffect, useRef } from "react";
import { editAStudent } from "@/lib/student-actions/add-edit-del";
import { Button } from "../ui/button";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { toast } from "react-hot-toast";

type FormState = {
  success: boolean;
  errors: string[];
  message: string;
};

const initialState: FormState = {
  success: true,
  errors: [],
  message: "",
};

export default function StudentEditForm({
  s,
}: {
  s: typeof students.$inferSelect;
}) {
  const [state, formAction, isPending] = useActionState(
    editAStudent,
    initialState,
  );
  const success = state.success;
  const errors = state.errors;
  const message = state.message;
  const toastIdRef = useRef<string | undefined>("");
  const hasSubmittedRef = useRef(false);
  useEffect(() => {
    // When user clicks submit → isPending becomes true
    if (isPending) {
      hasSubmittedRef.current = true;
      toastIdRef.current = toast.loading("Updating the student...");
      return;
    }

    // Only run after submission happened
    if (hasSubmittedRef.current && !isPending) {
      if (success) {
        toast.success(message, { id: toastIdRef.current });
      } else {
        toast.error(message, { id: toastIdRef.current });
      }

      // Reset flag so it doesn't trigger again accidentally
      hasSubmittedRef.current = false;
    }
  }, [isPending, success, message]);
  return (
    <form
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
      className="space-y-6"
      action={formAction}
    >
      {!success && (
        <div className="border border-red-500 rounded-lg bg-red-100 p-2 mb-5">
          {!success && <p className="font-bold">{errors[0]}</p>}
          {!success && <p>{message}</p>}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="Student's name"
          required={true}
          defaultValue={s.student_name}
        />
      </div>
      <div className="w-full border flex justify-between px-3">
        <label htmlFor="Class">Class</label>
        <select name="Class" id="Class" defaultValue={s.class}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="w-full border flex justify-between px-3">
        <label htmlFor="division">Division</label>
        <select name="division" id="division" defaultValue={s.division}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="roll_number">Roll Number</Label>
        <Input
          name="roll_number"
          id="roll_number"
          type="number"
          placeholder="Student's roll number"
          required={true}
          defaultValue={s.roll_number}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="admission_number">Admission Number</Label>
          <Input
            name="admission_number"
            id="admission_number"
            type="number"
            placeholder="Student's admission number"
            required={true}
            defaultValue={s.admission_number}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="aadhar_number">Aadhar Number</Label>
          <Input
            name="aadhar_number"
            id="aadhar_number"
            type="text"
            placeholder="Student's aadhar number"
            required={true}
            defaultValue={s.aadhar_number}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="mother_name">{`Mother's name`}</Label>
          <Input
            name="mother_name"
            id="mother_name"
            type="text"
            placeholder="Mother's name"
            required={true}
            defaultValue={s.mother_name}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="DoB">Date of Birth</Label>
          <Input
            name="DoB"
            id="DoB"
            type="date"
            placeholder=""
            required={true}
            defaultValue={s.dob}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="father_name">{`Father's name`}</Label>
          <Input
            name="father_name"
            id="father_name"
            type="text"
            placeholder="Father's name"
            required={true}
            defaultValue={s.father_name}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="panchayat">Panchayat</Label>
          <Input
            name="panchayat"
            id="panchayat"
            type="text"
            placeholder="Panchayat name"
            required={true}
            defaultValue={s.panchayat}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="house_name">House Name</Label>
          <Input
            name="house_name"
            id="house_name"
            type="text"
            placeholder="House name"
            required={true}
            defaultValue={s.house_name}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ward">Ward</Label>
          <Input
            name="ward"
            id="ward"
            type="text"
            placeholder="Ward"
            required={true}
            defaultValue={s.ward}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="place">Place</Label>
        <Input
          name="place"
          id="place"
          type="text"
          placeholder="Place name"
          required={true}
          defaultValue={s.place}
        />
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" defaultValue={s.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="religion">Religion</Label>
          <Input
            name="religion"
            id="religion"
            type="text"
            placeholder="Religion"
            required={true}
            defaultValue={s.religion}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="caste">Caste</Label>
          <Input
            name="caste"
            id="caste"
            type="text"
            placeholder="Caste"
            required={true}
            defaultValue={s.caste}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="poverty_line">Poverty Line</label>
          <select
            name="poverty_line"
            id="poverty_line"
            defaultValue={s.poverty_line}
          >
            <option value="APL">APL</option>
            <option value="BPL">BPL</option>
          </select>
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="medium">Medium</label>
          <select name="medium" id="medium" defaultValue={s.medium}>
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone_number">Phone Number</Label>
          <Input
            name="phone_number"
            id="phone_number"
            type="tel"
            placeholder="Phone Number"
            required={true}
            defaultValue={s.phone_number}
          />
        </div>
      </div>
      <Separator className="bg-blue-500 mt-2" />
      <h1 className="mt-5 font-bold text-xl">Family Background</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="house">House</label>
          <select name="house" id="house" defaultValue={s.house_ownership}>
            <option value="Own House">Own House</option>
            <option value="Rented House">Rented House</option>
          </select>
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="house_type">House Type</label>
          <select name="house_type" id="house_type" defaultValue={s.house_type}>
            <option value="Tile-Roofed House">Tile-Roofed House</option>
            <option value="Concrete">Concrete</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="father_educational_qualification">{`Father's educational qualification`}</Label>
          <Input
            name="father_educational_qualification"
            id="father_educational_qualification"
            type="text"
            placeholder="Father's educational qualification"
            required={true}
            defaultValue={s.father_educational_qualification}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="father_job">{`Father's Job`}</Label>
          <Input
            name="father_job"
            id="father_job"
            type="text"
            placeholder="Father's job"
            required={true}
            defaultValue={s.father_job}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="mother_educational_qualification">{`Mother's educational qualification`}</Label>
          <Input
            name="mother_educational_qualification"
            id="mother_educational_qualification"
            type="text"
            placeholder="Mother's educational qualification"
            required={true}
            defaultValue={s.mother_educational_qualification}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mother_job">{`Mother's Job`}</Label>
          <Input
            name="mother_job"
            id="mother_job"
            type="text"
            placeholder="Mother's job"
            required={true}
            defaultValue={s.mother_job}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="other_family_members">Other members in family</Label>
        <Textarea
          name="other_family_members"
          id="other_family_members"
          placeholder="Other members in family"
          required={true}
          defaultValue={s.other_family_members}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="annual_income">Annual Income</Label>
        <Input
          name="annual_income"
          id="annual_income"
          placeholder="Annual Income"
          type="number"
          required={true}
          defaultValue={s.annual_income}
        />
      </div>
      <Separator className="bg-blue-500 mt-2" />
      <h1 className="mt-5 font-bold text-xl">Study Environment</h1>
      <h1 className="mb-1.5 text-base">Study Facilities</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="study_room">Study Room</label>
          <select name="study_room" id="study_room" defaultValue={s.study_room}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="study_table">Study Table</label>
          <select
            name="study_table"
            id="study_table"
            defaultValue={s.study_table}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="study_time">Study time (hours)</Label>
        <Input
          name="study_time"
          id="study_time"
          type="number"
          placeholder="Study time"
          required={true}
          defaultValue={s.study_time}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="difficulties_obstacles">Difficulties/Obstacles</Label>
        <Textarea
          name="difficulties_obstacles"
          id="difficulties_obstacles"
          placeholder="Difficulties/Obstacles"
          required={true}
          defaultValue={s.difficulties_obstacles}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="special_study_support">Special Study Support</Label>
        <Textarea
          name="special_study_support"
          id="special_study_support"
          placeholder="Special Study Support"
          required={true}
          defaultValue={s.special_study_support}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="parental_involvement">Parental Involvement</Label>
        <Textarea
          name="parental_involvement"
          id="parental_involvement"
          placeholder="Parental Involvement"
          required={true}
          defaultValue={s.parental_involvement}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="child_health_status">Child Health Status</Label>
        <Textarea
          name="child_health_status"
          id="child_health_status"
          placeholder="Child Health Status"
          required={true}
          defaultValue={s.child_health_status}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="child_sme_status">
          Child social/mental/emotional status
        </Label>
        <Textarea
          name="child_sme_status"
          id="child_sme_status"
          placeholder="Child social/mental/emotional status"
          required={true}
          defaultValue={s.child_sme_status}
        />
      </div>
      <Button type="submit" className="w-full mt-5 hover:cursor-pointer">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Update Student
          </>
        )}
      </Button>
    </form>
  );
}
