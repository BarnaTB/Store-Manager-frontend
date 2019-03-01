import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/routes';

ReactDOM.render(
  <div>
    <Routes/>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
