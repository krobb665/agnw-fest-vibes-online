
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Music festival crowd */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Logo/Title */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-black mb-6 leading-none tracking-tighter text-white">
            AGNW
          </h1>
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-[0.5em] opacity-90">
            FEST 2026
          </div>
        </div>
        
        {/* Date Badge */}
        <div className="inline-block bg-white text-black px-12 py-6 text-xl md:text-2xl font-black mb-12 tracking-widest border-4 border-white">
          30TH MAY 2026
        </div>
        
        {/* Location */}
        <p className="text-lg md:text-xl text-white font-bold mb-16 tracking-[0.3em] opacity-80">
          GLASGOW GREEN • SCOTLAND
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-gray-100 font-black py-8 px-20 text-lg md:text-xl tracking-[0.2em] transition-all duration-300 border-4 border-white hover:scale-105"
          onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
        >
          TICKETS
        </Button>
      </div>
    </section>
  );
};

export default Hero;
