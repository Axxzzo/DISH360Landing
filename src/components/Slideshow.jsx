import React, { useEffect, useState } from 'react';

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/Group 68.png",
    "/Group 69.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={`${slide}?auto=format&fit=crop&w=1600&h=400&q=80`}
          alt={`Wireframe ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default Slideshow;