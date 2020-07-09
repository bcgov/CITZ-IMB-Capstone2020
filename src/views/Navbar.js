import React from 'react';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                <img id="settings-button" src={require("../includes/settings-button.svg")} alt="settings-button" title="settings button" />
            </Col>
          </Row>
      </Container>
    );
  }
  
  export default Navbar;