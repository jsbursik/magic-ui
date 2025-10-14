import { createDatabase } from "@jsbursik/magic-ui";
import { env } from "$env/dynamic/private";

export const db = createDatabase(env.DATABASE_URL);
