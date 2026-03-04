import StatsCard from "@/components/admin/stats-card";
import TeacherCard from "@/components/admin/teacher-card";
import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import { db } from "@/db";
import { teachers } from "@/db/schema";
import { approvalCheck } from "@/lib/useful_fns/approval-check";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { ShieldIcon, Sparkles, UserX } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Admin() {
  const canAccess = await approvalCheck();
  // Can't access if not approved
  if (!canAccess)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="font-bold text-xl">No access</div>
      </div>
    );

  const { userId } = await auth();
  if (!userId) redirect("/");
  const client = await clerkClient();
  const user = await client.users.getUser(userId!);
  const metadata = user.publicMetadata;
  const isAdmin = metadata?.isAdmin ?? false;
  // Can access only if approved and is an admin
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="font-bold text-xl">You are not an admin!</div>
      </div>
    );
  }
  const adminEmail = user.emailAddresses[0].emailAddress;
  const ts = await db.select().from(teachers);
  const withoutAdmin = ts.filter((t) => t.email !== adminEmail);
  const aTs = ts.filter((t) => t.status === "approved");
  const pTs = ts.filter((t) => t.status === "pending");
  const rTs = ts.filter((t) => t.status === "rejected");

  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="School Admin"
          description="Review and Manage Teachers"
          icon={ShieldIcon}
        />
        <StatsCard
          approved={aTs.length}
          pending={pTs.length}
          rejected={rTs.length}
        />
        <section className="my-12">
          {pTs.length > 0 ? (
            <>
              <h1 className="text-xl font-bold">
                {pTs.length} teacher{pTs.length > 1 ? "s" : ""} awaiting
                approval
              </h1>
              {pTs.map((t) => (
                <TeacherCard
                  key={t.t_id}
                  name={t.name}
                  email={t.email}
                  status={t.status!}
                  history={false}
                />
              ))}{" "}
            </>
          ) : (
            <EmptyState
              icon={Sparkles}
              message="No teachers pending to be approved."
            />
          )}
        </section>
        <section className="my-12">
          {withoutAdmin.length > 0 ? (
            <>
              <h1 className="text-xl font-bold">
                All Teacher Signups (HISTORY)
              </h1>
              {withoutAdmin.map((t) => (
                <TeacherCard
                  key={t.t_id}
                  name={t.name}
                  email={t.email}
                  status={t.status!}
                  history={true}
                />
              ))}
            </>
          ) : (
            <EmptyState icon={UserX} message="No new signups." />
          )}
        </section>
      </div>
    </div>
  );
}
