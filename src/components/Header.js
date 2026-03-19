import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={process.env.PUBLIC_URL + '/hello.png'}
          alt="Himanshu Raj"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #39ff14', 
            boxShadow: '0 0 8px #39ff14',
          }}
        />
        <div className="neon-text" style={{ fontSize: '1.5rem' }}>
          Himanshu Raj
        </div>
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#internship" onClick={closeMenu}>Internship</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href={process.env.PUBLIC_URL + "/Himanshu_Raj_Resume.pdf"} download="Himanshu_Raj_Resume.pdf">
          <button onClick={closeMenu}>Download Resume</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
