"use server";

import { db } from "@/db";
import { teachers } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteClerkUserByEmail(email: string) {
  try {
    const client = await clerkClient();
    const users = await client.users.getUserList({
      emailAddress: [email],
    });
    const clerkUserId = users.data[0].id;
    await client.users.deleteUser(clerkUserId);
    return {
      success: true,
      message: "User deleted from Clerk!",
      errors: {},
    };
  } catch (error) {
    return {
      success: false,
      message: "Couldn't delete the user from Clerk, please try again.",
      errors: { error },
    };
  }
}

export async function approveTeacher(email: string) {
  try {
    await db
      .update(teachers)
      .set({ status: "approved" })
      .where(eq(teachers.email, email));
    revalidatePath("/admin");
    return {
      success: true,
      message: "Approved successfully!",
      errors: {},
    };
  } catch (error) {
    return {
      success: false,
      message: "Couldn't approve, some error occoured. Please try again.",
      errors: { error },
    };
  }
}

export async function rejectTeacher(email: string) {
  try {
    await deleteClerkUserByEmail(email);
    await db
      .update(teachers)
      .set({ status: "rejected" })
      .where(eq(teachers.email, email));
    revalidatePath("/admin");
    return { success: true, message: "Rejected successfully!", errors: {} };
  } catch (error) {
    return {
      success: false,
      message: "Couldn't reject, some error occoured. Please try again.",
      errors: { error },
    };
  }
}

export async function deleteTeacher(email: string) {
  try {
    await db.delete(teachers).where(eq(teachers.email, email));
    revalidatePath("/admin");
    return {
      success: true,
      message: "Successfully deleted the teacher.",
      errors: {},
    };
  } catch (error) {
    return {
      success: false,
      message: "Couldn't delete teacher, please try again.",
      errors: { error },
    };
  }
}
