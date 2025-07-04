
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Lineup from "./pages/Lineup";
import Tickets from "./pages/Tickets";
import Info from "./pages/Info";
import TermsAndConditions from "./pages/TermsAndConditions";
import Accessibility from "./pages/Accessibility";
import Sustainability from "./pages/Sustainability";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ResidentInfo from "./pages/ResidentInfo";
import NotFound from "./pages/NotFound";

// Privacy Policy and Drink Aware pages (placeholder components)
const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gray-900 text-white pt-32 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p>This is a placeholder for the Privacy Policy page.</p>
      </div>
    </div>
  </div>
);

const DrinkAware = () => (
  <div className="min-h-screen bg-gray-900 text-white pt-32 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Drink Aware</h1>
      <div className="prose prose-invert max-w-none">
        <p>This is a placeholder for the Drink Aware information page.</p>
      </div>
    </div>
  </div>
);

const queryClient = new QueryClient();

// Custom component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/info" element={<Info />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resident-info" element={<ResidentInfo />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/drink-aware" element={<DrinkAware />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
