import { createAuthClient } from "better-auth/svelte";

export function initAuthClient(baseURL: string) {
  return createAuthClient({ baseURL });
}
