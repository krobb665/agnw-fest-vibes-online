
import { FaInstagram } from 'react-icons/fa';

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Photos coming soon - follow us on social media for updates
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center py-20">
          <div className="bg-gray-900/50 p-12 rounded-xl border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-3xl font-black mb-6 text-cyan-500">COMING SOON</h3>
            <p className="text-gray-400 mb-8">
              Festival photos will be available here after the event. Make sure to follow us on social media for behind-the-scenes content and updates.
            </p>
          </div>
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
          <button className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto">
            <FaInstagram className="mr-2" /> FOLLOW US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
