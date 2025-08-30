import React from 'react';

const Internship = () => {
  return (
    <section id="internship">
      <h2>Internship & Experience</h2>
      <div style={{
        backgroundColor: '#161b22',
        padding: '1.5rem',
        borderRadius: '15px',
        boxShadow: '0 0 15px #00fff7',
        marginTop: '1rem',
        maxWidth: '700px',
      }}>
        <h3 style={{ color: '#00fff7' }}>AI & Data Analytics Internship (Upcoming)</h3>
        <p style={{ fontSize: '1rem', marginTop: '0.5rem', color: '#c9d1d9' }}>
          I am excited to start an internship focused on real-world datasets, data visualization, and predictive analytics 
          using Machine Learning and Power BI. This role will allow me to apply my skills in AI and Data Analytics to solve 
          practical problems and gain hands-on experience.
        </p>
      </div>
    </section>
  );
};

export default Internship;