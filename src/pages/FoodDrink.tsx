
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Utensils, Coffee, Wine, Leaf } from "lucide-react";

const FoodDrink = () => {
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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <PageHeader 
        title="FOOD & DRINK"
        subtitle="Delicious food and refreshing drinks to fuel your festival experience"
        gradientFrom="from-orange-500"
        gradientTo="to-red-500"
      />

      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-orange-500">
              WHAT'S ON OFFER
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {foodOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 transition-colors text-center"
                >
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{option.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-orange-500/20 to-red-500/20 p-12 rounded-xl border border-orange-400/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Coming Soon</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We're curating an amazing selection of food and drink vendors. Full details will be announced closer to the festival date.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodDrink;
