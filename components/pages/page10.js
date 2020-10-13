const page10 = document.createElement('template');
page10.innerHTML = `
  <section>
    <img
      src="../../assets/images/p.png"
      alt="watch mode p"
    >
    <p>
      <b>p</b> allows to run tests whose file path match a given regex pattern.<br>
      You can combine it, for example, with <b>f</b> and only run the failing tests from those who are already filtered.<br>
      Press <b>c</b> to clear the filter.
    </p>
    <h1>Options <span class="respectCase">p</span></h1>
  </section>
`;

export default page10;
