import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export function createAuth(db: PostgresJsDatabase, schema: Record<string, any>) {
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
