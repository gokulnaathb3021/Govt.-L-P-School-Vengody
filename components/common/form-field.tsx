import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  textarea: boolean;
  type: string;
}

export default function FormField({
  label,
  name,
  id,
  placeholder,
  required,
  textarea,
  type,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      )}
    </div>
  );
}
