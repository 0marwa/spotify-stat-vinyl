import './Welcome.css';
import { useEffect, useRef } from 'react';

export default function Welcome({ onLogin }) {
  const vinylRef = useRef(null);

  useEffect(() => {
    const vinyl = vinylRef.current;
    const handleAnimationEnd = () => {
      vinyl.classList.add('revealed');
    };
    vinyl.addEventListener('animationend', handleAnimationEnd);
    return () => vinyl.removeEventListener('animationend', handleAnimationEnd);
  }, []);

  return (
    <div className="welcome-container">
      <div className="cover">
        <h1>Spotify Vinyl Stats</h1>
        <p>Visualize your top tracks as a mixtape</p>
        <button onClick={onLogin}>Login with Spotify</button>
      </div>
      <div className="welcome-vinyl" ref={vinylRef}>
        <div className="label"></div>
      </div>
    </div>
  );
}
