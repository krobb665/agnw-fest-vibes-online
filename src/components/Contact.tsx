
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        setFormErrors({});
      }, 1500);
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              CONTACT
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Got questions? Get in touch with our team for any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-2xl"
          >
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <FaEnvelope className="mr-3 text-yellow-500" />
              SEND US A MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wider">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-800/50 border-2 ${formErrors.name ? 'border-red-500' : 'border-gray-700 focus:border-yellow-500'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all`}
                  placeholder="Enter your name"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wider">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-800/50 border-2 ${formErrors.email ? 'border-red-500' : 'border-gray-700 focus:border-yellow-500'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wider">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-gray-800/50 border-2 ${formErrors.message ? 'border-red-500' : 'border-gray-700 focus:border-yellow-500'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all resize-none`}
                  placeholder="How can we help you?"
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-black mb-6 text-yellow-500">CONTACT INFORMATION</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-500/10 p-3 rounded-lg text-yellow-500">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</h4>
                    <a href="mailto:info@agnwfestival.com" className="text-white hover:text-yellow-400 transition-colors">
                      info@agnwfestival.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-500/10 p-3 rounded-lg text-yellow-500">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Phone</h4>
                    <a href="tel:+441234567890" className="text-white hover:text-yellow-400 transition-colors">
                      +44 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-500/10 p-3 rounded-lg text-yellow-500">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Location</h4>
                    <p className="text-white">
                      Glasgow Green<br />
                      Templeton Street<br />
                      Glasgow, G40 1HB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-yellow-500 text-white flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-yellow-500 text-white flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-yellow-500 text-white flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-black mb-6 text-yellow-500">FESTIVAL HOURS</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Friday</span>
                  <span className="font-medium">12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-medium">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="font-medium">11:00 AM - 10:00 PM</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-400">
                  * Gates open at 12:00 PM on Friday and 11:00 AM on Saturday & Sunday. Last entry at 9:00 PM each day.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
