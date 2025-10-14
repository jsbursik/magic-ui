import { createDatabase } from "$lib/db/db.js";
import { env } from "$env/dynamic/private";

export const db = createDatabase(env.DATABASE_URL!);
