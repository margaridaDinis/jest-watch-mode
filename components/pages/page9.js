const page9 = document.createElement('template');
page9.innerHTML = `
  <section>
    <p>
      <b>f</b> will only run the failing tests, this makes it easier to focus on the tests there are failing because it reduces the amount of output things, so you can find your debugging console.logs.<br>
       And it also reduces the time tests take to run.
    </p>
    <p>
      Press <b>f</b> again to get out of failing mode.
    </p>
    <h1>Options <span class="respectCase">f</span></h1>
  </section>
`;

export default page9;
