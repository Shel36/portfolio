import React, { useState } from 'react';
import {
  FaInstagram, FaWhatsapp, FaFacebook, FaTelegram, FaDiscord
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const safeValue = value.replace(/[<>]/g, ''); 
    setFormData({ ...formData, [name]: safeValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Error submitting the form");
      }
    } catch (err) {
      alert("Submission failed.");
    }
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div
        style={{
          width: isExpanded ? '250px' : '50px',
          transition: 'width 0.3s ease',
          backgroundColor: '#111',
          color: '#fff',
          overflow: 'hidden',
          padding: '1rem',
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            marginBottom: '1rem',
          }}
        >
          {isExpanded ? '←' : '→'}
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="https://instagram.com/sh3llywu" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaInstagram /> {isExpanded && 'Instagram'}
          </a>
         <a href="https://wa.me/16058632551?text=Hi%20Shelly%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20chat!" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaWhatsapp /> {isExpanded && 'WhatsApp'}
          </a>
          <a href="https://www.facebook.com/profile.php?id=61561177295452" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaFacebook /> {isExpanded && 'Facebook'}
          </a>
          <a href="mailto:shellywu0604@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20there%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch." style={linkStyle}>
            <MdEmail /> {isExpanded && 'Gmail'}
          </a>
          <a href="https://t.me/Sh3llyw" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaTelegram /> {isExpanded && 'Telegram'}
          </a>
          <a href="https://discord.com/users/shhellywu36_56975" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaDiscord /> {isExpanded && 'Discord'}
          </a>
        </div>
      </div>

      <main
        style={{
           flexGrow: 1,
           padding: '2rem',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center', 
           justifyContent: 'center', 
        }}
      >
  <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Contact Me</h2>
  <form
    onSubmit={handleSubmit}
    style={{
      width: '100%',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '120px' }}
          ></textarea>
          <button type="submit" style={buttonStyle}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
}

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  textDecoration: 'none',
  gap: '0.5rem',
  fontSize: '1.1rem'
};

const inputStyle = {
  display: 'block',
  width: '100%',
  marginBottom: '1rem',
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '0.5rem 1.25rem',
  border: 'none',
  fontSize: '1.25rem',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Contact;