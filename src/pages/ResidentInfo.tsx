
import { useState } from "react";
import { FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInfoCircle, FaDownload, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ResidentInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    inquiry: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", address: "", inquiry: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
                RESIDENT INFO
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Information and support for Stranraer residents regarding AGNW FEST 2026
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

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resident Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h2 className="text-3xl font-black mb-6 text-blue-400">
                  <FaHome className="inline mr-3" />
                  FOR RESIDENTS
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">Traffic & Parking</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Temporary road closures around Agnew Park from 10:00 AM - 12:00 AM</li>
                      <li>• Alternative parking available at Stranraer Academy</li>
                      <li>• Free shuttle service from remote parking areas</li>
                      <li>• Resident parking permits available upon request</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">Noise Management</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Music will end promptly at 11:00 PM</li>
                      <li>• Sound levels monitored throughout the event</li>
                      <li>• Quiet zones established in residential areas</li>
                      <li>• 24/7 noise complaint hotline: 01776 123456</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">Emergency Services</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Enhanced police presence during event hours</li>
                      <li>• Medical stations located throughout the venue</li>
                      <li>• Emergency vehicle access maintained at all times</li>
                      <li>• Direct emergency contact: 999 (as usual)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">Local Benefits</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• 20% discount for Stranraer residents on tickets</li>
                      <li>• Local business partnership opportunities</li>
                      <li>• Employment opportunities during the event</li>
                      <li>• Community fund donation from festival proceeds</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center">
                    <FaDownload className="mr-2" />
                    Download Resident Info Pack
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h2 className="text-3xl font-black mb-6 text-blue-400">
                  <FaEnvelope className="inline mr-3" />
                  CONTACT US
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border-2 border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border-2 border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wider">
                      Address (Optional)
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border-2 border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                      placeholder="Your street address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wider">
                      Your Inquiry
                    </label>
                    <textarea
                      name="inquiry"
                      rows={5}
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border-2 border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        SEND MESSAGE
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Direct Contact Info */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-black mb-6 text-blue-400">DIRECT CONTACT</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg text-blue-400">
                      <FaPhone size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Resident Hotline</h4>
                      <a href="tel:01776123456" className="text-white hover:text-blue-400 transition-colors">
                        01776 123456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg text-blue-400">
                      <FaEnvelope size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</h4>
                      <a href="mailto:residents@agnwfest.co.uk" className="text-white hover:text-blue-400 transition-colors">
                        residents@agnwfest.co.uk
                      </a>
                    </div>
                  </div>
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

export default ResidentInfo;
