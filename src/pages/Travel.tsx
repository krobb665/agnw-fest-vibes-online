
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { MapPin, Clock, Bus, Car, Train, Plane } from "lucide-react";

const Travel = () => {
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

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <PageHeader 
        title="TRAVEL"
        subtitle="Getting to Agnew Park, Stranraer has never been easier"
        gradientFrom="from-blue-500"
        gradientTo="to-blue-600"
      />

      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          {/* Transport Options */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-blue-500 dark:text-blue-400">
              HOW TO GET THERE
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {transportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-blue-500 dark:text-blue-400 mr-4">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{option.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.details.map((detail, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-blue-500 dark:text-blue-400">
              LOCATION
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-8 rounded-xl border border-blue-400/30">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold">Agnew Park</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Stranraer, Dumfries and Galloway, Scotland
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Located in the heart of Stranraer, Agnew Park offers the perfect setting for an unforgettable festival experience.
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
                      <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" />
                      <h4 className="font-bold">Walking Distance</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">15 mins from town</p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Travel;
