import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const logMousePosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', logMousePosition);

    
    return () => {
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []); 

  return (
    <div>
      <p>Hooks- X: {x} - Y: {y}</p>
    </div>
  );
}

export default HookMouse;