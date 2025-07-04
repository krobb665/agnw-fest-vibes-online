
import { useLineupCarousel } from '../hooks/useLineupCarousel';
import LineupNavigationArrow from './LineupNavigationArrow';
import LineupArtistItem from './LineupArtistItem';
import { lineupArtists } from '../data/lineupArtists';

const LineupBar = () => {
  const {
    currentIndex,
    setCurrentIndex,
    containerRef,
    itemRefs,
    isHovered,
    setIsHovered,
    getVisibleArtists,
    scrollToItem
  } = useLineupCarousel();

  const handleNavigationClick = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' 
      ? (currentIndex - 1 + lineupArtists.length) % lineupArtists.length
      : (currentIndex + 1) % lineupArtists.length;
    
    setCurrentIndex(newIndex);
    scrollToItem(newIndex);
  };

  return (
    <div 
      className="w-full py-0 relative z-50 -mt-32 mb-32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-full mx-auto overflow-hidden px-4">
        <LineupNavigationArrow 
          direction="left" 
          onClick={() => handleNavigationClick('left')} 
        />
        
        <div 
          ref={containerRef}
          className="flex items-center justify-center overflow-x-hidden scroll-smooth py-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '100%',
            height: '280px',
            padding: '20px 0 60px',
            gap: '8px'
          }}
        >
          {getVisibleArtists().map(({ name, image, index, position }) => {
            const isCenter = position === 0;
            
            return (
              <LineupArtistItem
                key={`${name}-${index}`}
                name={name}
                image={image}
                index={index}
                position={position}
                isCenter={isCenter}
                onClick={() => {
                  if (position !== 0) {
                    const newIndex = (currentIndex + position + lineupArtists.length) % lineupArtists.length;
                    setCurrentIndex(newIndex);
                    scrollToItem(newIndex);
                  }
                }}
              />
            );
          })}
        </div>
        
        <LineupNavigationArrow 
          direction="right" 
          onClick={() => handleNavigationClick('right')} 
        />
      </div>
    </div>
  );
};

export default LineupBar;
