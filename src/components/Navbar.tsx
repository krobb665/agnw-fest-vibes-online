
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
      const sections = ['home', 'lineup', 'tickets', 'info', 'gallery', 'contact'];
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
            className="text-2xl md:text-3xl font-black text-white tracking-tight hover:text-yellow-400 transition-colors"
          >
            AGNW FEST
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-3 text-sm uppercase tracking-wider font-bold transition-colors ${
                  activeSection === item.id 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('tickets')}
              className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 text-sm uppercase tracking-wider transition-colors"
            >
              TICKETS NOT YET ON SALE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden text-white p-2 hover:text-yellow-400 transition-colors"
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
                        ? 'text-yellow-400 bg-gray-900' 
                        : 'text-white hover:text-yellow-400 hover:bg-gray-900/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('tickets')}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 text-sm uppercase tracking-wider transition-colors"
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
