import { FaCss3Alt } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiGit,
  SiGithub,
} from "react-icons/si";
import "../../css/Dock.css";

function Dock() {
  return (
    <div className="dock">
      <div className="dock-block">
        <SiReact
          className="dock-icon"
          style={{ backgroundColor: "#61DAFB", color: "#0d2b36" }}
        />
        <SiJavascript
          className="dock-icon"
          style={{ backgroundColor: "#F7DF1E", color: "#1a1a1a" }}
        />
        <SiTypescript
          className="dock-icon"
          style={{ backgroundColor: "#3178C6", color: "white" }}
        />
        <FaCss3Alt
          className="dock-icon"
          style={{ backgroundColor: "#1572B6", color: "white" }}
        />
        <SiHtml5
          className="dock-icon"
          style={{ backgroundColor: "#E34F26", color: "white" }}
        />
        <SiGit
          className="dock-icon"
          style={{ backgroundColor: "#F05032", color: "white" }}
        />
        <SiGithub
          className="dock-icon"
          style={{ backgroundColor: "#181717", color: "white" }}
        />
      </div>
    </div>
  );
}

export default Dock;
