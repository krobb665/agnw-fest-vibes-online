
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Lineup from "@/components/Lineup";
import Tickets from "@/components/Tickets";
import Info from "@/components/Info";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Lineup />
      <Tickets />
      <Info />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
