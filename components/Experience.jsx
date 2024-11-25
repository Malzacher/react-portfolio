import { useState } from "react";
import WorkExperience from "./WorkExperience";
import Portfolio from "./Portfolio";
import Awards from "./Awards";
import LiveWebBuilds from "./LiveWebBuilds";

export default function Experience() {
  const [currentSection, setCurrentSection] = useState("Work Experience");

  function renderContent() {
    switch (currentSection) {
      case "Work Experience":
        return <WorkExperience />;
      case "Portfolio":
        return <Portfolio />;
      case "Awards":
        return <Awards />;
      case "Live Web Builds":
        return <LiveWebBuilds />;
      default:
        return <WorkExperience />;
    }
  }

  return (
    <div className="experience-container">
      <div className="buttons">
        <button onClick={() => setCurrentSection("Work Experience")}>
          Work Experience
        </button>
        <button onClick={() => setCurrentSection("Portfolio")}>
          Portfolio
        </button>
        <button onClick={() => setCurrentSection("Awards")}>Awards</button>
        <button onClick={() => setCurrentSection("Live Web Builds")}>
          Live Web Builds
        </button>
      </div>
      <div className="content-section">{renderContent()}</div>
    </div>
  );
}
