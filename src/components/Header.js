import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  
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
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#internship">Internship</a>
        <a href="#contact">Contact</a>
        <a href={process.env.PUBLIC_URL + "/Himanshu_Raj_Resume.pdf"} download="Himanshu_Raj_Resume.pdf">
          <button>Download Resume</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
