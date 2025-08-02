import { useEffect, useRef, useState } from 'react';
import rough from 'roughjs/bin/rough';

export default function SketchyButton({ children, onClick, width = 200, height = 60 }) {
  const canvasRef = useRef();
  const [hovering, setHovering] = useState(false);

  const draw = () => {
    const canvas = canvasRef.current;
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height); // clear previous

    rc.rectangle(
      0,
      0,
      width,
      height,
      {
        stroke: 'black',
        strokeWidth: 2,
        roughness: 1.5 + Math.random(), // vary roughness
        fill: 'white',
        fillStyle: 'solid',
      }
    );
  };

  useEffect(() => {
    draw();
  }, []);

  // Redraw on hover "jitter"
  useEffect(() => {
    if (!hovering) return;

    let count = 0;
    const interval = setInterval(() => {
      draw();
      count++;
      if (count >= 6) clearInterval(interval); // stop after 6 redraws
    }, 60); // 60ms between redraws

    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <div
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        cursor: 'pointer',
        display: 'inline-block',
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
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
          background: 'transparent',
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
