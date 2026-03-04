"use client";

import FormField from "../common/form-field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";
import { useActionState, useEffect, useRef, useState } from "react";
import { addStudentAction } from "@/lib/student-actions/add-edit-del";
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

export default function StudentSubmitForm() {
  const [formState, setFormState] = useState({
    class: "",
    division: "",
    gender: "",
    poverty_line: "",
    medium: "",
    house: "",
    house_type: "",
    studyroom: "",
    studytable: "",
  });
  const [state, formAction, isPending] = useActionState(
    addStudentAction,
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
      toastIdRef.current = toast.loading("Adding the student...");
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
      action={formAction}
    >
      {!success && (
        <div className="border border-red-500 rounded-lg bg-red-100 p-2 mb-5">
          {!success && <p className="font-bold">{errors[0]}</p>}
          {!success && <p>{message}</p>}
        </div>
      )}
      <div className="space-y-6">
        <FormField
          label="Name"
          name="name"
          id="name"
          type="text"
          placeholder="Student's name"
          required={true}
          textarea={false}
        />
        <Select
          onValueChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              class: value,
            }));
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Class</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input type="hidden" name="Class" value={formState.class} />
        <Select
          onValueChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              division: value,
            }));
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Division" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Division</SelectLabel>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
              <SelectItem value="D">D</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input type="hidden" name="division" value={formState.division} />
        <FormField
          label="Roll Number"
          name="Roll_Number"
          id="Roll_Number"
          type="number"
          placeholder="Student's roll number"
          required={true}
          textarea={false}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <FormField
          label="Admission Number"
          name="Admission_Number"
          id="Admission_Number"
          type="number"
          placeholder="Student's admission number"
          required={true}
          textarea={false}
        />
        <FormField
          label="Aadhar Number"
          name="Aadhar_Number"
          id="Aadhar_Number"
          type="text"
          placeholder="Student's aadhar number"
          required={true}
          textarea={false}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <FormField
          label="Mother's Name"
          name="mother_name"
          id="mother_name"
          type="text"
          placeholder="Mother's name"
          required={true}
          textarea={false}
        />
        <FormField
          label="Date of Birth"
          name="DoB"
          id="DoB"
          type="date"
          placeholder="Student's DoB"
          required={true}
          textarea={false}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <FormField
          label="Father's Name"
          name="father_name"
          id="father_name"
          type="text"
          placeholder="Father's name"
          required={true}
          textarea={false}
        />
        <FormField
          label="Panchayat"
          name="Panchayat"
          id="Panchayat"
          type="text"
          placeholder="Panchayat name"
          required={true}
          textarea={false}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <FormField
          label="House Name"
          name="house_name"
          id="house_name"
          type="text"
          placeholder="House name"
          required={true}
          textarea={false}
        />
        <FormField
          label="Ward"
          name="Ward"
          id="Ward"
          type="number"
          placeholder="Ward"
          required={true}
          textarea={false}
        />
      </div>
      <div className="mt-5">
        <FormField
          label="Place"
          name="Place"
          id="Place"
          type="text"
          placeholder="Place name"
          required={true}
          textarea={false}
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <Select
          onValueChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              gender: value,
            }));
          }}
        >
          <SelectTrigger className="mt-5 w-full">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Gender</SelectLabel>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Transgender">Transgender</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input type="hidden" name="gender" value={formState.gender} />
        <FormField
          label="Religion"
          name="Religion"
          id="Religion"
          type="text"
          placeholder="Religion"
          required={true}
          textarea={false}
        />
        <FormField
          label="Caste"
          name="Caste"
          id="Caste"
          type="text"
          placeholder="Caste"
          required={true}
          textarea={false}
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <Select
          onValueChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              poverty_line: value,
            }));
          }}
        >
          <SelectTrigger className="mt-5 w-full">
            <SelectValue placeholder="Poverty Line" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>PovertyLine</SelectLabel>
              <SelectItem value="APL">APL</SelectItem>
              <SelectItem value="BPL">BPL</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input
          type="hidden"
          name="poverty_line"
          value={formState.poverty_line}
        />
        <Select
          onValueChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              medium: value,
            }));
          }}
        >
          <SelectTrigger className="mt-5 w-full">
            <SelectValue placeholder="Medium" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Medium</SelectLabel>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Malayalam">Malayalam</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input type="hidden" name="medium" value={formState.medium} />
        <FormField
          label="Phone Number"
          name="phone_number"
          id="phone_number"
          type="tel"
          placeholder="Phone Number"
          required={true}
          textarea={false}
        />
      </div>
      <Separator className="bg-blue-500 mt-2" />
      <div>
        <h1 className="mt-5 font-bold text-xl">Family Background</h1>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <Select
            onValueChange={(value) => {
              setFormState((prev) => ({
                ...prev,
                house: value,
              }));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="House" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House</SelectLabel>
                <SelectItem value="Own House">Own House</SelectItem>
                <SelectItem value="Rented House">Rented House</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="house" value={formState.house} />
          <Select
            onValueChange={(value) => {
              setFormState((prev) => ({
                ...prev,
                house_type: value,
              }));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="House Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House Type</SelectLabel>
                <SelectItem value="Tile-Roofed House">
                  Tile-Roofed House
                </SelectItem>
                <SelectItem value="Concrete">Concrete</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="house_type" value={formState.house_type} />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <FormField
            label="Father's educational qualification"
            name="father_educational_qualification"
            id="father_educational_qualification"
            type="text"
            placeholder="Father's educational qualification"
            required={true}
            textarea={false}
          />
          <FormField
            label="Father's job"
            name="father_job"
            id="father_job"
            type="text"
            placeholder="Father's job"
            required={true}
            textarea={false}
          />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <FormField
            label="Mother's educational qualification"
            name="mother_educational_qualification"
            id="mother_educational_qualification"
            type="text"
            placeholder="Mothers's educational qualification"
            required={true}
            textarea={false}
          />
          <FormField
            label="Mother's job"
            name="mother_job"
            id="mother_job"
            type="text"
            placeholder="Mothers's job"
            required={true}
            textarea={false}
          />
        </div>
        <div className="mt-5">
          <FormField
            label="Other members in family"
            name="other_family_members"
            id="other_family_members"
            type="text"
            placeholder="Other members in family"
            required={true}
            textarea={true}
          />
        </div>
        <div className="mt-5">
          <FormField
            label="Annual income"
            name="annual_income"
            id="annual_income"
            type="number"
            placeholder="Annual income"
            required={true}
            textarea={false}
          />
        </div>
      </div>
      <Separator className="bg-blue-500 mt-2" />
      <div>
        <h1 className="mt-5 font-bold text-xl mb-5">Study Environment</h1>
        <div>
          <h2>Study Facilities</h2>
          <div className="mt-1 grid grid-cols-2 gap-4">
            <Select
              onValueChange={(value) => {
                setFormState((prev) => ({
                  ...prev,
                  studyroom: value,
                }));
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Study Room" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Study Room</SelectLabel>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <input type="hidden" name="studyroom" value={formState.studyroom} />
            <Select
              onValueChange={(value) => {
                setFormState((prev) => ({
                  ...prev,
                  studytable: value,
                }));
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Study Table" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Study Table</SelectLabel>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <input
              type="hidden"
              name="studytable"
              value={formState.studytable}
            />
          </div>
        </div>
        <div className="mt-5">
          <FormField
            label="Study time (hours)"
            name="study_time"
            id="study_time"
            type="number"
            placeholder="Study time"
            required={true}
            textarea={false}
          />
        </div>
        <div className="mt-5">
          <FormField
            label="Difficulties/Obstacles"
            name="difficulties_obstacles"
            id="difficulties_obstacles"
            type="text"
            placeholder="Difficulties/Obstacles"
            required={true}
            textarea={true}
          />
        </div>
        <div className="mt-5">
          <FormField
            label="Special Study Support"
            name="special_study_support"
            id="special_study_support"
            type="text"
            placeholder="Special Study Support"
            required={true}
            textarea={true}
          />
        </div>
        <div className="mt-5">
          <FormField
            label="Parental Involvement"
            name="parental_involvement"
            id="parental_involvement"
            type="text"
            placeholder="Parental Involvement"
            required={true}
            textarea={true}
          />
        </div>
        <div className="mt-5">
          <FormField
            label="Child Health Status"
            name="child_health_status"
            id="child_health_status"
            type="text"
            placeholder="Child Health Status"
            required={true}
            textarea={true}
          />
        </div>
        <div className="mt-5">
          <FormField
            label="Child social/mental/emotional status"
            name="child_sme_status"
            id="child_sme_status"
            type="text"
            placeholder="Child social/mental/emotional status"
            required={true}
            textarea={true}
          />
        </div>
      </div>
      <Button type="submit" className="w-full mt-5 hover:cursor-pointer">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Add Student
          </>
        )}
      </Button>
    </form>
  );
}
