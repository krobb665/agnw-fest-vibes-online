import { useEffect, useRef } from 'react';

const LineupBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sample lineup data - placeholder artists for AGNW FEST
  const lineupArtists = [
    "LEWIS CAPALDI",
    "CALVIN HARRIS", 
    "ARCTIC MONKEYS",
    "DUA LIPA",
    "THE KILLERS",
    "BILLIE EILISH",
    "POST MALONE",
    "STORMZY",
    "KASABIAN",
    "ROYAL BLOOD",
    "GERRY CINNAMON",
    "CATFISH AND THE BOTTLEMEN",
    "DISCLOSURE",
    "LITTLE SIMZ",
    "FOALS",
    "TWO DOOR CINEMA CLUB",
    "CHVRCHES",
    "BIFFY CLYRO",
    "PRIMAL SCREAM",
    "FRANZ FERDINAND"
  ];

  // Create multiple copies for seamless infinite scroll
  const scrollingText = Array(4).fill(lineupArtists).flat().join(' • ') + ' • ';

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Pixels per frame
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
    <div className="sticky top-0 z-50 w-full bg-[rgb(33,33,33)] overflow-hidden py-4">
      <div 
        ref={scrollRef}
        className="flex items-center whitespace-nowrap overflow-hidden"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div 
          className="flex items-center text-white font-bold tracking-wide hover:text-gray-300 transition-colors duration-300 cursor-default"
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '1.2',
            letterSpacing: '0.5px'
          }}
        >
          {scrollingText.split(' • ').map((artist, index) => (
            artist && (
              <span key={index} className="inline-flex items-center">
                <span className="hover:text-cyan-400 transition-colors duration-200 px-3">
                  {artist}
                </span>
                {index < scrollingText.split(' • ').length - 1 && (
                  <span className="text-gray-400 mx-3">•</span>
                )}
              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineupBar;