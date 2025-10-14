import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "$lib/db/schema.js";

import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export function createAuth(db: PostgresJsDatabase) {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg",
      schema,
    }),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
  });
}
