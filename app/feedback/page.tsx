import SectionHeader from "@/components/common/section-header";
import addNewUserToDb from "@/lib/useful_fns/add-new-user-to-db";
import { CheckCheckIcon, PenIcon } from "lucide-react";

export default async function Feedback() {
  const res = await addNewUserToDb();
  if (res === 1) {
    return (
      <div className="py-20">
        <div className="wrapper">
          <SectionHeader
            title="Signup Feedback"
            description="Your account has been approved."
            icon={CheckCheckIcon}
          />
          <div className="status-badge-card mt-5 text-lg">
            Congratulations! Your account has been successfully verified and
            approved by the school admin. You can now access My Student and
            Explore sections.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Signup Feedback"
          description="You have signed up as a teacher, please wait for approval."
          icon={PenIcon}
        />
        <div className="status-badge-card mt-5 text-lg">
          Thank you for signing up as a teacher of GOVT L P SCHOOL VENGODY. Your
          account is under verification. Once it gets approved, you will get an
          approval mail, post which you can access My Student and Explore
          sections.
        </div>
      </div>
    </div>
  );
}
