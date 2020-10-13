const page14 = document.createElement('template');
page14.innerHTML = `
  <section>
    <p>
      Snapshot tests are very useful to make sure your UI does not change unexpectedly.<br>
      The first time the test runs a snapshot reference is created and thereafter it will compare new snapshots with that reference.
    </p>
    <p> 
      If the snapshots do not match, the test fails – either the change is unexpected, or the snapshot needs to be updated.
    </p>
    <h1>Options <span>Snapshots</span></h1>
  </section>
`;

export default page14;
