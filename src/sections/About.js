import React from 'react';
import Sources from '../components/Sources';
import Tabs from '../components/tabs';
import Vidad from '../utils/vidad.png';
import Timbol from '../utils/placeholder.jpg';
import Instrella from '../utils/placeholder.jpg';
import '../components/component.css';
function About(){ 
    return(<div className='black section'id='about'>
    <div className='title'><h2>About</h2>
    </div>
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
          <div className='apic'><img src={Instrella} alt=''/><br/><a href="mailto:#">Contact me</a>
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
          <div className='apic'><img src={Timbol} alt=''/><br/><a href="mailto:jdvidad31@gmail.com">Contact me</a>
          </div>
        </div>
        <div label="Vidad" className='tabular'>
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
          <div className='apic'><img src={Vidad} alt=''/><br/><a href="mailto:jdvidad31@gmail.com">Contact me</a>
          </div>
        </div>
      </Tabs>
    <Sources/>
  </div>);
}
export default About;