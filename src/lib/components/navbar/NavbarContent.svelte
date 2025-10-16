<script>
  let { children } = $props();
</script>

<div class="navbar-content-area">
  {@render children()}
</div>

<style>
  .navbar-content-area {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    flex: 1;
  }

  @media (max-width: 768px) {
    .navbar-content-area {
      display: none;
    }
  }
</style>
