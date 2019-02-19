import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Store Manager App';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();