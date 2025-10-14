import { createAuth } from "$lib/auth/auth.js";
import { db } from "./db.js";
import * as schema from "$lib/db/schema.js";

export const auth = createAuth(db, schema);
