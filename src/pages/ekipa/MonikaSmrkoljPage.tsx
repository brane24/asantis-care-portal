import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import monikaSmrkoljImg from "@/assets/monika-smrkolj.jpg";

const MonikaSmrkoljPage = () => {
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
                src={monikaSmrkoljImg} 
                alt="Monika Smrkolj, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Psihiatrija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Monika Smrkolj, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialistka psihiatrije s specialnimi znanji iz transkranialne magnetne stimulacije
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
                Po končanem študiju na MF in opravljenim strokovnim izpitom sem se zaposlila na Kirurški kliniki UKCLJ na oddelku za kirurške okužbe. Pridobila sem dragoceno znanje iz kirurgije in interne medicine. V tem letu sem tudi spoznala vso brutalnost, ki jo lahko povzroči bolezen človeškemu tkivu.
              </p>
              
              <p>
                Nato sem se zaposlila na Dermatovenerološki kliniki v LJ kot sobni zdravnik. Tam sem večino časa izrezovala kožne spremembe na koži otrok in odraslih v operacijski ambulanti pod supervizijo. Spoznavala sem tudi skrivnosti dermatologije, ki na koži izriše zemljevid in te preusmeri v zanimivo in hkrati zahtevno raziskovanje obolenj.
              </p>
              
              <p>
                2012 sem dobila specializacijo iz psihiatrije, saj sem telesne bolezni in stanja želela razumeti še v povezavi s človekovo duševnostjo v vzročno posledičnem razmerju. Tekom specializacije sem se intenzivno ukvarjala s področjem motnje hranjenja pri dr. Karin Sernec, se udeleževala strokovnih srečanj in vodila svojo ambulanto v enoti za motnje hranjenja na CMZ LJ.
              </p>
              
              <p>
                Po specialističnem izpitu z izbrano specialistično nalogo <em>Nevrobiologija kompulzivnega prenajedanja</em>, sem se zaposlila v koncesionarski ambulanti dr. Anji Reljič Prinčič v LJ. Obravnavala sem mladostnike in odrasle z anoreksijo, bulimijo in kompulzivnim prenajedanjem, vodila vedenjsko kognitivne psihoterapevtske skupine iz teh področij in se srečevala z ostalimi duševnimi stanji: organske duševne motnje (demenca), odvisnost od psihoaktivnih snovi, shizofrenija in blodnjave motnje, razpoloženjske motnje, anksiozne, stresne, disociativne in somatoformne motnje, neorganske motnje spanja, spolne motnje, duševno manjrazvitost in duševne motnje v razvojnem obdobju.
              </p>
              
              <p>
                Po 3 letih sem se zaposlila v koncesionarski ambulanti dr. Dragomire Ahlin, ki je bila locirana v notranjsko primorski regiji. Tu sem se srečevala z demografsko drugačnimi težavami bolnikov po pogostnosti posameznih diagnoz.
              </p>
              
              <p>
                Decembra 2025 sem se zaposlila na zasebni multidisciplinarni kliniki Asantis, ker verjamem v nujnost holistične obravnave duševnih in telesnih bolezni, saj možgani niso izoliran organ. Hkrati mi omogoča takojšnje sodelovanje z ostalimi specialisti te klinike (vključujoč preiskave, konzilijarne posvete in morebitno nadaljno obravnavo bolnikov pri njih), za kar sem v javnem zdravstvenem sistemu porabila ogromno nepotrebnega časa za izpeljavo celotne diagnostike na škodo bolnikovega zdravja.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                Moja strast so kužki — 17 let sem vzgajala pasmo sibirski husky, ki imajo po kinološem znanju označbo vedenjsko zahtevnih psov, saj naj bi bili težko vodljivi, za učenje pa močno trmasti. Na lastni koži pa sem izkusila še blagodejne učinke živali na duševno zdravje človeka.
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default MonikaSmrkoljPage;
