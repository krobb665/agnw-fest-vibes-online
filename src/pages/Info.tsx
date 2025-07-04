
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { MapPin, Clock, Utensils, Camera, Music, Shield, Car, Tent, Phone, Wifi, CreditCard, Umbrella, User, Eye, Ear, Heart, Recycle, Leaf, Droplets, Sun } from "lucide-react";

const Info = () => {
  const festivalTips = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Experience",
      tip: "Download the festival app to create your personal schedule and discover new artists. Arrive early for the best spots!",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Food & Drink",
      tip: "Bring a refillable water bottle - free water stations available throughout the park. Try local Scottish specialties!",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Capture Moments",
      tip: "Use #AGNWFEST2026 to share your festival moments and win VIP upgrades! Professional cameras not allowed.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stay Safe",
      tip: "Download What3Words app for easy location sharing. Keep emergency contacts handy and stay hydrated.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Getting There",
      tip: "Book transport in advance - shuttle buses run from Stranraer town center every 15 minutes during festival hours.",
    },
    {
      icon: <Tent className="w-6 h-6" />,
      title: "What to Bring",
      tip: "Comfortable shoes, layers for Scottish weather, portable charger, and a positive attitude! Small bags only (A4 size).",
    },
    {
      icon: <Umbrella className="w-6 h-6" />,
      title: "Weather Prepared",
      tip: "May weather in Scotland can be unpredictable - bring waterproofs and sun cream. Check forecast before traveling.",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Stay Connected",
      tip: "Free WiFi available at key locations. Download offline maps and festival schedule before arriving.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Cashless Festival",
      tip: "Card payments accepted everywhere. Some vendors may also accept contactless payments via phone.",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Emergency Info",
      tip: "Save the festival emergency number: 01776 654321. Medical tents located at key points throughout the site.",
    }
  ];

  const faqs = [
    {
      question: "What time do gates open?",
      answer: "Gates open at 12:00 PM. Music starts at 2:00 PM with the last act finishing around midnight."
    },
    {
      question: "Can I bring my own food and drinks?",
      answer: "Small snacks and sealed water bottles are allowed. No alcohol, glass, or large food items permitted."
    },
    {
      question: "Is there somewhere to charge my phone?",
      answer: "Charging stations are available near the main stage and information points. Bring a portable charger for convenience."
    },
    {
      question: "What if it rains?",
      answer: "The festival goes ahead rain or shine! Covered areas are available, but bring waterproof clothing."
    },
    {
      question: "Are dogs allowed?",
      answer: "Only registered assistance dogs are permitted at the festival for safety and licensing reasons."
    },
    {
      question: "Can I leave and re-enter?",
      answer: "Re-entry is not permitted. Once you leave the festival grounds, your wristband becomes invalid."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <PageHeader 
        title="FESTIVAL INFO"
        subtitle="Everything you need to know for the ultimate festival experience"
        gradientFrom="from-blue-500"
        gradientTo="to-blue-600"
      />

      {/* Quick Links */}
      <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            <a 
              href="#festival-tips" 
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Festival Tips
            </a>
            <a 
              href="#accessibility" 
              className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
            >
              Accessibility
            </a>
            <a 
              href="#sustainability" 
              className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
            >
              Sustainability
            </a>
            <a 
              href="#faq" 
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Accessibility Section */}
      <section id="accessibility" className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-green-500 dark:text-green-400">
              ACCESSIBILITY
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
              AGNW FEST is committed to providing an inclusive festival experience for everyone
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <User className="w-8 h-8" />,
                  title: "Mobility Access",
                  features: [
                    "Wheelchair accessible pathways throughout the site",
                    "Designated viewing areas with clear sightlines",
                    "Accessible toilet facilities",
                    "Blue badge parking near entrances",
                    "Level access from car parks to festival site"
                  ]
                },
                {
                  icon: <Ear className="w-8 h-8" />,
                  title: "Hearing Support",
                  features: [
                    "British Sign Language interpreters available",
                    "Hearing loop systems at key areas",
                    "Visual alerts and information displays",
                    "Assistance available at information points"
                  ]
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Visual Support",
                  features: [
                    "Audio descriptions available",
                    "Large print festival guides",
                    "High contrast signage throughout site",
                    "Guide dogs welcome"
                  ]
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Additional Support",
                  features: [
                    "Personal assistants enter free of charge",
                    "Quiet spaces available for breaks",
                    "First aid stations throughout the site",
                    "Staff trained in accessibility support"
                  ]
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-green-500 dark:text-green-400 mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-green-500 dark:text-green-400">
              SUSTAINABILITY
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
              Our commitment to protecting the environment and supporting our local community
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Recycle className="w-8 h-8" />,
                  title: "Zero Waste Goal",
                  description: "We're working towards a zero-waste festival with comprehensive recycling and composting programs.",
                  actions: [
                    "Reusable cup schemes",
                    "Waste separation stations",
                    "Compostable food packaging",
                    "Plastic-free initiatives"
                  ]
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: "Water Conservation",
                  description: "Protecting our local water resources and promoting sustainable water use.",
                  actions: [
                    "Free water refill stations",
                    "Rainwater collection systems",
                    "Water-efficient facilities",
                    "Local water source protection"
                  ]
                },
                {
                  icon: <Sun className="w-8 h-8" />,
                  title: "Renewable Energy",
                  description: "Powering the festival with clean, renewable energy sources.",
                  actions: [
                    "Solar panel installations",
                    "Wind power where possible",
                    "Energy-efficient LED lighting",
                    "Battery storage systems"
                  ]
                },
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: "Local Sourcing",
                  description: "Supporting local businesses and reducing our carbon footprint.",
                  actions: [
                    "Local food vendors",
                    "Scottish craft beverages",
                    "Regional suppliers priority",
                    "Seasonal menu options"
                  ]
                }
              ].map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-green-500 dark:text-green-400 mr-4">
                      {initiative.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{initiative.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{initiative.description}</p>
                  <ul className="space-y-2">
                    {initiative.actions.map((action, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Original Info Content */}
      <section id="festival-tips" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          {/* Festival Tips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-blue-500 dark:text-blue-400">
              FESTIVAL SURVIVAL TIPS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {festivalTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-500 dark:text-blue-400 mr-3">
                      {tip.icon}
                    </div>
                    <h3 className="text-lg font-bold">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{tip.tip}</p>
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
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-blue-500 dark:text-blue-400">
              LOCATION & DIRECTIONS
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-8 rounded-xl border border-blue-400/30">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold">Agnew Park</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Stranraer, Dumfries and Galloway, Scotland
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Located in the heart of Stranraer, Agnew Park offers the perfect setting for an unforgettable festival experience with stunning views and excellent facilities.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" />
                      <h4 className="font-bold">Gates Open</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">12:00 PM</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center mb-3">
                      <Music className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" />
                      <h4 className="font-bold">Music Starts</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="h-96 lg:h-[500px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
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

          {/* FAQs */}
          <div id="faq">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-blue-500 dark:text-blue-400">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <h4 className="text-lg font-bold mb-3 text-blue-500 dark:text-blue-400">{faq.question}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-12 rounded-xl border border-blue-400/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">Need More Information?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Got questions? Our festival team is here to help make your experience amazing.
            </p>
            <a 
              href="mailto:info@agnwfestival.co.uk"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
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
