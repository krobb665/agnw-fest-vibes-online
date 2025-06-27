
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Dark Overlay - More TRNSMT style */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/60 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              AGNW
            </span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-wider">
            FEST 2026
          </h2>
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-2xl md:text-3xl font-bold inline-block mb-4">
            30TH MAY 2026
          </div>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold mt-4">
            THE UK'S BIGGEST MUSIC EXPERIENCE
          </p>
        </div>
        
        <div className="space-y-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-black py-6 px-12 text-xl rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-white/20"
            onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET TICKETS NOW
          </Button>
          
          <p className="text-lg text-gray-300 font-medium">
            Limited early bird tickets available
          </p>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
