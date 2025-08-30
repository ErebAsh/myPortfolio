import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <h2>Education Timeline</h2>
      <div style={{ position: 'relative', marginTop: '2rem' }}>
        <div style={{
          position: 'absolute',
          left: '20px',
          top: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: '#00fff7',
          borderRadius: '2px',
          marginLeft: '10px',
        }}></div>

        <div style={{ marginLeft: '50px', marginBottom: '2rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '-38px',
            top: '5px',
            backgroundColor: '#00fff7',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            border: '3px solid #0d1117',
          }}></div>
          <h3>Jagannath University, Jaipur</h3>
          <p>B.Tech in Computer Science & Engineering (3rd Year)</p>
          <span style={{ color: '#39ff14' }}>2023 - Present</span>
        </div>

        <div style={{ marginLeft: '50px', marginBottom: '2rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '-38px',
            top: '5px',
            backgroundColor: '#00fff7',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            border: '3px solid #0d1117',
          }}></div>
          <h3>Al Hafeez College, Arrah</h3>
          <p>12th (PCM)</p>
          <span style={{ color: '#39ff14' }}>2021 - 2023</span>
        </div>
      </div>
    </section>
  );
};

export default Education;