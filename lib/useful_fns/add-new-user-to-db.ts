"use server";
import { db } from "@/db";
import { teachers } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function addNewUserToDb() {
  const user = await currentUser();
  const emailId = user!.emailAddresses[0].emailAddress;
  const u = await db.select().from(teachers).where(eq(teachers.email, emailId));
  if (u.length === 1 && u[0].status === "approved") return 1;
  if (u.length === 1) return;
  await db
    .insert(teachers)
    .values({ name: user!.fullName!, email: emailId, status: "pending" });
}
