import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MediaQuery from 'react-responsive';
import './App.css';
function App() {
  return (
    <div className="App">
      <title>PH Twitter Misinformation-Disinformation</title>
      <div className="Nvbr">
      <MediaQuery minWidth={480}>  
        <Navbar class="Main">
          <Container>
            <Navbar.Brand href="#home">Group 22</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="/Overview">Top</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Data</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Methods</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Results</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Team</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </MediaQuery>
      <MediaQuery maxWidth={479}>
      <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        Group 22
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Item>
                <Nav.Link href="/Overview">Top</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Data</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Methods</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Results</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Data">Team</Nav.Link>
              </Nav.Item>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      </MediaQuery>
      </div>
      <div className='body'>
        <div className="bcontainer">1</div>
        <div className="bcontainer">2</div>
        <div className="bcontainer">3</div>
        <div className="bcontainer">4</div>
        <div className="bcontainer">5</div>
        <div className="bcontainer">6</div>
      </div>
    </div>
  );
}

export default App;
