
import { Button } from "@/components/ui/button";

const Tickets = () => {
  const ticketTypes = [
    {
      name: "GENERAL ADMISSION",
      price: "£89.50",
      features: ["Festival entry", "Access to all stages", "Food & drink available"]
    },
    {
      name: "VIP WEEKEND",
      price: "£199.50", 
      features: ["Premium viewing areas", "VIP bars & toilets", "Merchandise", "Express entry"],
      popular: true
    },
    {
      name: "PLATINUM",
      price: "£349.50",
      features: ["All VIP benefits", "Meet & greets", "Backstage access", "Premium gift bag"]
    }
  ];

  return (
    <section id="tickets" className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-black text-black mb-4 tracking-tighter">
          TICKETS
        </h2>
        <p className="text-xl text-gray-600 font-bold mb-16">
          ON SALE NOW
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTypes.map((ticket) => (
            <div 
              key={ticket.name}
              className={`border-2 p-8 transition-all duration-300 hover:shadow-lg ${
                ticket.popular 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 bg-white text-black hover:border-black'
              }`}
            >
              {ticket.popular && (
                <div className="bg-white text-black px-4 py-2 text-sm font-black mb-4 inline-block">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-black mb-4 tracking-wider">
                {ticket.name}
              </h3>
              
              <div className="text-4xl font-black mb-6">
                {ticket.price}
              </div>
              
              <ul className="space-y-2 mb-8 text-left">
                {ticket.features.map((feature) => (
                  <li key={feature} className="text-sm font-medium">
                    • {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full font-black py-4 text-lg tracking-wider ${
                  ticket.popular
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
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
