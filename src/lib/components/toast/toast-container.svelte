<script lang="ts">
  import Toast from "./toast.svelte";
  import { toastStore } from "$lib/stores/toast.js";
</script>

<div class="toast-container">
  {#each $toastStore as toastItem (toastItem.id)}
    <Toast toast={toastItem} onDismiss={() => toastStore.dismiss(toastItem.id)} />
  {/each}
</div>

<style>
  .toast-container {
    position: fixed;
    bottom: var(--space-xl);
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    pointer-events: none;
  }

  .toast-container > :global(*) {
    pointer-events: all;
  }
</style>
