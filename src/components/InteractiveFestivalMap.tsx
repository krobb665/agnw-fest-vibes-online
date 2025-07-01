
import { useState } from 'react';
import { FaMapMarkerAlt, FaMusic, FaUtensils, FaRestroom, FaFirstAid, FaParking } from 'react-icons/fa';

const InteractiveFestivalMap = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const mapAreas = [
    {
      id: 'main-stage',
      name: 'Main Stage',
      icon: <FaMusic className="text-cyan-400" />,
      description: 'The heart of AGNW Fest - where all the headline acts perform',
      position: { top: '30%', left: '50%' }
    },
    {
      id: 'food-village',
      name: 'Food Village',
      icon: <FaUtensils className="text-green-400" />,
      description: 'Local Scottish cuisine and international food vendors',
      position: { top: '60%', left: '30%' }
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: <FaRestroom className="text-blue-400" />,
      description: 'Restrooms, water stations, and accessibility services',
      position: { top: '70%', left: '70%' }
    },
    {
      id: 'first-aid',
      name: 'First Aid',
      icon: <FaFirstAid className="text-red-400" />,
      description: 'Medical assistance available throughout the festival',
      position: { top: '20%', left: '80%' }
    },
    {
      id: 'parking',
      name: 'Parking',
      icon: <FaParking className="text-yellow-400" />,
      description: 'Car parking areas with shuttle service to festival entrance',
      position: { top: '80%', left: '20%' }
    }
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">FESTIVAL MAP</h3>
      <div className="relative bg-gradient-to-br from-green-900/20 to-blue-900/20 h-96 rounded-lg border-2 border-cyan-400/30 overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-800/10 to-green-900/20"></div>
        
        {/* Map Areas */}
        {mapAreas.map((area) => (
          <button
            key={area.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              selectedArea === area.id 
                ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-400/50' 
                : 'bg-black/70 hover:bg-cyan-500/50 hover:scale-110'
            }`}
            style={{ top: area.position.top, left: area.position.left }}
            onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
          >
            {area.icon}
          </button>
        ))}
        
        {/* Agnew Park Label */}
        <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span className="text-white font-bold">AGNEW PARK</span>
          </div>
        </div>
      </div>
      
      {/* Selected Area Info */}
      {selectedArea && (
        <div className="mt-6 p-4 bg-black/50 rounded-lg border border-cyan-400/30">
          {mapAreas.map((area) => 
            area.id === selectedArea && (
              <div key={area.id}>
                <h4 className="text-xl font-bold text-cyan-400 mb-2">{area.name}</h4>
                <p className="text-gray-300">{area.description}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveFestivalMap;
