import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const AlesPorcnikPage = () => {
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
                src="https://asantis.si/wp-content/uploads/2023/12/Ales-Porcnik-kiurg-plastik.webp" 
                alt="Aleš Porčnik, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Plastična kirurgija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Aleš Porčnik, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialist plastične, estetske in rekonstruktivne kirurgije z dodatnim znanjem rekonstrukcije živcev
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
                Po značaju sem velik entuziast; svoja obzorja sem že kot študent širil preko študijskih izmenjav in si tako ustvarjal širšo sliko zdravstva. V sklopu medicinskih kroženj sem spoznal zdravstvene sisteme na Švedskem, Tajvanu, v Veliki Britaniji, Braziliji in Gani. Svoje največjo strast sem že zgodaj našel v kirurgiji. V bolnišnici za plastično kirurgijo v Stockholmu (Akademikliniken), sem z intenzivno 3-mesečno izmenjavo močno napredoval in domov prinesel bogato znanje.
              </p>
              
              <p>
                Medicinsko Fakulteto na Univerzi v Ljubljani sem končal z odliko leta 2014 in se takoj zaposlil na Oddelku za plastično in rekonstrukcijsko kirurgijo v UKC Ljubljana, kjer sem se vključil v raziskovalno delo ter postal doktorski študent smeri Biomedicina. Tekom specializacije sem absorbiral bogato znanje svojih starejših kolegov in se hitro vključil v delovni kolektiv.
              </p>
              
              <p>
                Aprila 2021 sem uspešno opravil zahteven mednarodni specialistični izpit iz plastične kirurgije in postal »Fellow of EBOPRAS« – European Board of Plastic, Reconstructive and Aesthetic Surgery; kmalu zatem še slovenskega.
              </p>
              
              <p>
                Nadaljujem z delom v UKC LJ, kjer sem dejaven na številnih področjih. Sem član onkološko-plastičnega rekonstruktivnega konzilija; hemangiomskega konzilija; postbariatričnega konzilija (preoblikovanje telesa po masivnem hujšanju); ter konzilija za brahialni pletež (kompleksen preplet živcev v področju vratu, ki je zadolžen za normalno delovanje zgornje okončine). Pri vsakem področju je potrebno imeti poglobljeno znanje in ga z rednim spremljanjem razvoja stroke ves čas obnavljati. Aktivno se udeležujem mednarodnih kongresov ter doprinašam k razvoju znanosti z objavljanjem znanstvenih člankov.
              </p>
              
              <p>
                Interesno področje, ki mi je najbolj pri srcu, so rekonstruktivni posegi po poškodbah brahialnega pleteža, ki nastanejo predvsem pri osebah, udeleženih v prometnih nesrečah in pri novorojenčkih po težjih porodih. Dodatna specialna znanja iz tega področja sem pridobil na Dunaju v AKH (Allgemeines Krankenhaus) pri prof. Aszmannu, ki je eden najbolj vplivnih kirurgov na tem področju, na svetu.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                "Za nekoga, ki nima ničesar, je že nekaj malega, veliko." – dr. Bunnell, priznan kirurg za roko
              </blockquote>
              
              <p>
                Moj glavni cilj je povrniti bolniku izgled in funkcijo na čim bolj estetski način.
              </p>
              
              <p>
                Od leta 2022 opravljam delo tudi kot asistent na Katedri za kirurgijo na Medicinski fakulteti Univerze v Ljubljani. Ta funkcija mi omogoča predajanje znanja mlajšim generacijam in možnost inspiracije bodočih zdravnikov za tako unikatno ter raznoliko področje kot je plastična kirurgija.
              </p>
              
              <p className="text-muted-foreground">
                Kot oče treh otrok se zavedam tudi kako pomemben je pristen človeški pristop z veliko mero umirjenosti in sočutja.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AlesPorcnikPage;
