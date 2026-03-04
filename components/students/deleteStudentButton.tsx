import { Loader2Icon, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export default function DeleteStudentButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full mt-5 hover:cursor-pointer bg-destructive"
    >
      {pending ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <>
          <Trash className="size-4" />
          Delete student permanently
        </>
      )}
    </Button>
  );
}
