<script lang="ts">
  let { children, href = "/" } = $props();
</script>

<a {href} class="navbar-brand">
  {@render children()}
</a>

<style>
  .navbar-brand {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--color-text);
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    transition: var(--transition);
  }

  .navbar-brand:hover {
    opacity: 0.8;
  }
</style>
