
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube, FaMapMarkerAlt, FaUsers, FaMusic } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';
import CountdownTimer from './CountdownTimer';
import NewsletterSignup from './NewsletterSignup';
import FestivalTimeline from './FestivalTimeline';

const About = () => {
  const festivalStats = [
    { icon: <FaUsers className="text-4xl text-blue-400" />, number: "10,000+", label: "Expected Attendees" },
    { icon: <FaMusic className="text-4xl text-blue-400" />, number: "50+", label: "Artists & Bands" },
    { icon: <FaMapMarkerAlt className="text-4xl text-blue-400" />, number: "1", label: "Incredible Day" }
  ];

  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              AGNW FEST 2026
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            Scotland's newest music festival coming to the beautiful Agnew Park in Stranraer. 
            Experience world-class music in the heart of Dumfries & Galloway.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16">
          <CountdownTimer />
        </div>

        {/* Festival Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {festivalStats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gray-900/50 rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-blue-400">ABOUT THE FESTIVAL</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                AGNW Fest 2026 marks the beginning of a new era for music festivals in Scotland. 
                Set in the picturesque Agnew Park in Stranraer, this inaugural event promises to 
                deliver an unforgettable experience combining world-class music with Scottish hospitality.
              </p>
              <p>
                Located in the heart of Dumfries & Galloway, Stranraer offers stunning natural beauty 
                and rich cultural heritage. The festival will showcase both established and emerging 
                artists across multiple genres, celebrating the diversity of contemporary music.
              </p>
              <p>
                With easy access by road, rail, and ferry from Belfast, AGNW Fest is perfectly 
                positioned to welcome music lovers from across Scotland, Northern Ireland, and beyond.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-blue-400">WHY STRANRAER?</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Stranraer is a hidden gem on Scotland's southwest coast, offering breathtaking 
                landscapes and a warm welcome to visitors. The town's strategic location makes 
                it easily accessible while providing an intimate festival atmosphere.
              </p>
              <p>
                Agnew Park provides the perfect natural amphitheater for outdoor performances, 
                with excellent acoustics and stunning views of the surrounding countryside. 
                The park's facilities and accessibility make it ideal for festival-goers of all ages.
              </p>
              <p>
                Supporting local businesses and celebrating Scottish culture, AGNW Fest will 
                feature local food vendors, craft beer, and traditional Scottish entertainment 
                alongside international acts.
              </p>
            </div>
          </div>
        </div>

        {/* Festival Timeline */}
        <div className="mb-16">
          <FestivalTimeline />
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16">
          <NewsletterSignup />
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">FOLLOW THE JOURNEY</h3>
          <p className="text-gray-400 mb-8">Stay connected for the latest updates, behind-the-scenes content, and exclusive announcements</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-3 bg-gray-900/50 rounded-full hover:bg-blue-500/20">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-3 bg-gray-900/50 rounded-full hover:bg-blue-500/20">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-3 bg-gray-900/50 rounded-full hover:bg-blue-500/20">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-3 bg-gray-900/50 rounded-full hover:bg-blue-500/20">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-3 bg-gray-900/50 rounded-full hover:bg-blue-500/20">
              <SiSpotify size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-3 bg-gray-900/50 rounded-full hover:bg-blue-500/20">
              <SiApplemusic size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
