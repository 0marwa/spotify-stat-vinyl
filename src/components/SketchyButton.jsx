import { useEffect, useRef } from 'react';
import rough from 'roughjs/bin/rough';

export default function SketchyButton({ children, onClick, width = 200, height = 60 }) {
  const canvasRef = useRef();

  useEffect(() => {
    const rc = rough.canvas(canvasRef.current);
    rc.rectangle(0, 0, width, height, {
      stroke: 'black',
      strokeWidth: 2,
      roughness: 1.5,
      fill: 'white',
      fillStyle: 'solid',
    });
  }, [width, height]);

  return (
    <div
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <button
        onClick={onClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          background: 'transparent', // or 'white' if you prefer
          color: 'black',
          border: 'none',
          fontSize: '1rem',
          fontFamily: 'monospace',
          textAlign: 'center',
          lineHeight: `${height}px`,
          padding: 0,
        }}
      >
        {children}
      </button>
    </div>
  );
}
