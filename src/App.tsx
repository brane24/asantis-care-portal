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
import ZakajAsantis from "./pages/ZakajAsantis";
import ZenskaPage from "./pages/services/ZenskaPage";
import DermatologijaPage from "./pages/dermatologija/DermatologijaPage";
import PregledZnamenjPage from "./pages/dermatologija/PregledZnamenjPage";
import OdstranjevanjeBradavicPage from "./pages/dermatologija/OdstranjevanjeBradavicPage";
import LaserskoOdstranjevanjeZilPage from "./pages/dermatologija/LaserskoOdstranjevanjeZilPage";
import LaserskoOdstranjevanjeDlacicPage from "./pages/dermatologija/LaserskoOdstranjevanjeDlacicPage";
import PomlajevanjeKozePage from "./pages/dermatologija/PomlajevanjeKozePage";
import OdstranjevanjeZnamenjPage from "./pages/dermatologija/OdstranjevanjeZnamenjPage";
import DermatologijaLanding from "./pages/landing/DermatologijaLanding";
import ZobozdravnikLjubljanaPage from "./pages/zobozdravstvo/ZobozdravnikLjubljanaPage";
import OrtodontLjubljanaPage from "./pages/zobozdravstvo/OrtodontLjubljanaPage";
import ProtetikaPage from "./pages/zobozdravstvo/ProtetikaPage";
import ZobozdravnikNujnoPage from "./pages/zobozdravstvo/ZobozdravnikNujnoPage";
import BeljenjeZobPage from "./pages/zobozdravstvo/BeljenjeZobPage";
import NevidniZobniAparatPage from "./pages/zobozdravstvo/NevidniZobniAparatPage";
import ZobniImplantatiPage from "./pages/zobozdravstvo/ZobniImplantatiPage";
import PrivatPediaterPage from "./pages/pediatrija/PrivatPediaterPage";
import OkuzbaDihalPage from "./pages/pediatrija/OkuzbaDihalPage";
import AtopijskiDermatitisPage from "./pages/pediatrija/AtopijskiDermatitisPage";
import PediaterPulmologPage from "./pages/pediatrija/PediaterPulmologPage";
import PediaterAstmaPage from "./pages/pediatrija/PediaterAstmaPage";
import PediaterAlergologPage from "./pages/pediatrija/PediaterAlergologPage";
import FizioterapijaLjubljanaPage from "./pages/fizioterapija/FizioterapijaLjubljanaPage";
import GinekologijaLjubljanaPage from "./pages/ginekologija/GinekologijaLjubljanaPage";
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
          <Route path="/dermatologija/pregled-nevarnih-koznih-znamenj" element={<PregledZnamenjPage />} />
          <Route path="/dermatologija/odstranjevanje-bradavic" element={<OdstranjevanjeBradavicPage />} />
          <Route path="/dermatologija/lasersko-odstranjevanje-zil" element={<LaserskoOdstranjevanjeZilPage />} />
          <Route path="/dermatologija/lasersko-odstranjevanje-dlacic" element={<LaserskoOdstranjevanjeDlacicPage />} />
          <Route path="/dermatologija/pomlajevanje-koze" element={<PomlajevanjeKozePage />} />
          <Route path="/dermatologija/odstranjevanje-znamenj" element={<OdstranjevanjeZnamenjPage />} />
          <Route path="/dermatologija/pregled-koze-oglasi" element={<DermatologijaLanding />} />
          <Route path="/zobozdravstvo/zobozdravnik-ljubljana" element={<ZobozdravnikLjubljanaPage />} />
          <Route path="/zobozdravstvo/ortodont-ljubljana" element={<OrtodontLjubljanaPage />} />
          <Route path="/zobozdravstvo/protetika" element={<ProtetikaPage />} />
          <Route path="/zobozdravstvo/zobozdravnik-nujno-zobobol" element={<ZobozdravnikNujnoPage />} />
          <Route path="/zobozdravstvo/beljenje-zob" element={<BeljenjeZobPage />} />
          <Route path="/zobozdravstvo/nevidni-zobni-aparat" element={<NevidniZobniAparatPage />} />
          <Route path="/zobozdravstvo/zobni-implantati" element={<ZobniImplantatiPage />} />
          <Route path="/pediatrija/privat-pediater-ljubljana" element={<PrivatPediaterPage />} />
          <Route path="/pediatrija/okuzba-dihal-pri-otroku" element={<OkuzbaDihalPage />} />
          <Route path="/pediatrija/atopijski-dermatitis" element={<AtopijskiDermatitisPage />} />
          <Route path="/pediatrija/pediater-pulmolog" element={<PediaterPulmologPage />} />
          <Route path="/pediatrija/pediater-astma-pri-otroku" element={<PediaterAstmaPage />} />
          <Route path="/pediatrija/pediater-alergolog" element={<PediaterAlergologPage />} />
          <Route path="/fizioterapija/fizioterapija-ljubljana" element={<FizioterapijaLjubljanaPage />} />
          <Route path="/ginekologija/ginekologija-ljubljana" element={<GinekologijaLjubljanaPage />} />
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/zakaj-asantis" element={<ZakajAsantis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
