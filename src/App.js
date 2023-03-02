import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MediaQuery from 'react-responsive';
import mlogo from './mainlogo.png';
import './App.css';
import './fonts/tiltwarp.ttf';
import motivate from './motivate.png';
import prob from './problem.png';
import sol from './solution.png';
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
              <Nav.Link href="#section1">Top</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section2">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section3">Data</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section4">Methods</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section5">Results</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section6">Team</Nav.Link>
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
              <Nav.Link href="#section1">Top</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section2">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section3">Data</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section4">Methods</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section5">Results</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section6">Team</Nav.Link>
              </Nav.Item>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      </MediaQuery>
      </div>
      <div className='body'>
        <div className="bcontainer top1" id='section1'>
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
        <div className="bcontainer" id='section2'><h1>This is What it is all About</h1><p>so project namin ganito ganyan</p>
          <div className="cards"><div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={motivate} alt=''/><br/>
                  Motivation
              </div>
              <div class="flip-card-back">
                <p>Pasensya, di kami motivated, grades lang to (jk)</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={prob} alt=''/><br/>
                  Problem
              </div>
              <div class="flip-card-back">
                <p>
                  Here is our problem, maraming fake news ganun,
                  di ko sure bat naging problema pa namin eh
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={sol} alt=''/><br/>
                  Solution
              </div>
              <div class="flip-card-back">
                <p> Solusyon eh mag track lang ng mga tweets ganun, diba.
                  mas mabilis kasi kumuha ng eto lang tas ganun, hanap lang ng data,
                </p>
              </div>
            </div>
          </div>
          </div>
           
        </div>
        <div className="bcontainer" id='section3'>
          <h1>So Naging minero kami ng datus</h1>
          <div className='viewer'>
            <div class="section">
              <div className='left'>
                left
              </div>
              <div className='right'>right</div>
            </div>
            <div class="section">
              <div className='left'>
                TOPIC
              </div>
              <div className='right'>Diba undecidable pa haha di pa alam kung ano final topic</div>
            </div>
            <div class="section">
              <div className='left'>
                KEYWORDS
              </div>
              <div className='right'>maissue kasi, kaya maraming KEYWORDS</div>
            </div>
            <div class="section">
              <div className='left'>
                TOOLS
              </div>
              <div className='right'>mga martilyo ganun</div>
            </div>
          </div> 
        </div>
        <div className="bcontainer" id='section4'><h1>Ganito naman Ginawa namin para makuha yung datus</h1>
        <p> yep wala pa, wala pa kami nagagawa</p></div>
        <div className="bcontainer" id='section5'><h1> Ang resulta</h1><p> Syempre wala pa wala pa nga naggawa diba</p></div>
        <div className="bcontainer" id='section6'><h1> may tanong ba sa amin?</h1><p>
          di pa namn masasagot kasi wala rin kami alam diyan</p></div>
      </div>
    </div>
  );
}

export default App;
