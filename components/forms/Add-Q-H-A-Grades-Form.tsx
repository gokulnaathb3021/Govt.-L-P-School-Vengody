import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AddQHAGradesForm({
  exam,
  admissionNumber,
}: {
  exam: string;
  admissionNumber: number;
}) {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-lg mb-3">{`${exam} Assessment`}</h1>
      <Input hidden defaultValue={admissionNumber} name="admission_number" />
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="malayalam">Malayalam</Label>
          <Input
            id="malayalam"
            placeholder="Malayalam"
            name="malayalam"
            readOnly
            defaultValue="Malayalam"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="m_grade">Grade</label>
          <select id="m_grade" name="m_grade">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="english">English</Label>
          <Input
            id="english"
            placeholder="English"
            name="english"
            readOnly
            defaultValue="English"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="eng_grade">Grade</label>
          <select id="eng_grade" name="eng_grade">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="maths">Maths</Label>
          <Input
            id="maths"
            placeholder="Maths"
            name="maths"
            readOnly
            defaultValue="Maths"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="math_grade">Grade</label>
          <select id="math_grade" name="math_grade">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="evs">EVS</Label>
          <Input
            id="evs"
            placeholder="EVS"
            name="evs"
            readOnly
            defaultValue="EVS"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="evs_grade">Grade</label>
          <select id="evs_grade" name="evs_grade">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
      </div>
    </div>
  );
}
