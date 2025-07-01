
import { useState } from 'react';
import { FaCalendarAlt, FaMusic, FaTicketAlt, FaMapMarkerAlt } from 'react-icons/fa';

const FestivalTimeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const timelineEvents = [
    {
      date: 'JANUARY 2025',
      title: 'Lineup Announcement',
      description: 'First wave of artists revealed',
      icon: <FaMusic className="text-cyan-400" />,
      status: 'upcoming'
    },
    {
      date: 'MARCH 2025',
      title: 'Tickets On Sale',
      description: 'General admission and VIP tickets available',
      icon: <FaTicketAlt className="text-cyan-400" />,
      status: 'upcoming'
    },
    {
      date: 'APRIL 2025',
      title: 'Full Lineup Release',
      description: 'Complete artist roster and schedule',
      icon: <FaMusic className="text-cyan-400" />,
      status: 'upcoming'
    },
    {
      date: 'MAY 2026',
      title: 'Festival Weekend',
      description: 'AGNW Fest 2026 at Agnew Park, Stranraer',
      icon: <FaMapMarkerAlt className="text-cyan-400" />,
      status: 'upcoming'
    }
  ];

  return (
    <div className="bg-gray-900/50 p-8 rounded-xl">
      <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">FESTIVAL TIMELINE</h3>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-400/30"></div>
        
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-start mb-8 cursor-pointer transition-all duration-300 ${
              activeEvent === index ? 'transform scale-105' : ''
            }`}
            onClick={() => setActiveEvent(index)}
          >
            {/* Timeline Dot */}
            <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 transition-all duration-300 ${
              activeEvent === index 
                ? 'bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                : 'bg-black border-cyan-400/50'
            }`}>
              {event.icon}
            </div>
            
            {/* Event Content */}
            <div className={`ml-6 flex-1 p-6 rounded-lg transition-all duration-300 ${
              activeEvent === index 
                ? 'bg-cyan-500/20 border border-cyan-400/50' 
                : 'bg-black/50 border border-gray-600/50 hover:bg-gray-800/50'
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                <FaCalendarAlt className="text-cyan-400 text-sm" />
                <span className="text-cyan-400 font-bold text-sm">{event.date}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
              <p className="text-gray-300">{event.description}</p>
              
              {activeEvent === index && (
                <div className="mt-4 p-4 bg-black/50 rounded-lg animate-fade-in">
                  <p className="text-sm text-gray-400">
                    {index === 0 && "Get ready for some incredible Scottish and international acts!"}
                    {index === 1 && "Early bird tickets will be available with special discounts."}
                    {index === 2 && "Stage times and full festival schedule will be announced."}
                    {index === 3 && "The main event - one day of incredible music in beautiful Stranraer."}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalTimeline;
