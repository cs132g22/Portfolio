import Sources from "../components/Sources";
import Tabs from "../components/tabs";
import Vidad from "../utils/vidad.png";
import Instrella from "../utils/instrella.jpeg";
import Timbol from "../utils/placeholder.jpg";
import abt from "../components/about.png";
import "../components/component.css";
import { motion } from "framer-motion";
import { PersonalModal } from "../components/Modal";
import React, { useState } from "react";
import "./section.css";
import logo from "../utils/logowhite.png";
function About() {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <center>
        <motion.button
          whileHover={{ scale: [null, 1.3, 1.15] }}
          transition={{ duration: 0.15 }}
          onClick={() => {
            setOpenModal(true);
          }}
          className="but"
        >
          <img src={abt} alt="about" />
          <br />
          About
        </motion.button>
      </center>
      <PersonalModal open={openModal} close={handleClose}>
        <div>
          <div className="title">
            <h2>About</h2>
          </div>
          <Tabs>
            <div label="Instrella">
              <div className="information">
                <h2>REANNU INSTRELLA</h2>
                <h5>CS 132 WFU, Data Analyst</h5>
                <p>
                  A graduating Computer Science student aspiring to be a
                  well-rounded software and systems engineer knowledgeable in
                  different fields and roles interacting in the tech industry.
                  <br />
                  Some of my Works are as listed
                  <br />
                  <div className="Works">
                    <div className="work">
                      <h6>PORTFOLIO WEBSITE</h6>
                      <p>
                        A home page with details about me showcasing my
                        portfolio as an aspiring software developer.
                      </p>
                      <a
                        href="https://reannuinstrella.me"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>

                    <div className="work">
                      <h6>BoredApp</h6>
                      <p>
                        Simple CRUD app developed using the MERN stack with user
                        accounts and user authentication. Working as a To-Do
                        List app and planned to utilize the BoredAPI.
                      </p>
                      <a
                        href="https://reannuinstrella.me/BoredApp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>

                    <div className="work">
                      <h6>RPSuper</h6>
                      <p>
                        An Online Multiplayer Rock Paper Scissors game built
                        with React and Firebase. It has working user
                        authentication, queueing and matchmaking system.
                      </p>
                      <a
                        href="https://reannuinstrella.me/rps-firebase"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                    {/*add more div work if needed, up to 3 only */}
                  </div>
                </p>
              </div>
              <div className="apic">
                <img src={Instrella} alt="" />
                <br />
                <a href="mailto:reannumon123@gmail.com">Contact me</a>
              </div>
            </div>

            <div label="Timbol">
              <div className="information">
                <h2>JOSH TIMBOL</h2>
                <h5>CS 132 WFU, Lead Data Analyst</h5>
                <p>
                  enter any info here{" "}
                  <a
                    href="https://flutter.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    flutter
                  </a>{" "}
                  and react.js.
                  <br />
                  Some of my Works are as listed
                  <br />
                  <div className="Works">
                    <div className="work">
                      <h6>WORK TITLE</h6>
                      <p>short description</p>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </div>
                    {/*add more div work if needed, up to 3 only */}
                  </div>
                </p>
              </div>
              <div className="apic">
                <img src={Timbol} alt="" />
                <br />
                <a href="mailto:rttimbol@up.edu.ph">Contact me</a>
              </div>
            </div>

            <div label="Vidad" className="tabular">
              <div className="information">
                <h2>JOHN DAVID A. VIDAD</h2>
                <h5>CS 132 WFW, Portfolio Manager</h5>
                <p>
                  I am a currently a fourth year Computer Science undergraduate
                  student. I enjoy programming, biking, volleyball, and
                  basketball. I am currently studying{" "}
                  <a
                    href="https://flutter.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    flutter
                  </a>{" "}
                  and react.js.
                  <br />
                  Some of my Works are as listed
                  <br />
                  <div className="Works">
                    <div className="work">
                      <h6>LEDS CRUD App</h6>
                      <p>
                        CRUD Application using VB.Net for a printing shop in
                        Ilocos Norte Called LEDS Ilocos.
                      </p>
                      <a
                        href="https://github.com/anagramiccoder/LEDS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>

                    <div className="work">
                      <h6>VOTER&apos;S PORTAL</h6>
                      <p>
                        A Web App for Voters to check their respective precinct
                        and schedule when they want to vote. This was a Group
                        Project
                      </p>
                      <a
                        href="https://github.com/cs192-VotersPortal/voter-portal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                    <div className="work">
                      <h6>STACK CALCULATOR</h6>
                      <p>
                        A simple Calculator that can do stack calculation. (This
                        was made during my 9th grade)
                      </p>
                      <a
                        href="https://github.com/cs192-VotersPortal/voter-portal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </p>
              </div>
              <div className="apic">
                <img src={Vidad} alt="" />
                <br />
                <a href="mailto:jdvidad31@gmail.com">Contact me</a>
              </div>
            </div>

            <div label="The Team">
              <div className="apic">
                <img src={logo} alt="logo" />
              </div>
              <div className="cen">
                {" "}
                We are the team ClearSight. This team was created not just with
                the purpose of finishing CS 132, but also for the search of the
                truth in even the smallest fake news of today. We aim to
                illuminate the truth and enhance the facts which in turn debunks
                the fakes in today's social media.
              </div>
            </div>
          </Tabs>
        </div>
      </PersonalModal>
    </>
  );
}
export default About;
