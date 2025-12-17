<aside>
  <div class="card">
    <h3 class="center-text">First <code>aside</code></h3>
    <p class="indent">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit quibusdam ad deserunt repellendus suscipit fuga tempora iure et cumque placeat cum
      sequi sapiente, reiciendis dolores a sed eius harum. Fuga similique provident repudiandae quos consequuntur. Velit, debitis corrupti?
    </p>
  </div>
</aside>
<main>
  <div class="card">
    <h2 class="center-text">Default layout with two <code>aside</code> elements.</h2>
    <p class="indent">
      Magic-UI uses <code>grid</code> for the column layouts on each page. This page has a <code>main</code> element which this content is in, and two
      <code>aside</code>
      elements on either side of it. The <code>aside</code> elements are not required, and if you would like to just use one, it will place it on the left. If
      you would like the <code>aside</code> on the right - give it the <code>right</code> class.
    </p>
    <p>The grid is layed out like so:</p>
    <pre><code
        >grid-template-colums: auto 45ch 90ch 45ch auto;
grid-template-areas: ". aside-left main aside-right .";</code
      ></pre>
  </div>
</main>
<aside>
  <div class="card">
    <h3 class="center-text">Second <code>aside</code></h3>
    <p class="indent">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit quibusdam ad deserunt repellendus suscipit fuga tempora iure et cumque placeat cum
      sequi sapiente, reiciendis dolores a sed eius harum. Fuga similique provident repudiandae quos consequuntur. Velit, debitis corrupti?
    </p>
  </div>
</aside>
