import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function AddTermGradesForm({
  term,
  admissionNumber,
}: {
  term: string;
  admissionNumber: number;
}) {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-lg mb-3">{term}</h1>
      <Input hidden defaultValue={admissionNumber} name="admission_number" />
      <div className="space-y-2">
        <Label htmlFor="classroom_participation">Classroom Participation</Label>
        <Textarea
          name="classroom_participation"
          id="classroom_participation"
          placeholder="Classroom participation"
          required={true}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="strengths">Strengths</Label>
        <Textarea
          name="strengths"
          id="strengths"
          placeholder="Strengths"
          required={true}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="limitations">Limitations</Label>
        <Textarea
          name="limitations"
          id="limitations"
          placeholder="Limitations"
          required={true}
        />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject1">Malayalam</Label>
          <Input
            id="subject1"
            name="malayalam"
            placeholder="Malayalam"
            readOnly
            defaultValue="Malayalam"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="reading1">Reading</label>
          <select name="m_reading" id="reading1">
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="writing1">Writing</label>
          <select name="m_writing" id="writing1">
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject2">English</Label>
          <Input
            id="subject2"
            name="english"
            placeholder="English"
            readOnly
            defaultValue="English"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="reading2">Reading</label>
          <select name="eng_reading" id="reading2">
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="writing2">Writing</label>
          <select name="eng_writing" id="writing2">
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject3">Maths</Label>
          <Input
            id="subject3"
            name="maths"
            placeholder="Maths (Basic Skills)"
            readOnly
            defaultValue="Maths (Basic Skills)"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="math_skill">Skill level</label>
          <select name="math_skill" id="math_skill">
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject4">EVS</Label>
          <Input
            id="subject4"
            name="EVS"
            placeholder="EVS"
            readOnly
            defaultValue="EVS"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="evs_skill">Skill level</label>
          <select name="evs_skill" id="evs_skill">
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
      </div>
    </div>
  );
}
