
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaTicketAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
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
              className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 text-sm uppercase tracking-wider flex items-center space-x-2 transition-colors"
            >
              <FaTicketAlt />
              <span>BUY TICKETS</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-2 bg-black/95 backdrop-blur-sm rounded-lg border border-gray-800">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-wider font-bold transition-colors ${
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
              className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
            >
              <FaTicketAlt />
              <span>BUY TICKETS</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
