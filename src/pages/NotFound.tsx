
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl md:text-9xl font-black mb-8 text-blue-400">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Looks like this page went to another festival! Let's get you back to the music.
            </p>
            <Link 
              to="/"
              className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-block"
            >
              BACK TO HOME
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
