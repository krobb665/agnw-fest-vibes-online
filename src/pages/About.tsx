
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                ABOUT
              </span>
            </h1>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 mb-12"
            >
              <h2 className="text-3xl font-black mb-6 text-blue-400">AGNW FEST 2026</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Get ready for the most anticipated music festival of 2026! AGNW FEST is coming to the beautiful Agnew Park in Stranraer, Scotland, bringing together the biggest names in music for an unforgettable single-day experience.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Set against the stunning backdrop of Scotland's coastline, AGNW FEST promises to deliver world-class performances, incredible atmosphere, and memories that will last a lifetime.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join us on 30th May 2026 for a day of music, community, and celebration in one of Scotland's most picturesque locations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-400/20"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">Location</h3>
                <p className="text-gray-300">Agnew Park, Stranraer, Scotland</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-400/20"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">Date</h3>
                <p className="text-gray-300">30th May 2026</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
