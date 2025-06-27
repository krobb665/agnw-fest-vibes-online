
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop", // Music festival crowd
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop", // Concert stage
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop", // Festival atmosphere
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop", // Music event
    "https://images.unsplash.com/photo-1571623069-2f80e5b1e3c4?w=400&h=450&fit=crop", // Festival crowd
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=350&fit=crop", // Stage lights
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=500&fit=crop", // Concert performance
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop" // Music festival
  ];

  return (
    <section id="gallery" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white text-center mb-20 tracking-tighter">
          GALLERY
        </h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer mb-4"
            >
              <div className="relative overflow-hidden bg-gray-900">
                <img 
                  src={image}
                  alt={`Festival moment ${index + 1}`}
                  className="w-full h-auto transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
