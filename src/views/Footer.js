/*
 * @Author: your name
 * @Date: 2020-07-15 12:01:20
 * @LastEditTime: 2020-07-16 17:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\Footer.js
 */ 
import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    // Contents of the footer
    <div class="footer">
      <div class="contain">
      <div class="col">
      <div />
        <a id="button" target="_blank" rel="noopener noreferrer" href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
      </div>
      <div class="col">
      <div />
        <a id="button" target="_blank" rel="noopener noreferrer" href="https://www2.gov.bc.ca/gov/content/home/copyright">Copyright</a>
      </div>
      <div class="col">
      <div />
        <a id="button" target="_blank" rel="noopener noreferrer" href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
      </div>
      <div class="col">
      <div />
        <a id="button" target="_blank" rel="noopener noreferrer" href="https://www2.gov.bc.ca/gov/content/home/accessible-government">Accessibility</a>
      </div>
      <div class="col">
      <div />
        <a id="button" target="_blank" rel="noopener noreferrer" href="https://github.com/bcgov/CITZ-IMB-Capstone2020/issues/new">Feedback</a>
      </div>
    </div>
    </div>
  );
}
  
  export default Footer;