import { useEffect, useRef } from 'react';

const LineupBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lineup data matching the reference image
  const lineupArtists = [
    {
      name: "THE SCRIPT",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "FONTAINES D.C.",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "GRACIE ABRAMS",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "50 CENT",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "BIFFY CLYRO",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "LEWIS CAPALDI",
      image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "CALVIN HARRIS", 
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "ARCTIC MONKEYS",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "DUA LIPA",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "THE KILLERS",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  // Create multiple copies for seamless infinite scroll
  const scrollingArtists = Array(4).fill(lineupArtists).flat();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Slower, smoother scroll
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset position for seamless loop
        const maxScroll = scrollContainer.scrollWidth / 4; // Since we have 4 copies
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full bg-black overflow-hidden" style={{ height: '120px' }}>
      <div 
        ref={scrollRef}
        className="flex items-center h-full whitespace-nowrap overflow-hidden"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="flex items-center h-full">
          {scrollingArtists.map((artist, index) => (
            <div 
              key={`${artist.name}-${index}`}
              className="flex-shrink-0 relative group cursor-pointer"
              style={{ 
                width: '280px',
                height: '120px',
                marginRight: '0px'
              }}
            >
              {/* Artist Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${artist.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Artist Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="text-white font-black text-center leading-tight tracking-wider group-hover:scale-105 transition-transform duration-300"
                    style={{
                      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontSize: '24px',
                      fontWeight: '900',
                      letterSpacing: '1px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                      maxWidth: '240px',
                      wordWrap: 'break-word',
                      lineHeight: '1.1'
                    }}
                  >
                    {artist.name}
                  </span>
                </div>

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
              </div>

              {/* Navigation arrows (left and right) */}
              {index === 0 && (
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300 z-10"
                  style={{ fontSize: '16px' }}
                >
                  ‹
                </button>
              )}
              
              {index === scrollingArtists.length - 1 && (
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300 z-10"
                  style={{ fontSize: '16px' }}
                >
                  ›
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineupBar;