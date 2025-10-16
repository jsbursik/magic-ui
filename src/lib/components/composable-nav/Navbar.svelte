<script lang="ts">
  let { children } = $props();
</script>

<nav class="navbar">
  <div class="navbar-content">
    {@render children()}
  </div>
</nav>

<style>
  .navbar {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .navbar-content {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 var(--space-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  @media (max-width: 768px) {
    .navbar-content {
      padding: 0 var(--space-md);
    }
  }
</style>
