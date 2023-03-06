import React from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import mlogo from './mainlogo.png';
import './fonts/tiltwarp.ttf';
import motivate from './motivate.png';
import prob from './problem.png';
import sol from './solution.png';
import { useScrollPosition } from './scroller';
import log0 from './logo.png';
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
        <div className="bcontainer" id='section6'><h1> may tanong ba sa amin?</h1><p>
          di pa namn masasagot kasi wala rin kami alam diyan</p></div>
      </div>
  );
}

export default App;
