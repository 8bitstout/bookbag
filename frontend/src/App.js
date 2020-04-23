import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './Components/UserCard';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <UserCard />
      </Container>
    </div>
  );
}

export default App;
