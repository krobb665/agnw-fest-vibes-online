
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=350&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=450&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              GALLERY
            </span>
          </h2>
          <p className="text-2xl text-gray-300 font-bold mb-4">
            MEMORIES FROM PREVIOUS YEARS
          </p>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold inline-block">
            📸 Tag us @agnwfest for a chance to be featured
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-all duration-500" />
                
                {/* Overlay content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-bold text-lg">
                    AGNW Fest {2025 - (index % 3)}
                  </p>
                  <p className="text-purple-200 font-medium">
                    Epic moments captured
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
              <div className="text-3xl font-black text-white mb-2">50K+</div>
              <div className="text-purple-300 font-bold">Photos Shared</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6">
              <div className="text-3xl font-black text-white mb-2">100K+</div>
              <div className="text-pink-300 font-bold">Social Posts</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
              <div className="text-3xl font-black text-white mb-2">1M+</div>
              <div className="text-cyan-300 font-bold">Memories Made</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
