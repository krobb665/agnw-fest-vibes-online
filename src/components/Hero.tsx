import { useRef, useEffect, useState } from 'react';
import LineupBar from './LineupBar';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover object-center opacity-70"
          >
            <source src="https://player.vimeo.com/external/450055769.sd.mp4?s=9f7e0f0b4d3e7e9c3d3e3e3e3e3e3e3e3e3e3e3e&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            {/* Logo */}
            <div className="transform transition-all duration-500">
              <img 
                src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
                alt="AGNW FEST 2026" 
                className="mx-auto w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient for Carousel */}
        <div className="h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
