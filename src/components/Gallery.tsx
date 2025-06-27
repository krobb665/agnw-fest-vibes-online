
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=450&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=350&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-black text-white text-center mb-16 tracking-tighter">
          GALLERY
        </h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
