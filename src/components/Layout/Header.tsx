import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ASANTIS
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Domov
          </NavLink>
          <NavLink
            to="/storitve"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Storitve
          </NavLink>
          <NavLink
            to="/cenik"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Cenik
          </NavLink>
          <NavLink
            to="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Blog
          </NavLink>
          <NavLink
            to="/o-nas"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            O nas
          </NavLink>
          <NavLink
            to="/kontakt"
            className="text-sm font-medium transition-colors hover:text-primary"
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
            <NavLink to="/cenik">Začni zdaj</NavLink>
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
          <nav className="container flex flex-col space-y-4 py-4">
            <NavLink
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Domov
            </NavLink>
            <NavLink
              to="/storitve"
              className="text-sm font-medium transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Storitve
            </NavLink>
            <NavLink
              to="/cenik"
              className="text-sm font-medium transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cenik
            </NavLink>
            <NavLink
              to="/blog"
              className="text-sm font-medium transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/o-nas"
              className="text-sm font-medium transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              O nas
            </NavLink>
            <NavLink
              to="/kontakt"
              className="text-sm font-medium transition-colors hover:text-primary"
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
                <NavLink to="/cenik">Začni zdaj</NavLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
