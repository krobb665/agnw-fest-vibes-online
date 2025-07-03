import { useEffect, useRef } from 'react';

const LineupBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sample lineup data - in a real scenario, this would come from an API or CMS
  const lineupArtists = [
    { name: "LEWIS CAPALDI", image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "CALVIN HARRIS", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "ARCTIC MONKEYS", image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "DUA LIPA", image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "THE KILLERS", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "BILLIE EILISH", image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "POST MALONE", image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "STORMZY", image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "KASABIAN", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { name: "ROYAL BLOOD", image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedArtists = [...lineupArtists, ...lineupArtists];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
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
    <div className="relative w-full bg-black overflow-hidden py-8">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div 
        ref={scrollRef}
        className="flex items-center space-x-8 overflow-x-hidden whitespace-nowrap"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {duplicatedArtists.map((artist, index) => (
          <div 
            key={`${artist.name}-${index}`}
            className="flex-shrink-0 flex items-center space-x-6 group cursor-pointer"
          >
            {/* Artist Image */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-300">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Artist Name */}
            <div className="text-white font-black text-xl md:text-2xl lg:text-3xl tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
              {artist.name}
            </div>
            
            {/* Separator */}
            <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
    </div>
  );
};

export default LineupBar;