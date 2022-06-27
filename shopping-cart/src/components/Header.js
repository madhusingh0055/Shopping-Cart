import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

import './Header.css'

const Header = () => {
  return (
    <>
  <Navbar variant="light" className='color-nav'>
    <Container>
    <Navbar.Brand href="#home">Shooping Cart</Navbar.Brand>
    <Nav className="auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
 
</>
  )
}

export default Header;