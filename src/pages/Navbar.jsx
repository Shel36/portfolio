function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#111',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      zIndex: 1000
    }}>
      <button onClick={() => scrollToSection('home')}>Home</button>
      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </nav>
  );
}

export default Navbar;
