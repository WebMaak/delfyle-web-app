"use client";

import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds (simulate site load)
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#fff',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <video
        src="/animation/delfyle.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          maxWidth: '30vw',
          maxHeight: '30vh',
        }}
      />
    </div>
  );
};

export default Preloader; 