import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // Using a 'status' string for more detailed feedback
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...'); // Show feedback that the form is being sent

    try {
      // Send a POST request to your Formspree endpoint
      const response = await fetch('https://formspree.io/f/xpwjloov', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the submission is successful
        setStatus('Thank you for reaching out! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        // If there's an error from the server
        setStatus('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      // If there's a network error
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Your input fields remain the same */}
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
              border: '1px solid #ccc',
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
              border: '1px solid #ccc',
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
              border: '1px solid #ccc',
              marginBottom: '1rem',
              fontSize: '1rem',
              resize: 'vertical',
            }}
          />

          <button type="submit" style={{
            alignSelf: 'flex-start',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#00fff7',
            color: '#000',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Send Message
          </button>
        </form>

        {/* Display the status message */}
        {status && (
          <p style={{ marginTop: '1rem', color: '#39ff14', fontWeight: '600' }}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;