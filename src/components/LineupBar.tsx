import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LineupBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const visibleItems = 4; // Show 4 items at a time

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

  // Get the current and adjacent artists
  const getVisibleArtists = () => {
    const total = lineupArtists.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    
    return [
      { ...lineupArtists[prevIndex], index: prevIndex, isSelected: false },
      { ...lineupArtists[currentIndex], index: currentIndex, isSelected: true },
      { ...lineupArtists[nextIndex], index: nextIndex, isSelected: false }
    ];
  };

  // Auto-rotate every 6 seconds with pause on hover
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startTimer = () => {
      timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % lineupArtists.length);
      }, 6000);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', () => clearInterval(timer));
      container.addEventListener('mouseleave', startTimer);
      startTimer();
    }
    
    return () => {
      clearInterval(timer);
      if (container) {
        container.removeEventListener('mouseenter', () => {});
        container.removeEventListener('mouseleave', startTimer);
      }
    };
  }, [currentIndex]);
  
  // Smooth scroll and scale animation for current artist
  useEffect(() => {
    if (itemRefs.current[currentIndex] && containerRef.current) {
      const container = containerRef.current;
      const selectedItem = itemRefs.current[currentIndex];
      const containerWidth = container.offsetWidth;
      const itemLeft = selectedItem.offsetLeft;
      const itemWidth = selectedItem.offsetWidth;
      const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      // Smooth scroll
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      
      // Add active class for animation
      selectedItem.classList.add('active-artist');
      
      // Remove active class from other items
      itemRefs.current.forEach((item, index) => {
        if (index !== currentIndex && item) {
          item.classList.remove('active-artist');
        }
      });
    }
  }, [currentIndex]);

  // Handle scroll to current item
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.offsetWidth / visibleItems;
      const scrollLeft = itemWidth * currentIndex;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

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
    <div className="w-full overflow-hidden py-12 bg-black px-0">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={prevArtist}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous artist"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={nextArtist}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next artist"
          >
            <FaChevronRight />
          </button>
          
          {/* Artists Grid */}
          <div className="relative w-full overflow-hidden py-12">
            <div 
              ref={containerRef}
              className="flex items-center justify-center hide-scrollbar px-4"
              style={{
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {getVisibleArtists().map((artist, i) => (
                <div 
                  key={`${artist.name}-${i}`}
                  ref={el => itemRefs.current[artist.index] = el}
                  className={`relative flex-shrink-0 transition-all duration-500 ease-out mx-1.5 ${
                    artist.isSelected ? 'scale-110 z-10' : 'scale-95 z-1 hover:scale-100'
                  }`}
                  style={{
                    width: 'calc(33.333% - 12px)',
                    minWidth: '280px',
                    filter: artist.isSelected ? 'none' : 'brightness(0.85)'
                  }}
                  onClick={() => setCurrentIndex(artist.index)}
                >
                  <div className="relative w-full pb-[100%] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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
                          <div className="text-center transform transition-transform duration-300 group-hover:scale-105">
                            <h3 
                              className={`text-white font-bold text-center truncate ${
                                artist.isSelected ? 'text-2xl' : 'text-xl'
                              }`}
                            >
                              {artist.name}
                            </h3>
                            {artist.isSelected && (
                              <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent w-3/4 mx-auto mt-2 rounded-full opacity-0 animate-fadeIn"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { 
            -ms-overflow-style: none; 
            scrollbar-width: none; 
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Enhanced transitions */
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 500ms;
          }
          
          /* Active artist animation */
          .active-artist {
            animation: pulse 3s infinite;
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
            animation-delay: 0.3s;
          }
          
          /* Hover effects */
          .hover\:scale-105:hover {
            transform: scale(1.05);
          }
        `
      }} />
    </div>
  );
};

export default LineupBar;