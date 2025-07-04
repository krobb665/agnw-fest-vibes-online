
import LineupBar from './LineupBar';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-16 md:pt-24">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 pb-32">
        {/* Logo */}
        <div className="w-full max-w-4xl mb-12 text-center">
          <img 
            src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
            alt="AGNW FEST 2026" 
            className="mx-auto w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto"
          />
        </div>

        {/* Event Details */}
        <div className="text-center text-white space-y-4">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
            30TH MAY 2026
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-300">
            AGNEW PARK
          </div>
        </div>
      </div>
      
      {/* LineupBar positioned to overlap bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <LineupBar />
      </div>
    </section>
  );
};

export default Hero;
