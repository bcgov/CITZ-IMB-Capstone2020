/*
 * @Author: your name
 * @Date: 2020-07-15 12:01:20
 * @LastEditTime: 2020-07-16 15:32:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\Footer.js
 */ 
import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    // Contents of the footer
    <div className="footer">
      <div className="contain">
      <div className="col">
      <div />
        <a id="button" href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
      </div>
      <div className="col">
      <div />
        <a id="button" href="https://www2.gov.bc.ca/gov/content/home/copyright">Copyright</a>
      </div>
      <div className="col">
      <div />
        <a id="button" href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
      </div>
      <div className="col">
      <div />
        <a id="button" href="https://www2.gov.bc.ca/gov/content/home/accessible-government">Accessibility</a>
      </div>
      <div className="col">
      <div />
        <a id="button" href="https://github.com/bcgov/CITZ-IMB-Capstone2020/issues/new">Feedback</a>
      </div>
    </div>
    </div>
  );
}
  
  export default Footer;