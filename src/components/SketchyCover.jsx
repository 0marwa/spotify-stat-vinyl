// src/components/SketchyCover.jsx
import { useEffect, useRef } from 'react';
import rough from 'roughjs/bin/rough';

export default function SketchyCover({ children }) {
  const canvasRef = useRef();

  useEffect(() => {
    const rc = rough.canvas(canvasRef.current);
    rc.rectangle(0, 0, 350, 350, {
      stroke: 'black',
      strokeWidth: 3,
      roughness: 2.8,
      fill: 'white',
      fillStyle: 'solid',
    });
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: 350,
        height: 350,
        boxSizing: 'border-box', // ← applies to wrapper too
      }}
    >
      <canvas
        ref={canvasRef}
        width={350}
        height={350}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'monospace',
          gap: '1rem',
          textAlign: 'center',
          boxSizing: 'border-box',
          padding: '1.5rem',
        }}
      >
        {children}
      </div>
    </div>
  );
}
