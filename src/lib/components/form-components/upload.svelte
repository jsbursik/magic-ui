<script lang="ts">
  let { id, name = id, accept = undefined, onchange = undefined, multiple = false } = $props();
</script>

<label for={id} class="custom-file-upload">
  <span>Upload your file here</span>
</label>
<input type="file" {id} {name} {accept} {onchange} {multiple} />

<style>
  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    width: 100%;
    height: 6rem;

    place-content: center;
    text-align: center;

    border: 2px dashed var(--color-btn);
    border-radius: var(--radius);
    background-color: var(--color-input-bg);

    cursor: pointer;

    margin-bottom: unset;
  }
</style>
