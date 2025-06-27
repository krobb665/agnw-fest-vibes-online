
import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Clock, Users, Car } from "lucide-react";

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "AGE RESTRICTIONS",
      answer: "AGNW Fest 2026 is open to all ages. Children under 16 must be accompanied by an adult. Under 5s enter free but still require a ticket for security purposes.",
      icon: <Users className="w-6 h-6" />
    },
    {
      question: "GETTING THERE",
      answer: "The festival is easily accessible by train, bus, and car. Special shuttle services will run from major transport hubs. Full travel information and maps will be sent with your tickets.",
      icon: <Car className="w-6 h-6" />
    },
    {
      question: "WHAT TO BRING",
      answer: "Bring your ticket, ID, weather-appropriate clothing, and positive vibes! Full prohibited items list available on our website. No glass containers or professional cameras allowed.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      question: "FOOD & DRINK",
      answer: "Amazing food vendors and bars throughout the site serving everything from local street food to international cuisine. You can bring sealed water bottles and small snacks. Card payments accepted everywhere.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      question: "WEATHER POLICY",
      answer: "The festival happens rain or shine! We've got covered areas and weather protection. In case of extreme weather conditions, we'll keep you updated via email and our official social media channels.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      question: "ACCESSIBILITY",
      answer: "We're committed to making AGNW Fest accessible to everyone. Dedicated viewing areas, accessible toilets, hearing loops, and BSL interpreters available. Contact our accessibility team for specific requirements.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="info" className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              FESTIVAL INFO
            </span>
          </h2>
          <p className="text-2xl text-gray-300 font-bold">
            EVERYTHING YOU NEED TO KNOW
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-500 shadow-xl"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {faq.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-wider group-hover:text-purple-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="w-8 h-8" />
                  ) : (
                    <ChevronDown className="w-8 h-8" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 border-t border-gray-700/50">
                  <p className="text-gray-300 leading-relaxed text-lg font-medium pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold inline-block">
            📧 Still have questions? Contact our support team
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
