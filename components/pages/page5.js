const page5 = document.createElement('template');
page5.innerHTML = `
  <section>
    <p>Enter the watch mode by running:</p>
    <pre class="snippet">
      <code>
  $  yarn test --watch
      </code>
    </pre>
    <p>Jest will check which files were changed since the last git commit and look for related tests.</p>
    <p>With <b>--watch</b> Jest will keep listening for changes and rerun if a file is updated.</p>
    <h1>Enter <span>watch mode</span></h1>
  </section>
`;

export default page5;
