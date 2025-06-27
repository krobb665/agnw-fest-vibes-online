
const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AGNW FEST 2026
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            30th May 2026 • The UK's most electrifying music experience
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Accessibility
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 AGNW Fest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
