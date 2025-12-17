<script lang="ts">
  import { IconHome } from "@tabler/icons-svelte";
</script>

<aside class="side-bar">
  <IconHome />
</aside>
<main class="full-width">
  <div class="card center-text">
    <h2>Test Page with <code>.side-bar</code> layout</h2>
    <p>
      To achieve this, you have one <code>aside</code> and one <code>main</code> element. Use the <code>side-bar</code> class on the <code>aside</code> element
      to make the side bar.
      <br /><br />
      If you would like the side bar to appear on the right instead, use the <code>right</code> class on the <code>aside</code> element.
      <br /><br />
      The side-bar has a width of <code>fit-content</code> so it will automatically adjust to whatever size you wish.
      <br /><br />
      This page is also using the <code>full-width</code> class on the <code>main</code> element to use the full width of the screen to allow for more space.
    </p>
  </div>
</main>
