import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NameRain from './pages/NameRain';

function RoutesWithRain() {
  const location = useLocation();
  const showRain = location.pathname === '/';

  return (
    <>
      {showRain && <NameRain />}
      <Routes>
        <Route index element={<Home />} /> {/* Explicit index route for "/" */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutmee" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Fallback */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename="/portfolio">
      <RoutesWithRain />
    </Router>
  );
}

export default App;
