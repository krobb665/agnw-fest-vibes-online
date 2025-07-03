
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LineupBar from "@/components/LineupBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <LineupBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
