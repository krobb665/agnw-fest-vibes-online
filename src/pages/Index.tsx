
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LineupBar from "@/components/LineupBar";
import FullLineup from "@/components/FullLineup";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <LineupBar />
        <FullLineup />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
