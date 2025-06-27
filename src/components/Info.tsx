
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
      answer: "The festival is easily accessible by train, bus, and car. Special shuttle services will run from major transport hubs in Glasgow."
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
    <section id="info" className="py-32 bg-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-3"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-black text-center mb-20 tracking-tighter">
          INFO
        </h2>

        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-black bg-white"
            >
              <button
                className="w-full px-8 py-8 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg md:text-xl font-black text-black tracking-wide">
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
                <div className="px-8 pb-8 border-t-2 border-black">
                  <p className="text-gray-800 leading-relaxed pt-6 font-medium">
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
