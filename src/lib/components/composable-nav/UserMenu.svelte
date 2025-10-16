<script lang="ts">
  import { IconUser } from "@tabler/icons-svelte";
  import type { Snippet } from "svelte";

  interface User {
    name?: string;
    avatar?: string;
  }

  interface MenuItem {
    label: string;
    icon?: Snippet;
    onClick?: () => void;
    danger?: boolean;
    divider?: boolean;
  }

  interface Props {
    user?: User;
    items?: MenuItem[];
    onLogout?: () => void;
  }

  let { user, items = [], onLogout }: Props = $props();
  let isOpen = $state(false);

  function handleItemClick(item: MenuItem) {
    if (item.onClick) {
      item.onClick();
    }
    isOpen = false;
  }
</script>

<div class="user-menu-wrapper">
  <!-- User Info & Avatar -->
  <button onclick={() => (isOpen = !isOpen)} class="user-trigger">
    {#if user?.name}
      <span class="user-name">{user.name}</span>
    {/if}
    <div class="avatar-circle">
      {#if user?.avatar}
        <img src={user.avatar} alt={user.name} class="avatar-img" />
      {:else}
        <IconUser size={20} class="avatar-icon" />
      {/if}
    </div>
  </button>

  <!-- Dropdown Menu -->
  {#if isOpen}
    <div class="dropdown-menu">
      {#each items as item, i}
        {#if item.divider}
          <hr />
        {:else}
          <button class="dropdown-item {item.danger ? 'danger' : ''}" onclick={() => handleItemClick(item)}>
            {#if item.icon}
              {@render item.icon()}
            {/if}
            {item.label}
          </button>
        {/if}
      {/each}

      {#if onLogout}
        <hr />
        <button class="dropdown-item danger" onclick={onLogout}> Logout </button>
      {/if}
    </div>
  {/if}
</div>

<style>
  .user-menu-wrapper {
    position: relative;
  }

  .user-trigger {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm);
    border-radius: 9999px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--transition);
  }

  .user-trigger:hover {
    background: var(--color-bg);
    transform: none;
    box-shadow: none;
  }

  .user-name {
    font-size: 0.875rem;
    color: var(--color-text);
  }

  .avatar-circle {
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :global(.avatar-icon) {
    color: white;
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    top: calc(100% + var(--space-sm));
    width: 12rem;
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--color-border);
    padding: var(--space-xs);
    z-index: 1000;
  }

  .dropdown-item {
    width: 100%;
    text-align: left;
    padding: var(--space-sm) var(--space-md);
    font-size: 0.875rem;
    color: var(--color-text);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: var(--transition);
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .dropdown-item:hover {
    background: var(--color-bg);
    transform: none;
    box-shadow: none;
  }

  .dropdown-item.danger {
    color: var(--color-danger);
  }

  .dropdown-menu hr {
    margin: var(--space-xs) 0;
    border: none;
    border-top: 1px solid var(--color-border);
  }

  @media (max-width: 768px) {
    .user-name {
      display: none;
    }
  }
</style>
