import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './variables.css';
import './styles/index.css';
import store from './store/store';
import './store/save-reduxState-to-localStorage';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
