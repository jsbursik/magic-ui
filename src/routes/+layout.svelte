<script lang="ts">
  import Navbar from "$lib/components/navbar/Navbar.svelte";
  import NavbarBrand from "$lib/components/navbar/NavbarBrand.svelte";
  import NavbarContent from "$lib/components/navbar/NavbarContent.svelte";
  import NavLink from "$lib/components/navbar/NavLink.svelte";
  import NavbarMenu from "$lib/components/navbar/NavbarMenu.svelte";
  import NavDropdown from "$lib/components/navbar/NavbarDropdown.svelte";
  import UserMenu from "$lib/components/navbar/UserMenu.svelte";
  import ToastContainer from "$lib/components/toast/toast-container.svelte";
  import ModeToggle from "$lib/components/mode-toggle.svelte";
  import { IconWand } from "@tabler/icons-svelte";
  import { initAuthClient } from "$lib/auth/auth-client.js";
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
    <NavDropdown
      name="Layouts"
      menuItems={[
        { label: "Three Column", href: "/layouts/three-col" },
        { label: "hr", divider: true },
        { label: "Sidebar", href: "/layouts/side-bar" },
      ]}
    />
    {#if user}
      <NavLink href="/secret">Secret</NavLink>
    {/if}
  </NavbarContent>
  <NavbarMenu>
    {#if user}
      <UserMenu {user} items={menuItems} {authClient} />
    {:else}
      <a href="/login" class="btn btn-primary">Login</a>
      <a href="/signup" class="btn btn-success">Sign Up</a>
    {/if}
  </NavbarMenu>
</Navbar>

<div class="content-wrapper">
  {@render children()}
</div>

<ToastContainer />
<ModeToggle />
