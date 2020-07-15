import React from 'react';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import {
 Link
} from "react-router-dom";

function Navbar() {

    return (
      // Contents of the Navbar
      <Container fluid id="navbar">
          <Row>
            <Col xs={2}></Col>
            <Col xs={4} padding-left="0px"><Link to="/">Home</Link></Col>
            <Col xs={4}><Link to="/favorites">Favorites</Link></Col>
            <Col xs={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img id="settings-button" src={require("../includes/settings-button.svg")} alt="settings-button" title="settings button" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Delete Cookies</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Show Favorites</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Show Text</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Night Mode</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Updates</Dropdown.Item>
                <Dropdown.Item href="#/action-6">About</Dropdown.Item>
              </Dropdown.Menu>
                        
            </Dropdown>
            </Col>
          </Row>
      </Container>
    );
  }
  
  export default Navbar;