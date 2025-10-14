import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "$lib/db/schema.js";

import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type { Sql } from "postgres";

export function createAuth(db: PostgresJsDatabase<Record<string, never>> & { $client: Sql<{}> }) {
  const { $client, ...cleanDb } = db as any;

  return betterAuth({
    database: drizzleAdapter(cleanDb, {
      provider: "pg",
      schema,
    }),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
  });
}
