import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AddECAGradesForm({
  admissionNumber,
}: {
  admissionNumber: number;
}) {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-lg mb-3">Extracurricular Activities</h1>
      <Input hidden defaultValue={admissionNumber} name="admission_number" />
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="readings">Readings</Label>
          <Input
            id="readings"
            placeholder="Readings"
            name="readings"
            readOnly
            defaultValue="Readings"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="read_grade">Grade</label>
          <select id="read_grade" name="read_grade">
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
          <Label htmlFor="writings">Writings</Label>
          <Input
            id="writings"
            placeholder="Writings"
            name="writings"
            readOnly
            defaultValue="Writings"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="write_grade">Grade</label>
          <select id="write_grade" name="write_grade">
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
          <Label htmlFor="art">Art</Label>
          <Input
            id="art"
            placeholder="Art"
            name="art"
            readOnly
            defaultValue="Art"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="art_grade">Grade</label>
          <select id="art_grade" name="art_grade">
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
          <Label htmlFor="sports">Sports</Label>
          <Input
            id="sports"
            placeholder="Sports"
            name="sports"
            readOnly
            defaultValue="Sports"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="sports_grade">Grade</label>
          <select id="sports_grade" name="sports_grade">
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
          <Label htmlFor="construction">Construction</Label>
          <Input
            id="construction"
            placeholder="Construction"
            name="construction"
            readOnly
            defaultValue="Construction"
          />
        </div>
        <div className="w-full border flex items-center justify-between px-3">
          <label htmlFor="ctrn_grade">Grade</label>
          <select id="ctrn_grade" name="ctrn_grade">
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
