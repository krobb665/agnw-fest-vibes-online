
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Lineup from "./pages/Lineup";
import Tickets from "./pages/Tickets";
import Travel from "./pages/Travel";
import Info from "./pages/Info";
import TermsAndConditions from "./pages/TermsAndConditions";
import FoodDrink from "./pages/FoodDrink";
import Accessibility from "./pages/Accessibility";
import Sustainability from "./pages/Sustainability";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ResidentInfo from "./pages/ResidentInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/info" element={<Info />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/food-drink" element={<FoodDrink />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resident-info" element={<ResidentInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
