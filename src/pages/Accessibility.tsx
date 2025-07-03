
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Wheelchair, Eye, Ear, Heart } from "lucide-react";

const Accessibility = () => {
  const accessibilityFeatures = [
    {
      icon: <Wheelchair className="w-8 h-8" />,
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
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <PageHeader 
        title="ACCESSIBILITY"
        subtitle="AGNW FEST is committed to providing an inclusive festival experience for everyone"
        gradientFrom="from-green-500"
        gradientTo="to-emerald-600"
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
              ACCESSIBILITY SERVICES
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-green-500/50 transition-colors"
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-green-500/20 to-emerald-600/20 p-12 rounded-xl border border-green-400/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-500 dark:text-green-400">Need Additional Support?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Contact our accessibility team in advance to discuss your specific requirements and arrange any additional support you may need.
            </p>
            <a 
              href="mailto:accessibility@agnwfestival.co.uk"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Contact Accessibility Team
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accessibility;
