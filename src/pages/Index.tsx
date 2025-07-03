
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LineupBar from "@/components/LineupBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <LineupBar />
      <Footer />
    </div>
  );
};

export default Index;
