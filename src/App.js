import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MediaQuery from 'react-responsive';
import mlogo from './mainlogo.png';
import './App.css';
import './fonts/tiltwarp.ttf';
import motivate from './motivate.png';
function App() {
  return (
    <div className="App">
      <title>PH Twitter Misinformation-Disinformation</title>
      <div className="Nvbr">
      <MediaQuery minWidth={720}>  
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
      <MediaQuery maxWidth={719}>
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
        <div className="bcontainer top1">
          <div className='left'>
                <img src={mlogo} className="leftimg" alt="vectorjuice on Freepik"/>
          </div>
          <div className='right'>
            <h1>Hi. We are Group 22</h1>
          <p>This is our Project titled,<b>PH Twitter Misinformation-Disinformation</b>. SPecifically di ko pa alam ilalagay 
          pero yeah alam namn na natin if ever. Feel ko </p>
         <span>
          <h5>
              <strong>Data Science Team</strong></h5>
            <p>
              Reannu Instrella,<br/>
              Roenz Timbol,<br/>
              John David Vidad, WFW<br/>
              </p>
              </span>
          
          </div>
        </div>
        <div className="bcontainer"><h1>This is What it is all About</h1><p>so project namin ganito ganyan</p>
          <div className="cards"><div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={motivate} alt=''/><br/>
                  Motivation
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={motivate} alt=''/><br/>
                  Motivation
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={motivate} alt=''/><br/>
                  Motivation
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          </div>
           
        </div>
        <div className="bcontainer">3</div>
        <div className="bcontainer">4</div>
        <div className="bcontainer">5</div>
        <div className="bcontainer">6</div>
      </div>
    </div>
  );
}

export default App;
