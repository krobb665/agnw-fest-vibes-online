
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the age restrictions?",
      answer: "AGNW Fest 2026 is open to all ages. Under 16s must be accompanied by an adult. Under 5s go free but still require a ticket."
    },
    {
      question: "How do I get there?",
      answer: "The festival is easily accessible by train, bus, and car. Special shuttle services will run from major transport hubs."
    },
    {
      question: "What can I bring?",
      answer: "You can bring small bags, sealed water bottles, and food. No glass, professional cameras, or illegal substances allowed."
    },
    {
      question: "Where can I stay?",
      answer: "There are hotels, hostels, and camping options available. Book early as accommodation fills up quickly during festival weekend."
    },
    {
      question: "What about accessibility?",
      answer: "We're committed to making the festival accessible. Dedicated viewing areas, accessible toilets, and hearing loops are available."
    }
  ];

  return (
    <section id="info" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-black text-black text-center mb-16 tracking-tighter">
          INFO
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-300 bg-white"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-black text-black tracking-wide">
                  {faq.question}
                </h3>
                <div className="text-black">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
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
