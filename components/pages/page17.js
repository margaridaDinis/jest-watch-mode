const page17 = document.createElement('template');
page17.innerHTML = `
  <style>
    h1 { margin-top: 1rem; }
  </style>
  <section>
    <p>
      A useful option added is <b>i</b>, to interactively update snapshots.
    </p>
    <p>
      This is especially useful when several snapshots are failing because it will go through each snapshot one by one and displaying its changes.
    </p>
    <p>
      For each failing snapshot you can then <b>u</b>pdate, <b>s</b>kip, <b>q</b>uit the interactive mode or rerun (<b>enter</b>).<br />
      In the end it will display a summary of the changes. You can then <b>r</b>estart or <b>q</b>uit if satisfied with the result.
    </p>
    <img
      src="../../assets/images/snapshot-summary.png"
      alt="watch mode options"
    >
    <h1>Options <span class="respectCase">i</span></h1>
  </section>
`;

export default page17;
