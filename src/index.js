/*
 * @Author: your name
 * @Date: 2020-07-05 10:01:47
 * @LastEditTime: 2020-07-29 20:13:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\index.js
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './css/index.css';
import App from './views/App.js';
import * as serviceWorker from './serviceWorker';
import configureStore from './views/store.js';
import { SW_INIT, SW_UPDATE } from './views/types.js';

//store 3 return values from configureStore() from store.js to controw the serviceworker
const store = configureStore();

//The <Provider> makes the Redux store available to any nested components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => store.dispatch({ type: SW_INIT }),
  onUpdate: registration =>
  store.dispatch({ type: SW_UPDATE, payload: registration }),
});