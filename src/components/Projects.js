import React from 'react';

const projects = [
  {
    title: 'AI Based Resume Builder',
    description: 'Select a template and securely fill in your details; an LLM then automatically generates a polished, professionally formatted, and easily downloadable resume.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    title: 'Sales Dashboard using Power BI',
    description: 'An interactive and dynamic Power BI dashboard for analyzing sales trends, customer behavior, and revenue growth.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    title: 'Chatbot with NLP',
    description: 'An intelligent companion providing human-like conversational experience and engaging in friendly, natural dialogue.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    link: 'https://erebash-eunoia.hf.space/',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Best Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
      }}>
        {projects.map(({ title, description, image, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#161b22',
              borderRadius: '15px',
              boxShadow: '0 0 15px #00fff7',
              overflow: 'hidden',
              color: '#c9d1d9',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 25px #39ff14';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 15px #00fff7';
            }}
          >
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem', flexGrow: 1 }}>
              <h3 style={{ color: '#00fff7' }}>{title}</h3>
              <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;