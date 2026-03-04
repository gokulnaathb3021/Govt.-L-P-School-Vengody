import { useClerk, UserButton } from "@clerk/nextjs";
import { Building2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function CustomUserButton() {
  const { closeUserProfile } = useClerk();
  const router = useRouter();
  return (
    <UserButton>
      <UserButton.UserProfilePage
        label="Admin"
        labelIcon={<Building2Icon />}
        url="admin"
      >
        <div className="flex flex-col">
          <h1 className="mb-4">Admin Panel</h1>
          <Button
            className="hover:cursor-pointer"
            onClick={() => {
              closeUserProfile();
              router.push("/admin");
            }}
          >
            Go to admin panel
          </Button>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
}
