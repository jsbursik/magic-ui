import { createAuth } from "@jsbursik/magic-ui";
import { db } from "./db.js";

export const auth = createAuth(db);
