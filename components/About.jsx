export default function About() {
  return (
    <>
      <div id="about-container">
        <p className="small-heading">01. About Me</p>
        <p id="description">
          I am a web developer with a passion for creating engaging websites.
          Fluent in HTML, CSS, and JavaScript, I bring technical expertise and
          creativity to every project. Currently studying at RMIT University, I
          am eager to expand my skills and make a difference in the web
          development industry. Thank you for considering my application.
        </p>

        <p className="small-heading">
          Some technologies I've been using recently:
        </p>

        <div className="tech">
          <div className="left-tech">
            <i className="fa-solid fa-caret-right"></i> PHP
            <i className="fa-solid fa-caret-right"></i> HTML-5
            <i className="fa-solid fa-caret-right"></i> CSS-3
          </div>
          <div className="right-tech">
            <i className="fa-solid fa-caret-right"></i> JavaScript
            <i className="fa-solid fa-caret-right"></i> Adobe XD
            <i className="fa-solid fa-caret-right"></i> Figma
          </div>
        </div>
      </div>

      <div id="overlay">
        <img id="photo" src="nick.png" alt="" />
      </div>
    </>
  );
}
