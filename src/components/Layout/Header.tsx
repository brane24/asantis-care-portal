import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import asantisLogo from "@/assets/asantis-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    title: "Dermatologija",
    href: "/dermatologija",
    items: [
      { title: "Pregled znamenj", href: "/dermatologija/pregled-znamenj" },
      { title: "Odstranjevanje znamenj", href: "/dermatologija/odstranjevanje-znamenj" },
      { title: "Odstranjevanje bradavic", href: "/dermatologija/odstranjevanje-bradavic" },
      { title: "Lasersko odstranjevanje žil", href: "/dermatologija/lasersko-odstranjevanje-zil" },
      { title: "Lasersko odstranjevanje dlačic", href: "/dermatologija/lasersko-odstranjevanje-dlacic" },
      { title: "Pomlajevanje kože", href: "/dermatologija/pomlajevanje-koze" },
    ],
  },
  {
    title: "Zobozdravstvo",
    href: "/zobozdravstvo",
    items: [
      { title: "Zobozdravnik Ljubljana", href: "/zobozdravstvo/zobozdravnik-ljubljana" },
      { title: "Ortodont Ljubljana", href: "/zobozdravstvo/ortodont-ljubljana" },
      { title: "Zobni implantati", href: "/zobozdravstvo/zobni-implantati" },
      { title: "Protetika", href: "/zobozdravstvo/protetika" },
      { title: "Beljenje zob", href: "/zobozdravstvo/beljenje-zob" },
      { title: "Nevidni zobni aparat", href: "/zobozdravstvo/nevidni-zobni-aparat" },
      { title: "Zobozdravnik nujno", href: "/zobozdravstvo/zobozdravnik-nujno" },
    ],
  },
  {
    title: "Pediatrija",
    href: "/pediatrija",
    items: [
      { title: "Privat pediater", href: "/pediatrija/privat-pediater" },
      { title: "Okužba dihal", href: "/pediatrija/okuzba-dihal" },
      { title: "Atopijski dermatitis", href: "/pediatrija/atopijski-dermatitis" },
      { title: "Pediater pulmolog", href: "/pediatrija/pediater-pulmolog" },
      { title: "Obravnava astme", href: "/pediatrija/pediater-astma-pri-otroku" },
      { title: "Pediater alergolog", href: "/pediatrija/pediater-alergolog" },
    ],
  },
  {
    title: "Fizioterapija",
    href: "/fizioterapija",
    items: [
      { title: "Fizioterapija Ljubljana", href: "/fizioterapija/fizioterapija-ljubljana" },
      { title: "Bolečina v vratu", href: "/fizioterapija/bolecina-v-vratu" },
      { title: "Bolečina v križu", href: "/fizioterapija/bolecina-v-krizu" },
    ],
  },
  {
    title: "Ortopedija",
    href: "/ortopedija",
    items: [
      { title: "Ortoped Ljubljana", href: "/ortopedija/ortoped-ljubljana" },
    ],
  },
  {
    title: "Ultrazvok",
    href: "/ultrazvok",
    items: [
      { title: "Ultrazvok Ljubljana", href: "/ultrazvok/ultrazvok-ljubljana" },
      { title: "Ultrazvok trebuha", href: "/ultrazvok/ultrazvok-trebuha" },
      { title: "Ultrazvok ščitnice", href: "/ultrazvok/ultrazvok-scitnice" },
      { title: "Ultrazvok mod", href: "/ultrazvok/ultrazvok-mod" },
      { title: "Ultrazvok mehkih tkiv", href: "/ultrazvok/ultrazvok-mehkih-tkiv" },
      { title: "Ultrazvok dojk", href: "/ultrazvok/ultrazvok-dojk" },
      { title: "Ultrazvok ven", href: "/ultrazvok/ultrazvok-ven" },
      { title: "Ultrazvok arterij nog", href: "/ultrazvok/ultrazvok-arterij-nog" },
      { title: "Karotidni ultrazvok", href: "/ultrazvok/ultrazvok-vratnih-arterij" },
    ],
  },
  {
    title: "Ginekologija",
    href: "/ginekologija",
    items: [
      { title: "Ginekologija Ljubljana", href: "/ginekologija/ginekologija-ljubljana" },
      { title: "Preventivni pregled", href: "/ginekologija/preventivni-pregled" },
      { title: "Ginekološki ultrazvok", href: "/ginekologija/ginekoloski-ultrazvok" },
      { title: "Kontracepcija", href: "/ginekologija/kontracepcija" },
      { title: "Manjši posegi", href: "/ginekologija/manjsi-posegi" },
      { title: "Ginekološka vnetja", href: "/ginekologija/ginekoloska-vnetja" },
      { title: "Uhajanje urina", href: "/ginekologija/uhajanje-urina-urinska-inkontinenca" },
    ],
  },
  {
    title: "Ostale storitve",
    href: "/storitve",
    items: [
      { title: "Ženska 360", href: "/storitve/zenska" },
      { title: "Slim+ Medikacija", href: "/storitve/slim-medikacija" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <img 
            src={asantisLogo} 
            alt="ASANTIS" 
            className="h-6 w-auto"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(58%) sepia(75%) saturate(500%) hue-rotate(140deg) brightness(92%) contrast(90%)' 
            }}
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent">
                  Storitve
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-50">
                  <ul className="grid w-[200px] gap-1 p-3">
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/dermatologija" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Dermatologija</NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/zobozdravstvo/zobozdravnik-ljubljana" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Zobozdravstvo</NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/pediatrija/privat-pediater-ljubljana" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Pediatrija</NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/fizioterapija/fizioterapija-ljubljana" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Fizioterapija</NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/ginekologija/ginekologija-ljubljana" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Ginekologija</NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/ortopedija/ortoped-ljubljana" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Ortopedija</NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/ultrazvok/ultrazvok-ljubljana" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Ultrazvok</NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <NavLink to="/psihiatrija/psihiater-ljubljana" className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Psihiatrija</NavLink>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavLink
            to="/zakaj-asantis"
            className="text-base font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Zakaj Asantis
          </NavLink>
          <NavLink
            to="/cenik"
            className="text-base font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Cenik
          </NavLink>
          <NavLink
            to="/o-nas"
            className="text-base font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Kdo smo
          </NavLink>
          <NavLink
            to="/blog"
            className="text-base font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Blog
          </NavLink>
          <NavLink
            to="/kontakt"
            className="text-base font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Kontakt
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <NavLink to="/prijava">Prijava</NavLink>
          </Button>
          <Button asChild>
            <NavLink to="/cenik">Začni z naročnino</NavLink>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col space-y-2 py-4">
            {/* Mobile Services Dropdown */}
            <div className="space-y-1">
              <button
                className="flex items-center justify-between w-full text-sm font-medium py-2 hover:text-primary"
                onClick={() => setExpandedCategory(expandedCategory === 'storitve' ? null : 'storitve')}
              >
                Storitve
                <ChevronDown className={cn("h-4 w-4 transition-transform", expandedCategory === 'storitve' && "rotate-180")} />
              </button>
              
              {expandedCategory === 'storitve' && (
                <div className="pl-4 space-y-2 border-l-2 border-muted ml-2">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-1">
                      <NavLink
                        to={category.href}
                        className="block text-sm font-semibold text-primary py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.title}
                      </NavLink>
                      <div className="pl-3 space-y-1">
                        {category.items.map((item) => (
                          <NavLink
                            key={item.href}
                            to={item.href}
                            className="block text-sm text-muted-foreground hover:text-foreground py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/zakaj-asantis"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zakaj Asantis
            </NavLink>
            <NavLink
              to="/cenik"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cenik
            </NavLink>
            <NavLink
              to="/o-nas"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kdo smo
            </NavLink>
            <NavLink
              to="/blog"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/kontakt"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </NavLink>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="ghost" asChild className="w-full">
                <NavLink to="/prijava">Prijava</NavLink>
              </Button>
              <Button asChild className="w-full">
                <NavLink to="/cenik">Začni z naročnino</NavLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
