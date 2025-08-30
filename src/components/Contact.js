import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation or send data to backend/email service
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name" style={{ marginBottom: '0.5rem' }}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: '0.75rem',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />

          <label htmlFor="email" style={{ marginBottom: '0.5rem' }}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '0.75rem',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />

          <label htmlFor="message" style={{ marginBottom: '0.5rem' }}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: '0.75rem',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '1rem',
              fontSize: '1rem',
              resize: 'vertical',
            }}
          />

          <button type="submit" style={{ alignSelf: 'flex-start' }}>Send Message</button>
        </form>

        {submitted && (
          <p style={{ marginTop: '1rem', color: '#39ff14', fontWeight: '600' }}>
            Thank you for reaching out! I will get back to you soon.
          </p>
        )}

        <div style={{ marginTop: '2rem', color: '#8b949e' }}>
          <p>Email: <a href="mailto:hr7207096@gmail.com" style={{ color: '#00fff7' }}>hr7207096@gmail.com</a></p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/himanshurajjnu" target="_blank" rel="noopener noreferrer" style={{ color: '#00fff7' }}>linkedin.com/in/himanshurajjnu</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/ErebAsh" target="_blank" rel="noopener noreferrer" style={{ color: '#00fff7' }}>github.com/ErebAsh</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;