import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const GregorCadezPage = () => {
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
                src="https://asantis.si/wp-content/uploads/2023/12/Gregor-Cadez-fizioterapevt.webp" 
                alt="Gregor Čadež, dipl. fizot."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Fizioterapija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Gregor Čadež, dipl. fizot.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialist fizioterapevt z dodatnim znanjem iz manualne ortopedske fizioterapije
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
                Kot izkušen strokovnjak z desetletnimi izkušnjami na področju elektrotehnike in telekomunikacij me delo na tovrstnem področju več ni izpopolnjevalo. Tako sem začel slediti zakopanemu otroškemu vzgibu nudenja pomoči in vzgajanju vzhodnjaških starodavnih veščin in vrednot, katere še danes uspešno prenašam na druge.
              </p>
              
              <p>
                Ker se filozofija in koncept vzhodne medicine bistveno razlikujeta od zahodne, se v letu 2014 odločim za poklicno prekvalifikacijo na področje ortopedske manualne medicine in pričnem s študijem manualne terapije na Akademiji za manualno terapijo v Ljubljani. Študij uspešno zaključim v letu 2017 ter na podiplomskem usposabljanju pri inštruktorjih iz tujine osvojim napredna znanja osteopatskih in kiropraktičnih tehnik, katera sem izvajal v zasebnem sektorju.
              </p>
              
              <p>
                Da bi pridobljeno znanje o zdravju človeka formalno pričel izvajati tudi v zdravstvenem sistemu, se v letu 2018 vpišem na dodiplomski študij fizioterapije na Fakulteti za zdravstvo Angele Boškin ter v letu 2021 z odliko zagovarjam diplomsko nalogo z naslovom Pomen timskega dela v fizioterapiji.
              </p>
              
              <p>
                Na fakulteti še isto leto nadaljujem s podiplomskim študijem magisterija Promocije zdravja ter vzporedno pričnem opravljati specializacijo na področjih mišično-skeletnega sistema ter ortopedske manualne medicine/terapije pri mednarodno uveljavljenih inštruktorjih. Celoten čas študija na fakulteti 1. in 2. stopnje kolegicam in kolegom nudim tutorstvo in v šolskem letu 2022/2023 postanem izvoljen član predstavnikov študentov Akademskega zbora Fakultete za zdravstvo Angele Boškin.
              </p>
              
              <p>
                Po opravljenem 1. letniku Promocije zdravja študij opustim ter se osredotočim na področje specialnih manualnih obravnav, katere neprestano izpopolnjujem v procesu vseživljenjskega učenja.
              </p>
              
              <p>
                Kot fizioterapevt sem v javnem zdravstvu pričel z delom na področju geriatrije in rehabilitacije ter nadaljeval z obravnavami kroničnih obolenj in izvajanjem različnih programov Nacionalnega inštituta za javno zdravje z delavnicami in predavanji.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                Danes poleg manualne ortopedske fizioterapije vsa pridobljena znanja ostalih področij fizioterapije, promocije zdravja in tradicionalnih pristopov združujem v holističnem in integrativnem pristopu v samoplačniški fizioterapevtski ambulanti ASANTIS, kjer sem tesno povezan in sodelujem s specialisti raznih področij medicine in zdravstva.
              </blockquote>
              
              <p>
                Pri svojem delu izražam strokovno svobodo in razvoj, kar mi omogoča, da uporabnikom zdravstvenih storitev neprestano nudim kakovostne in učinkovite obravnave.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default GregorCadezPage;
