import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <h1 className="neon-text" style={{ fontSize: '3rem' }}>Himanshu Raj</h1>
      <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: '#39ff14' }}>
        Aspiring AI & Data Analytics Engineer | Passionate about turning data into intelligence
      </p>
      <a href="#contact" style={{ marginTop: '2rem', display: 'inline-block' }}>
        <button>Get In Touch</button>
      </a>
    </section>
  );
};

export default Hero;