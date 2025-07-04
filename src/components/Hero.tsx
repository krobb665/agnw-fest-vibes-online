
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-16 md:pt-24 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/3792293-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-4 pb-32">
        {/* Logo */}
        <div className="w-full max-w-4xl mb-12 text-center">
          <img 
            src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
            alt="AGNW FEST 2026" 
            className="mx-auto w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto"
          />
        </div>

        {/* Event Details - Only location */}
        <div className="text-center text-white space-y-4">
          <div className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-300">
            AGNEW PARK
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
