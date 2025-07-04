import { motion } from 'framer-motion';

const InfoItem = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700/50 hover:border-blue-500/30 transition-colors"
  >
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <div className="text-gray-300 space-y-3">
      {children}
    </div>
  </motion.div>
);

const EventInfo = () => {
  return (
    <section id="event-info" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            EVENT INFORMATION
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about AGNW Fest 2026
          </p>
        </motion.div>

        <div className="space-y-8">
          <InfoItem icon="🎪" title="Event Details">
            <p className="text-lg font-medium mb-2">
              <span className="text-blue-400">📅 Date:</span> Saturday, 30th May 2026
            </p>
            <p className="text-lg font-medium mb-2">
              <span className="text-blue-400">📍 Location:</span> Agnew Park, Stranraer, Scotland
            </p>
            <p className="text-lg font-medium mb-2">
              <span className="text-blue-400">⏰ Times:</span>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Gates open: <span className="text-white">1:00 PM</span></li>
              <li>Last entry: <span className="text-white">8:30 PM</span></li>
              <li>Event ends: <span className="text-white">10:30 PM</span></li>
            </ul>
            <p className="mt-3">
              <span className="text-blue-400">👥 Age Policy:</span> 16+ only (under 18s must be accompanied by an adult 21+)
            </p>
          </InfoItem>

          <InfoItem icon="🚗" title="How to Get There">
            <p className="font-medium text-lg mb-3">
              <span className="text-blue-400">📍 Venue:</span> Agnew Park, The Esplanade, Stranraer DG9 7RE
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white">🚆 By Train:</p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Stranraer Train Station is just a <span className="text-white">5-minute walk</span> from Agnew Park</li>
                  <li>Regular services from Ayr, Kilmarnock, and Glasgow Central</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-white">🚌 By Bus:</p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Local bus routes stop in Stranraer town centre (10 mins walk)</li>
                  <li>National Express & Stagecoach buses service the area – check schedules</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-white">🚗 By Car:</p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Use postcode <span className="text-white">DG9 7RE</span> for satnav</li>
                  <li>Limited public parking near the venue – arrive early</li>
                  <li>Accessible parking available on request</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-white">🚲 On Foot / Bike:</p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Bike parking available at park entrance</li>
                  <li>Agnew Park is walkable from most of Stranraer town centre</li>
                </ul>
              </div>
            </div>
          </InfoItem>

          <InfoItem icon="🎟️" title="Ticketing Info">
            <p className="mb-4">
              <span className="text-blue-400">🎟️ Ticket Types:</span>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>
                <span className="font-semibold text-white">General Admission</span> – Access to the main arena, food court, and bars
              </li>
              <li>
                <span className="font-semibold text-white">VIP Pass</span> – Includes fast-track entry, VIP viewing area, and exclusive bar
              </li>
              <li>
                <span className="font-semibold text-white">Group Deals</span> – Buy 4+ GA tickets and get a discount
              </li>
            </ul>
            
            <p className="font-semibold text-white mt-6 mb-2">ℹ️ Ticket Tips:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>E-tickets only – download in advance</li>
              <li>ID matching the ticket may be required</li>
              <li>No re-entry after leaving the site</li>
            </ul>
            
            <div className="mt-6 text-center">
              <a 
                href="/tickets" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                BUY TICKETS NOW
              </a>
            </div>
          </InfoItem>

          <InfoItem icon="🚫" title="Prohibited Items">
            <p className="mb-3">The following items are <span className="text-red-400 font-semibold">not allowed</span> on site:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Glass containers",
                "Alcohol (sold inside only)",
                "Drugs or controlled substances",
                "Drones, professional cameras, or lasers",
                "Sharp objects or potential weapons",
                "Camping gear, chairs, or large umbrellas",
                "Outside food or drink (except sealed water under 500ml or medical/dietary needs)",
                "Pets (except registered assistance dogs)"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              All attendees are subject to search upon entry. One small bag per person (A4 size max).
            </p>
          </InfoItem>

          <InfoItem icon="🛟" title="Staying Safe at AGNW">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "🏥 Onsite medical tent and trained first aiders",
                "💙 Welfare area for anyone feeling overwhelmed or unwell",
                "👮 Security staff on hand – please report any concerns",
                "💧 Free water refill stations throughout the park",
                "🚨 Clearly marked exits, emergency points, and signage",
                "👥 Be aware of your surroundings and look out for each other"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </InfoItem>

          <InfoItem icon="💡" title="Top Tips">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "⏰ Arrive early to get your bearings and enjoy all acts",
                "🔋 Bring a portable charger – signal may be limited",
                "👟 Wear comfy shoes – you'll be on your feet",
                "🌦️ Check the weather – bring a light rain jacket or sun hat",
                "👥 Stay together – set a meeting point with your group",
                "🤝 Respect the locals – Stranraer is hosting you, be kind!"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </InfoItem>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
