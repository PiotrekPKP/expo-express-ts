import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";

const db = drizzle(process.env.DATABASE_URL!, {
  schema,
  logger: process.env.NODE_ENV === "development",
});

export default db;
