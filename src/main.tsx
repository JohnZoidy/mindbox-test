// @ts-check

import React from 'react';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './slices/index';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
