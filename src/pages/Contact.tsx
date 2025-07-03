
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <PageHeader 
        title="CONTACT"
        subtitle="Get in touch with the AGNW FEST team"
        gradientFrom="from-purple-400"
        gradientTo="to-purple-600"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-400/20">
                  <div className="flex items-center mb-4">
                    <FaEnvelope className="text-purple-400 text-2xl mr-4" />
                    <h3 className="text-xl font-bold text-white">Email</h3>
                  </div>
                  <p className="text-gray-300 mb-2">General Inquiries:</p>
                  <a href="mailto:info@agnwfestival.co.uk" className="text-purple-400 hover:text-purple-300 transition-colors">
                    info@agnwfestival.co.uk
                  </a>
                  <p className="text-gray-300 mb-2 mt-4">Press & Media:</p>
                  <a href="mailto:press@agnwfestival.co.uk" className="text-purple-400 hover:text-purple-300 transition-colors">
                    press@agnwfestival.co.uk
                  </a>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-400/20">
                  <div className="flex items-center mb-4">
                    <FaPhone className="text-purple-400 text-2xl mr-4" />
                    <h3 className="text-xl font-bold text-white">Phone</h3>
                  </div>
                  <p className="text-gray-300 mb-2">Festival Hotline:</p>
                  <a href="tel:01776654321" className="text-purple-400 hover:text-purple-300 transition-colors text-lg">
                    01776 654321
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Mon-Fri, 9AM-5PM</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-400/20">
                  <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-purple-400 text-2xl mr-4" />
                    <h3 className="text-xl font-bold text-white">Address</h3>
                  </div>
                  <p className="text-gray-300">
                    AGNW FEST<br/>
                    Agnew Park<br/>
                    Stranraer, Scotland<br/>
                    DG9 7AA
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-400/20">
                  <h3 className="text-xl font-bold mb-6 text-white">Follow Us</h3>
                  <div className="space-y-4">
                    <a href="https://instagram.com/agnwfest" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                      <FaInstagram className="text-2xl mr-4" />
                      <span>@agnwfest</span>
                    </a>
                    <a href="https://twitter.com/agnwfest" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                      <FaTwitter className="text-2xl mr-4" />
                      <span>@agnwfest</span>
                    </a>
                    <a href="https://tiktok.com/@agnwfest" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                      <FaTiktok className="text-2xl mr-4" />
                      <span>@agnwfest</span>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-400/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Business Inquiries</h3>
                  <p className="text-gray-300 mb-4">
                    For partnerships, sponsorship opportunities, or vendor applications:
                  </p>
                  <a href="mailto:business@agnwfestival.co.uk" className="text-purple-400 hover:text-purple-300 transition-colors">
                    business@agnwfestival.co.uk
                  </a>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-400/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Artist Applications</h3>
                  <p className="text-gray-300 mb-4">
                    Interested in performing at AGNW FEST?
                  </p>
                  <a href="mailto:artists@agnwfestival.co.uk" className="text-purple-400 hover:text-purple-300 transition-colors">
                    artists@agnwfestival.co.uk
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
