import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="neon-text" style={{ fontSize: '1.5rem' }}>
        Himanshu Raj
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#internship">Internship</a>
        <a href="#contact">Contact</a>
        <a href="/Himanshu_Raj_Resume.pdf" download="Himanshu_Raj_Resume.pdf">
          <button>Download CV</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;