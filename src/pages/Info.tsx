
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaParking, FaBus, FaExclamationTriangle, FaShieldAlt, FaBan } from "react-icons/fa";

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

            {/* Festival Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 mb-8"
            >
              <h2 className="text-3xl font-black mb-8 text-green-400 text-center">FESTIVAL INFORMATION</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">What to Bring</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Valid ID (18+ event)</li>
                    <li>• Your ticket (digital or printed)</li>
                    <li>• Weather-appropriate clothing</li>
                    <li>• Reusable water bottle (empty on arrival)</li>
                    <li>• Cash and/or card for purchases</li>
                    <li>• Small bag (A4 size max)</li>
                    <li>• Portable phone charger</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Getting There</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Free shuttle from Stranraer town center</li>
                    <li>• On-site parking available (£10 - pre-book only)</li>
                    <li>• Train connections to Stranraer station</li>
                    <li>• Taxi drop-off points designated</li>
                    <li>• Accessible transport available</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Food & Drink</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Wide variety of food vendors</li>
                    <li>• Vegetarian and vegan options</li>
                    <li>• Full bar service available (18+ with ID)</li>
                    <li>• Free water refill stations</li>
                    <li>• Local Scottish produce featured</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Facilities</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Accessible toilets throughout site</li>
                    <li>• First aid stations</li>
                    <li>• Phone charging points</li>
                    <li>• Lost property service</li>
                    <li>• ATM machines on-site</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Restricted Items */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-red-900/20 backdrop-blur-sm p-8 rounded-xl border border-red-400/30 mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <FaBan className="text-red-400 text-3xl mr-3" />
                <h2 className="text-3xl font-black text-red-400">RESTRICTED ITEMS</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-300">Prohibited Items</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Glass containers or bottles</li>
                    <li>• Outside food and beverages</li>
                    <li>• Professional cameras/recording equipment</li>
                    <li>• Weapons of any kind</li>
                    <li>• Illegal substances</li>
                    <li>• Aerosols and sprays</li>
                    <li>• Umbrellas with pointed ends</li>
                    <li>• Large bags (over A4 size)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-300">Additional Restrictions</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• No re-entry once you leave the site</li>
                    <li>• No professional equipment without accreditation</li>
                    <li>• No animals (except registered assistance dogs)</li>
                    <li>• No camping chairs or large furniture</li>
                    <li>• No laser pointers or flares</li>
                    <li>• No unauthorized merchandise for sale</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Security Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-blue-900/20 backdrop-blur-sm p-8 rounded-xl border border-blue-400/30"
            >
              <div className="flex items-center justify-center mb-6">
                <FaShieldAlt className="text-blue-400 text-3xl mr-3" />
                <h2 className="text-3xl font-black text-blue-400">SECURITY & SAFETY</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Security Procedures</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• All attendees subject to security searches</li>
                    <li>• Metal detectors at all entrances</li>
                    <li>• Security personnel throughout the site</li>
                    <li>• CCTV monitoring for safety</li>
                    <li>• Wristband checks for age verification</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Emergency Information</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Medical teams on-site 24/7</li>
                    <li>• Emergency evacuation procedures posted</li>
                    <li>• Text HELP to 83398 for assistance</li>
                    <li>• Look for yellow safety stewards</li>
                    <li>• Emergency services: 999</li>
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
