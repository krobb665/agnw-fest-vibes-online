
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Tickets = () => {
  const ticketTiers = [
    {
      name: "General Admission",
      price: "£89",
      features: [
        "Festival entry",
        "Access to all stages",
        "Food & drink available",
        "Merchandise stalls"
      ],
      popular: false
    },
    {
      name: "VIP Experience",
      price: "£199",
      features: [
        "Everything in General Admission",
        "VIP viewing areas",
        "Dedicated bars & toilets",
        "VIP merchandise pack",
        "Meet & greet opportunities"
      ],
      popular: true
    },
    {
      name: "Platinum Package",
      price: "£349",
      features: [
        "Everything in VIP",
        "Side-stage access",
        "Complimentary food & drinks",
        "Backstage tour",
        "Artist meet & greets",
        "Exclusive afterparty access"
      ],
      popular: false
    }
  ];

  return (
    <section id="tickets" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              TICKETS
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose your festival experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
                tier.popular 
                  ? 'border-purple-400 ring-2 ring-purple-400/50' 
                  : 'border-purple-500/20 hover:border-purple-400/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-4xl font-black text-purple-300 mb-4">{tier.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-bold py-3 rounded-full transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    : 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                BUY NOW
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
