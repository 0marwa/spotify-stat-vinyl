import { useEffect, useRef } from 'react';
import rough from 'roughjs/bin/rough';

export default function SketchyVinyl({ className = '', style = {} }) {
  const canvasRef = useRef();

  useEffect(() => {
    const rc = rough.canvas(canvasRef.current);
    
    // Outer vinyl (black circle)
    rc.circle(175, 175, 300, {
      stroke: 'black',
      fill: 'black',
      fillStyle: 'solid',
      roughness: 2,
    });
    // Outer vinyl detailing (white hashing)
    rc.circle(175, 175, 300, {
      stroke: 'black',
      fill: 'lavender',
      fillStyle: 'zigzag',
      roughness: 2.5,
    });

    // Center label (lavender)
    rc.circle(175, 175, 150, {
      stroke: 'black',
      fill: 'lavender',
      fillStyle: 'solid',
      roughness: 1.5,
    });

    // Center label detailing (grey hashing)
    rc.circle(175, 175, 150, {
      stroke: 'black',
      fill: 'grey',
      fillStyle: 'zigzag',
      roughness: 1.5,
    });

    // Center label (white circle)
    rc.circle(175, 175, 50, {
      stroke: 'black',
      fill: 'white',
      fillStyle: 'solid',
      roughness: 1.5,
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={350}
      height={350}
      className={className}
      style={{
        position: 'absolute',
        left: '55%',
        zIndex: 0,
        animation: 'slideOut 2s ease-out forwards',
        ...style,
      }}
    />
  );
}
