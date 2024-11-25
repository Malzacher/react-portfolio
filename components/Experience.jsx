export default function Experience() {
  function manageContent(buttonClick) {
    console.log(buttonClick);
  }

  return (
    <div className="experience-container">
      <div className="buttons">
        <button onClick={() => manageContent("Work Experience")}>
          Work Experience
        </button>
        <button>Portfolio</button>
        <button>Awards</button>
        <button>Live Web Builds</button>
      </div>
      <div className="content-section"></div>
    </div>
  );
}
