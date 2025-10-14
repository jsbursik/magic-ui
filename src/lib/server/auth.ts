// src/lib/server/auth.ts
import { createAuth } from "$lib/auth/auth.js";
import { db } from "./db.js";

export const auth = createAuth(db);
