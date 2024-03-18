import './style.css';

document.querySelector('#app').innerHTML = `
  <section class='wiki'>
   <div class='container'>
    <img src='./wikilogotype.svg' alt='logo' />
    <h3>Search Wikipedia</h3>
    <form class='form'>
     <input type='text' class='form-input'/>
     <button type='submit' class='submit-btn'>search</button>
    </form>
   </div>
   <div class='results'>
    <div class='articles'>
     <a href='#' target='_blank'>
      <h4>title</h4>
      <p>Some text</p>
     </a>
    </div>
   </div>
  </section>
`;
