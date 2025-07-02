
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaParking, FaBus } from "react-icons/fa";

const Info = () => {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                INFO
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know for your visit to AGNW FEST 2026
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: FaMapMarkerAlt, title: "Location", content: "Agnew Park, Stranraer" },
                { icon: FaClock, title: "Date & Time", content: "30 May 2026, 12PM-11PM" },
                { icon: FaParking, title: "Parking", content: "Available on-site & nearby" },
                { icon: FaBus, title: "Transport", content: "Shuttle buses available" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-400/20 text-center"
                >
                  <item.icon className="text-green-400 text-3xl mb-4 mx-auto" />
                  <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
            >
              <h2 className="text-3xl font-black mb-8 text-green-400 text-center">FESTIVAL INFORMATION</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">What to Bring</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Valid ID (18+ event)</li>
                    <li>• Your ticket (digital or printed)</li>
                    <li>• Weather-appropriate clothing</li>
                    <li>• Reusable water bottle</li>
                    <li>• Cash and/or card for purchases</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Not Allowed</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• No outside food or drinks</li>
                    <li>• No glass containers</li>
                    <li>• No professional cameras</li>
                    <li>• No illegal substances</li>
                    <li>• No weapons of any kind</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Getting There</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Free shuttle from Stranraer town center</li>
                    <li>• On-site parking available (£10)</li>
                    <li>• Train connections to Stranraer station</li>
                    <li>• Taxi drop-off points designated</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Food & Drink</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Wide variety of food vendors</li>
                    <li>• Vegetarian and vegan options</li>
                    <li>• Full bar service available</li>
                    <li>• Free water refill stations</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Info;
