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
import KaseljPriOtrokuPage from "./pages/pediatrija/KaseljPriOtrokuPage";
import FizioterapijaLjubljanaPage from "./pages/fizioterapija/FizioterapijaLjubljanaPage";
import BolecinaVratuPage from "./pages/fizioterapija/BolecinaVratuPage";
import BolecinaKrizuPage from "./pages/fizioterapija/BolecinaKrizuPage";
import ManualnaFizioterapijaPage from "./pages/fizioterapija/ManualnaFizioterapijaPage";
import SkeletnaBolevcinaPage from "./pages/fizioterapija/SkeletnaBolevcinaPage";
import FizioterapijaGlavobolaPage from "./pages/fizioterapija/FizioterapijaGlavobolaPage";
import FizioterapijaSportnikovPage from "./pages/fizioterapija/FizioterapijaSportnikovPage";
import RehabilitacijaPoPoskodbahPage from "./pages/fizioterapija/RehabilitacijaPoPoskodbahPage";
import AkupunkturaPage from "./pages/fizioterapija/AkupunkturaPage";
import GinekologijaLjubljanaPage from "./pages/ginekologija/GinekologijaLjubljanaPage";
import PreventivniPregledPage from "./pages/ginekologija/PreventivniPregledPage";
import GinekoloskiUltrazvokPage from "./pages/ginekologija/GinekoloskiUltrazvokPage";
import KontracepcijPage from "./pages/ginekologija/KontracepcijPage";
import ManjsiPosegiPage from "./pages/ginekologija/ManjsiPosegiPage";
import GinekoloskaVnetjaPage from "./pages/ginekologija/GinekoloskaVnetjaPage";
import UhajanjeUrinaPage from "./pages/ginekologija/UhajanjeUrinaPage";
import OrtopedLjubljanaPage from "./pages/ortopedija/OrtopedLjubljanaPage";
import ArtrozaKolenaPage from "./pages/ortopedija/ArtrozaKolenaPage";
import ArtrozaKolkaPage from "./pages/ortopedija/ArtrozaKolkaPage";
import BolecinaVKrizuOrtopedijaPage from "./pages/ortopedija/BolecinaVKrizuOrtopedijaPage";
import BolecinaVRamiPage from "./pages/ortopedija/BolecinaVRamiPage";
import UltrazvokLjubljanaPage from "./pages/ultrazvok/UltrazvokLjubljanaPage";
import UltrazvokTrebuhaPage from "./pages/ultrazvok/UltrazvokTrebuhaPage";
import UltrazvokScitnicePage from "./pages/ultrazvok/UltrazvokScitnicePage";
import UltrazvokModPage from "./pages/ultrazvok/UltrazvokModPage";
import UltrazvokMehkihTkivPage from "./pages/ultrazvok/UltrazvokMehkihTkivPage";
import UltrazvokDojkPage from "./pages/ultrazvok/UltrazvokDojkPage";
import UltrazvokVenPage from "./pages/ultrazvok/UltrazvokVenPage";
import UltrazvokArterijNogPage from "./pages/ultrazvok/UltrazvokArterijNogPage";
import UltrazvokVratnihArterijPage from "./pages/ultrazvok/UltrazvokVratnihArterijPage";
import PsihiaterLjubljanaPage from "./pages/psihiatrija/PsihiaterLjubljanaPage";
import DepresijaAnksioznostPage from "./pages/psihiatrija/DepresijaAnksioznostPage";
import IzgorelostPage from "./pages/psihiatrija/IzgorelostPage";
import NespečnostPage from "./pages/psihiatrija/NespečnostPage";
import MotnjeHranjenjaPage from "./pages/psihiatrija/MotnjeHranjenjaPage";
import PostCovidSindromPage from "./pages/psihiatrija/PostCovidSindromPage";
import OKMPage from "./pages/psihiatrija/OKMPage";
import BrankoPirsPage from "./pages/ekipa/BrankoPirsPage";
import AnaKotnikPirsPage from "./pages/ekipa/AnaKotnikPirsPage";
import AlesPorcnikPage from "./pages/ekipa/AlesPorcnikPage";
import GregorCadezPage from "./pages/ekipa/GregorCadezPage";
import DraganJejinicPage from "./pages/ekipa/DraganJejinicPage";
import PetraSketPage from "./pages/ekipa/PetraSketPage";
import MonikaSmrkoljPage from "./pages/ekipa/MonikaSmrkoljPage";
import MatejaSirsePage from "./pages/ekipa/MatejaSirsePage";
import JaniPetrovicPage from "./pages/ekipa/JaniPetrovicPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import SrceOziljePage from "./pages/paketi/SrceOziljePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/pediatrija/kaselj-pri-otroku" element={<KaseljPriOtrokuPage />} />
          <Route path="/fizioterapija/fizioterapija-ljubljana" element={<FizioterapijaLjubljanaPage />} />
          <Route path="/fizioterapija/bolecina-v-vratu" element={<BolecinaVratuPage />} />
          <Route path="/fizioterapija/bolecina-v-krizu" element={<BolecinaKrizuPage />} />
          <Route path="/fizioterapija/manualna-terapija" element={<ManualnaFizioterapijaPage />} />
          <Route path="/fizioterapija/skeletna-bolecina" element={<SkeletnaBolevcinaPage />} />
          <Route path="/fizioterapija/fizioterapija-glavobola" element={<FizioterapijaGlavobolaPage />} />
          <Route path="/fizioterapija/fizioterapija-sportnikov" element={<FizioterapijaSportnikovPage />} />
          <Route path="/fizioterapija/rehabilitacija-po-poskodbah" element={<RehabilitacijaPoPoskodbahPage />} />
          <Route path="/fizioterapija/akupunktura" element={<AkupunkturaPage />} />
          <Route path="/ginekologija/ginekologija-ljubljana" element={<GinekologijaLjubljanaPage />} />
          <Route path="/ginekologija/preventivni-pregled" element={<PreventivniPregledPage />} />
          <Route path="/ginekologija/ginekoloski-ultrazvok" element={<GinekoloskiUltrazvokPage />} />
          <Route path="/ginekologija/kontracepcija" element={<KontracepcijPage />} />
          <Route path="/ginekologija/manjsi-posegi" element={<ManjsiPosegiPage />} />
          <Route path="/ginekologija/ginekoloska-vnetja" element={<GinekoloskaVnetjaPage />} />
          <Route path="/ginekologija/uhajanje-urina-urinska-inkontinenca" element={<UhajanjeUrinaPage />} />
          <Route path="/ortopedija/ortoped-ljubljana" element={<OrtopedLjubljanaPage />} />
          <Route path="/ortopedija/artroza-kolena" element={<ArtrozaKolenaPage />} />
          <Route path="/ortopedija/artroza-kolka" element={<ArtrozaKolkaPage />} />
          <Route path="/ortopedija/bolecina-v-krizu" element={<BolecinaVKrizuOrtopedijaPage />} />
          <Route path="/ortopedija/bolecina-v-rami" element={<BolecinaVRamiPage />} />
          <Route path="/ultrazvok/ultrazvok-ljubljana" element={<UltrazvokLjubljanaPage />} />
          <Route path="/ultrazvok/ultrazvok-trebuha" element={<UltrazvokTrebuhaPage />} />
          <Route path="/ultrazvok/ultrazvok-scitnice" element={<UltrazvokScitnicePage />} />
          <Route path="/ultrazvok/ultrazvok-mod" element={<UltrazvokModPage />} />
          <Route path="/ultrazvok/ultrazvok-mehkih-tkiv" element={<UltrazvokMehkihTkivPage />} />
          <Route path="/ultrazvok/ultrazvok-dojk" element={<UltrazvokDojkPage />} />
          <Route path="/ultrazvok/ultrazvok-ven" element={<UltrazvokVenPage />} />
          <Route path="/ultrazvok/ultrazvok-arterij-nog" element={<UltrazvokArterijNogPage />} />
          <Route path="/ultrazvok/ultrazvok-vratnih-arterij" element={<UltrazvokVratnihArterijPage />} />
          <Route path="/psihiatrija/psihiater-ljubljana" element={<PsihiaterLjubljanaPage />} />
          <Route path="/psihiatrija/depresija-anksioznost" element={<DepresijaAnksioznostPage />} />
          <Route path="/psihiatrija/izgorelost-burnout" element={<IzgorelostPage />} />
          <Route path="/psihiatrija/nespečnost-motnje-spanja" element={<NespečnostPage />} />
          <Route path="/psihiatrija/motnje-hranjenja" element={<MotnjeHranjenjaPage />} />
          <Route path="/psihiatrija/post-covid-sindrom" element={<PostCovidSindromPage />} />
          <Route path="/psihiatrija/okm-ocd" element={<OKMPage />} />
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/zakaj-asantis" element={<ZakajAsantis />} />
          <Route path="/ekipa/branko-pirs" element={<BrankoPirsPage />} />
          <Route path="/ekipa/ana-kotnik-pirs" element={<AnaKotnikPirsPage />} />
          <Route path="/ekipa/ales-porcnik" element={<AlesPorcnikPage />} />
          <Route path="/ekipa/gregor-cadez" element={<GregorCadezPage />} />
          <Route path="/ekipa/dragan-jejinic" element={<DraganJejinicPage />} />
          <Route path="/ekipa/petra-sket" element={<PetraSketPage />} />
          <Route path="/ekipa/monika-smrkolj" element={<MonikaSmrkoljPage />} />
          <Route path="/ekipa/mateja-sirse" element={<MatejaSirsePage />} />
          <Route path="/ekipa/jani-petrovic" element={<JaniPetrovicPage />} />
          {/* Paketi */}
          <Route path="/paketi/srce-ozilje" element={<SrceOziljePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
