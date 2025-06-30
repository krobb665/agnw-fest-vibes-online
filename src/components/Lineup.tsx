
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

const Lineup = () => {
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

        {/* To Be Announced Banner */}
        <div className="mb-24 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-12 rounded-lg text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-6">LINE-UP TO BE ANNOUNCED</h3>
          <p className="text-lg md:text-xl mb-8">We're working on bringing you an incredible lineup of artists. Stay tuned for exciting announcements!</p>
          <button className="bg-black text-white hover:bg-gray-900 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-colors rounded">
            SIGN UP FOR UPDATES
          </button>
        </div>

        {/* Music Platforms */}
        <div className="text-center mt-24">
          <h4 className="text-lg font-bold mb-6">LISTEN TO THE OFFICIAL PLAYLIST</h4>
          <p className="text-gray-400 mb-8">TO BE ANNOUNCED</p>
          <div className="flex justify-center space-x-6 opacity-50">
            <div className="text-gray-600">
              <FaSpotify size={32} />
            </div>
            <div className="text-gray-600">
              <FaApple size={32} />
            </div>
            <div className="text-gray-600">
              <FaYoutube size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lineup;
