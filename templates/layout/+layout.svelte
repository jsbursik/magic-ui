<script lang="ts">
  import { Navbar } from "@jsbursik/magic-ui";
  import { NavbarBrand } from "@jsbursik/magic-ui";
  import { NavbarContent } from "@jsbursik/magic-ui";
  import { NavLink } from "@jsbursik/magic-ui";
  import { NavbarMenu } from "@jsbursik/magic-ui";
  import { UserMenu } from "@jsbursik/magic-ui";
  import { ToastContainer } from "@jsbursik/magic-ui";
  import { ModeToggle } from "@jsbursik/magic-ui";
  import { IconWand } from "@tabler/icons-svelte";
  import { initAuthClient } from "@jsbursik/magic-ui";
  import { goto } from "$app/navigation";
  import { setContext } from "svelte";
  import { env } from "$env/dynamic/public";
  import "$lib/styles/globals.css";

  let { children, data } = $props();
  let user = $derived(data.user);

  const menuItems = [
    { label: "Settings", onClick: () => goto("/settings") },
    { label: "Admin Panel", onClick: () => goto("/admin") },
  ];

  const authClient = initAuthClient(env.PUBLIC_BASE_URL || "http://localhost:5173");

  setContext("authClient", authClient);
</script>

<Navbar>
  <NavbarBrand href="/">
    <IconWand size={32} style="color: var(--color-primary)" />
    <span>Magic UI</span>
  </NavbarBrand>
  <NavbarContent>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/css-demo">CSS Demo</NavLink>
    {#if user}
      <NavLink href="/secret">Secret</NavLink>
    {/if}
  </NavbarContent>
  <NavbarMenu>
    {#if user}
      <UserMenu {user} items={menuItems} {authClient} />
    {:else}
      <a href="/login" class="btn">Login</a>
      <a href="/signup" class="btn btn-success">Sign Up</a>
    {/if}
  </NavbarMenu>
</Navbar>

<main>
  {@render children()}
</main>

<ToastContainer />
<ModeToggle />
