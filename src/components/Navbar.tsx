
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'lineup', 'tickets', 'info', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'lineup', label: 'LINE-UP' },
    { id: 'tickets', label: 'TICKETS' },
    { id: 'info', label: 'INFO' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/95 backdrop-blur-sm py-2" : "bg-transparent py-4"
    } border-b border-gray-800`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
              alt="AGNW FEST 2026" 
              className="h-12 md:h-16 w-auto"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-3 text-sm uppercase tracking-wider font-bold transition-colors ${
                  activeSection === item.id 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('tickets')}
              className="ml-4 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-6 text-sm uppercase tracking-wider transition-colors rounded-lg"
            >
              TICKETS NOT YET ON SALE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden text-white p-2 hover:text-blue-400 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800 text-white">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 text-sm uppercase tracking-wider font-bold transition-colors ${
                      activeSection === item.id 
                        ? 'text-blue-400 bg-gray-900' 
                        : 'text-white hover:text-blue-400 hover:bg-gray-900/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('tickets')}
                  className="mt-4 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-6 text-sm uppercase tracking-wider transition-colors rounded-lg"
                >
                  TICKETS NOT YET ON SALE
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
