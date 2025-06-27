
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Tickets = () => {
  const ticketTiers = [
    {
      name: "GENERAL ADMISSION",
      price: "£89",
      originalPrice: "£99",
      features: [
        "Festival entry",
        "Access to all stages",
        "Food & drink available",
        "Merchandise stalls",
        "Free water stations"
      ],
      popular: false,
      color: "from-gray-800 to-gray-700"
    },
    {
      name: "VIP EXPERIENCE",
      price: "£199",
      originalPrice: "£229",
      features: [
        "Everything in General Admission",
        "VIP viewing areas",
        "Dedicated bars & toilets",
        "VIP merchandise pack",
        "Meet & greet opportunities",
        "Express entry lanes"
      ],
      popular: true,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "PLATINUM PACKAGE",
      price: "£349",
      originalPrice: "£399",
      features: [
        "Everything in VIP",
        "Side-stage access",
        "Complimentary food & drinks",
        "Backstage tour",
        "Artist meet & greets",
        "Exclusive afterparty access",
        "Premium gift bag"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="tickets" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              TICKETS
            </span>
          </h2>
          <p className="text-2xl text-gray-300 font-bold mb-4">
            CHOOSE YOUR FESTIVAL EXPERIENCE
          </p>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold inline-block">
            🔥 EARLY BIRD PRICING - LIMITED TIME
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ticketTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative backdrop-blur-sm border-2 rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-2xl ${
                tier.popular 
                  ? 'border-purple-400 ring-4 ring-purple-400/30 bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
                  : 'border-gray-600 hover:border-purple-400/50 bg-gradient-to-br from-gray-900/80 to-black/80'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-black tracking-wider shadow-xl">
                    🎵 MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-white mb-4 tracking-wider">{tier.name}</h3>
                <div className="mb-4">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-2">
                    {tier.price}
                  </div>
                  <div className="text-lg text-gray-400 line-through">
                    was {tier.originalPrice}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-200 text-lg">
                    <Check className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-black py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  tier.popular
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 border-2 border-white/20'
                    : 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-purple-600 hover:to-pink-600 border-2 border-gray-500'
                }`}
              >
                BUY NOW
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg font-medium">
            All tickets include booking fees • Payment plans available • Refund protection
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
