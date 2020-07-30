/*
 * @Author: your name
 * @Date: 2020-07-21 11:11:05
 * @LastEditTime: 2020-07-29 19:42:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\Alert.js
 */ 

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '../css/Alert.css';

//Alert box when user see serviceworker notification
const Alert = ({ text, buttonText, type, onClick }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!onClick) {
      const timer = setTimeout(() => {
        dispatch({ type });
      }, 6000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="alert">
      {text} {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
};

export default Alert;
