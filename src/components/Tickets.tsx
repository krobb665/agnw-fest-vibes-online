
import { FaTicketAlt, FaCheck, FaTimes } from 'react-icons/fa';

const Tickets = () => {
  const ticketTypes = [
    {
      name: "DAY TICKET",
      price: "£89.50",
      originalPrice: "£99.50",
      features: [
        { text: "Access to all stages", included: true },
        { text: "Food & drink available to purchase", included: true },
        { text: "Official festival wristband", included: true },
        { text: "VIP areas", included: false },
        { text: "Fast track entry", included: false },
      ],
      cta: "BUY DAY TICKET"
    },
    {
      name: "WEEKEND TICKET",
      price: "£159.50",
      originalPrice: "£179.50",
      features: [
        { text: "Access to all stages for 3 days", included: true },
        { text: "Camping included", included: true },
        { text: "Official festival wristband", included: true },
        { text: "VIP areas", included: false },
        { text: "Fast track entry", included: false },
      ],
      popular: true,
      cta: "BUY WEEKEND TICKET"
    },
    {
      name: "VIP WEEKEND",
      price: "£279.50",
      originalPrice: "£299.50",
      features: [
        { text: "Access to all stages for 3 days", included: true },
        { text: "Luxury camping included", included: true },
        { text: "VIP viewing areas", included: true },
        { text: "Fast track entry", included: true },
        { text: "Exclusive VIP bar access", included: true },
      ],
      cta: "BUY VIP TICKET"
    }
  ];

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
            30 MAY - 01 JUNE 2026 • AGNEW PARK, GLASGOW
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-6"></div>
          <p className="text-yellow-400 font-bold text-lg">ON SALE NOW</p>
        </div>

        {/* Ticket Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                ticket.popular 
                  ? 'border-yellow-500 bg-gradient-to-b from-gray-900 to-black' 
                  : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
              }`}
            >
              {ticket.popular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-6 py-1 font-bold text-sm transform rotate-12 translate-x-8 translate-y-4">
                  BEST VALUE
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <FaTicketAlt className="text-yellow-400 mr-3" size={24} />
                  <h3 className="text-2xl font-black tracking-wider">{ticket.name}</h3>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-black">{ticket.price}</span>
                  <span className="text-gray-400 line-through ml-2">{ticket.originalPrice}</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <FaCheck className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-gray-600 mt-1 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-4 font-bold uppercase tracking-wider text-lg transition-colors ${
                    ticket.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {ticket.cta}
                </button>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6`}>
                <p className="text-sm text-center text-gray-300">
                  Limited availability. All tickets are non-refundable. Booking fees apply.
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          <p className="mb-4">Need help or have questions about tickets? <a href="#contact" className="text-yellow-400 hover:underline">Contact our support team</a></p>
          <p>Looking for payment plans? We offer flexible payment options. <a href="#" className="text-yellow-400 hover:underline">Learn more</a></p>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
