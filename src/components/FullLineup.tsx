import { lineupArtists } from '@/data/lineupArtists';
import { motion } from 'framer-motion';

const FullLineup = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            FULL LINEUP 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover all the incredible artists performing at AGNW Fest 2026
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {lineupArtists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg aspect-square bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {artist.name}
                </h3>
              </div>
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/lineup" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            VIEW FULL LINEUP
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullLineup;
