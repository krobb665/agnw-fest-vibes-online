
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
          poster="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&h=1080&fit=crop"
        >
          <source src="https://sample-videos.com/zip/10/mp4/720/SampleVideo_720x480_1mb.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
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
          {/* Main Title */}
          <h1 className="text-7xl md:text-[180px] lg:text-[220px] font-black leading-none tracking-tight text-white mb-4">
            AGNW FEST
          </h1>
          
          {/* Location */}
          <div className="text-white text-xl md:text-2xl font-bold tracking-widest mb-4">
            AGNEW PARK • STRANRAER • SCOTLAND
          </div>
          
          {/* Dates */}
          <div className="text-yellow-400 text-lg md:text-2xl font-bold tracking-widest mb-12">
            30 • 31 MAY 2026
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 text-lg md:text-xl tracking-widest transition-colors duration-300"
              onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
            >
              TICKETS TO BE ANNOUNCED
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-12 text-lg md:text-xl tracking-widest transition-colors duration-300"
              onClick={() => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LINE-UP TO BE ANNOUNCED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
