
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Recycle, Leaf, Droplets, Sun } from "lucide-react";

const Sustainability = () => {
  const initiatives = [
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
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <PageHeader 
        title="SUSTAINABILITY"
        subtitle="Our commitment to protecting the environment and supporting our local community"
        gradientFrom="from-green-400"
        gradientTo="to-teal-500"
      />

      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-green-500 dark:text-green-400">
              OUR GREEN INITIATIVES
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-green-400/20 to-teal-500/20 p-12 rounded-xl border border-green-400/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-500 dark:text-green-400">Join Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Help us make AGNW FEST the most sustainable festival in Scotland. Bring a reusable water bottle, use public transport, and follow our recycling guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
