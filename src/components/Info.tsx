import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaBus, FaHotel, FaWheelchair, FaQuestionCircle } from "react-icons/fa";

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const infoSections = [
    {
      title: "GETTING THERE",
      icon: <FaBus className="text-yellow-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">BY TRAIN</h4>
            <p className="text-gray-300">Stranraer train station is within a 10-minute walk from the festival site. Special shuttle buses will run from the station throughout the day.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">BY CAR</h4>
            <p className="text-gray-300">Limited parking is available at the festival site. We recommend using public transport. Pre-book your parking pass online.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">BY BUS</h4>
            <p className="text-gray-300">Multiple bus routes serve the festival area. Additional services will be running on the festival day.</p>
          </div>
        </div>
      )
    },
    {
      title: "ACCOMMODATION",
      icon: <FaHotel className="text-yellow-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">HOTELS</h4>
            <p className="text-gray-300">We've partnered with local hotels to offer special rates for festival-goers. Book early as rooms sell out quickly.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">B&BS</h4>
            <p className="text-gray-300">Stranraer has many charming bed & breakfasts perfect for a festival weekend getaway.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">AIRBNB</h4>
            <p className="text-gray-300">Many local residents offer their homes during the festival. Book early for the best selection and prices.</p>
          </div>
        </div>
      )
    },
    {
      title: "ACCESSIBILITY",
      icon: <FaWheelchair className="text-yellow-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">VIEWING PLATFORMS</h4>
            <p className="text-gray-300">Dedicated accessible viewing platforms are available at all stages. These are available on a first-come, first-served basis.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">PERSONAL ASSISTANTS</h4>
            <p className="text-gray-300">If you require a personal assistant, they can enter the festival for free. Please contact our access team in advance.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">SERVICES</h4>
            <p className="text-gray-300">Accessible toilets, charging points for electric wheelchairs, and assistance dogs are welcome throughout the site.</p>
          </div>
        </div>
      )
    },
    {
      title: "FAQ",
      icon: <FaQuestionCircle className="text-yellow-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">AGE RESTRICTIONS</h4>
            <p className="text-gray-300">All ages are welcome. Under 16s must be accompanied by an adult (18+). ID may be required for age verification.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">WHAT TO BRING</h4>
            <p className="text-gray-300">Small bags (A4 size or smaller), empty reusable water bottles, sun protection, and rain gear. See our full list of prohibited items on our website.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-2">LOST & FOUND</h4>
            <p className="text-gray-300">Visit the information desk or check our website after the festival for lost items.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="info" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/5 to-transparent transform -skew-x-12 -mr-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              FESTIVAL INFO
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know for an amazing festival experience at AGNW 2026
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Info Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {infoSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`flex flex-col items-center justify-center p-6 transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gradient-to-br from-yellow-500/20 to-transparent border-b-2 border-yellow-400' 
                    : 'bg-gray-900/50 hover:bg-gray-800/50'
                }`}
              >
                {section.icon}
                <span className="mt-2 font-bold text-sm uppercase tracking-wider">{section.title}</span>
              </button>
            ))}
          </div>
          
          {/* Info Content */}
          <div className="bg-gray-900/50 p-8 md:p-12 rounded-lg border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side - Content */}
              <div>
                {infoSections[openIndex || 0].content}
              </div>
              
              {/* Right side - Map or Image */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 w-full h-full bg-gray-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FaMapMarkerAlt className="text-yellow-400 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">FESTIVAL MAP</h3>
                    <p className="text-gray-400 mb-4">Coming soon - check back closer to the event</p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded text-sm uppercase tracking-wider transition-colors">
                      DOWNLOAD MAP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Banner */}
            <div className="mt-12 bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-400 p-6">
              <h3 className="text-xl font-bold mb-2">NEED MORE HELP?</h3>
              <p className="text-gray-300 mb-4">Our customer service team is here to help with any questions you might have.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded text-sm uppercase tracking-wider transition-colors">
                  CONTACT US
                </button>
                <button className="border border-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded text-sm uppercase tracking-wider transition-colors">
                  DOWNLOAD FESTIVAL GUIDE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
