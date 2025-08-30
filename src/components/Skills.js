import React from 'react';

const skillsData = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'JavaScript', level: 65 },
    ],
  },
  {
    category: 'Data',
    skills: [
      { name: 'Power BI', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'Numpy', level: 80 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Excel', level: 85 },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Deep Learning', level: 60 },
      { name: 'Natural Language Processing', level: 65 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', level: 85 },
      { name: 'Jupyter Notebook', level: 90 },
      { name: 'Google Colab', level: 85 },
      { name: 'Tableau (future)', level: 30 },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Team Collaboration', level: 80 },
      { name: 'Leadership', level: 75 },
    ],
  },
];

const SkillBar = ({ skill, level }) => {
  return (
    <div style={{ marginBottom: '0.8rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div style={{
        backgroundColor: '#222',
        borderRadius: '10px',
        height: '10px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${level}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #00fff7, #39ff14)',
          borderRadius: '10px',
          transition: 'width 1.5s ease-in-out',
        }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills Showcase</h2>
      {skillsData.map(({ category, skills }) => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#00fff7' }}>{category}</h3>
          {skills.map(({ name, level }) => (
            <SkillBar key={name} skill={name} level={level} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;