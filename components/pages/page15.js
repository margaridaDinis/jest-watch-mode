const page15 = document.createElement('template');
page15.innerHTML = `
  <style>
    h1 { margin-top: 1rem; }
  </style>
  <section>
    <img
      src="../../assets/images/snapshot-options.png"
      alt="watch mode options"
    >
    <p>
      When a snapshot fails while in watch mode, Jest will add new options.<br />
      Press <b>w</b> to see them.
    </p>
    <h1>Options <span>snapshots</span></h1>
  </section>
`;

export default page15;
