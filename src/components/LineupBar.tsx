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

  // Get only 4 artists to display
  const getVisibleArtists = () => {
    // Show only 4 artists at a time
    return lineupArtists.slice(0, 4).map((artist, index) => ({
      ...artist,
      index,
      isSelected: false // No selection state
    }));
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
    <div className="w-full py-0 relative z-20 -mt-24">
      <div className="w-full max-w-full mx-auto">
        <div className="grid grid-cols-4 gap-0 w-full">
          {getVisibleArtists().map((artist, i) => (
            <div 
              key={`${artist.name}-${i}`}
              className="relative w-full"
              style={{
                aspectRatio: '1',
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
                      <h3 className="text-white font-bold text-center text-xl md:text-2xl truncate px-2">
                        {artist.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LineupBar;