import "./component.css";
import { Button } from "react-bootstrap";
import { useScrollPosition } from "./scroller";
import up from "./up.png";
import ow from "./overview.png";
import dt from "./data.png";
import md from "./method.png";
import rs from "./results.png";
import ab from "./about.png";
const Sidebar = () => {
  const scrollpos = useScrollPosition();
  return (
    <>
      <div className="Menu">
        <a href="#Top">
          <Button
            variant={scrollpos < window.innerHeight * 0.9 ? "inview" : "menu"}
          >
            <img src={up} alt="" />
            <div className="text">Top</div>
          </Button>
        </a>
        <a href="#Overview">
          <Button
            variant={
              scrollpos > window.innerHeight * 0.9
                ? scrollpos < window.innerHeight * 1.9
                  ? "inview"
                  : "menu"
                : "notreached"
            }
          >
            <img src={ow} alt="" />
            <div className="text">Overview</div>
          </Button>
        </a>
        <a href="#Data">
          <Button
            variant={
              scrollpos > window.innerHeight * 1.9
                ? scrollpos < window.innerHeight * 2.9
                  ? "inview"
                  : "menu"
                : "notreached"
            }
          >
            <img src={dt} alt="" />
            <div className="text">Data</div>
          </Button>
        </a>
        <a href="#Method">
          <Button
            variant={
              scrollpos > window.innerHeight * 2.9
                ? scrollpos < window.innerHeight * 3.9
                  ? "inview"
                  : "menu"
                : "notreached"
            }
          >
            <img src={md} alt="" />
            <div className="text">Methodology</div>
          </Button>
        </a>
        <a href="#Results">
          <Button
            variant={
              scrollpos > window.innerHeight * 3.9
                ? scrollpos < window.innerHeight * 4.9
                  ? "inview"
                  : "menu"
                : "notreached"
            }
          >
            <img src={rs} alt="" />
            <div className="text">Results</div>
          </Button>
        </a>
        <a href="#About">
          <Button
            variant={
              scrollpos > window.innerHeight * 4.9
                ? scrollpos < window.innerHeight * 5.9
                  ? "inview"
                  : "menu"
                : "notreached"
            }
          >
            <img src={ab} alt="" />
            <div className="text">About</div>
          </Button>
        </a>
      </div>
    </>
  );
};
export default Sidebar;
