
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Logo/Title */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-[12rem] font-black mb-4 leading-none tracking-tighter text-white">
            AGNW
          </h1>
          <div className="text-4xl md:text-6xl font-black text-white mb-6 tracking-[0.3em]">
            FEST 2026
          </div>
        </div>
        
        {/* Date Badge */}
        <div className="inline-block bg-white text-black px-8 py-4 text-2xl md:text-3xl font-black mb-8 tracking-wider">
          30TH MAY 2026
        </div>
        
        {/* Location */}
        <p className="text-xl md:text-2xl text-white font-bold mb-12 tracking-wide">
          GLASGOW GREEN
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-gray-200 font-black py-6 px-16 text-xl tracking-wider transition-all duration-300"
          onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
        >
          GET TICKETS
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
