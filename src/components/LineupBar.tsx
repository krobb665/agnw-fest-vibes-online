
import { useState, useRef, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LineupBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const visibleItems = 5; // Show 5 items at a time
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Lineup data
  const lineupArtists = [
    {
      name: "THE SCRIPT",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "FONTAINES D.C.",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "GRACIE ABRAMS",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "50 CENT",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "BIFFY CLYRO",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "LEWIS CAPALDI",
      image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "CALVIN HARRIS",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "ARCTIC MONKEYS",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "DUA LIPA",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    },
    {
      name: "THE KILLERS",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
    }
  ];

  const nextArtist = () => {
    setCurrentIndex(prev => (prev + 1) % lineupArtists.length);
  };

  const prevArtist = () => {
    setCurrentIndex(prev => (prev - 1 + lineupArtists.length) % lineupArtists.length);
  };

  // Get artists to display in the carousel with infinite scroll effect
  const getVisibleArtists = () => {
    const items = [];
    const totalItems = lineupArtists.length;
    
    // Always show 5 items: 2 before, 1 center, 2 after
    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i + totalItems) % totalItems;
      items.push({
        ...lineupArtists[index],
        index,
        position: i
      });
    }
    
    return items;
  };

  // Auto-rotate every 4 seconds with pause on hover
  useEffect(() => {
    if (isHovered || isTransitioning) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % lineupArtists.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, isTransitioning]);
  
  const scrollToItem = useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const itemWidth = container.offsetWidth / 5; // Always 5 items visible
    const scrollLeft = (index - 2) * itemWidth + (container.offsetWidth - itemWidth) / 2;
    
    setIsTransitioning(true);
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextArtist();
      else if (e.key === 'ArrowLeft') prevArtist();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="w-full py-0 relative z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-full mx-auto overflow-hidden px-4">
        {/* Navigation Arrows */}
        <button 
          onClick={() => {
            const newIndex = (currentIndex - 1 + lineupArtists.length) % lineupArtists.length;
            setCurrentIndex(newIndex);
            scrollToItem(newIndex);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300"
          aria-label="Previous artist"
        >
          <FaChevronLeft />
        </button>
        
        <div 
          ref={containerRef}
          className="flex items-center justify-center overflow-x-hidden scroll-smooth py-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '100%',
            height: '280px',
            padding: '20px 0 60px'
          }}
        >
          {getVisibleArtists().map(({ name, image, index, position }) => {
            const isCenter = position === 0;
            const distanceFromCenter = Math.abs(position);
            const scale = 1 - (distanceFromCenter * 0.1); // Scale down based on distance from center
            const opacity = 1 - (distanceFromCenter * 0.2); // Fade out based on distance
            const zIndex = 10 - distanceFromCenter; // Stack order
            
            return (
              <div 
                key={`${name}-${index}`}
                ref={el => itemRefs.current[index] = el}
                className={`flex-shrink-0 relative transition-all duration-500 ease-in-out cursor-pointer ${isCenter ? 'z-20' : 'z-10'}`}
                style={{
                  width: '18%', // Slightly less than 20% to show part of the next/prev items
                  aspectRatio: '1',
                  transform: `scale(${isCenter ? '1.1' : scale})`,
                  opacity: isCenter ? 1 : Math.max(0.5, opacity),
                  zIndex,
                  margin: '0 1%',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onClick={() => {
                  if (position !== 0) {
                    const newIndex = (currentIndex + position + lineupArtists.length) % lineupArtists.length;
                    setCurrentIndex(newIndex);
                    scrollToItem(newIndex);
                  }
                }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-center">
                        <h3 className={`text-white font-bold text-center ${
                          isCenter ? 'text-xl md:text-2xl' : 'text-sm md:text-lg'
                        } truncate px-2`}>
                          {name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button 
          onClick={() => {
            const newIndex = (currentIndex + 1) % lineupArtists.length;
            setCurrentIndex(newIndex);
            scrollToItem(newIndex);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300"
          aria-label="Next artist"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default LineupBar;
