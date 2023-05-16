import "./component.css";
import { Button } from "react-bootstrap";
import up from "./up.png";
import ow from "./overview.png";
import dt from "./data.png";
import md from "./method.png";
import rs from "./results.png";
import ab from "./about.png";
const Sidebar = () => {
  return (
    <>
      <div className="Menu">
        <a href="#Top">
          <Button
            variant={"menu"}
          >
            <img src={up} alt="" />
            <div className="text">Top</div>
          </Button>
        </a>
        <a href="#Overview">
          <Button
            variant={
              "menu"
            }
          >
            <img src={ow} alt="" />
            <div className="text">Overview</div>
          </Button>
        </a>
        <a href="#Data">
          <Button
            variant={
              "menu" 
            }
          >
            <img src={dt} alt="" />
            <div className="text">Data</div>
          </Button>
        </a>
        <a href="#Method">
          <Button
            variant={
              "menu"
            }
          >
            <img src={md} alt="" />
            <div className="text">Methodology</div>
          </Button>
        </a>
        <a href="#Results">
          <Button
            variant={
              "menu"
            }
          >
            <img src={rs} alt="" />
            <div className="text">Results</div>
          </Button>
        </a>
        <a href="#About">
          <Button
            variant={
              "menu"
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
