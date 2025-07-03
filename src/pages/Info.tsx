
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { MapPin, Clock, Utensils, Camera, Music, Shield, Car, Tent } from "lucide-react";

const Info = () => {
  const festivalTips = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Experience",
      tip: "Download the festival app to create your personal schedule and discover new artists.",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Food & Drink",
      tip: "Bring a refillable water bottle - free water stations available throughout the park.",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Capture Moments",
      tip: "Use #AGNWFEST2026 to share your festival moments and win VIP upgrades!",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stay Safe",
      tip: "Download What3Words app for easy location sharing and emergency services.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Getting There",
      tip: "Book transport in advance - shuttle buses run from Stranraer town center.",
    },
    {
      icon: <Tent className="w-6 h-6" />,
      title: "Camping",
      tip: "Bring a portable charger and comfortable shoes - you'll be walking a lot!",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <PageHeader 
        title="FESTIVAL INFO"
        subtitle="Everything you need to know for the ultimate festival experience"
        gradientFrom="from-purple-400"
        gradientTo="to-purple-600"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Festival Tips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-purple-400">
              FESTIVAL SURVIVAL TIPS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {festivalTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-purple-400 mr-3">
                      {tip.icon}
                    </div>
                    <h3 className="text-lg font-bold">{tip.title}</h3>
                  </div>
                  <p className="text-gray-400">{tip.tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location & Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-purple-400">
              LOCATION & DIRECTIONS
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Location Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 p-8 rounded-xl border border-purple-400/30">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold">Agnew Park</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Stranraer, Dumfries and Galloway, Scotland
                  </p>
                  <p className="text-gray-400">
                    Located in the heart of Stranraer, Agnew Park offers the perfect setting for an unforgettable festival experience with stunning views and excellent facilities.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-purple-400 mr-2" />
                      <h4 className="font-bold">Gates Open</h4>
                    </div>
                    <p className="text-gray-400">12:00 PM</p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Music className="w-5 h-5 text-purple-400 mr-2" />
                      <h4 className="font-bold">Music Starts</h4>
                    </div>
                    <p className="text-gray-400">2:00 PM</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <h4 className="font-bold mb-3 text-purple-400">Getting There</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Free shuttle buses from Stranraer train station</li>
                    <li>• Limited parking available - book in advance</li>
                    <li>• Taxi drop-off point at main entrance</li>
                    <li>• Walking distance from town center (15 mins)</li>
                  </ul>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="h-96 lg:h-[500px] rounded-xl overflow-hidden border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.2784985!2d-5.0343767!3d54.907342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48623bb178df3ae3%3A0x88c27fa6c4fd7dae!2sAgnew%20Park!5e0!3m2!1sen!2suk!4v1672934567890!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agnew Park Location"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center bg-gradient-to-r from-purple-500/20 to-purple-600/20 p-12 rounded-xl border border-purple-400/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Need More Information?</h3>
            <p className="text-gray-300 mb-6">
              Got questions? Our festival team is here to help make your experience amazing.
            </p>
            <a 
              href="mailto:info@agnwfestival.co.uk"
              className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Contact Us: info@agnwfestival.co.uk
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Info;
