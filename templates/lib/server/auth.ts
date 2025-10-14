import { createAuth } from "@jsbursik/magic-ui/server";
import { db } from "./db.js";

export const auth = createAuth(db);
