import React from 'react';
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Link
 } from "react-router-dom";

function Header({updateFavorites, onDarkMode, theme}) {

  
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

    return (
      // Contents of the header
      <Container fluid id="header">
        <Row id="header-top">
          <Col>
          <Link to="/">
            <img id="bc-gov-logo" src={require("../includes/gov_bc_logo.svg")} alt="bc-gov-logo" title="B.C. News Site" />
            </Link>
          </Col>
          <Col xs={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img id="settings-button" src={require("../includes/settings-button.svg")} alt="settings-button" title="settings button" height="40" width="40" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={ () => deleteAllCookies()}>Delete Cookies</Dropdown.Item>
                <Dropdown.Item href="favorites">Show Favorites</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Show Text</Dropdown.Item>
                <Dropdown.Item onClick={ () => onDarkMode()}>{`${theme}`} Mode</Dropdown.Item>
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