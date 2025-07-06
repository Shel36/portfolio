import {Link} from 'react-router-dom';

function NavButton({ to, label }) {
  return (
    <Link to={to}>
      <button style={{
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        backgroundColor: '#111111',
        color: 'white',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer'
      }}>
        {label}
      </button>
    </Link>
  );
}

function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      textAlign: 'center'
    }}>
      <h1>Hi there, I'm Shelly 👋</h1>
      <p>Welcome to my personal portfolio site built with React!</p>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <NavButton to="/" label="Home" />
        <NavButton to="/aboutmee" label="About" />
        <NavButton to="/contact" label="Contact" />
      </div>
    </main>
  );
}

export default Home;
