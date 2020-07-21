/*
 * @Author: your name
 * @Date: 2020-07-21 11:03:40
 * @LastEditTime: 2020-07-21 11:21:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\store.js
 */ 
import { createStore } from 'redux';

import rootReducer from './reducers.js';

function configureStore() {
  return createStore(rootReducer, {
    serviceWorkerInitialized: false,
    serviceWorkerUpdated: false,
    serviceWorkerRegistration: null,
  });
}

export default configureStore;
