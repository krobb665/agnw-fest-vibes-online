
const Lineup = () => {
  const stages = [
    {
      name: "Main Stage",
      artists: ["Arctic Monkeys", "The 1975", "Kasabian", "Two Door Cinema Club", "Catfish and the Bottlemen"]
    },
    {
      name: "Second Stage", 
      artists: ["Sam Fender", "Wolf Alice", "Pale Waves", "The Snuts", "Fontaines D.C."]
    },
    {
      name: "Rising Stage",
      artists: ["Easy Life", "Sports Team", "Declan McKenna", "Beabadoobee", "Sea Girls"]
    }
  ];

  return (
    <section id="lineup" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              LINE-UP
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            The biggest names in music, all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div key={stage.name} className="group">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-center mb-6 text-purple-300">
                  {stage.name}
                </h3>
                <div className="space-y-4">
                  {stage.artists.map((artist, artistIndex) => (
                    <div 
                      key={artist}
                      className={`text-center p-3 rounded-lg transition-all duration-300 hover:bg-purple-600/20 ${
                        artistIndex === 0 ? 'text-2xl font-black text-white' : 
                        artistIndex === 1 ? 'text-xl font-bold text-purple-200' :
                        'text-lg font-semibold text-gray-300'
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
