
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
    <section id="lineup" className="py-32 bg-white text-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-20 tracking-tighter">
          LINE-UP
        </h2>
        
        {/* Headliners */}
        <div className="mb-24">
          <div className="space-y-8">
            {headliners.map((artist, index) => (
              <div 
                key={artist}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-[0.1em] hover:opacity-70 transition-opacity duration-300 cursor-pointer"
              >
                {artist}
              </div>
            ))}
          </div>
        </div>

        {/* Stages */}
        <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {stages.map((stage) => (
            <div key={stage.name} className="text-center">
              <h3 className="text-xl md:text-2xl font-black text-black mb-8 tracking-[0.2em] border-b-4 border-black pb-4">
                {stage.name}
              </h3>
              <div className="space-y-4">
                {stage.artists.map((artist) => (
                  <div 
                    key={artist}
                    className="text-base md:text-lg font-bold text-gray-800 hover:text-black transition-colors duration-300 cursor-pointer tracking-wide"
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
