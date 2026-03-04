// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE URL is not set!");
// }

// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle({ client: sql });

import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL is not set!");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
