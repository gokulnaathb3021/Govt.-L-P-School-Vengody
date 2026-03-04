"use server";
import { db } from "@/db";
import { teachers } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function approvalCheck() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const user = await currentUser();
  const emailId = user!.emailAddresses[0].emailAddress;
  const result = await db
    .select()
    .from(teachers)
    .where(and(eq(teachers.status, "approved"), eq(teachers.email, emailId)));
  return result.length === 1;
}
