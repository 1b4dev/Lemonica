import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { List, ShoppingCartSimple } from 'phosphor-react';
import Reservation from './reservation';


import logo from '../../lemonica@0.1x.png';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    return (
      <>
        <Navbar
          bg={isScrolled ? 'light' : 'transparent'}
          fixed='top'
          expand="sm"
          className={`mb-3 justify-content-center ${isScrolled ? 'bg-gradient shadow-sm' : ''}`}          style={{
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <Container>
            <Navbar.Toggle aria-controls="navbar-sm" className="border-0 px-0">
              <List size={32} />
            </Navbar.Toggle>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="auto"
                height="45"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Offcanvas id="navbar-sm" aria-labelledby="navbarLabel-sm" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="navbarLabel-sm">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Menu</Nav.Link>
                  <Nav.Link href="#action3">Order</Nav.Link>
                  <Nav.Link href="#action4">Contact</Nav.Link>
                </Nav>
                <Button onClick={handleShow} variant="warning" className="rounded-pill me-3">
                  Reservation
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <DropdownButton variant="outline-secondary" className="rounded-4" title={<ShoppingCartSimple size={24} />}>
              <Dropdown.Item className="py-5"disabled>Your cart is empty</Dropdown.Item>
            </DropdownButton>
          </Container>
        </Navbar>
        <Reservation show={showModal} handleClose={handleClose} handleShow={handleShow} />
      </>
    );
  }
  
  export default Header;