import React from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import mlogo from './utils/LOGS.png';
import './fonts/tiltwarp.ttf';
import motivate from './motivate.png';
import prob from './problem.png';
import sol from './solution.png';
import { useScrollPosition } from './scroller';
import log0 from './logo.png';
import Tabs from './components/tabs';
import Vidad from './utils/vidad.png';
import Instrella from './utils/placeholder.jpg';
import Timbol from './utils/placeholder.jpg';
function App() {
  const scrollPos=useScrollPosition();
  console.log(window.innerHeight);
  return (
    <div className="App">
        <MediaQuery minWidth={720}>
        <div className="top1" id='section1'>
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
        <div className="navigation">
          <div className={scrollPos>(9*window.innerHeight/10)? "show":"no-show"}><img src={log0} alt=''/></div>
          <div className='area'>
              <a href="#section1">Top</a>
              <a href="#section2">Overview</a>
              <a href="#section3">Data</a>
              <a href="#section4">Methodology</a>
              <a href="#section5">Results</a>
              <a href="#section6">About</a>
            </div>
            <div className={scrollPos>(9*window.innerHeight/10)? "show":"no-show"}></div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={719}>
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
        </MediaQuery>
        <div className="bcontainer" id='section2'><h1>This is What it is all About</h1><p>so project namin ganito ganyan</p>
          <div className="cards"><div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={motivate} alt=''/><br/>
                  Motivation
              </div>
              <div className="flip-card-back">
                <p>Pasensya, di kami motivated, grades lang to (jk)</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={prob} alt=''/><br/>
                  Problem
              </div>
              <div className="flip-card-back">
                <p>
                  Here is our problem, maraming fake news ganun,
                  di ko sure bat naging problema pa namin eh
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={sol} alt=''/><br/>
                  Solution
              </div>
              <div className="flip-card-back">
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
            <div className="section">
              <div className='left'>
                left
              </div>
              <div className='right'>right</div>
            </div>
            <div className="section">
              <div className='left'>
                TOPIC
              </div>
              <div className='right'>Diba undecidable pa haha di pa alam kung ano final topic</div>
            </div>
            <div className="section">
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
        <div className="bcontainer" id='section6'><h1> Meet the Team</h1>
        <div className="folder">
          <div className='selection'></div>
          <Tabs>
        <div label="Instrella">
        <div className='information'>
            <h1>REANNU INSTRELLA</h1>
            <h5>CS 132, Tagavalidate ng data</h5>
            <p>
              enter any info here <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">flutter</a> and react.js.
              <br/>Some of my Works are as listed<br/>
              <div className='Works'>
                <div className='work'><h6>WORK TITLE</h6>
                  <p>short description</p>
                  <a href='#' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                {/*add more div work if needed, up to 3 only */}
              </div>
              
            </p>
          </div>
          <div className='pic'><img src={Instrella} alt=''/><br/><a href="mailto:#">Contact me</a>
          </div>
        </div>
        <div label="Timbol">
        <div className='information'>
            <h1>JOSH TIMBOL</h1>
            <h5>CS 132, Tagahanap ng tweet</h5>
            <p>
              enter any info here <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">flutter</a> and react.js.
              <br/>Some of my Works are as listed<br/>
              <div className='Works'>
                <div className='work'><h6>WORK TITLE</h6>
                  <p>short description</p>
                  <a href='#' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                {/*add more div work if needed, up to 3 only */}
              </div>
              
            </p>
          </div>
          <div className='pic'><img src={Timbol} alt=''/><br/><a href="mailto:jdvidad31@gmail.com">Contact me</a>
          </div>
        </div>
        <div label="Vidad">
          <div className='information'>
            <h1>JOHN DAVID A. VIDAD</h1>
            <h5>CS 132 WFW, Portfolio Manager</h5>
            <p>
              I am a currently a fourth year Computer Science undergraduate student.
              I enjoy programming, biking, volleyball, and basketball. I am currently
              studying <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">flutter</a> and react.js.
              <br/>Some of my Works are as listed<br/>
              <div className='Works'>
                <div className='work'><h6>LEDS CRUD App</h6>
                  <p>CRUD Application using VB.Net for a printing shop in Ilocos Norte Called
                  LEDS Ilocos.</p>
                  <a href='https://github.com/anagramiccoder/LEDS' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                
                <div className='work'><h6>VOTER'S PORTAL</h6>
                  <p>A Web App for Voters to check their respective precinct and schedule
                      when they want to vote. This was a Group Project</p>
                  <a href='https://github.com/cs192-VotersPortal/voter-portal' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className='work'><h6>STACK CALCULATOR</h6>
                  <p>A simple Calculator that can do stack calculation. (This was made during my 9th grade)</p>
                  <a href='https://github.com/cs192-VotersPortal/voter-portal' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
              
              
            </p>
          </div>
          <div className='pic'><img src={Vidad} alt=''/><br/><a href="mailto:jdvidad31@gmail.com">Contact me</a>
          </div>
        </div>
      </Tabs>
        </div>
        </div>
      </div>
  );
}

export default App;
