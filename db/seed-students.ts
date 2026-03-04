import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { students } from "./schema";
import { seedStudents } from "./data";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  await db.delete(students);
  console.log("Cleared existing data.");
  console.log("Seeding database...");
  await db.insert(students).values(seedStudents);

  const insertedStudents = await db.select().from(students);
  console.log(`Successfully seeded ${insertedStudents.length}`);
}

main()
  .catch((error) => {
    console.log("Error seeding the db: ", error);
  })
  .finally(() => {
    console.log("Seeding complete!");
  });
