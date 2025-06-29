
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <div className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
          AGNW FEST 2026
        </div>
        
        <div className="text-xl font-bold mb-8 tracking-wider">
          30TH MAY 2026 • AGNEW PARK
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-bold tracking-wider">
          <a href="#" className="hover:text-gray-300 transition-colors">© 2026 AGNW Fest</a>
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
      </div>
    </footer>
  );
};

export default Footer;
