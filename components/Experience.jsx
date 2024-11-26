import { useState } from "react";
import Portfolio from "./Experience/Portfolio";
import Awards from "./Experience/Awards";
import LiveWebBuilds from "./Experience/LiveWebBuilds";

export default function Experience() {
  const [currentSection, setCurrentSection] = useState("Portfolio");

  function renderContent() {
    switch (currentSection) {
      case "Portfolio":
        return <Portfolio />;
      case "Awards":
        return <Awards />;
      case "Live Web Builds":
        return <LiveWebBuilds />;
      default:
        return <Portfolio />;
    }
  }

  return (
    <div id="experience-container" className="experience-container">
      <div id='buttons' className="buttons">
        <a
          className="navbar__button"
          onClick={() => setCurrentSection("Portfolio")}
        >
          Portfolio
        </a>
        <a
          className="navbar__button"
          onClick={() => setCurrentSection("Awards")}
        >
          Awards
        </a>
        <a
          className="navbar__button"
          onClick={() => setCurrentSection("Live Web Builds")}
        >
          Live Web Builds
        </a>
      </div>
      <div className="content-section">{renderContent()}</div>
    </div>
  );
}
