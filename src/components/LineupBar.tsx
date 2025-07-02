
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const LineupBar = () => {
  const headliners = [
    { name: "ARCTIC MONKEYS", image: "/placeholder.svg" },
    { name: "DUA LIPA", image: "/placeholder.svg" },
    { name: "CALVIN HARRIS", image: "/placeholder.svg" },
    { name: "LEWIS CAPALDI", image: "/placeholder.svg" },
    { name: "THE 1975", image: "/placeholder.svg" },
    { name: "BILLIE EILISH", image: "/placeholder.svg" },
    { name: "ED SHEERAN", image: "/placeholder.svg" },
    { name: "COLDPLAY", image: "/placeholder.svg" }
  ];

  return (
    <section className="bg-gradient-to-r from-cyan-400 to-cyan-600 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-black text-4xl md:text-5xl font-black mb-6 tracking-wider">
            HEADLINERS
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {headliners.map((artist, index) => (
                <CarouselItem key={artist.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="aspect-square rounded-full overflow-hidden bg-black/20 mb-4">
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-black font-bold text-lg md:text-xl text-center tracking-wider">
                      {artist.name}
                    </h3>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-black/50 hover:bg-black/70 text-white border-none" />
            <CarouselNext className="right-0 bg-black/50 hover:bg-black/70 text-white border-none" />
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="text-black text-sm md:text-base mb-6">
            *Placeholder lineup - Official announcement coming soon
          </div>
          
          <Link
            to="/lineup"
            className="bg-black text-white hover:bg-gray-800 font-bold py-3 px-8 text-lg tracking-wider transition-colors rounded-lg"
          >
            SEE FULL LINE-UP
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LineupBar;
