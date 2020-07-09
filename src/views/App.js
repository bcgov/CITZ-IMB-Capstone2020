/*
 * @Author: your name
 * @Date: 2020-06-23 14:59:48
 * @LastEditTime: 2020-06-30 14:03:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020 - xordpe-dev\src\views\App.js
 */ 
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
//import FetchLatestNews from './FetchLatestNews.js';
import FavoriteNews from './FavoriteNews.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <FavoriteNews />
      <br/><br/>
      <Footer />
     
    </div>
  );
}

export default App;
