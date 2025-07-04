import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import EventInfo from "@/components/EventInfo";
import { motion } from "framer-motion";
import { 
  Music, Utensils, Camera, Shield, Car, Tent, 
  User, Eye, Ear, Recycle, Droplets, Sun, Leaf, Mail,
  ChevronDown, ChevronUp, Ticket, AlertTriangle, Clock, UserCheck, 
  CameraOff, CloudRain, XCircle, Info, Camera as CameraIcon, Lock
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

        {/* Ticket Terms & Conditions Section */}
        <section id="terms" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Ticket Terms & Conditions
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden">
            <div className="p-6">
              <p className="text-gray-300 mb-6 text-center">
                By purchasing or using a ticket for AGNW Fest 2026, you agree to the following terms and conditions:
              </p>
              
              <div className="space-y-6">
                {/* General Admission */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <Ticket className="w-5 h-5 mr-2 text-red-400" />
                    General Admission
                  </div>
                  <div className="collapse-content text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>All tickets are non-refundable and non-transferable, except in the event of cancellation.</li>
                      <li>Only tickets purchased via official outlets will be accepted at the gate.</li>
                      <li>Lost, stolen, or damaged tickets will not be replaced.</li>
                    </ul>
                  </div>
                </div>

                {/* Entry Policy */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-400" />
                    Entry Policy
                  </div>
                  <div className="collapse-content text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Entry is permitted from 1:00 PM. Final entry at 8:30 PM. No re-entry after exit.</li>
                      <li>All attendees will be subject to ID checks and bag searches.</li>
                      <li>Entry may be refused to anyone under the influence of drugs or alcohol, or behaving antisocially.</li>
                    </ul>
                  </div>
                </div>

                {/* Age Restrictions */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <UserCheck className="w-5 h-5 mr-2 text-purple-400" />
                    Age Restrictions
                  </div>
                  <div className="collapse-content text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>This is a 16+ event.</li>
                      <li>Attendees under 18 must be accompanied by a responsible adult (aged 21+).</li>
                      <li>Valid photographic ID may be required at the entrance (passport, driver's license, Young Scot card, etc.).</li>
                    </ul>
                  </div>
                </div>

                {/* Prohibited Items */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <XCircle className="w-5 h-5 mr-2 text-yellow-400" />
                    Prohibited Items
                  </div>
                  <div className="collapse-content text-gray-300">
                    <p className="mb-2">Items not permitted include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Glass containers</li>
                      <li>Alcohol or drugs</li>
                      <li>Flares or weapons</li>
                      <li>Large bags (over A4 size)</li>
                      <li>Professional cameras (detachable lenses)</li>
                      <li>Food & drink (except sealed water bottles up to 500ml)</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-400">Confiscated items will not be returned.</p>
                  </div>
                </div>

                {/* Weather Policy */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <CloudRain className="w-5 h-5 mr-2 text-blue-300" />
                    Weather Policy
                  </div>
                  <div className="collapse-content text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>The event will go ahead rain or shine.</li>
                      <li>No refunds will be issued due to inclement weather unless the event is cancelled in full.</li>
                    </ul>
                  </div>
                </div>

                {/* Cancellations & Changes */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    Cancellations & Changes
                  </div>
                  <div className="collapse-content text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>In the unlikely event of cancellation, ticket holders will be offered a refund or transfer as per the official refund policy.</li>
                      <li>Line-up, schedule, and performance times are subject to change and do not warrant a refund.</li>
                    </ul>
                  </div>
                </div>

                {/* Health & Safety */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    Health & Safety
                  </div>
                  <div className="collapse-content text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>You attend AGNW Fest at your own risk.</li>
                      <li>Follow instructions from event staff and signage at all times.</li>
                      <li>AGNW Fest reserves the right to refuse admission or eject any person behaving inappropriately or posing a safety risk.</li>
                    </ul>
                  </div>
                </div>

                {/* Photography & Media */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <CameraIcon className="w-5 h-5 mr-2 text-pink-400" />
                    Photography & Media
                  </div>
                  <div className="collapse-content text-gray-300">
                    <p>Ticket holders consent to being photographed, filmed, or recorded as part of the event, and such media may be used for promotional purposes.</p>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium flex items-center">
                    <User className="w-5 h-5 mr-2 text-purple-400" />
                    Accessibility
                  </div>
                  <div className="collapse-content text-gray-300">
                    <p>If you have access needs, please contact us in advance to make appropriate arrangements. Accessibility passes and facilities are available.</p>
                  </div>
                </div>

                {/* Agreement */}
                <div className="collapse collapse-plus bg-gray-700 rounded-lg border border-amber-500/30">
                  <input type="checkbox" className="peer" defaultChecked />
                  <div className="collapse-title text-xl font-medium flex items-center text-amber-400">
                    <Lock className="w-5 h-5 mr-2" />
                    Agreement
                  </div>
                  <div className="collapse-content text-gray-300">
                    <p>By attending AGNW Fest 2026, you agree to comply with all event rules, policies, and staff instructions.</p>
                    <p className="mt-2 text-sm text-amber-300">Last updated: July 4, 2025</p>
                  </div>
                </div>
              </div>
            </div>
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
