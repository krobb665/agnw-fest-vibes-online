
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LineupBar = () => {
  const headliners = [
    "ARCTIC MONKEYS",
    "DUA LIPA",
    "CALVIN HARRIS",
    "LEWIS CAPALDI",
    "THE 1975",
    "BILLIE EILISH"
  ];

  return (
    <section className="bg-gradient-to-r from-cyan-400 to-cyan-600 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-black text-3xl md:text-4xl font-black mb-6 tracking-wider">
            HEADLINERS
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            {headliners.map((artist, index) => (
              <motion.div
                key={artist}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-black font-bold text-lg md:text-xl tracking-wider"
              >
                {artist}
              </motion.div>
            ))}
          </div>
          
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
