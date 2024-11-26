import { useState, useEffect } from 'react';

export default function Navigation() {
  const fonts = [
    'redaction-10',
    'redaction-20',
    'redaction-35',
    'redaction-50',
    'redaction-70',
    'redaction-100',
  ];

  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 300);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [fonts.length]);

  return (
    <nav className="navbar">
      <div className={`navbar__name ${fonts[currentFontIndex]}`}>Nick Malzacher</div>

      <div className="navbar__links">
        <a href="#about" className="navbar__link">
          [01 About]
        </a>
        <a href="#buttons" className="navbar__link">
          [02 Explore Work]
        </a>

        <a
          href="/Nicholas Malzacher CV.pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__button"
        >
          [03 Resume]
        </a>
      </div>
    </nav>
  );
}
