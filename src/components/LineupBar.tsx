
import { motion } from "framer-motion";
import { useState } from "react";

const LineupBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const headliners = [
    { name: "ARCTIC MONKEYS", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80" },
    { name: "DUA LIPA", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" },
    { name: "CALVIN HARRIS", image: "https://images.unsplash.com/photo-1520637836862-4d197d17c675?auto=format&fit=crop&w=800&q=80" },
    { name: "LEWIS CAPALDI", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80" },
    { name: "THE 1975", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" },
    { name: "BILLIE EILISH", image: "https://images.unsplash.com/photo-1520637836862-4d197d17c675?auto=format&fit=crop&w=800&q=80" },
    { name: "ED SHEERAN", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80" },
    { name: "COLDPLAY", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, headliners.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, headliners.length - 4)) % Math.max(1, headliners.length - 4));
  };

  return (
    <section className="bg-black py-8 relative overflow-hidden">
      <div className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Headliners Slider */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: -currentIndex * (100 / Math.min(5, headliners.length)) + "%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {headliners.map((artist, index) => (
              <div 
                key={artist.name} 
                className="flex-shrink-0 relative group cursor-pointer"
                style={{ width: `${100 / Math.min(5, headliners.length)}%` }}
              >
                <div className="relative aspect-[4/3] mx-1">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Artist name overlay */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-white font-black text-xl md:text-2xl lg:text-3xl tracking-wider uppercase">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LineupBar;
