
const Lineup = () => {
  const stages = [
    {
      name: "MAIN STAGE",
      artists: ["ARCTIC MONKEYS", "THE 1975", "KASABIAN", "TWO DOOR CINEMA CLUB", "CATFISH AND THE BOTTLEMEN"],
      color: "from-pink-600 to-purple-600"
    },
    {
      name: "SECOND STAGE", 
      artists: ["SAM FENDER", "WOLF ALICE", "PALE WAVES", "THE SNUTS", "FONTAINES D.C."],
      color: "from-purple-600 to-blue-600"
    },
    {
      name: "RISING STAGE",
      artists: ["EASY LIFE", "SPORTS TEAM", "DECLAN MCKENNA", "BEABADOOBEE", "SEA GIRLS"],
      color: "from-blue-600 to-cyan-600"
    }
  ];

  return (
    <section id="lineup" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              LINE-UP
            </span>
          </h2>
          <p className="text-2xl text-gray-300 font-bold">
            THE BIGGEST NAMES IN MUSIC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stages.map((stage, index) => (
            <div key={stage.name} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl p-8 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-2xl">
                <div className={`bg-gradient-to-r ${stage.color} text-white text-center py-4 px-6 rounded-2xl mb-8`}>
                  <h3 className="text-2xl font-black tracking-wider">
                    {stage.name}
                  </h3>
                </div>
                <div className="space-y-5">
                  {stage.artists.map((artist, artistIndex) => (
                    <div 
                      key={artist}
                      className={`text-center py-4 px-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:scale-105 ${
                        artistIndex === 0 ? 'text-3xl font-black text-white bg-gradient-to-r from-gray-800 to-gray-700' : 
                        artistIndex === 1 ? 'text-2xl font-bold text-purple-200' :
                        'text-xl font-bold text-gray-300'
                      }`}
                    >
                      {artist}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;
