import "../css/MacbookPortfolio.css";
import MenuBar from "./Macbook/MenuBar";
import Dock from "./Macbook/Dock";
import ProjectCard from "./Macbook/ProjectCard";

function MacbookPortfolio() {
  const keyboard = Array.from({ length: 60 });

  return (
    <div className="macbook-scene">
      <div className="macbook">
        <div className="screen">
          <MenuBar />
          <ProjectCard />
          <Dock />
        </div>
        <div className="keyboard-deck">
          {keyboard.map((_, index) => (
            <div key={index} className="key"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MacbookPortfolio;
