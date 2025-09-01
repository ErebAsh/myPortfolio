import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <h1 className="neon-text" style={{ fontSize: '3rem' }}>Himanshu Raj</h1>

      <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: '#39ff14' }}>
        Aspiring AI & Data Analytics Engineer | Passionate about turning data into intelligence
      </p>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '1.5rem', color: '#8b949e' }}>
        <a href="mailto:hr7207096@gmail.com" style={{ color: '#8b949e' }}><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/himanshurajjnu" target="_blank" rel="noopener noreferrer" style={{ color: '#8b949e' }}><FaLinkedin /></a>
        <a href="https://github.com/ErebAsh" target="_blank" rel="noopener noreferrer" style={{ color: '#8b949e' }}><FaGithub /></a>
      </div>

      <a href="#contact" style={{ marginTop: '2rem', display: 'inline-block' }}>
        <button>Get In Touch</button>
      </a>
    </section>
  );
};

export default Hero;