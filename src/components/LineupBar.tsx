import { useState, useRef, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LineupBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const visibleItems = 4; // Show 4 items at a time
  const [isHovered, setIsHovered] = useState(false);

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

  // Get artists to display in the carousel
  const getVisibleArtists = () => {
    const startIndex = currentIndex % lineupArtists.length;
    const endIndex = (currentIndex + visibleItems) % lineupArtists.length;
    
    if (endIndex > startIndex) {
      return lineupArtists.slice(startIndex, endIndex);
    } else {
      return [...lineupArtists.slice(startIndex), ...lineupArtists.slice(0, endIndex)];
    }
  };

  // Auto-rotate every 6 seconds with pause on hover
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % lineupArtists.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);
  
  const scrollToItem = useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const itemWidth = container.offsetWidth / visibleItems;
    const scrollLeft = itemWidth * index;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }, [visibleItems]);

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
      className="w-full py-0 relative z-20 -mt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-full mx-auto overflow-hidden">
        {/* Navigation Arrows */}
        <button 
          onClick={() => {
            setCurrentIndex(prev => (prev - 1 + lineupArtists.length) % lineupArtists.length);
            scrollToItem((currentIndex - 1 + lineupArtists.length) % lineupArtists.length);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300"
          aria-label="Previous artist"
        >
          <FaChevronLeft />
        </button>
        
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '100%'
          }}
        >
          {lineupArtists.map((artist, i) => (
            <div 
              key={`${artist.name}-${i}`}
              ref={el => itemRefs.current[i] = el}
              className="flex-shrink-0 relative transition-all duration-500 ease-in-out"
              style={{
                width: `${100 / visibleItems}%`,
                aspectRatio: '1',
                transform: `scale(${i === currentIndex ? '1.05' : '0.95'})`,
                transition: 'transform 0.3s ease-in-out',
                opacity: i >= currentIndex && i < currentIndex + visibleItems ? 1 : 0.7,
                zIndex: i === currentIndex ? 10 : 1
              }}
              onClick={() => {
                setCurrentIndex(i);
                scrollToItem(i);
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${artist.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-center">
                      <h3 className="text-white font-bold text-center text-lg md:text-xl lg:text-2xl truncate px-2">
                        {artist.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => {
            setCurrentIndex(prev => (prev + 1) % lineupArtists.length);
            scrollToItem((currentIndex + 1) % lineupArtists.length);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300"
          aria-label="Next artist"
        >
          <FaChevronRight />
        </button>
        
        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {Array.from({ length: Math.ceil(lineupArtists.length / visibleItems) }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const newIndex = i * visibleItems;
                setCurrentIndex(newIndex);
                scrollToItem(newIndex);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentIndex / visibleItems) === i 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineupBar;