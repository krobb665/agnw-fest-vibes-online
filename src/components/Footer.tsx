
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 text-center relative">
      {/* Add padding top to account for overlapping LineupBar */}
      <div className="pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/25c92fd8-7c33-43c5-8fff-7e74e0adea90.png" 
              alt="AGNW FEST 2026" 
              className="h-20 w-auto mx-auto mb-4"
            />
          </div>
          
          <div className="text-xl font-bold mb-8 tracking-wider">
            30TH MAY 2026 • AGNEW PARK
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-bold tracking-wider">
            <a href="#" className="hover:text-gray-300 transition-colors">© 2026 AGNW Fest</a>
            <span className="text-gray-500">•</span>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Ticket Terms</Link>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Drink Aware</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Manage my cookies</a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaTiktok size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <SiSpotify size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <SiApplemusic size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
