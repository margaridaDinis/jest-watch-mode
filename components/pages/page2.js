const page2 = document.createElement('template');
page2.innerHTML = `
  <section>
    <p>In the root of your project, run one of this commands in your command line:</p>
    <pre class="snippet">
      <code>
  $  yarn add --dev jest
  // or
  $  npm install --save-dev jest
      </code>
    </pre>
    
    <p>Add the following line to your project's <em>package.json</em> scripts section:</p>
    <pre class="snippet">
    <p>package.json</p>
      <code>
  {
    "scripts": {
  +    "test": "jest"
    }
  }
      </code>
    </pre>
    <h1>How to <span>install?</span></h1>
  </section>
`;

export default page2;
