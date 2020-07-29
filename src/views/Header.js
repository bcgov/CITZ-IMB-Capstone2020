import React, { useEffect, useState } from "react";
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Link
 } from "react-router-dom";

function Header({updateFavorites, updateNewsType, onDarkMode, theme, textSwitch, showText}) {

  const [showHideText, setShowHideText] = useState('Show');

  // used to swap dropdown text when Show/Hide text is clicked.
  useEffect(() => {
    const changeText = async () => {
      showText === false ? setShowHideText('Show') : setShowHideText('Hide');
    };
    changeText();
  }, [showText]);

  // deletes all cookies from this application from storage
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    updateFavorites();
  }

  // Updates newsType state variable in App.js
  function filterNews(type) {
    updateNewsType(type);
  }

    return (
      // Contents of the header
      <Container fluid id="header">
        <Row id="header-top">
          
          {/* BC Gov Logo */}
          <Link to="/">
            <img id="bc-gov-logo" src={require("../includes/gov_bc_logo.svg")} alt="bc-gov-logo" title="B.C. News Site" />
          </Link>
          &emsp;
          <div id="separator"></div>
          &emsp;

            <h3 id="bc-gov-news-text">Capstone 2020</h3>

            {/* ##### Empty Col tag to shift dropdown to the right ##### */}
            <Col></Col>

            {/* Main dropdown. Commented code are icons that could potentially go in the dropdown */}
            <Col xs={4} sm={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img id="menu-dropdown" src={require("../includes/menu-dropdown-white.svg")} alt="menu-dropdown" title="menu dropdown" height="35" width="35" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                <Dropdown.Item as={Link} to="/favorites">Favorites</Dropdown.Item>
                <Dropdown.Item onClick={ () => textSwitch()}>{showHideText} Text</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item id="bold-text">
                  <img id="filter-icon" src={require("../includes/filter-icon.svg")} alt="filter-icon" title="filter icon" height="24" width="24" />
                  Filter by:</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("releases")}}>Releases</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("stories")}}>Stories</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("factsheets")}}>Factsheets</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("updates")}}>Updates</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item id="bold-text">
                <img id="settings-icon" src={require("../includes/settings-outline.svg")} alt="settings-icon" title="settings icon" height="24" width="24" />
                  Settings:</Dropdown.Item>
                <Dropdown.Item onClick={ () => onDarkMode()}>{`${theme}`} Mode</Dropdown.Item>
                <Dropdown.Item onClick={ () => deleteAllCookies()}>End Session</Dropdown.Item>
                <Dropdown.Item as={Link} to="/about">About</Dropdown.Item>
              </Dropdown.Menu>
                        
            </Dropdown>
            </Col>
        </Row>
      </Container>
     
    );
  }
  
  export default Header;