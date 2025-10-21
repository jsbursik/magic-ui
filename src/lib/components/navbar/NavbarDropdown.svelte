<script lang="ts">
  import { page } from "$app/state";
  import "./Dropdown.css";

  type MenuItem = {
    label: string;
    href?: string;
    divider?: boolean;
    danger?: boolean;
  };

  let { menuItems, name }: { menuItems: MenuItem[]; name: string } = $props();

  let isOpen = $state(false);

  function handleClick() {
    isOpen = !isOpen;
  }

  function isActiveParent() {
    const currentParent = page.url.pathname.split("/")[1];
    return menuItems.some((item) => {
      if (!item.href) return false;
      const itemParent = item.href.split("/")[1];
      return currentParent === itemParent;
    });
  }
</script>

<span class="dropdown-wrapper">
  <button class="dropdown-link" class:active={isActiveParent()} onclick={() => (isOpen = !isOpen)}>{name}</button>
  {#if isOpen}
    <div class="dropdown-menu dropdown-left">
      {#each menuItems as item (item)}
        {#if item.divider}
          <hr />
        {:else}
          <a href={item.href} class="dropdown-item {item.danger ? 'danger' : ''}" class:active={page.url.pathname === item.href} onclick={handleClick}>
            {item.label}
          </a>
        {/if}
      {/each}
    </div>
  {/if}
</span>
