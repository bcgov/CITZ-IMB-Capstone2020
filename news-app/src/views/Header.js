import React from 'react';
import '../css/Header.css';

function Header() {
    return (
      // Contents of the header
      <div id="header">
          <div id="header-top">
            <a href="http://localhost:3000/">
              <img id="bc-gov-logo" src={require("../includes/gov_bc_logo.svg")} alt="bc-gov-logo" title="B.C. News Site" />
            </a>
          </div>
          <div id="header-bottom">
              <h2 id="bc-gov-news-text">BC Gov News</h2>
          </div>
      </div>
    );
  }
  
  export default Header;