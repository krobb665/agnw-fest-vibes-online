
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { FaInstagram } from 'react-icons/fa';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <PageHeader 
        title="GALLERY"
        subtitle="Photos coming soon - follow us on social media for updates"
        gradientFrom="from-cyan-400"
        gradientTo="to-cyan-600"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center py-20"
            >
              <div className="bg-gray-900/50 p-12 rounded-xl border border-gray-800 mb-16">
                <h3 className="text-3xl font-black mb-6 text-cyan-500">COMING SOON</h3>
                <p className="text-gray-400 mb-8">
                  Festival photos will be available here after the event. Make sure to follow us on social media for behind-the-scenes content and updates.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full mb-6">
                <FaInstagram className="mr-3 text-2xl" />
                <span className="font-bold tracking-wider">TAG #AGNWFEST2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4">SHARE YOUR MOMENTS</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Follow us on Instagram and use #AGNWFEST2026 for a chance to be featured on our official page and win VIP tickets for next year!
              </p>
              <a 
                href="https://instagram.com/agnwfest" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto w-fit"
              >
                <FaInstagram className="mr-2" /> FOLLOW US
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
