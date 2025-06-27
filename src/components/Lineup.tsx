
const Lineup = () => {
  const headliners = ["ARCTIC MONKEYS", "THE 1975", "KASABIAN"];
  
  const stages = [
    {
      name: "MAIN STAGE",
      artists: ["TWO DOOR CINEMA CLUB", "CATFISH AND THE BOTTLEMEN", "STEREOPHONICS", "ROYAL BLOOD"]
    },
    {
      name: "KING TUT'S STAGE", 
      artists: ["SAM FENDER", "WOLF ALICE", "PALE WAVES", "THE SNUTS"]
    },
    {
      name: "RADIO X STAGE",
      artists: ["FONTAINES D.C.", "EASY LIFE", "SPORTS TEAM", "DECLAN MCKENNA"]
    }
  ];

  return (
    <section id="lineup" className="py-24 bg-black text-center">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tighter">
          LINE-UP
        </h2>
        
        {/* Headliners */}
        <div className="mb-20">
          <h3 className="text-3xl font-black text-white mb-12 tracking-wider">HEADLINERS</h3>
          <div className="space-y-6">
            {headliners.map((artist, index) => (
              <div 
                key={artist}
                className="text-4xl md:text-6xl font-black text-white tracking-wider hover:text-gray-300 transition-colors duration-300"
              >
                {artist}
              </div>
            ))}
          </div>
        </div>

        {/* Stages */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {stages.map((stage) => (
            <div key={stage.name} className="text-center">
              <h3 className="text-2xl font-black text-white mb-8 tracking-wider border-b-2 border-white pb-4">
                {stage.name}
              </h3>
              <div className="space-y-4">
                {stage.artists.map((artist) => (
                  <div 
                    key={artist}
                    className="text-lg font-bold text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {artist}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;
