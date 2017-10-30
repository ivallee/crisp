// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

require('babel-core/register');
require('babel-polyfill');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('react-root'));
