const initialPage = document.createElement('template');
initialPage.innerHTML = `
  <style>
    h1, p {
      margin: 0;
    }
  </style>
  <section>
    <p>JEST</p>
    <h1>Watch<span>Mode</span></h1>
  </section>
`;

export default initialPage;
