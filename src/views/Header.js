import React from 'react';
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Link
 } from "react-router-dom";

function Header({updateFavorites, updateNewsType, onDarkMode, theme, textSwitch}) {

  
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

  function filterNews(type) {
    updateNewsType(type);
  }

    return (
      // Contents of the header
      <Container fluid id="header">
        <Row id="header-top">
          
          <Link to="/">
            <img id="bc-gov-logo" src={require("../includes/gov_bc_logo.svg")} alt="bc-gov-logo" title="B.C. News Site" />
          </Link>
          &emsp;
          <div id="separator"></div>
          &emsp;

            <h3 id="bc-gov-news-text">Capstone 2020</h3>
            {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

            <div className="bc-gov-news-filter">
              <p className="bc-gov-news-filter-text2">Filter by :</p>&ensp;
              <div className="news-filter-divider"></div>&ensp;
              <p className="bc-gov-news-filter-text" onClick={() => {filterNews("default")}}> Default</p>&ensp;
              <div className="news-filter-divider"></div>&ensp;
              <p className="bc-gov-news-filter-text" onClick={() => {filterNews("releases")}}> Releases</p>&ensp;
              <div className="news-filter-divider"></div>&ensp;
              <p className="bc-gov-news-filter-text" onClick={() => {filterNews("stories")}}> Stories</p>&ensp;
              <div className="news-filter-divider"></div>&ensp;
              <p className="bc-gov-news-filter-text" onClick={() => {filterNews("factsheets")}}> Factsheets</p>&ensp;
              <div className="news-filter-divider"></div>&ensp;
              <p className="bc-gov-news-filter-text" onClick={() => {filterNews("updates")}}> Updates</p>
            </div> */}
            <Col></Col>
            <Col xs={4} sm={1}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img id="menu-dropdown" src={require("../includes/menu-dropdown-white.svg")} alt="menu-dropdown" title="menu dropdown" height="40" width="40" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                <Dropdown.Item as={Link} to="/favorites">Favorites</Dropdown.Item>
                <Dropdown.Item onClick={ () => textSwitch()}>Show Text</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item id="filter-by">Filter by:</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("releases")}}>Releases</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("stories")}}>Stories</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("factsheets")}}>Factsheets</Dropdown.Item>
                <Dropdown.Item  onClick={() => {filterNews("updates")}}>Updates</Dropdown.Item>
              </Dropdown.Menu>
                        
            </Dropdown>
            </Col>
          <Col xs={4} sm={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img id="settings-button" src={require("../includes/settings-button-white.svg")} alt="settings-button" title="settings button" height="40" width="40" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={ () => onDarkMode()}>{`${theme}`} Mode</Dropdown.Item>
                <Dropdown.Item onClick={ () => deleteAllCookies()}>Delete Cookies</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-5">Updates</Dropdown.Item>
                <Dropdown.Item href="#/action-6">About</Dropdown.Item>
              </Dropdown.Menu>
                        
            </Dropdown>
            </Col>
        </Row>
        
        {/* Header bottom if we want one
        <Row>
          <Col id="header-bottom">
          <h2>BC Gov News</h2>
          </Col>
        </Row> */}
      </Container>
     
    );
  }
  
  export default Header;