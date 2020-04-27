import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Components/Feed';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} height="50" alt="logo"/>
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <header className="App-header">
        <p>
          Share what you use to learn!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bookbag.io
        </a>

      </header>
      <Container>
        <Feed />
      </Container>
    </div>
  );
}

export default App;
