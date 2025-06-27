
const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-purple-500/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AGNW FEST 2026
            </span>
          </div>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full text-xl font-bold inline-block mb-8">
            30TH MAY 2026 • THE UK'S MOST ELECTRIFYING MUSIC EXPERIENCE
          </div>
          
          <div className="flex justify-center space-x-12 mb-12">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-lg font-bold tracking-wider">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-lg font-bold tracking-wider">
              TERMS & CONDITIONS
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-lg font-bold tracking-wider">
              ACCESSIBILITY
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-2xl font-black text-white mb-2">50K+</div>
              <div className="text-purple-300 font-bold">EXPECTED ATTENDEES</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6">
              <div className="text-2xl font-black text-white mb-2">100+</div>
              <div className="text-pink-300 font-bold">ARTISTS PERFORMING</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <div className="text-2xl font-black text-white mb-2">3</div>
              <div className="text-cyan-300 font-bold">MASSIVE STAGES</div>
            </div>
          </div>

          <p className="text-lg text-gray-500 font-medium">
            © 2026 AGNW Fest. All rights reserved. | Made with ❤️ for music lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
