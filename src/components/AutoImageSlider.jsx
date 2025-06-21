// AutoImageSlider.jsx
import React, { useEffect, useRef, useState } from "react";

const AutoImageSlider = ({ media, aspectClass = "", interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, interval);
    return () => resetTimeout();
  }, [currentIndex, interval]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden`}>
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {media.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={`slide-${index}`}
            className="w-full shrink-0 object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {media.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;
