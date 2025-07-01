import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiApplemusic, SiSpotify } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
              AGNW FEST 2026
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scotland's newest music festival coming to the beautiful Agnew Park in Stranraer
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
