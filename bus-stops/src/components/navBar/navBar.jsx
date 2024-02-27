import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const NavBar = props => {

  const clearAll = () =>{
    props.clearStates()
  }

  return(
  <Navbar bg="primary" variant="dark" fixed="top">
    <Container>
    <Navbar.Brand>Bus App</Navbar.Brand>
    <Nav className="me-auto">
      <Button
          variant="primary"
          size="sm"
          onClick={props.clearStates}
      > Clear all fields
      </Button>
      <Button
          variant="primary"
          size="sm"
          onClick={props.handleNearestStop}
      > Nearest stop
      </Button>
    </Nav>
    </Container>
  </Navbar>
)}

export default NavBar;
