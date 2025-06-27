
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Age Restrictions",
      answer: "AGNW Fest 2026 is open to all ages. Children under 16 must be accompanied by an adult. Under 5s enter free but still require a ticket."
    },
    {
      question: "Getting There",
      answer: "The festival is easily accessible by train, bus, and car. Special shuttle services will run from major transport hubs. Full travel information will be sent with your tickets."
    },
    {
      question: "What to Bring",
      answer: "Bring your ticket, ID, weather-appropriate clothing, and a positive attitude! Full prohibited items list available on our FAQ page. No glass containers or professional cameras allowed."
    },
    {
      question: "Food & Drink",
      answer: "Amazing food vendors and bars throughout the site. You can bring sealed water bottles and small snacks, but no alcohol from outside. Card payments accepted everywhere."
    },
    {
      question: "Weather Policy",
      answer: "The festival happens rain or shine! In case of extreme weather, we'll keep you updated via email and social media. No refunds for weather-related issues."
    },
    {
      question: "Accessibility",
      answer: "We're committed to making the festival accessible to everyone. Dedicated viewing areas, accessible toilets, and assistance available. Contact us for specific requirements."
    }
  ];

  return (
    <section id="info" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              FESTIVAL INFO
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-purple-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
