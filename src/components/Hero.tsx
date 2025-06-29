
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-70"
          poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
        >
          <source src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f159db53d5b06bea6&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center w-full px-4">
        {/* Social Icons */}
        <div className="absolute top-8 right-8 hidden md:flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <FaTiktok size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <SiSpotify size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <SiApplemusic size={20} />
          </a>
        </div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Dates */}
          <div className="text-yellow-400 text-lg md:text-2xl font-bold tracking-widest mb-8">
            30 • 31 MAY 2026
          </div>
          
          {/* Main Title */}
          <h1 className="text-7xl md:text-[180px] lg:text-[220px] font-black leading-none tracking-tight text-white mb-4">
            AGNW FEST
          </h1>
          
          {/* Location */}
          <div className="text-white text-xl md:text-2xl font-bold tracking-widest mb-12">
            AGNEW PARK • GLASGOW • SCOTLAND
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 text-lg md:text-xl tracking-widest transition-colors duration-300"
              onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
            >
              TICKETS
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-12 text-lg md:text-xl tracking-widest transition-colors duration-300"
              onClick={() => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LINE-UP
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
