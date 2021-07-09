import React from 'react';

import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Auth } from '../useContext/useContext';
import './Header.css';

const Header = () => {
  const auth = Auth();
  const { users, logOut } = auth;

  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
          <Navbar.Brand
            href="/"
            style={{ fontWeight: '600', fontSize: '25px', color: '#f9a51a' }}
          >
            Travel Guru
          </Navbar.Brand>
          <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          // aria-controls="responsive-navbar-nav" 
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
              <a className="saurav-x mr-5 mt-2" href="/">
                News
              </a>
              <a className="saurav-x mr-5 mt-2" href="/">
                {' '}
                Destination{' '}
              </a>
              <a className="saurav-x mr-5 mt-2" href="/">
                Blog
              </a>
              <a className="saurav-x mr-5 mt-2" href="/">
                Contact
              </a>
              {users.email ? (
                <div className="login_btn mr-5">
                  <a onClick={logOut} className="saurav-xs mt-5" href="/">
                    LogOut
                  </a>
                </div>
              ) : (
                <div className="login_btn mr-5">
                  <a className="saurav-xs mt-5 " href="/login">
                    LogIn
                  </a>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
