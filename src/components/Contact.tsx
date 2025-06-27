
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
      title: "Message sent!",
      description: "Thanks for getting in touch. We'll get back to you soon.",
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
    <section id="contact" className="py-32 bg-black relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white text-center mb-20 tracking-tighter">
          CONTACT
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-white bg-transparent text-white placeholder:text-gray-400 focus:border-gray-300 text-lg py-6 font-bold tracking-wide"
              />
              <Input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-white bg-transparent text-white placeholder:text-gray-400 focus:border-gray-300 text-lg py-6 font-bold tracking-wide"
              />
            </div>
            
            <Textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="border-2 border-white bg-transparent text-white placeholder:text-gray-400 focus:border-gray-300 text-lg resize-none font-bold tracking-wide"
            />

            <Button 
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 font-black py-8 text-lg tracking-[0.2em] transition-all duration-300 border-4 border-white hover:scale-105"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
