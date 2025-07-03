import { useRef, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';
import LineupBar from './LineupBar';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Try to play the video when component mounts
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log('Autoplay prevented, showing play button');
        }
      }
    };
    
    playVideo();
    
    // Handle visibility change to restart video when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 md:pt-32">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            zIndex: 0,
            objectFit: 'cover'
          }}
          poster="/images/hero-poster.jpg"
        >
          <source src="https://player.vimeo.com/external/3792293.hd.mp4?s=9e7a9a9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" style={{ zIndex: 1 }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-8">
          {/* Logo */}
          <div className="w-full max-w-4xl mb-8">
            <div className="transform transition-all duration-500">
              <img 
                src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
                alt="AGNW FEST 2026" 
                className="mx-auto w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Full width LineupBar with adjusted spacing */}
          <div className="w-full mb-12 px-0">
            <LineupBar />
          </div>
        </div>
        
        {/* Bottom Gradient for Carousel */}
        <div className="h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;