
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: '/about', label: 'ABOUT' },
    { path: '/lineup', label: 'LINE-UP' },
    { path: '/tickets', label: 'TICKETS' },
    { path: '/info', label: 'INFO' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/contact', label: 'CONTACT' },
    { path: '/resident-info', label: 'RESIDENTS' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo and Event Info */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
                  alt="AGNW FEST 2026" 
                  className="h-12 md:h-16 w-auto"
                />
              </Link>
              <div className="hidden md:block text-white">
                <div className="text-sm font-bold tracking-wider">30 MAY 2026</div>
                <div className="text-xs text-gray-300">AGNEW PARK • STRANRAER</div>
              </div>
            </div>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:text-cyan-400 transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex items-center justify-center"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={toggleMenu}
                      className={`block text-4xl md:text-6xl font-black tracking-wider transition-colors hover:text-cyan-400 ${
                        location.pathname === item.path
                          ? 'text-cyan-400'
                          : 'text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + menuItems.length * 0.05 }}
                  className="mt-12"
                >
                  <Link
                    to="/tickets"
                    onClick={toggleMenu}
                    className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold py-4 px-12 text-xl uppercase tracking-wider transition-colors rounded-lg"
                  >
                    TICKETS NOT YET ON SALE
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
