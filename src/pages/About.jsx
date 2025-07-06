import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTelegram, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ExpandableSection from './ExpandableSection';


const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#000000',
  textDecoration: 'none',
  gap: '0.5rem',
  fontSize: '1.1rem',
  marginBottom: '0.5rem',
};


function About() {
  // Bubble style for section containers
  const bubbleStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '20px',
    padding: '1.5rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(5px)'
  };
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem', fontFamily: 'Arial, sans-serif', color: '#000000' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          backgroundColor: '#f2f2f2',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        {['personal', 'experience', 'education', 'skills', 'hobbies'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #000000',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e0e0e0';
              e.currentTarget.style.borderColor = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#000000';
            }}
          >
            {{
              personal: '👤 Personal',
              experience: '💼 Experience',
              education: '🎓 Education',
              skills: '🛠️ Skills',
              hobbies: '🎨 Hobbies'
            }[section]}
          </button>
        ))}
      </nav>

      {/* Personal Section */}
      <div style={bubbleStyle}>
        <section id="personal" style={{ marginBottom: '3rem' }}>
          <h2 style={{ borderBottom: '2px solid #000000', paddingBottom: '0.5rem' }}>About Me</h2>
          <img src="/images/profile.jpg" alt="Shelly" className="profile" style={{ maxWidth: '150px', borderRadius: '50%', display: 'block', marginBottom: '1rem' }} />
          <p>A motivated web developer passionate about clean code and creative design.</p>
          <p>Currently learning JavaScript and React while building real-world projects.</p>
        </section>
      </div>

      {/* Past Experience Section */}
      <div style={bubbleStyle}>
        <section id="experience" style={{ marginBottom: '3rem' }}>
          <h2 style={{ borderBottom: '2px solid #000000', paddingBottom: '0.5rem' }}>Past Experience</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1rem'
            }}
          >
            <div style={{
              flex: '1 1 45%',
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '15px',
              padding: '1rem',
              boxShadow: '0 4px 10px rgba(0,0,0,1)'
            }}>
              <h3>Front-End Assistant Developer</h3>
              <p><em>Nov 2024 - Present</em></p>
              <ul>
                <li>Developed responsive web applications using React and Redux.</li>
                <li>-Assisted in building and styling responsive web pages using HTML5, CSS3, and JavaScript</li>
                <li>Collaborated with the UI/UX team to translate Figma mockups into functional web pages</li>
                <li>Debugged cross-browser issues and fixed layout inconsistencies on mobile devices</li>
                <li>Implemented basic animations and interactions using CSS and vanilla JS</li>
                <li>Used Git for version control and participated in daily standups and sprint reviews</li>
              </ul>
            </div>
            <div style={{
              flex: '1 1 45%',
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '15px',
              padding: '1rem',
              boxShadow: '0 4px 10px rgba(0,0,0,1)'
            }}>
              <h3>Loan Tracking Assistant</h3>
              <p><em>Jun 2023 - Sep 2023</em></p>
              <ul>
                <li>Monitored and updated loan accounts for over 130 clients, ensuring data accuracy and completeness</li>
                <li>Created regular reports on repayment status and loan performance using Excel</li>
                <li>Identified trends in late payments and escalated high-risk cases to supervisors</li>
                <li>Collaborated with finance and customer service teams to ensure accurate loan tracking and client follow-up</li>
                <li>Maintained organized digital records</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Education Section */}
      <div style={bubbleStyle}>
        <section id="education" style={{ marginBottom: '3rem' }}>
          <h2 style={{ borderBottom: '2px solid #000000', paddingBottom: '0.5rem' }}>Education</h2>
          <article style={{ marginTop: '1rem' }}>
            <h3>Bachelor's in Data Science</h3>
            <p><em>China Jiliang University, 2022 - Present(Estimated Graduation in 2026)</em></p>
            <p>Relevant coursework: Data Structures and Algorithms, Web Development, Database Systems, Big Data(Hadoop).</p>
          </article>
        </section>
      </div>

      {/* Skills Section */}
      <div style={bubbleStyle}>
        <section id="skills" style={{ marginBottom: '3rem' }}>
          <h2 style={{ borderBottom: '2px solid #000000', paddingBottom: '0.5rem' }}>Skills</h2>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', listStyleType: 'none', padding: 0 }}>
            {['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git', 'REST APIs', 'SQL', "CLI", "GitLab CI/CD"].map(skill => (
              <li key={skill} style={{
                backgroundColor: '#e7f1ff',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontWeight: 'bold',
                color: '#000000'
              }}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Hobbies Section */}
      <div style={bubbleStyle}>
        <section id="hobbies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ borderBottom: '2px solid #000000', paddingBottom: '0.5rem' }}>Hobbies</h2>
          <p>
            In my free time, I enjoy a mix of mentally and physically stimulating hobbies. I'm passionate about <strong>cybersecurity</strong>, often exploring ethical hacking tools and staying current with infosec trends. I also practice <strong>digital illustration</strong>, creating artwork that blends creative storytelling with clean design. To challenge my strategic thinking, I study and play <strong>the game of Go</strong>, which I find both calming and intellectually rewarding. And to stay active, I regularly go to the <strong>gym</strong>, where strength training keeps me energized and focused.
          </p>
        </section>
      </div>

      <ExpandableSection title="Find me on social media" defaultClosed>
        <a href="https://instagram.com/sh3llywu" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaInstagram /> Instagram
        </a>
        <a href="https://wa.me/16058632551?text=Hi%20Shelly%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20chat!" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="https://www.facebook.com/profile.php?id=61561177295452" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaFacebook /> Facebook
        </a>
        <a href="mailto:shellywu0604@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20there%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch." style={socialLinkStyle}>
          <MdEmail /> Gmail
        </a>
        <a href="https://t.me/Sh3llyw" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaTelegram /> Telegram
        </a>
        <a href="https://discord.com/users/shhellywu36_56975" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaDiscord /> Discord
        </a>
      </ExpandableSection>


      <footer style={{
        marginTop: '3rem',
        padding: '1rem',
        textAlign: 'center',
        borderTop: '1px solid #ccc'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <div
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            style={{ borderRadius: '999px' }}
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '999px',
                transition: 'background 0.3s',
              }}
            >
              <span role="img" aria-label="home">🏠</span> Home
            </Link>
          </div>
          <div
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            style={{ borderRadius: '999px' }}
          >
            <Link
              to="/aboutmee"
              style={{
                textDecoration: 'none',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '999px',
                transition: 'background 0.3s',
              }}
            >
              <span role="img" aria-label="about">👤</span> About
            </Link>
          </div>
          <div
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            style={{ borderRadius: '999px' }}
          >
            <Link
              to="/contact"
              style={{
                textDecoration: 'none',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '999px',
                transition: 'background 0.3s',
              }}
            >
              <span role="img" aria-label="contact">✉️</span> Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
