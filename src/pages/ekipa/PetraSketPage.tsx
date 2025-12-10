import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const PetraSketPage = () => {
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
                src="https://asantis.si/wp-content/uploads/2024/02/PETRA-SKET.jpg" 
                alt="Petra Šket, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Ginekologija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Petra Šket, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialistka ginekologije z dodatnim znanjem iz operativne ginekologije
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
                Po končani Medicinski fakulteti v Ljubljani leta 2003, sem se zaposlila v SB Celje. Slabi dve leti sem v okviru sekundariata spoznala delo na različnih oddelkih bolnišnice, kar mi je pripomoglo k lažji odločitvi pri izbiri specializacije. Odločila sem se za specializacijo iz ginekologije in porodništva. Pomagati ženskam, ko se pojavijo ginekološke težave, težave z zanositvijo ali pa spremljati normalno nosečnost in sodelovati pri porodih, se mi je vedno zdelo posebno poslanstvo.
              </p>
              
              <p>
                Zaposlila sem se na ginekološko porodniškem oddelku SB Celje, kjer sem ostala 20 let.
              </p>
              
              <p>
                2010 sem uspešno opravila specialistični izpit iz ginekologije in porodništva. Vedno sem se navduševala nad kliničnim delom. Opravljala sem tako delo porodničarja, kot ginekologa. V dispanzerskem delu sem obravnavala ženske, ki so me izbrale za osebno ginekologinjo, vodila nosečnosti in sodelovala pri porodih. Predvsem sem se navdušila za ginekološko operativo.
              </p>
              
              <p>
                2012 sem se pričela bolj intenzivno ukvarjati z urinsko inkontinenco pri ženskah. Opravila sem dodatna izobraževanja tako doma, kot v tujini. Takrat sem v svoje delo vključila tudi lasersko zdravljenje urinske inkontinence.
              </p>
              
              <p>
                Po rojstvu moje hčerke, sem se odločila za spremembo v moji karierni poti. Tako sem 2020 zapustila bolnišnico in se zaposlila v Termah Dobrna, kjer sem opravljala delo v ginekološkem dispanzerju. Tako sem pridobila dodatno znanje s področja rehabilitacije po ginekoloških operacijah, zaradi onkološkega vzroka. Glede nato, da sem veliko let sama opravljala operativne posege, mi je sedaj to v veliko pomoč, ko spremljam in skušam čim bolj olajšati težave po končanem onkološkem zdravljenju.
              </p>
              
              <p>
                V vseh letih sem pridobila veliko izkušenj na področju težav z urinsko inkontinenco. Zato na tem področju predvsem strmim k celostni obravnavi in učinkovitim možnosti pomoči brez operativnega pristopa, če je le mogoče.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                Zagovarjam individualni pristop in nudenje pomoči, takrat ko jo ženske potrebujejo, ko so v skrbeh in jih je strah. Zato sem se odločila postati del ekipe klinike ASANTIS, kjer mi je omogočen takšen pristop in način obravnave pacientk.
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default PetraSketPage;
