
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaInstagram, FaDownload } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleries = [
    {
      year: '2025',
      images: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571623069-2f80e5b1e3c4?w=800&h=900&fit=crop",
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=700&fit=crop",
      ]
    },
    {
      year: '2024',
      images: [
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      ]
    }
  ];

  const [activeYear, setActiveYear] = useState(0);
  const images = galleries[activeYear].images;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(prev => (prev === 0 ? images.length - 1 : (prev || 0) - 1));
    } else {
      setSelectedImage(prev => ((prev || 0) + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Relive the best moments from AGNW Festival through the years
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-gray-800 rounded-full overflow-hidden">
            {galleries.map((gallery, index) => (
              <button
                key={gallery.year}
                onClick={() => setActiveYear(index)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeYear === index
                    ? 'bg-yellow-500 text-black'
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                {gallery.year}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image}
                alt={`AGNW Festival ${galleries[activeYear].year} - ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">AGNW Festival {galleries[activeYear].year}</p>
                  <p className="text-yellow-400 text-sm">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full mb-6">
            <FaInstagram className="mr-3 text-2xl" />
            <span className="font-bold tracking-wider">TAG #AGNWFEST2026</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">SHARE YOUR MOMENTS</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Follow us on Instagram and use #AGNWFEST2026 for a chance to be featured on our official page and win VIP tickets for next year!
          </p>
          <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto">
            <FaInstagram className="mr-2" /> FOLLOW US
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white hover:text-yellow-400 transition-colors"
            aria-label="Close gallery"
          >
            <FaTimes size={28} />
          </button>
          
          <button 
            onClick={() => navigate('prev')}
            className="absolute left-8 text-white hover:text-yellow-400 transition-colors p-4"
            aria-label="Previous image"
          >
            <FaChevronLeft size={32} />
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
            <img 
              src={images[selectedImage]} 
              alt={`AGNW Festival ${galleries[activeYear].year} - ${selectedImage + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">AGNW Festival {galleries[activeYear].year}</p>
                  <p className="text-sm text-gray-300">Image {selectedImage + 1} of {images.length}</p>
                </div>
                <button className="text-white hover:text-yellow-400 transition-colors flex items-center">
                  <FaDownload className="mr-2" /> Download
                </button>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('next')}
            className="absolute right-8 text-white hover:text-yellow-400 transition-colors p-4"
            aria-label="Next image"
          >
            <FaChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
