// src/components/ui/AnimatedBlob.jsx
import React from 'react';

const AnimatedBlob = ({ className = '', style = {} }) => {
  return (
    <div
      className={`absolute rounded-full bg-purple-500 opacity-20 blur-3xl animate-blob ${className}`}
      style={style}
    ></div>
  );
};

export default AnimatedBlob;
