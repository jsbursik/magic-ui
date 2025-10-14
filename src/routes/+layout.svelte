<script lang="ts">
  import Navbar from "$lib/components/nav/nav.svelte";
  import NavLink from "$lib/components/nav/nav-link.svelte";
  import ToastContainer from "$lib/components/toast/toast-container.svelte";
  import { initAuthClient } from "$lib/auth/auth-client.js";
  import { env } from "$env/dynamic/public";
  import "$lib/styles/globals.css";

  let { children, data } = $props();

  const authClient = initAuthClient(env.PUBLIC_BASE_URL || "http://localhost:5173");

  import { setContext } from "svelte";
  import ModeToggle from "$lib/components/mode-toggle.svelte";
  setContext("authClient", authClient);
</script>

<Navbar {authClient} user={data.user}>
  {#snippet publicLinks()}
    <NavLink href="/">Home</NavLink>
  {/snippet}
  {#snippet authLinks()}
    <NavLink href="/secret">Secret</NavLink>
  {/snippet}
</Navbar>
<ModeToggle />

<main>
  {@render children()}
</main>

<ToastContainer />
