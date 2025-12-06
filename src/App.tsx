import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Storitve from "./pages/Storitve";
import Cenik from "./pages/Cenik";
import Blog from "./pages/Blog";
import Kontakt from "./pages/Kontakt";
import ONas from "./pages/ONas";
import ZenskaPage from "./pages/services/ZenskaPage";
import DermatologijaPage from "./pages/services/DermatologijaPage";
import DermatologijaLanding from "./pages/landing/DermatologijaLanding";
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
          <Route path="/storitve" element={<Storitve />} />
          <Route path="/storitve/zenska-360" element={<ZenskaPage />} />
          <Route path="/dermatologija" element={<DermatologijaPage />} />
          <Route path="/dermatologija/pregled-koze-oglasi" element={<DermatologijaLanding />} />
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/o-nas" element={<ONas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
