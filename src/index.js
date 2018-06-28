import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
  <App />
  </HashRouter>,
  document.getElementById('root')
);
