
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const menuItems = [
    { path: '/', label: 'HOME' },
    { path: '/lineup', label: 'LINE UP' },
    { path: '/tickets', label: 'TICKETS' },
    { path: '/info', label: 'INFO' },
    { path: '/news', label: 'NEWS' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left side - Logo */}
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
            
            {/* Center - Date and Location */}
            <div className="hidden md:block text-white text-sm font-medium tracking-wider">
              <div className="text-blue-400">30 MAY 2026</div>
              <div className="text-white">AGNEW PARK • STRANRAER</div>
            </div>

            {/* Right side - Navigation and Controls */}
            <div className="flex items-center space-x-8">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      location.pathname === item.path
                        ? 'text-blue-400'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Tickets Button */}
              <Link
                to="/tickets"
                className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-6 text-sm uppercase tracking-wider transition-colors rounded whitespace-nowrap"
              >
                TICKETS
              </Link>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-white hover:text-blue-300 p-2 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-white hover:text-blue-300 p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-md bg-white dark:bg-gray-900 shadow-xl z-40 p-6 overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-gray-800 dark:text-white p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              {/* Menu Content */}
              <div className="pt-16">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block py-3 px-4 rounded-md transition-colors ${
                          location.pathname === item.path
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link
                    to="/tickets"
                    onClick={toggleMenu}
                    className="block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 text-center uppercase tracking-wider transition-colors rounded-lg"
                  >
                    GET TICKETS
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
