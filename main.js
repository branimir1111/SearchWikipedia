import './style.css';
import { app } from './app.js';

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
   <div  class='results'>
    
   </div>
  </section>
`;
const container = document.querySelector('#articles');
const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const results = document.querySelector('.results');

app(container, form, input, results);
