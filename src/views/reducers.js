/*
 * @Author: your name
 * @Date: 2020-07-21 11:08:35
 * @LastEditTime: 2020-07-29 20:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\reducers.js
 */ 

import { SW_INIT, SW_UPDATE } from './types.js';

//return different state (the serviceworker first time initialized? or there is a update on serviceworker) based on different case
function rootReducer(state = {}, action) {
  switch (action.type) {
    case SW_INIT:
      return {
        ...state,
        serviceWorkerInitialized: !state.serviceWorkerInitialized,
      };
    case SW_UPDATE:
      return {
        ...state,
        serviceWorkerUpdated: !state.serviceWorkerUpdated,
        serviceWorkerRegistration: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;