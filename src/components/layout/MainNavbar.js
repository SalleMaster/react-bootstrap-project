import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const collapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      id='main-navbar'
      bg='dark'
      variant='dark'
      expand='sm'
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          Glozzom
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link
              className='px-3'
              as={NavLink}
              exact
              to='/'
              onClick={collapse}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className='px-3'
              as={NavLink}
              exact
              to='/about'
              onClick={collapse}
            >
              About
            </Nav.Link>
            <Nav.Link
              className='px-3'
              as={NavLink}
              exact
              to='/services'
              onClick={collapse}
            >
              Services
            </Nav.Link>
            <Nav.Link
              className='px-3'
              as={NavLink}
              exact
              to='/blog'
              onClick={collapse}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className='px-3'
              as={NavLink}
              exact
              to='/contact'
              onClick={collapse}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
