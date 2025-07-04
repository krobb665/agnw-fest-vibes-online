import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import EventInfo from "@/components/EventInfo";
import { motion } from "framer-motion";
import { 
  Music, Utensils, Camera, Shield, Car, Tent, 
  User, Eye, Ear, Recycle, Droplets, Sun, Leaf, Mail
} from "lucide-react";

const Info = () => {
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
    },
    {
      icon: <Car className="w-6 h-6 text-blue-400" />,
      title: "Getting There",
      tip: "Book transport in advance - shuttle buses run from Stranraer town center every 15 minutes during festival hours."
    },
    {
      icon: <Tent className="w-6 h-6 text-blue-400" />,
      title: "What to Bring",
      tip: "Comfortable shoes, layers for Scottish weather, portable charger, and a positive attitude! Small bags only (A4 size)."
    }
  ];

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

  const faqs = [
    {
      question: "What time does the festival start and end?",
      answer: "Gates open at 1:00 PM and the event ends at 10:30 PM. Last entry is at 8:30 PM."
    },
    {
      question: "Can I bring my own food and drinks?",
      answer: "Only sealed water bottles (up to 500ml) are allowed. No other outside food or drinks are permitted, except for medical or dietary requirements."
    },
    {
      question: "Is there an age limit?",
      answer: "AGNW Fest is a 16+ event. Under 18s must be accompanied by an adult aged 21 or over. ID will be required."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We're a cashless event. Contactless payments are accepted at all bars, food stalls, and merchandise stands."
    },
    {
      question: "What should I do if I lose something?",
      answer: "Visit the information desk or lost property point. After the event, contact lostproperty@agnwfest.com"
    },
    {
      question: "What happens if it rains?",
      answer: "The festival is rain or shine! Please check the weather forecast and dress appropriately. Some covered areas will be available."
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
          <a href="#festival-tips" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
            Festival Tips
          </a>
          <a href="#accessibility" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
            Accessibility
          </a>
          <a href="#sustainability" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors">
            Sustainability
          </a>
          <a href="#faq" className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-full transition-colors">
            FAQ
          </a>
        </div>

        {/* Event Info Component */}
        <div className="mb-16">
          <EventInfo />
        </div>

        {/* Festival Tips Section */}
        <section id="festival-tips" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Festival Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivalTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {initiative.icon}
                  <h3 className="text-xl font-semibold ml-2">{initiative.title}</h3>
                </div>
                <p className="text-gray-300">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
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
