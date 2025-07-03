import { useEffect, useRef } from 'react';

const LineupBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lineup data with artist photos (using Pexels stock photos for demonstration)
  const lineupArtists = [
    {
      name: "LEWIS CAPALDI",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "CALVIN HARRIS", 
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "ARCTIC MONKEYS",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "DUA LIPA",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "THE KILLERS",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "BILLIE EILISH",
      image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "POST MALONE",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "STORMZY",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "KASABIAN",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "ROYAL BLOOD",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "GERRY CINNAMON",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "CATFISH AND THE BOTTLEMEN",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "DISCLOSURE",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "LITTLE SIMZ",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "FOALS",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "TWO DOOR CINEMA CLUB",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "CHVRCHES",
      image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "BIFFY CLYRO",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "PRIMAL SCREAM",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "FRANZ FERDINAND",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  // Create multiple copies for seamless infinite scroll
  const scrollingArtists = Array(3).fill(lineupArtists).flat();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.5; // Pixels per frame
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset position for seamless loop
        const maxScroll = scrollContainer.scrollWidth / 3; // Since we have 3 copies
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
    <div className="sticky top-0 z-50 w-full bg-[rgb(33,33,33)] overflow-hidden py-3">
      <div 
        ref={scrollRef}
        className="flex items-center whitespace-nowrap overflow-hidden"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="flex items-center">
          {scrollingArtists.map((artist, index) => (
            <div 
              key={`${artist.name}-${index}`}
              className="flex items-center mx-6 hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              {/* Artist Image */}
              <div className="relative mr-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/20 group-hover:border-cyan-400 transition-colors duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full bg-black/20 group-hover:bg-cyan-400/20 transition-colors duration-300"></div>
              </div>
              
              {/* Artist Name */}
              <span 
                className="text-white font-bold tracking-wide group-hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                {artist.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineupBar;