
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tickets = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <PageHeader 
        title="TICKETS"
        gradientFrom="from-blue-400"
        gradientTo="to-blue-600"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-16 rounded-2xl border border-blue-400/30 mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-blue-400">
                TICKETS NOT YET ON SALE
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We're putting the finishing touches on AGNW FEST 2026. Tickets will be available soon!<br/>
                Sign up below to be the first to know when they go on sale.
              </p>
              
              <div className="space-y-6">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 px-12 text-xl tracking-wider transition-colors rounded-lg block w-full md:w-auto md:inline-block"
                >
                  NOTIFY ME WHEN TICKETS ARE AVAILABLE
                </Link>
                
                <p className="text-gray-400 text-sm">
                  Join thousands of others waiting for tickets to go on sale
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-blue-400">Early Bird</h3>
                <p className="text-gray-400">First release tickets at special prices</p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-blue-400">General Admission</h3>
                <p className="text-gray-400">Access to all festival areas</p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-blue-400">VIP Experience</h3>
                <p className="text-gray-400">Premium viewing areas and perks</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tickets;
