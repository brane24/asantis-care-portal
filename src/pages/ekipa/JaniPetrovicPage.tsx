import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const JaniPetrovicPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <NavLink to="/o-nas">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Nazaj na ekipo
            </NavLink>
          </Button>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img 
                src="https://asantis.si/wp-content/uploads/2024/02/JANI-PETROVIC.webp" 
                alt="Jani Petrović, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Estetska dermatologija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Jani Petrović, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialist za posege iz dermatološke estetike – aplikacija botulinum toksina in polnil
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <a href="tel:+38631876104">
                    <Phone className="h-4 w-4 mr-2" />
                    Pokličite nas
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:info@asantis.si">
                    <Mail className="h-4 w-4 mr-2" />
                    Pišite nam
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">O meni</h2>
              
              <p>
                Jani Petrović, dr. med. je specialist za posege iz dermatološke estetike. Posebej se posveča aplikaciji botulinum toksina (Botox) in dermalnih polnil za pomlajevanje obraza in korekcijo estetskih nepravilnosti.
              </p>
              
              <p>
                Pri svojem delu združuje medicinsko znanje s estetskim občutkom, da doseže naravne in harmonične rezultate. Svoje veščine je izpopolnjeval na številnih izobraževanjih in delavnicah doma in v tujini.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Področja dela</h3>
              <ul>
                <li>Aplikacija botulinum toksina (Botox) za zmanjšanje mimičnih gub</li>
                <li>Dermalna polnila za povečanje volumna in korekcijo kontur obraza</li>
                <li>Pomlajevanje obraza z neinvazivnimi metodami</li>
                <li>Korekcija ustnic in obraznih kontur</li>
              </ul>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                V kliniki ASANTIS izvajamo estetske posege z najkakovostnejšimi materiali in sodobnimi tehnikami za naravne rezultate.
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default JaniPetrovicPage;
