
import { FaTicketAlt, FaClock, FaBell } from 'react-icons/fa';

const Tickets = () => {
  return (
    <section id="tickets" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/10 to-transparent transform -skew-x-12 -ml-32"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-l from-blue-600/5 to-transparent transform skew-x-12 -mr-16"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              TICKETS
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-2">
            30 MAY 2026 • AGNEW PARK, STRANRAER
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto my-6"></div>
        </div>

        {/* Main Ticket Info Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-full">
                <FaTicketAlt size={48} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">
              TICKETS COMING SOON
            </h3>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're putting the finishing touches on our ticket packages and pricing. 
              Be the first to know when tickets go on sale by signing up for our alerts below.
            </p>

            {/* Alert Sign Up */}
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <FaBell className="text-blue-400 mr-2" />
                <span className="text-blue-400 font-bold uppercase tracking-wider">Ticket Alerts</span>
              </div>
              <p className="text-gray-300 mb-4">Get notified the moment tickets become available</p>
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-lg uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105">
                Sign Up for Alerts
              </button>
            </div>

            {/* Expected Ticket Info */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-black/40 border border-gray-700/50 rounded-lg p-6">
                <div className="text-blue-400 font-bold mb-2">EARLY BIRD</div>
                <div className="text-gray-400 text-sm">Limited time offer when tickets launch</div>
              </div>
              <div className="bg-black/40 border border-gray-700/50 rounded-lg p-6">
                <div className="text-blue-400 font-bold mb-2">GENERAL ADMISSION</div>
                <div className="text-gray-400 text-sm">Full festival access for the day</div>
              </div>
              <div className="bg-black/40 border border-gray-700/50 rounded-lg p-6">
                <div className="text-blue-400 font-bold mb-2">VIP PACKAGES</div>
                <div className="text-gray-400 text-sm">Premium experience with extras</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Hint */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gray-900/50 border border-gray-700/50 rounded-full px-6 py-3">
            <FaClock className="text-blue-400 mr-2" />
            <span className="text-gray-300">Expected ticket launch: March 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
