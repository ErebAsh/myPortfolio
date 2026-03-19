import React from 'react';

const Internship = () => {
  return (
    <section id="internship">
      <h2>Internship & Experience</h2>
      
      {/* Social Summer of Code */}
      <div style={{
        backgroundColor: '#161b22',
        padding: '1.5rem',
        borderRadius: '15px',
        boxShadow: '0 0 15px #00fff7',
        marginTop: '1rem',
        maxWidth: '700px',
      }}>
        <h3 style={{ color: '#00fff7' }}>Social Summer of Code (SSoC)</h3>
        <p style={{ fontSize: '1rem', marginTop: '0.5rem', color: '#c9d1d9' }}>
          <strong>ErebAsh</strong> | <strong>Rank: 11</strong>
        </p>
        <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: '#8b949e' }}>
          Achieved an impressive rank of 11 on the <a href="https://beta.swoc.in/leaderboard" target="_blank" rel="noopener noreferrer" style={{ color: '#39ff14', textDecoration: 'underline' }}>SSoC Leaderboard</a> through consistent open-source contributions. 
          <br /><br />
          <em>[Certificate will be added here soon!]</em>
        </p>
      </div>

      {/* Upcoming Internship */}
      <div style={{
        backgroundColor: '#161b22',
        padding: '1.5rem',
        borderRadius: '15px',
        boxShadow: '0 0 15px #00fff7',
        marginTop: '2rem',
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