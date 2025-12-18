<script lang="ts">
  let { id, name = id, children } = $props();
</script>

<div style="display: inline-flex; line-height: 1.1rem">
  <label class="cb-container">
    <input type="checkbox" {id} {name} checked />
    <span class="checkmark"></span>
  </label>
  <label for={id}>{@render children()}</label>
</div>

<style>
  /* Customize the label (the cb-container) */
  .cb-container {
    display: block;
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .cb-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.1rem;
    width: 1.175rem;
    border-radius: 0.4rem;
    background-color: var(--color-btn);
  }

  /* On mouse-over, add a grey background color */
  .cb-container:hover input ~ .checkmark {
    background-color: var(--color-btn-hover);
  }

  /* When the checkbox is checked, add a blue background */
  .cb-container input:checked ~ .checkmark {
    background-color: var(--color-primary);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "✓";
    position: absolute;
    display: none;
    color: white;
  }

  /* Show the checkmark when checked */
  .cb-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .cb-container .checkmark:after {
    left: 4px;
    top: 0px;
  }
</style>
