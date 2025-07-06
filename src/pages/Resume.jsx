function Resume() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Resume</h1>
      <iframe
        src="/resume.pdf"
        title="Resume"
        style={{ width: '100%', height: '90vh', border: 'none' }}
      ></iframe>
    </div>
  );
}

export default Resume;
