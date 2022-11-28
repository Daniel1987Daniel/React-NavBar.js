import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main.js';
import Nav from './components/Nav.js';
//import Main from './components/Main.js';
import Style from './style.css';

const root = ReactDOM.createRoot(document.getElementById('root')
); 

root.render(
  <div>
    <Nav/>
    <Main/>
  </div>
);