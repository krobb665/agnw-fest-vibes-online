
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
        
        <div className="flex justify-center space-x-8 mb-12 text-sm font-bold tracking-wider">
          <a href="#" className="hover:text-gray-300 transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-gray-300 transition-colors">TERMS</a>
          <a href="#" className="hover:text-gray-300 transition-colors">ACCESSIBILITY</a>
        </div>

        <p className="text-gray-400 text-sm">
          © 2026 AGNW Fest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
