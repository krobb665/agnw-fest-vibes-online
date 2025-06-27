
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent! 🎵",
      description: "Thanks for getting in touch. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-purple-900/30 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>
          <p className="text-2xl text-gray-300 font-bold mb-4">
            GET IN TOUCH WITH THE AGNW TEAM
          </p>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold inline-block">
            💬 We typically respond within 24 hours
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-gray-700 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-8 tracking-wider">SEND US A MESSAGE</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 rounded-xl py-4 text-lg font-medium"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 rounded-xl py-4 text-lg font-medium"
                  />
                </div>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gray-800/50 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 resize-none rounded-xl text-lg font-medium"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white/20"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-wider">EMAIL US</h3>
                  <p className="text-purple-300 font-medium text-lg">info@agnwfest.com</p>
                </div>
              </div>
              <p className="text-gray-300 font-medium">
                For general inquiries, press, partnerships, and support
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm border-2 border-pink-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 rounded-full">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-wider">CALL US</h3>
                  <p className="text-pink-300 font-medium text-lg">+44 20 1234 5678</p>
                </div>
              </div>
              <p className="text-gray-300 font-medium">
                Office hours: Mon-Fri 9AM-6PM GMT
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-cyan-600 to-purple-600 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-wider">FIND US</h3>
                  <p className="text-cyan-300 font-medium text-lg">London, UK</p>
                </div>
              </div>
              <p className="text-gray-300 font-medium">
                Festival location details sent with tickets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
