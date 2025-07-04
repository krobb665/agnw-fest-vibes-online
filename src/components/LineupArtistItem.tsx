
interface LineupArtistItemProps {
  name: string;
  image: string;
  index: number;
  position: number;
  isCenter: boolean;
  onClick: () => void;
}

const LineupArtistItem = ({ name, image, index, position, isCenter, onClick }: LineupArtistItemProps) => {
  const distanceFromCenter = Math.abs(position);
  const scale = 1 - (distanceFromCenter * 0.1); // Scale down based on distance from center
  const opacity = 1 - (distanceFromCenter * 0.2); // Fade out based on distance
  const zIndex = 10 - distanceFromCenter; // Stack order
  
  return (
    <div 
      key={`${name}-${index}`}
      className={`flex-shrink-0 relative transition-all duration-500 ease-in-out cursor-pointer ${isCenter ? 'z-20' : 'z-10'}`}
      style={{
        width: '18%',
        aspectRatio: '1',
        transform: `scale(${isCenter ? '1.1' : scale})`,
        opacity: isCenter ? 1 : Math.max(0.5, opacity),
        zIndex,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onClick={onClick}
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
};

export default LineupArtistItem;
