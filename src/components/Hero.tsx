
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/Gqlcqe24ocU?autoplay=1&mute=1&loop=1&playlist=Gqlcqe24ocU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=7"
          className="w-full h-full object-cover opacity-70 pointer-events-none"
          style={{ 
            transform: 'scale(1.2)',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center w-full px-4">
        {/* Social Icons */}
        <div className="absolute top-8 right-8 hidden md:flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <FaTiktok size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <SiSpotify size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <SiApplemusic size={20} />
          </a>
        </div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
              alt="AGNW FEST 2026" 
              className="mx-auto max-w-2xl w-full h-auto"
            />
          </div>
          
          {/* Location */}
          <div className="text-white text-xl md:text-2xl font-bold tracking-widest mb-4">
            AGNEW PARK • STRANRAER • SCOTLAND
          </div>
          
          {/* Date */}
          <div className="text-blue-400 text-lg md:text-2xl font-bold tracking-widest">
            30 MAY 2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
