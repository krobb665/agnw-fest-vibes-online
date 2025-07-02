
import { FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInfoCircle, FaDownload, FaTicketAlt, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ResidentInfo = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                LOCAL RESIDENTS
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Information for Stranraer residents regarding AGNW FEST 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-400/20"
            >
              <FaClock className="text-blue-400 text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Festival Hours</h3>
              <p className="text-gray-300">30 May 2026</p>
              <p className="text-gray-300">12:00 PM - 11:00 PM</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-400/20"
            >
              <FaMapMarkerAlt className="text-blue-400 text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">Agnew Park</p>
              <p className="text-gray-300">Stranraer, Scotland</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-400/20"
            >
              <FaInfoCircle className="text-blue-400 text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Expected Attendance</h3>
              <p className="text-gray-300">5,000+ people</p>
              <p className="text-gray-300">Single day event</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resident Ticket Ballot */}
      <section className="py-16 bg-gradient-to-r from-blue-500/10 to-blue-600/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-blue-500/10 p-4 rounded-lg text-blue-400 mx-auto w-fit mb-6">
              <FaTicketAlt size={32} />
            </div>
            <h2 className="text-3xl font-black mb-6 text-blue-400">FREE TICKETS FOR RESIDENTS</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <p className="text-xl text-gray-300 mb-6">
                Stranraer residents can apply for FREE festival tickets through our resident ballot system.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-400">How to Apply</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Must be registered at a Stranraer address</li>
                    <li>• Applications open 3 months before festival</li>
                    <li>• Maximum 2 tickets per household</li>
                    <li>• Proof of residency required</li>
                    <li>• Winners selected by random ballot</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-400">Important Dates</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Applications open: 1 February 2026</li>
                    <li>• Applications close: 28 February 2026</li>
                    <li>• Ballot draw: 15 March 2026</li>
                    <li>• Winners notified: 20 March 2026</li>
                    <li>• Tickets distributed: April 2026</li>
                  </ul>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg mt-8 transition-colors">
                REGISTER FOR BALLOT UPDATES
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Main Info Block */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h2 className="text-3xl font-black mb-8 text-blue-400 text-center">
                  <FaHome className="inline mr-3" />
                  INFORMATION FOR LOCAL RESIDENTS
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Traffic & Access</h3>
                    <ul className="text-gray-300 space-y-3 text-sm">
                      <li>• Temporary road closures around Agnew Park from 10:00 AM - 12:00 AM</li>
                      <li>• Alternative parking available at Stranraer Academy with free shuttle service</li>
                      <li>• Resident parking permits available upon request</li>
                      <li>• Emergency vehicle access maintained at all times</li>
                      <li>• Local traffic management team deployed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Noise Management</h3>
                    <ul className="text-gray-300 space-y-3 text-sm">
                      <li>• Music will end promptly at 11:00 PM</li>
                      <li>• Sound levels monitored throughout the event</li>
                      <li>• Quiet zones established in residential areas</li>
                      <li>• 24/7 noise complaint hotline available</li>
                      <li>• Sound barriers positioned around venue perimeter</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Safety & Security</h3>
                    <ul className="text-gray-300 space-y-3 text-sm">
                      <li>• Enhanced police presence during event hours</li>
                      <li>• Medical stations located throughout the venue</li>
                      <li>• 24/7 security patrols in surrounding areas</li>
                      <li>• Direct emergency contact: 999 (as usual)</li>
                      <li>• Community liaison officers available</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Community Benefits</h3>
                    <ul className="text-gray-300 space-y-3 text-sm">
                      <li>• Free ticket ballot for Stranraer residents</li>
                      <li>• Local business partnership opportunities</li>
                      <li>• Employment opportunities during the event</li>
                      <li>• Community fund donation from festival proceeds</li>
                      <li>• Support for local charities and organizations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Waste & Environment</h3>
                    <ul className="text-gray-300 space-y-3 text-sm">
                      <li>• Enhanced cleaning crews during and after event</li>
                      <li>• Recycling stations throughout the venue</li>
                      <li>• Park restoration within 48 hours</li>
                      <li>• Environmental monitoring before and after</li>
                      <li>• Sustainable event management practices</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Public Services</h3>
                    <ul className="text-gray-300 space-y-3 text-sm">
                      <li>• Regular bus services maintained</li>
                      <li>• Additional refuse collection scheduled</li>
                      <li>• Temporary postal service adjustments</li>
                      <li>• Utility services monitored and protected</li>
                      <li>• Emergency services coordination</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Important Notices */}
              <div className="bg-orange-900/20 backdrop-blur-sm p-8 rounded-xl border border-orange-400/30">
                <div className="flex items-center justify-center mb-6">
                  <FaExclamationTriangle className="text-orange-400 text-3xl mr-3" />
                  <h3 className="text-2xl font-black text-orange-400">IMPORTANT NOTICES</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-orange-300">Week of Festival</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Increased activity from Tuesday 27 May onwards</li>
                      <li>• Setup begins Wednesday 28 May at 8:00 AM</li>
                      <li>• Sound checks Thursday 29 May (limited volume)</li>
                      <li>• Breakdown begins Saturday 31 May at 6:00 AM</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4 text-orange-300">Special Arrangements</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Temporary accommodation for displaced residents</li>
                      <li>• Pet care support for noise-sensitive animals</li>
                      <li>• Prescription delivery service maintained</li>
                      <li>• Priority response for elderly/vulnerable residents</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-black mb-6 text-blue-400 text-center">GET IN TOUCH</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-blue-500/10 p-4 rounded-lg text-blue-400 mx-auto w-fit mb-4">
                      <FaPhone size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Resident Hotline</h4>
                    <a href="tel:01776123456" className="text-blue-400 hover:text-blue-300 transition-colors text-lg">
                      01776 123456
                    </a>
                    <p className="text-gray-400 text-sm mt-2">Available 24/7 during festival week</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-500/10 p-4 rounded-lg text-blue-400 mx-auto w-fit mb-4">
                      <FaEnvelope size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Email Support</h4>
                    <a href="mailto:residents@agnwfest.co.uk" className="text-blue-400 hover:text-blue-300 transition-colors">
                      residents@agnwfest.co.uk
                    </a>
                    <p className="text-gray-400 text-sm mt-2">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto text-lg">
                  <FaDownload className="mr-3" />
                  DOWNLOAD FULL RESIDENT INFO PACK
                </button>
                <p className="text-gray-400 text-sm mt-4">Includes detailed maps, contact numbers, emergency procedures, and ballot application form</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResidentInfo;
