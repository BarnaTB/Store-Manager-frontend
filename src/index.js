import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/Signup/signup';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Routes from './routes/routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();