
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Lineup = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <PageHeader 
        title="LINE-UP"
        subtitle="The biggest names in music are coming to Agnew Park. Check out who's playing."
        gradientFrom="from-cyan-400"
        gradientTo="to-cyan-600"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black p-12 rounded-lg text-center"
          >
            <h3 className="text-3xl md:text-5xl font-black mb-6">LINE-UP TO BE ANNOUNCED</h3>
            <p className="text-lg md:text-xl mb-8">We're working on bringing you an incredible lineup of artists. Stay tuned for exciting announcements!</p>
            <Link 
              to="/contact"
              className="bg-black text-white hover:bg-gray-900 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-colors rounded inline-block"
            >
              SIGN UP FOR UPDATES
            </Link>
          </motion.div>

          <div className="text-center">
            <h4 className="text-lg font-bold mb-6">LISTEN TO THE OFFICIAL PLAYLIST</h4>
            <p className="text-gray-400 mb-8">TO BE ANNOUNCED</p>
            <div className="flex justify-center space-x-6 opacity-50">
              <div className="text-gray-600">
                <FaSpotify size={32} />
              </div>
              <div className="text-gray-600">
                <FaApple size={32} />
              </div>
              <div className="text-gray-600">
                <FaYoutube size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lineup;
