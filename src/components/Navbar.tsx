
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
    { path: '/travel', label: 'TRAVEL' },
    { path: '/info', label: 'INFO' },
    { path: '/food-drink', label: 'FOOD & DRINK' },
    { path: '/accessibility', label: 'ACCESSIBILITY' },
    { path: '/sustainability', label: 'SUSTAINABILITY' },
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
            {/* Logo */}
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

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              <Link
                to="/tickets"
                className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-6 text-sm uppercase tracking-wider transition-colors rounded"
              >
                TICKETS
              </Link>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-gray-800 dark:text-white p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              
              {/* Menu Button */}
              <button
                onClick={toggleMenu}
                className="text-gray-800 dark:text-white p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors z-50 relative"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Right Side Menu Overlay */}
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
            
            {/* Right Side Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-80 md:w-96 bg-white dark:bg-black z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-gray-800 dark:text-white p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors z-50"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>

              {/* Menu Content */}
              <div className="pt-20 px-8 pb-8">
                <div className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`block text-2xl md:text-3xl font-black tracking-wider transition-colors hover:text-blue-500 dark:hover:text-blue-400 border-b border-gray-200 dark:border-gray-800 pb-4 ${
                          location.pathname === item.path
                            ? 'text-blue-500 dark:text-blue-400'
                            : 'text-gray-800 dark:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + menuItems.length * 0.05 }}
                    className="pt-8"
                  >
                    <Link
                      to="/tickets"
                      onClick={toggleMenu}
                      className="block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 text-lg uppercase tracking-wider transition-colors rounded-lg text-center"
                    >
                      GET TICKETS
                    </Link>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + (menuItems.length + 1) * 0.05 }}
                    className="pt-8 border-t border-gray-200 dark:border-gray-800"
                  >
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">CONTACT</p>
                    <a 
                      href="mailto:info@agnwfestival.co.uk"
                      className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                    >
                      info@agnwfestival.co.uk
                    </a>
                  </motion.div>
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
