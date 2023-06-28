import { useRef } from "react";
import "./App2.css";
import MediaQuery from "react-responsive";
import "./fonts/tiltwarp.ttf";
import topimg from "./components/top.png";
import About from "./NewSection/About";
import Methodology from "./NewSection/Methodology";
import Overview from "./NewSection/Overview";
import Results from "./NewSection/Results";
import Data from "./NewSection/Data";
import logs from "../src/utils/logowithname.png"
function App() {
  return (
    // <MediaQuery orientation="landscape" min-width={720}>
    <>
    <div className="hed"><img src={logs} alt="mini logo"/></div>
    <div className="section">
      <div className="upper">
        <div className="box">
          <h1>Hi, We are Group 22</h1>
          <h5>
            <strong>Data Science Team</strong>

            <p>
              Reannu Instrella,
              <br />
              Roenz Timbol,
              <br />
              John David Vidad, WFW
              <br />
            </p>
          </h5>
        </div>
        <div className="box">
          <img src={topimg} alt="terrorists from designs.ai" />
        </div>
        <div className="box">
          <p>
            This is our Project titled,
            <b>The Anti Terror Bill mis/disinformation</b>. Considering how
            mis/disinformation is chronic in our daily lives, it is undeniable
            that it is also used on bills being read. We therefore ventured
            through twitter to find tweets related to Anti Terror Bill,
            especially during its passing, that contains Mis/Disinformation.
          </p>
        </div>
      </div>
      <div className="lower">
        <section>
          <Overview />
        </section>
        <section>
          <Data />
        </section>
        <section>
          <Methodology />
        </section>
        <section>
          <Results />
        </section>
        <section>
          <About />
        </section>
      </div>
    </div>
    </>
    // </MediaQuery>
  );
}

export default App;
