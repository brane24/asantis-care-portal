import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const AnaKotnikPirsPage = () => {
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
                src="https://asantis.si/wp-content/uploads/2023/12/Zdravnica-Ana-Kotnik-Pirs-pediater.webp" 
                alt="dr. Ana Kotnik Pirš, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Pediatrija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                dr. Ana Kotnik Pirš, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialistka pediatrije z dodatnim znanjem iz pulmologije in alergologije
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
                Po končani Medicinski fakulteti Univerze v Ljubljani sem se zaposlila v Univerzitetnem kliničnem centru v Ljubljani, kjer sem ostala skoraj 20 let. Dve leti sem delala na področju urgentne in interne medicine ter kirurgije kar mi je dalo širino znanja iz medicine, ki mi kljub temu, da sem pediatrinja, pride prav skoraj vsak dan.
              </p>
              
              <p>
                Moja želja, da bi kot zdravnica pomagala otrokom se mi je uresničila, ko sem se zaposlila na Pediatrični kliniki. Takoj sem se vključila v bolnišnično in ambulantno delo na pulmološkem oddelku, kjer sem obravnavala in zdravila otroke s pulmološkimi in alergološkimi težavami – predvsem prehladnimi obolenji, kašljem, bronhiolitisom, astmo, senenim nahodom in alergijami ter cistično fibrozo.
              </p>
              
              <p>
                V Berlinu v Nemčiji sem opravila dodatno izobraževanje iz invazivne pulmološke diagnostike in zdravljenja in pridobila znanje za samostojno izvajanje bronhoskopije, ki sem ga na kliniki nadgrajevala. Poleg kliničnega dela sem vseskozi nadaljevala z dodatnim izobraževanjem in kliničnimi raziskavami tako v Sloveniji kot v tujini ter uspešno zagovarjala doktorat iz Biomedicine na temo cistične fibroze ter pridobila naziv doktor znanosti.
              </p>
              
              <p>
                Vse skozi se zavedam, da je pomembno, da svoje znanje predajam tudi naprej. Zato sem kot asistentka na Katedri za pediatrijo Medicinske fakultete Univerze v Ljubljani ob svojem rednem delu z veseljem pomagala pri izobraževanju novih generacij študentov in specializantov. Svoje znanje še vedno nadgrajujem in delim s sodelovanjem v večih mednarodnih organizacijah, sem zlata članica European Respiratory Society in European Cystic Fibrosis Society.
              </p>
              
              <p>
                Leta 2021 sem dobila priložnost za novo pot, ker želim svojo pomoč in specialno znanje nuditi tudi otrokom izven terciarne klinične ustanove.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                "Verjamem v individualizirano in celostno obravnavo pacientov takoj, ko to potrebujejo. To jim na naši kliniki lahko zagotovim. Poleg široke ekipe odličnih strokovnjakov imamo na voljo najsodobnejše aparate za merjenje pljučne funkcije ter funkcionalno in provokacijsko testiranje dihalnih poti. Tudi pri dojenčkih in otrokih lahko izvajamo diagnostične in alergološke preiskave in nudimo takojšnje rezultate in rešitve ter ustrezno zdravljenje."
              </blockquote>
              
              <p className="text-muted-foreground">
                Kot mama dveh mladostnikov, tudi s pulmološkimi in alergološkimi težavami, pa pri svojem delu velikokrat uporabim svoje pridobljeno "življenjsko" znanje. Razumem starše, ki želijo svojim otrokom najboljše in zato včasih potrebujejo tudi le kakšen nasvet.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AnaKotnikPirsPage;
