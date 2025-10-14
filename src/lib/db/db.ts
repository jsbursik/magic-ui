// src/lib/db/db.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export function createDatabase(databaseUrl: string) {
  const client = postgres(databaseUrl);
  return drizzle(client);
}
