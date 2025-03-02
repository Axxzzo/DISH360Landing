import React from 'react';

function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-[1]"></div> {/* Overlay for better text readability */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/utomp3.com - - Burger  3d Product Animation_v720P.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Overlay */}
      <div className="text-center z-10 relative">
        <div className="animate-bounce mb-6">
          <img 
            src="/Dish360 png.png" 
            alt="DISH360 Logo" 
            className="mx-auto w-24 h-24"
          />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">
          DISH<span className="text-orange-600">360</span>
        </h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
          Experience food like never before with our revolutionary 3D restaurant visualization platform
        </p>
      </div>
    </div>
  );
}

export default Hero;