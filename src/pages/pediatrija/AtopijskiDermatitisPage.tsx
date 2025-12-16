import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Phone, MapPin, Clock, AlertTriangle, Stethoscope, 
  CheckCircle, Droplets, Shield, Baby, Microscope,
  Sparkles, Heart, ThermometerSun, Users
} from "lucide-react";

const AtopijskiDermatitisPage = () => {
  const simptomi = [
    "Srbeča, suha in razpokana koža",
    "Rdečina in vnetje kože",
    "Izpuščaji na licih, rokah, nogah ali trupu",
    "Povečana občutljivost na mila, detergente in alergene",
    "Poslabšanja ob stresu ali vremenskih spremembah"
  ];

  const sprozilci = [
    "alergeni iz okolja (prah, pršice, cvetni prah)",
    "stres in psihološki dejavniki",
    "suho ozračje ali zimski čas",
    "dražeča kozmetika in detergenti",
    "hrana (pri dojenčkih pogosteje: jajca, mleko, oreščki)"
  ];

  const zdravljenje = [
    {
      title: "Intenzivna nega kože",
      desc: "Vlažilne kreme in mazila (emolienti) za obnovo kožne bariere"
    },
    {
      title: "Zdravljenje vnetja",
      desc: "Topični kortikosteroidi ali novejši imunomodulatorji"
    },
    {
      title: "Fototerapija",
      desc: "Svetlobno zdravljenje pri trdovratnih oblikah"
    },
    {
      title: "Sistemsko zdravljenje",
      desc: "Pri težjih primerih z naprednimi terapijami"
    },
    {
      title: "Svetovanje",
      desc: "Glede nege kože, prehrane in življenjskega sloga"
    }
  ];

  const nasvetiOtroci = [
    { icon: Droplets, text: "Redna vsakodnevna nega kože z negovalnimi kremami" },
    { icon: Shield, text: "Izogibanje agresivnim milom in vroči vodi" },
    { icon: Baby, text: "Bombažna oblačila in ne pregrevanje" },
    { icon: Stethoscope, text: "Redno spremljanje pri pediatru dermatologu ali alergologu" }
  ];

  const preventiva = [
    "Redna nega kože z zaščitnimi kremami",
    "Izogibanje sprožilcem (alergeni, stres, znoj)",
    "Uravnotežena prehrana",
    "Uporaba nežnih, dermatološko testiranih izdelkov",
    "Ob poslabšanju pravočasno posvetovanje z dermatologom"
  ];

  const kdajKDermatologu = [
    "Trdovratno srbenje ali vnetje kože",
    "Razpoke ali znaki okužbe",
    "Ponavljajoča se poslabšanja kljub domači negi",
    "Sum na alergijo pri otroku"
  ];

  const prednosti = [
    "Pregled in zdravljenje atopijskega dermatitisa",
    "Alergološko svetovanje",
    "Dermatološka diagnostika za otroke in odrasle",
    "Celostna obravnava – dermatolog, pediater in alergolog sodelujejo"
  ];

  const faq = [
    {
      question: "Ali je atopijski dermatitis nalezljiv?",
      answer: "Ne, atopijski dermatitis ni nalezljiv. Gre za kronično stanje, povezano z genetskimi in imunološkimi dejavniki."
    },
    {
      question: "Ali lahko atopijski dermatitis izzveni?",
      answer: "Pri mnogih otrocih se stanje z leti izboljša ali popolnoma izzveni, pri nekaterih pa lahko vztraja tudi v odraslo dobo."
    },
    {
      question: "Kako pogosto moram vlažiti otrokovo kožo?",
      answer: "Priporočamo vsaj 2-krat dnevno, po kopanju pa je vlaženje nujno. Pri hujših oblikah tudi pogosteje."
    },
    {
      question: "Ali je prehrana povezana z atopijskim dermatitisom?",
      answer: "Pri nekaterih otrocih lahko določena živila (jajca, mleko, oreščki) poslabšajo stanje. Alergolog lahko opravi testiranje."
    },
    {
      question: "Kdaj potrebujem napotnico k dermatologu?",
      answer: "V Asantis centru lahko obiščete dermatologa brez napotnice kot samoplačnik ali z dopolnilnim zavarovanjem."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Atopijski dermatitis – zdravljenje | Dermatolog Ljubljana – Asantis</title>
        <meta
          name="description"
          content="Zdravljenje atopijskega dermatitisa pri otrocih in odraslih. Dermatolog in alergolog v Asantis Ljubljana – celostna obravnava srbečega ekcema."
        />
        <meta
          name="keywords"
          content="atopijski dermatitis, atopijski ekcem, zdravljenje ekcema, srbeča koža, dermatolog Ljubljana, alergolog otrok, atopijski dermatitis pri dojenčku, atopijski dermatitis zdravljenje odrasli"
        />
        <link rel="canonical" href="https://asantis.si/pediatrija/atopijski-dermatitis" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🧴 Dermatologija & Pediatrija
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Atopijski dermatitis – zdravljenje in obvladovanje bolezni kože
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Celostna obravnava atopijskega ekcema pri otrocih in odraslih. Naši dermatologi in alergologi 
              vam pomagajo obvladati simptome in izboljšati kakovost življenja.
            </p>

            <Button size="lg" className="text-lg px-8">
              Naročite se na pregled
            </Button>
          </div>
        </div>
      </section>

      {/* Kaj je atopijski dermatitis Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Kaj je atopijski dermatitis?
            </h2>
            <p className="text-muted-foreground mb-6">
              <strong>Atopijski dermatitis</strong> (tudi atopijski ekcem) je kronično vnetno obolenje kože, 
              ki povzroča suho, srbečo in razdraženo kožo. Najpogosteje se pojavi pri otrocih, lahko pa traja 
              tudi v odraslo dobo. Bolezen je povezana z genetskimi in imunološkimi dejavniki ter pogosto 
              spremlja alergijski rinitis ali astmo.
            </p>

            <Card className="bg-muted/30 border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Najpogostejši simptomi:</h3>
                <ul className="space-y-2">
                  {simptomi.map((simptom, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {simptom}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zakaj se pojavi Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Zakaj se pojavi atopijski dermatitis?
            </h2>
            <p className="text-muted-foreground mb-6">
              Gre za motnjo v delovanju kožne zaščitne bariere. Pri bolnikih koža izgublja vlago in 
              lažje prepušča alergene in bakterije. Sprožilci so lahko:
            </p>

            <div className="space-y-3">
              {sprozilci.map((sprozilec, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span className="text-foreground">{sprozilec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostika in zdravljenje Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Diagnostika in zdravljenje
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Dermatološki pregled</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialist dermatolog natančno pregleda kožo, postavi diagnozo in izključi druge vzroke vnetja.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Testiranje in alergološka ocena</h3>
                  <p className="text-sm text-muted-foreground">
                    Pri otrocih in odraslih, kjer obstaja sum na alergijsko ozadje, izvedemo kožne teste ali krvne preiskave IgE.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Zdravljenje</h3>
                  <p className="text-sm text-muted-foreground">
                    Individualno prilagojen načrt zdravljenja glede na resnost in obliko dermatitisa.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Zdravljenje vključuje:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {zdravljenje.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{item.title}</span>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Atopijski dermatitis pri otrocih Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Baby className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Atopijski dermatitis pri otrocih
              </h2>
            </div>

            <p className="text-muted-foreground mb-8">
              Pri otrocih je bolezen pogosta že v prvih mesecih življenja. Staršem svetujemo:
            </p>

            <div className="space-y-4">
              {nasvetiOtroci.map((nasvet, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <nasvet.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{nasvet.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preventiva Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Kako preprečiti poslabšanja
              </h2>
            </div>

            <div className="space-y-3">
              {preventiva.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kdaj k dermatologu Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Kdaj obiskati dermatologa?
            </h2>
            <p className="text-muted-foreground mb-6">Če se pojavi:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {kdajKDermatologu.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-foreground">
                  👉 <strong>Zgodnje zdravljenje prepreči zaplete</strong> in izboljša kakovost življenja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dermatolog Ljubljana Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Dermatolog Ljubljana – Asantis
            </h2>
            <p className="text-muted-foreground mb-8">
              V medicinskem centru Asantis nudimo:
            </p>

            <div className="space-y-3 mb-8">
              {prednosti.map((prednost, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{prednost}</span>
                </div>
              ))}
            </div>

            <Card className="bg-accent/30 border-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    💡 <strong>Obravnava je celostna</strong> – dermatolog, pediater in alergolog 
                    sodelujejo pri iskanju vzrokov in optimalnem zdravljenju.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Pogosta vprašanja
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Naročite se na pregled
            </h2>
            <p className="text-muted-foreground mb-8">
              Rezervirajte termin pri našem dermatologu
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="text-lg px-8">
                Rezerviraj termin
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                040 123 456
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Asantis, Ljubljana</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AtopijskiDermatitisPage;
