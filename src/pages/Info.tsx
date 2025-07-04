import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import EventInfo from "@/components/EventInfo";
import { motion } from "framer-motion";
import { 
  Music, Utensils, Camera, Shield, Car, Tent, User, 
  Eye, Ear, Recycle, Droplets, Sun, Leaf, Mail,
  MapPin, Clock, Bus, Train, Plane, Coffee, Wine
} from "lucide-react";

const Info = () => {
  // Festival Tips
  const festivalTips = [
    {
      icon: <Music className="w-6 h-6 text-blue-400" />,
      title: "Music Experience",
      tip: "Download the festival app to create your personal schedule and discover new artists. Arrive early for the best spots!"
    },
    {
      icon: <Utensils className="w-6 h-6 text-blue-400" />,
      title: "Food & Drink",
      tip: "Bring a refillable water bottle - free water stations available throughout the park. Try local Scottish specialties!"
    },
    {
      icon: <Camera className="w-6 h-6 text-blue-400" />,
      title: "Capture Moments",
      tip: "Use #AGNWFEST2026 to share your festival moments and win VIP upgrades! Professional cameras not allowed."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Stay Safe",
      tip: "Download What3Words app for easy location sharing. Keep emergency contacts handy and stay hydrated."
    }
  ];

  // Accessibility Features
  const accessibilityFeatures = [
    {
      icon: <User className="w-6 h-6 text-purple-400" />,
      title: "Personal Assistance",
      description: "Trained staff available to assist with any accessibility needs throughout the festival grounds."
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      title: "Visual Assistance",
      description: "Braille maps, audio guides, and sign language interpreters available upon request."
    },
    {
      icon: <Ear className="w-6 h-6 text-purple-400" />,
      title: "Hearing Assistance",
      description: "Hearing loops at all stages and information points. Sign language interpretation available."
    }
  ];

  // Sustainability Initiatives
  const sustainabilityInitiatives = [
    {
      icon: <Recycle className="w-6 h-6 text-green-400" />,
      title: "Waste Reduction",
      description: "Comprehensive recycling program with clearly marked bins. We aim for 90% waste diversion from landfill."
    },
    {
      icon: <Droplets className="w-6 h-6 text-green-400" />,
      title: "Water Conservation",
      description: "Free water refill stations throughout the venue. Please bring your reusable water bottle."
    },
    {
      icon: <Sun className="w-6 h-6 text-green-400" />,
      title: "Renewable Energy",
      description: "100% of our energy comes from renewable sources, including solar panels on site."
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      title: "Sustainable Transport",
      description: "Discounted public transport tickets and secure bike parking to reduce carbon footprint."
    }
  ];

  // Transport Options
  const transportOptions = [
    {
      icon: <Train className="w-8 h-8" />,
      title: "BY TRAIN",
      description: "Stranraer railway station is just a 10-minute walk from Agnew Park.",
      details: [
        "Direct services from Glasgow Central (3.5 hours)",
        "Connects from major Scottish cities",
        "Special shuttle buses from station",
        "Book in advance for best prices"
      ]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "BY CAR",
      description: "Easy access via major Scottish routes.",
      details: [
        "A77 from Glasgow (2.5 hours)",
        "A75 from Edinburgh (3 hours)",
        "Limited parking - pre-booking essential",
        "Alternative parking with shuttle service"
      ]
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "BY BUS",
      description: "Regular bus services to Stranraer from across Scotland.",
      details: [
        "Scottish Citylink services",
        "Local bus routes",
        "Festival shuttle buses",
        "Drop-off points near venue"
      ]
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "BY FERRY",
      description: "Stena Line ferries from Belfast to Cairnryan.",
      details: [
        "Belfast to Cairnryan (7 miles away)",
        "Special festival shuttle buses",
        "Book ferry in advance",
        "Scenic journey across Irish Sea"
      ]
    }
  ];

  // Food Options
  const foodOptions = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Street Food",
      description: "Gourmet food trucks and local vendors serving everything from Scottish classics to international cuisine."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Specialty Coffee",
      description: "Local roasters and baristas serving premium coffee and specialty drinks to keep you energized."
    },
    {
      icon: <Wine className="w-6 h-6" />,
      title: "Local Drinks",
      description: "Scottish craft beers, whisky, and local spirits alongside non-alcoholic options."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Healthy Options",
      description: "Vegan, vegetarian, and gluten-free options available throughout the festival site."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <PageHeader 
        title="Festival Info" 
        subtitle="Everything you need to know for an amazing AGNW Fest 2026 experience"
        gradientFrom="from-blue-500"
        gradientTo="to-purple-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#travel" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
            Travel
          </a>
          <a href="#food-drink" className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-full transition-colors">
            Food & Drink
          </a>
          <a href="#festival-tips" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors">
            Festival Tips
          </a>
          <a href="#accessibility" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
            Accessibility
          </a>
          <a href="#sustainability" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-full transition-colors">
            Sustainability
          </a>
        </div>

        {/* Event Info */}
        <div className="mb-16">
          <EventInfo />
        </div>

        {/* Travel Section */}
        <section id="travel" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Travel Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold">{option.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{option.description}</p>
                <ul className="space-y-2">
                  {option.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://maps.app.goo.gl/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View on Google Maps
            </a>
          </div>
        </section>

        {/* Food & Drink Section */}
        <section id="food-drink" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Food & Drink
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {foodOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-orange-400 mb-3 flex justify-center">
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                <p className="text-gray-300 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center bg-gradient-to-r from-orange-500/20 to-red-500/20 p-8 rounded-xl border border-orange-400/30">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Coming Soon</h3>
            <p className="text-gray-300">
              We're curating an amazing selection of food and drink vendors. Full details will be announced closer to the festival date.
            </p>
          </div>
        </section>

        {/* Festival Tips Section */}
        <section id="festival-tips" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Festival Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {festivalTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-3">
                  {tip.icon}
                  <h3 className="text-xl font-semibold ml-2">{tip.title}</h3>
                </div>
                <p className="text-gray-300">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Accessibility Section */}
        <section id="accessibility" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Accessibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-2">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sustainability Section */}
        <section id="sustainability" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Sustainability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-3">
                  {initiative.icon}
                  <h3 className="text-xl font-semibold ml-2">{initiative.title}</h3>
                </div>
                <p className="text-gray-300">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center py-12 bg-gray-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you with any questions about the festival, accessibility, or anything else.
          </p>
          <a
            href="mailto:support@agnwfest.com"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Support
          </a>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Info;
