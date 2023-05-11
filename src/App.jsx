import { useRef } from "react";
import "./App.css";
import MediaQuery from "react-responsive";
import "./fonts/tiltwarp.ttf";

import Top from "./sections/Top";
import About from "./sections/About";
import Data from "./sections/Data";
import Methodology from "./sections/Methodology";
import Overview from "./sections/Overview";
import Results from "./sections/Results";
import Sidebar from "./components/Sidebar";
import useScrollSnap from "react-use-scroll-snap";
function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 1, delay: 1 });
  return (
    <MediaQuery orientation="landscape" min-width={720}>
      <div className="viewport" ref={scrollRef}>
        <Top />
        <Overview />
        <Data />
        <Methodology />
        <Results />
        <About />
        <Sidebar />
      </div>
    </MediaQuery>
  );
}

export default App;
