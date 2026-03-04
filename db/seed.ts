import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { teachers } from "./schema";
import { allTeachers } from "./data";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  console.log("Seeding database...");

  // Clearing existing data
  await db.delete(teachers);
  console.log("Cleared existing data.");

  // Inserting teachers from data.ts
  for (const teacher of allTeachers) {
    await db.insert(teachers).values({
      t_id: teacher.t_id,
      email: teacher.email,
      name: teacher.name,
      status: teacher.status,
    });
    console.log(`Added teacher ${teacher.name}`);
  }

  const insertedTeachers = await db.select().from(teachers);
  console.log(`Successfully seeded ${insertedTeachers.length}`);

  console.log("Products in database: ");
  insertedTeachers.forEach((t) =>
    console.log(
      `Name: ${t.name}, email: ${t.email}, t_id: ${t.t_id}, and status: ${t.status}.`,
    ),
  );
}

main()
  .catch((error) => {
    console.log("Error seeding the db: ", error);
  })
  .finally(() => {
    console.log("Seeding complete!");
  });
