/*
 * @Author: your name
 * @Date: 2020-06-23 14:59:48
 * @LastEditTime: 2020-07-15 16:38:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020 - xordpe-dev\src\views\App.js
 */ 
import React, {useState} from 'react';
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
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CookieConsent from "react-cookie-consent";

function App() {

  const [theme, themeToggler, mountedComponent] = UseDarkMode();

  const themeMode = theme === 'Dark' ? lightTheme : darkTheme;
  const [deleted, setDeleted] = useState(false);
  const [showText, setShowText] = useState(false);
  const [newsType, setNewsType] = useState("default");

  const updateFavorites = () => {
    setDeleted(!deleted);
  }

  const textSwitch = () => {
    setShowText(!showText);
  }

  const updateNewsType = (type) => {
    setNewsType(type);
  }

  //The highlighted code is the only one added to UseDarkMode.js
  if(!mountedComponent) return <div/>
  
  const handleDarkMode = () => {
    //this is the key function to switch the mode
    themeToggler();
  };

  return (
    <div>
<ThemeProvider theme={themeMode}>
<>
<GlobalStyles/>
    <Router>

        <Header updateFavorites={updateFavorites} onDarkMode={handleDarkMode} theme={theme} textSwitch={textSwitch}  updateNewsType={updateNewsType}/>
        {/* <Navbar /> */}

        <Switch>

          <Route path="/favorites">
            <FavoriteNews deleted={deleted} showText={showText}/>
          </Route>

          <Route path="/">
            <FetchLatestNews showText={showText} newsType={newsType}/>
          </Route>

        </Switch>

        <br/><br/>
        <Footer />
      
    </Router>
    </>
    </ThemeProvider>

    <CookieConsent
          onAccept={() => {
            alert("accepted!");
          }}
          //debug={true}
          enableDeclineButton
          declineButtonText="Decline (optional)"
          onDecline={() => {
            alert("Please enable cookies for better user experience");
          }}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>

    </div>
  );
}

export default App;

