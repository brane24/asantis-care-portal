import { NavLink } from "@/components/NavLink";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ASANTIS
            </h3>
            <p className="text-sm text-muted-foreground">
              Medicinski center za celostno skrb za zdravje. Preventiva, diagnostika in terapija na enem mestu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Povezave</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/storitve" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Storitve
              </NavLink>
              <NavLink to="/cenik" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cenik
              </NavLink>
              <NavLink to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </NavLink>
              <NavLink to="/o-nas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                O nas
              </NavLink>
              <NavLink to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Storitve</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/storitve/srce-presnova" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Srce & Presnova
              </NavLink>
              <NavLink to="/storitve/zenska-360" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Ženska 360
              </NavLink>
              <NavLink to="/storitve/freemove" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FreeMove
              </NavLink>
              <NavLink to="/storitve/mindcare" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                MindCare
              </NavLink>
              <NavLink to="/storitve/zobozdravstvo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Zobozdravstvo
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:info@asantis.si" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@asantis.si</span>
              </a>
              <a href="tel:+38631876104" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+386 31 876 104</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Ljubljana, Slovenija</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 ASANTIS Medicinski Center. Vse pravice pridržane.
            </p>
            <div className="flex space-x-6">
              <NavLink to="/pogoji" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pogoji uporabe
              </NavLink>
              <NavLink to="/zasebnost" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Zasebnost
              </NavLink>
              <NavLink to="/vprasanja" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pogosta vprašanja
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
