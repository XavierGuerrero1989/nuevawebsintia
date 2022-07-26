import React from 'react'
import './_Navbar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../../assets/img/logo192.png';


function Navigation() {
    return (
      <Navbar bg="light" expand="md" className='navigation'>
        <Container>
          <Navbar.Brand href="#home"> <img src= {LogoImg} alt="Imagen de logo" className='navigation__logo justify-content-start'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='navigation__item'> <strong>Aviso de Carga</strong> </Nav.Link>
              <Nav.Link href="#link" className='navigation__item'> <strong>Estado de Bultos</strong> </Nav.Link>
              <Nav.Link href="#link" className='navigation__item' disabled>Notificacion de Autoria</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navigation;