
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaBus, FaHotel, FaWheelchair, FaQuestionCircle } from "react-icons/fa";

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const infoSections = [
    {
      title: "GETTING THERE",
      icon: <FaBus className="text-cyan-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">BY TRAIN</h4>
            <p className="text-gray-300">Stranraer railway station is just a 10-minute walk from Agnew Park. Direct services run from Glasgow Central (3.5 hours) and connects from major Scottish cities. Special shuttle buses will run from the station throughout the festival day.</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">BY CAR</h4>
            <p className="text-gray-300">Stranraer is easily accessible via the A77 from Glasgow (2.5 hours) or A75 from Edinburgh (3 hours). Limited parking available at Agnew Park - pre-booking essential. Alternative parking at Stranraer town centre with shuttle service.</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">BY FERRY</h4>
            <p className="text-gray-300">Stena Line ferries from Belfast arrive at Cairnryan (7 miles from Stranraer). Special festival shuttle buses will connect ferry terminals to the venue.</p>
          </div>
        </div>
      )
    },
    {
      title: "ACCOMMODATION",
      icon: <FaHotel className="text-cyan-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">STRANRAER HOTELS</h4>
            <p className="text-gray-300">The Ivy House Hotel, North West Castle Hotel, and several boutique accommodations in Stranraer town centre. All within walking distance of the festival site.</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">B&BS & GUESTHOUSES</h4>
            <p className="text-gray-300">Various bed & breakfasts and guesthouses available throughout Stranraer and surrounding areas. Book early as accommodation fills up quickly during festival time.</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">WIDER AREA</h4>
            <p className="text-gray-300">Portpatrick (8 miles) offers stunning coastal accommodation. Newton Stewart and Wigtown also provide excellent bases with regular transport links to Stranraer.</p>
          </div>
        </div>
      )
    },
    {
      title: "ACCESSIBILITY",
      icon: <FaWheelchair className="text-cyan-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">VENUE ACCESS</h4>
            <p className="text-gray-300">Agnew Park provides accessible pathways and designated viewing areas for wheelchair users. Accessible toilet facilities are located throughout the site.</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">TRANSPORT & PARKING</h4>
            <p className="text-gray-300">Accessible transport options available from Stranraer station. Blue badge parking spaces reserved near venue entrances with level access to the festival site.</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">ASSISTANCE</h4>
            <p className="text-gray-300">Personal assistants enter free of charge. Please contact our access team in advance to discuss specific requirements and arrange any additional support needed.</p>
          </div>
        </div>
      )
    },
    {
      title: "FAQ",
      icon: <FaQuestionCircle className="text-cyan-400 text-2xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">WEATHER IN STRANRAER</h4>
            <p className="text-gray-300">May weather in Stranraer averages 12-16°C. Pack layers, waterproofs, and comfortable footwear. The park can get muddy after rain!</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">LOCAL AMENITIES</h4>
            <p className="text-gray-300">Stranraer town centre has supermarkets, pharmacies, and cash machines. The festival site has food vendors, bars, and merchandise stalls.</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">WHAT TO BRING</h4>
            <p className="text-gray-300">Small bags only (A4 size). Reusable water bottles welcome. No glass, professional cameras, or outside alcohol. Full prohibited items list on our website.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="info" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent transform -skew-x-12 -mr-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
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
                    ? 'bg-gradient-to-br from-cyan-500/20 to-transparent border-b-2 border-cyan-400' 
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
                    <FaMapMarkerAlt className="text-cyan-400 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">FESTIVAL MAP</h3>
                    <p className="text-gray-400 mb-4">Coming soon - check back closer to the event</p>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded text-sm uppercase tracking-wider transition-colors">
                      DOWNLOAD MAP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Banner */}
            <div className="mt-12 bg-gradient-to-r from-cyan-500/20 to-transparent border-l-4 border-cyan-400 p-6">
              <h3 className="text-xl font-bold mb-2">NEED MORE HELP?</h3>
              <p className="text-gray-300 mb-4">Our customer service team is here to help with any questions you might have.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded text-sm uppercase tracking-wider transition-colors">
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
