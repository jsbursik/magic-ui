<script>
  let { children } = $props();
</script>

<div class="navbar-menu">
  {@render children()}
</div>

<style>
  .navbar-menu {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
</style>
