
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';

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
    { path: '/contact', label: 'CONTACT' },
    { path: '#', label: 'SOCIAL', isDivider: true },
    { path: 'https://instagram.com', label: 'Instagram', icon: <FaInstagram className="mr-2" />, isExternal: true },
    { path: 'https://twitter.com', label: 'Twitter', icon: <FaTwitter className="mr-2" />, isExternal: true },
    { path: 'https://tiktok.com', label: 'TikTok', icon: <FaTiktok className="mr-2" />, isExternal: true },
    { path: 'https://youtube.com', label: 'YouTube', icon: <FaYoutube className="mr-2" />, isExternal: true },
    { path: 'https://spotify.com', label: 'Spotify', icon: <SiSpotify className="mr-2" />, isExternal: true },
    { path: 'https://music.apple.com', label: 'Apple Music', icon: <SiApplemusic className="mr-2" />, isExternal: true }
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
            <div className="flex items-center space-x-6">
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
              
              {/* Date and Location */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="text-white text-sm font-medium tracking-wider">
                  <div className="text-blue-400">30 MAY 2026</div>
                  <div className="text-white">AGNEW PARK • STRANRAER</div>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                  {menuItems.slice(0, 5).map((item) => (
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
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              <Link
                to="/tickets"
                className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-6 text-sm uppercase tracking-wider transition-colors rounded"
              >
                TICKETS
              </Link>
              
              {/* More Menu Dropdown */}
              <div className="hidden md:block relative group">
                <button className="text-white hover:text-blue-300 text-sm font-medium tracking-wide px-2 py-1">
                  MORE
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50">
                  {menuItems.slice(5, 10).map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === item.path
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-md bg-white dark:bg-gray-900 shadow-xl z-40 p-6 overflow-y-auto"
            >
              {/* Date and Location for mobile */}
              <div className="md:hidden text-gray-800 dark:text-white mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="text-blue-500 font-medium">30 MAY 2026</div>
                <div>AGNEW PARK • STRANRAER • SCOTLAND</div>
              </div>
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
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <li key={item.path + index}>
                      {item.isDivider ? (
                        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                      ) : item.isExternal ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center py-3 px-4 rounded-md transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center py-3 px-4 rounded-md transition-colors ${
                            location.pathname === item.path
                              ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
