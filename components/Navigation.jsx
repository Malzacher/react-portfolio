export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar__name">Nick Malzacher</div>

      <div className="navbar__links">
        <a href="#about" className="navbar__link">
          [01 About]
        </a>
        <a href="#projects" className="navbar__link">
          [02 Projects]
        </a>
        <a href="#contact" className="navbar__link">
          [03 Contact]
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__button"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
