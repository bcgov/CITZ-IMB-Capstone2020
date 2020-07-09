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
import FetchLatestNews from './FetchLatestNews.js';
import FavoriteNews from './FavoriteNews.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

        <Header />
        <Navbar />

        <Switch>

          <Route path="/favorites">
            <FavoriteNews />
          </Route>

          <Route path="/">
            <FetchLatestNews />
          </Route>

        </Switch>

        <br/><br/>
        <Footer />
      
    </Router>
  );
}

export default App;
