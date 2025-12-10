import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const BrankoPirsPage = () => {
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
                src="https://asantis.si/wp-content/uploads/2024/02/Branko-Pirs.jpg" 
                alt="Branko Pirš, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Dermatologija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Branko Pirš, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialist dermatolog in flebolog z dodatnim znanjem iz dermatološke onkologije
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
                Po končani Medicinski fakulteti v Ljubljani sem se zaposlil v Kliničnem centru Ljubljana. Po uspešno opravljenem strokovnem izpitu sem kot sobni zdravnik dve leti delal na internih in kirurških klinikah in pridobil dragocene strokovne izkušnje. V tem obdobju sem opravil licenčni izpit in pridobil licenco za splošno medicino.
              </p>
              
              <p>
                Moje zanimanje v medicini je bilo vedno povezano z boleznimi kože, problemi staranja in estetiko. Zato je bila odločitev, da opravim specializacijo iz dermatologije, venerologije in flebologije, povsem enostavna. Že med rednim izobraževanjem na Dermatovenerološki kliniki Ljubljana sem se zaradi želje po uspešnem strokovnem razvoju udeleževal strokovnih srečanj in šol, predvsem v dobro organiziranih centrih po Evropi.
              </p>
              
              <p>
                Po končani specializaciji in pridobitvi slovenske licence (specialist dermatovenerolog) sem se zaposlil na Dermatovenerološki kliniki Ljubljana, kjer sem se ciljano ukvarjal s prepoznavo in zdravljenjem kožnih tumorjev in melanoma. K temu je sodilo tudi kirurško zdravljenje v okviru dermatokirurgije, za katero sem dodatna znanja pridobival v centrih v Avstriji in Nemčiji.
              </p>
              
              <p>
                Posebno zanimanje mi predstavljajo bolezni venskega sistema in krčnih žil. V želji, da se dodatno izobrazim in pridobivam veščine za uspešno zdravljenje, vsaj enkrat letno obiščem centre za zdravljenje venskih obolenj v tujini.
              </p>
              
              <p>
                Da bi potrdil znanje in izkušnje, ki sem jih pridobil iz področja dermatovenerologije, sem kot prvi slovenski zdravnik opravil mednarodni izpit iz dermatovenerologije v Nemčiji (Frankfurt) ter pridobil naziv in licenco evropskega specialista dermatovenerologije.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                "Trdno verjamem, da je za vrhunsko delo in uspeh v medicini potrebno stalno izobraževanje, zato poleg rednih dodatnih izobraževanj nadaljujem tudi študij po doktorskem programu Univerze v Ljubljani, smer Biomedicina. Poleg znanja in veliko predanega dela je za uspeh potrebno nabrane izkušnje predati mlajšim kolegom in zainteresirani javnosti. V ta namen vsako leto pripravim predavanja tako na zdravstvenih fakultetah kot strokovnih srečanjih doma in v tujini."
              </blockquote>
              
              <p>
                Svoje znanje in nasvete pa z največjim veseljem delim tudi z vami v obliki člankov objavljenih na naši spletni strani, kjer najdete koristne informacije o temah povezanih z dermatologijo, estetiko, flebologijo in alergologijo. Vse te izkušnje mi danes omogočajo, da dosegam odlične rezultate pri zdravljenju svojih pacientov.
              </p>
              
              <p>
                Poleg tega se zavedam, da samo strokovnost ni dovolj za uspešno opravljanje svojega dela. Potrebno je znati poslušati svoje paciente, jih razumeti in jim posvetiti vso svojo pozornost. Zato naši pacienti, ki prihajajo na najrazličnejše posege, radi vračajo in nas z veseljem priporočajo drugim.
              </p>
              
              <p className="text-muted-foreground">
                Pri mojem delu me podpirajo in razveseljujejo žena Ana ter sinova Matej in Jan.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BrankoPirsPage;
