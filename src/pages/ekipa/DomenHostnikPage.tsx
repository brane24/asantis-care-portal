import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import domenHostnikImg from "@/assets/domen-hostnik.jpg";

const DomenHostnikPage = () => {
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
                src={domenHostnikImg} 
                alt="Domen Hostnik, dr. dent. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Zobozdravstvo
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Domen Hostnik, dr. dent. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Zobozdravnik z dodatnim znanjem iz ortodontike in implantologije
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
                Študij dentalne medicine sem zaključil na Medicinski fakulteti Univerze v Ljubljani in nato nadaljeval z izobraževanjem in delom na Stomatološki kliniki v Ljubljani.
              </p>
              
              <p>
                Svoje znanje in izkušnje sem več let nadgrajeval v stomatološki ambulanti, dodatno pa sem se izpopolnjeval na področju oralne implantologije in protetike v Nemčiji ter drugod v tujini. Stalno strokovno izpopolnjevanje mi omogoča, da pri delu uporabljam sodobne pristope in tehnike, ki pacientom zagotavljajo vrhunske rezultate.
              </p>
              
              <p>
                Ukvarjam se s splošnim in konzervativnim zobozdravstvom (zalivke, dograditve zob, zdravljenje koreninskih kanalov), implantologijo, zobno protetiko in estetskim zobozdravstvom. Pri delu v medicinskem centru ASANTIS imamo na voljo najsodobnejše diagnostične rentgenološke in CT naprave, instrumente in materiale, ki mi omogočajo, da pacienta na enem mestu obravnavam od diagnostike do končne rešitve.
              </p>
              
              <p>
                Pri svojem delu stremim k natančni, neboleči in prijazni obravnavi. Verjamem, da je obisk zobozdravnika lahko prijetna izkušnja, če pacient začuti strokovnost, spoštovanje in iskreno željo po najboljšem rezultatu. Pri vsakem pacientu stremim k prijazni, neboleči in natančni obravnavi. Verjamem, da je ključ do popolnega nasmeha v zaupanju, strokovnosti in občutku varnosti – zato se vsakemu pacientu posvetim tako, kot bi si želel, da bi se zobozdravnik posvetil meni.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default DomenHostnikPage;
