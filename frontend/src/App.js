import React, { useEffect, useState } from 'react';
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
  Row,
  Col
} from 'reactstrap';

function App() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/feed')
      .then(res => res.json())
      .then(feedData => {
        console.log(feedData);
        setFeedData(feedData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      </header>
      <Container>
        <Row>
          <Col>
            <h1>Latest Questions</h1>
            <Feed data={feedData}></Feed>
          </Col>
          <Col>
            <h1>Latest Endeavours</h1>
            <Feed data={feedData}></Feed>
           </Col>
          <Col>
            <h1>Latest Book Bags</h1>
            <Feed data={feedData}></Feed>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
