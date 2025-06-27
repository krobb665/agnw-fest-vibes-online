
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
    <section id="gallery" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Memories from previous years
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
