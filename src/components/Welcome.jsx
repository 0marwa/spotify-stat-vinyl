import './Welcome.css';
import { useEffect, useRef } from 'react';
import SketchyCover from './SketchyCover';
import SketchyVinyl from './SketchyVinyl'; 
import SketchyButton from './SketchyButton';

export default function Welcome({ onLogin }) {
  const vinylRef = useRef(null);

  useEffect(() => {
    const vinyl = vinylRef.current;
    if (!vinyl) return;
    const handleAnimationEnd = () => {
      vinyl.classList.add('spin'); // add spin class after slide
    };
    vinyl.addEventListener('animationend', handleAnimationEnd);
    return () => vinyl.removeEventListener('animationend', handleAnimationEnd);
  }, []);

  return (
    <div className="welcome-container">
      <SketchyVinyl ref={vinylRef} />
      <SketchyCover>
        <h1>Spotify Vinyl Stats</h1>
        <p>Visualize your top tracks as a mixtape</p>
        <SketchyButton onClick={onLogin}>
          Login with Spotify
        </SketchyButton>
      </SketchyCover>
    </div>
  );
}
