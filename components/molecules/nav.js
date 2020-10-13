const nav = document.createElement('template');
nav.innerHTML = `
  <style>
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    li {
      padding: 0 0.5rem;
    }
    
    a {
     text-decoration: none;
     color: #FFF;
    }
    
    .active a {
      color: #F70;
    }
  </style>
  <nav>
    <ul class="pagination"></ul>
  </nav> 
`;

export default nav;
