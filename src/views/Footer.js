/*
 * @Author: your name
 * @Date: 2020-07-15 12:01:20
 * @LastEditTime: 2020-07-23 10:51:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\Footer.js
 */ 
import React from 'react';
import '../css/Footer.css';
import {
  Link
 } from "react-router-dom";

function Footer() {
  return (
    // Contents of the footer
    <div className="footer">
      <Link to="/">
      <img id="home-button" src={require("../includes/home-white.svg")} alt="home-button" title="home button" height="35" width="35" />
      </Link>
    </div>
  );
}
  
  export default Footer;