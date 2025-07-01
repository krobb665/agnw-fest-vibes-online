
import CountdownTimer from './CountdownTimer';
import NewsletterSignup from './NewsletterSignup';

const About = () => {
  return (
    <section id="about" className="relative bg-gray-900 text-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent transform skew-x-12 -mr-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              ABOUT
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AGNW FEST 2026 is bringing world-class music to the heart of Scotland. 
            Set against the stunning backdrop of Agnew Park in Stranraer, this inaugural festival 
            promises an unforgettable day of music, community, and celebration.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16">
          <CountdownTimer />
        </div>

        {/* Festival Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm font-bold">Day of Music</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm font-bold">Artists</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm font-bold">Expected Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm font-bold">Hours of Music</div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};

export default About;
