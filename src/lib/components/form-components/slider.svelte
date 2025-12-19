<script lang="ts">
  let { id, children, checked = false } = $props();
</script>

<div class="switch-wrapper">
  <label class="switch">
    <input type="checkbox" name={id} {checked} />
    <span class="slider"></span>
  </label>
  <label for={id} class="switch-label">{@render children()}</label>
</div>

<style>
  .switch-wrapper {
    display: inline-flex;
    gap: 0.5rem;
    height: 2rem;
    vertical-align: middle;
  }

  .switch-label {
    transform: translateY(2px);
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 2rem;
    height: 1rem;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    height: 1rem;
    background-color: var(--color-text-muted);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 1rem;
    &:before {
      border-radius: 50%;
    }
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 0.77rem;
    width: 0.8rem;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--color-primary);
  }

  input:focus + .slider {
    box-shadow: 0 0 4px var(--color-primary);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1rem);
    -ms-transform: translateX(1rem);
    transform: translateX(1rem);
  }
</style>
