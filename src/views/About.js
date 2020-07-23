/*
 * @Author: your name
 * @Date: 2020-07-22 10:35:33
 * @LastEditTime: 2020-07-23 13:45:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\About.js
 */ 
import React from 'react';
var pjson = require('../../package.json');


const About = () => {
  
 
  return (
    <div className="container mt-5">
        <h5><b>Capstone2020 PWA Starter-Kit</b></h5>
        <p>VERSION.BUILD: v.{`${pjson.version}`}</p>
        <b><p>developed by:</p></b>

        <ul>
            <li>Josh: josh.dueck@hotmail.com</li>
            <li>Murphy: liqi316@live.com</li>
            <li>Kelly: marchkellyj@gmail.com</li>
        </ul>

        <br/>

        <ul>
            <li>This project is open sourced for fair use, with attribution.</li>
            <li>This work carries no warranty or implied guarantee. </li>
            <li>All third party libraries are those of their rightful owners or licensees.</li>
            <li>BC Government theme  © 2020 by the Government of BC.</li>
        </ul>
        
        <br/>

        <h5><b>Platform:</b></h5><br/>
        <ul>
            <li>Developed using react.js, npm, on the <a href="https://BCDevExchange.org">https://BCDevExchange.org</a> DevOps Environment.</li>
            <li>Additional info:  <a href="https://github.com/BCGov/CITZ-IMB-Capstone2020">https://github.com/BCGov/CITZ-IMB-Capstone2020</a></li>
            <li>Documentation: <a href="https://github.com/BCGov/CITZ-IMB-Capstone2020/docs/">https://github.com/BCGov/CITZ-IMB-Capstone2020/docs/</a></li>
        </ul>

        <br/>

        <h5><b>Features include:</b></h5><br/>

        <li>PWA framework compliant</li>
        <li>UI Components </li>
        <li>User Installable on mobile devices</li>
        <li>User notification when new version available</li>
        <li>Requests user acceptance of session cookies</li>
        <li>Demonstrates a DataBC (BCNews) API</li>
        <li>Uses cookies as a simple data store for saved stories</li>
        <li>Sticky footer</li>


    </div>
  );
}
 
export default About;