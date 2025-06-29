
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

const Lineup = () => {
  // Sample artists data - replace with actual lineup when available
  const headliners = [
    { name: 'ARTIST 1', day: 'FRI 30 MAY' },
    { name: 'ARTIST 2', day: 'SAT 31 MAY' },
    { name: 'ARTIST 3', day: 'SUN 01 JUN' },
  ];

  const artists = [
    'ARTIST 4', 'ARTIST 5', 'ARTIST 6', 'ARTIST 7', 'ARTIST 8',
    'ARTIST 9', 'ARTIST 10', 'ARTIST 11', 'ARTIST 12', 'ARTIST 13',
    'ARTIST 14', 'ARTIST 15', 'ARTIST 16', 'ARTIST 17', 'ARTIST 18'
  ];

  return (
    <section id="lineup" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Diagonal background element */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent transform rotate-6 origin-top-right -mr-1/4 -mt-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              LINE-UP
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The biggest names in music are coming to Agnew Park. Check out who's playing each day.
          </p>
        </div>

        {/* Headliners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {headliners.map((artist, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl font-black mb-2">{artist.name}</h3>
                <p className="text-yellow-400 font-bold">{artist.day}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Lineup */}
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-8 text-center">FULL LINE-UP</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {artists.map((artist, index) => (
              <div 
                key={index}
                className="p-4 border-b border-gray-800 hover:bg-gray-900/50 transition-colors cursor-pointer"
              >
                <p className="font-medium">{artist}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Music Platforms */}
        <div className="text-center mt-24">
          <h4 className="text-lg font-bold mb-6">LISTEN TO THE OFFICIAL PLAYLIST</h4>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Listen on Spotify"
            >
              <FaSpotify size={32} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Listen on Apple Music"
            >
              <FaApple size={32} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Watch on YouTube"
            >
              <FaYoutube size={32} />
            </a>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-24 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-8 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-black mb-4">MORE ARTISTS TO BE ANNOUNCED</h3>
          <p className="mb-6">Stay tuned for more exciting announcements!</p>
          <button className="bg-black text-white hover:bg-gray-900 px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors">
            SIGN UP FOR UPDATES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lineup;
