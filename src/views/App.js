/*
 * @Author: your name
 * @Date: 2020-06-23 14:59:48
 * @LastEditTime: 2020-07-07 17:15:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020 - xordpe-dev\src\views\App.js
 */ 
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
//import Navbar from './Navbar.js';
import FetchLatestNews from './FetchLatestNews.js';
import FavoriteNews from './FavoriteNews.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// add .Dark mode
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles.js";
import { lightTheme, darkTheme } from "./Themes.js";
import { UseDarkMode } from "./UseDarkMode.js";
import Toggler from "./Toggler.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [theme, themeToggler, mountedComponent] = UseDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  //The highlighted code is the only one added to UseDarkMode.js
  if(!mountedComponent) return <div/>
  
  return (
<ThemeProvider theme={themeMode}>
<>
<GlobalStyles/>
    <Router>

        <Header />
        {/* <Navbar /> */}
        <Toggler theme={theme} toggleTheme={themeToggler} />

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
    </>
    </ThemeProvider>
  );
}

export default App;

