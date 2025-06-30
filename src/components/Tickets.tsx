
import { FaTicketAlt, FaCheck, FaTimes } from 'react-icons/fa';

const Tickets = () => {
  return (
    <section id="tickets" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-yellow-500/5 to-transparent transform -skew-x-12 -ml-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              TICKETS
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-2">
            30 MAY 2026 • AGNEW PARK, STRANRAER
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-6"></div>
          <p className="text-red-400 font-bold text-lg">NOT YET ON SALE</p>
        </div>

        {/* Coming Soon Banner */}
        <div className="mb-24 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-12 rounded-lg text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black mb-6">TICKETS COMING SOON</h3>
          <p className="text-lg md:text-xl mb-8">We're finalizing ticket prices and packages. Sign up below to be the first to know when tickets go on sale!</p>
          <button className="bg-black text-white hover:bg-gray-900 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-colors rounded">
            SIGN UP FOR TICKET ALERTS
          </button>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          <p className="mb-4">Want to stay updated? <a href="#contact" className="text-yellow-400 hover:underline">Join our mailing list</a></p>
          <p>Follow us on social media for the latest announcements</p>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
