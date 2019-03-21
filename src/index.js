import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {
    BrowserRouter as Router
  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
document.body.style.background = 'rgb(243,248,251)'
document.body.style.fontFamily="'Work Sans', sans-serif"
document.body.style.color='rgb(39,81,139)'
document.body.style.padding='20px'