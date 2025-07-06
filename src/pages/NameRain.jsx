import { useEffect } from 'react';
import './NameRain.css';

function NameRain() {
  useEffect(() => {
    const container = document.querySelector('.name-rain');
    const createDrop = () => {
      const drop = document.createElement('span');
      drop.textContent = 'Shelly';
      drop.className = 'name-drop';
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${2 + Math.random() * 3}s`; // speed
      drop.style.fontSize = `${12 + Math.random() * 24}px`; // size
      container.appendChild(drop);

      setTimeout(() => drop.remove(), 5000); // remove after falling
    };

    const interval = setInterval(createDrop, 200);
    return () => clearInterval(interval);
  }, []);

  return <div className="name-rain"></div>;
}

export default NameRain;
