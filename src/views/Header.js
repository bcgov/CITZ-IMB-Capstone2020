import React from 'react';
import '../css/Header.css';
import {
  Link
 } from "react-router-dom";

function Header() {
    return (
      // Contents of the header
      <div id="header">
          <div id="header-top">
            <Link to="/">
            <img id="bc-gov-logo" src={require("../includes/gov_bc_logo.svg")} alt="bc-gov-logo" title="B.C. News Site" />
            </Link>
          </div>
          <div id="header-bottom">
              <h2 id="bc-gov-news-text">BC Gov News</h2>
          </div>
      </div>
    );
  }
  
  export default Header;