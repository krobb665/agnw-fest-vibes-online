
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="bg-black text-white">
      {/* News Section */}
      <div className="bg-black py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Latest News
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* News Item 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=500&fit=crop" 
                  alt="Festival news"
                  className="w-full h-48 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">2025 SITE MAP</h3>
              <p className="text-gray-400 mb-4">Plan your festival experience with our detailed site map.</p>
              <span className="text-yellow-400 font-medium text-sm tracking-wide">READ MORE</span>
            </div>

            {/* News Item 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop" 
                  alt="Festival moments"
                  className="w-full h-48 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">ICONIC FESTIVAL MOMENTS</h3>
              <p className="text-gray-400 mb-4">Relive the most memorable moments from past festivals.</p>
              <span className="text-yellow-400 font-medium text-sm tracking-wide">READ MORE</span>
            </div>

            {/* News Item 3 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1514525252781-5f46450a29f3?w=800&h=500&fit=crop" 
                  alt="Festival guide"
                  className="w-full h-48 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">BEGINNER'S GUIDE</h3>
              <p className="text-gray-400 mb-4">Everything you need to know for your first AGNW Fest experience.</p>
              <span className="text-yellow-400 font-medium text-sm tracking-wide">READ MORE</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
              VIEW ALL NEWS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
