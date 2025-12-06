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
  CheckCircle, ThermometerSun, Wind, Droplets, Shield,
  Users, Calendar, HeartPulse, Baby, Microscope
} from "lucide-react";

const OkuzbaDihalPage = () => {
  const okuzbe = [
    "Prehlad in vnetje žrela",
    "Vnetje ušes (otitis media)",
    "Vnetje sinusov (sinusitis)",
    "Bronhitis",
    "Pljučnica"
  ];

  const simptomi = [
    { icon: ThermometerSun, text: "Vročino, ki traja več kot 3 dni" },
    { icon: Wind, text: "Težko ali hitro dihanje" },
    { icon: HeartPulse, text: "Kašelj, ki se slabša ali traja več kot 10 dni" },
    { icon: AlertTriangle, text: "Piskanje ali stiskanje v prsih" },
    { icon: Baby, text: "Izrazito utrujenost, izgubo apetita" },
    { icon: AlertTriangle, text: "Modrikaste ustnice ali bledo kožo" }
  ];

  const postopek = [
    {
      title: "Anamneza in klinični pregled",
      desc: "Pogovor o simptomih, poslušanje pljuč, pregled žrela in ušes"
    },
    {
      title: "Diagnostika po potrebi",
      desc: "CRP, bris žrela, test za RSV, gripo ali COVID-19"
    },
    {
      title: "Zdravljenje",
      desc: "Simptomatsko ali antibiotično zdravljenje, inhalacije, priporočila za domačo oskrbo"
    },
    {
      title: "Kontrolni pregled",
      desc: "Po izboljšanju ali če se stanje ne umiri"
    }
  ];

  const preventiva = [
    { icon: Droplets, text: "Redno umivanje rok" },
    { icon: Wind, text: "Prezračevanje prostorov" },
    { icon: Shield, text: "Cepljenje proti gripi in pnevmokoku" },
    { icon: HeartPulse, text: "Uravnotežena prehrana in dovolj spanja" },
    { icon: AlertTriangle, text: "Izogibanje pasivnemu kajenju" }
  ];

  const prednosti = [
    "Izkušeni pediatri in specialisti pulmologije",
    "Možnost testiranja RSV, gripe in COVID-19 na mestu",
    "Hitro naročanje – tudi isti dan",
    "Možnost nadaljnjega spremljanja pri istem zdravniku",
    "Prijazen pristop, prilagojen otrokom"
  ];

  const faq = [
    {
      question: "Kako ločim virusno od bakterijske okužbe?",
      answer: "Zanesljivo le po pregledu in po potrebi laboratorijski analizi (CRP, bris). Virusne okužbe ne potrebujejo antibiotika."
    },
    {
      question: "Ali je smiselno inhalirati fiziološko raztopino?",
      answer: "Da, pri kašlju ali zamašenem nosu inhalacije olajšajo dihanje in redčijo sluz."
    },
    {
      question: "Kdaj lahko otrok spet v vrtec?",
      answer: "Ko vsaj 24 ur nima vročine in se počuti dobro."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Okužba dihal pri otroku | Pediater Ljubljana – Asantis</title>
        <meta
          name="description"
          content="Kašelj, vročina ali težko dihanje pri otroku? Hitro diagnosticiramo in zdravimo okužbe dihal. Pediater Asantis Ljubljana – naročite pregled še danes."
        />
        <meta
          name="keywords"
          content="okužba dihal pri otroku, kašelj pri otroku, pljučnica pri otroku, bronhitis otrok, pediater ljubljana, pregled otrok, pediatrična ambulanta, asantis"
        />
        <link rel="canonical" href="https://asantis.si/pediatrija/okuzba-dihal-pri-otroku" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🩺 Pediatrija
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Okužba dihal pri otroku – hiter pregled in zdravljenje pri pediatru
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Težko dihanje, kašelj ali vročina pri otroku? Naši pediatri hitro ocenijo resnost 
              in uvedejo ustrezno zdravljenje akutnih in ponavljajočih se okužb dihal.
            </p>

            <Button size="lg" className="text-lg px-8">
              Naročite pregled pri pediatru
            </Button>
          </div>
        </div>
      </section>

      {/* Kaj so okužbe Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Kaj so okužbe dihal pri otrocih
            </h2>
            <p className="text-muted-foreground mb-6">
              Okužbe dihal so med najpogostejšimi boleznimi v otroški dobi. Povzročajo jih virusi 
              ali bakterije in lahko prizadenejo <strong>zgornja dihala</strong> (nos, žrelo, sinusi, ušesa) 
              ali <strong>spodnja dihala</strong> (sapnik, bronhiji, pljuča).
            </p>

            <Card className="bg-muted/30 border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Najpogostejše okužbe:</h3>
                <ul className="space-y-2">
                  {okuzbe.map((okuzba, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {okuzba}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kdaj k pediatru Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Kdaj k pediatru
            </h2>
            <p className="text-muted-foreground mb-8">
              Poiščite pomoč, če ima otrok:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {simptomi.map((simptom, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <simptom.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{simptom.text}</span>
                </div>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-foreground">
                  👉 V <strong>Asantis pediatrični ambulanti</strong> opravimo pregled, po potrebi 
                  laboratorij in slikanje prsnega koša, ter uvedemo ustrezno terapijo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kako poteka pregled Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kako poteka pregled pri nas
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {postopek.map((korak, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{korak.title}</h3>
                      <p className="text-sm text-muted-foreground">{korak.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preventiva Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Preventiva – kako zmanjšati pogostost okužb
            </h2>

            <div className="space-y-3">
              {preventiva.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ponavljajoče okužbe Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-accent/30 border-accent">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Microscope className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Poseben poudarek: ponavljajoče okužbe dihal
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Če ima otrok <strong>več kot 6 okužb letno</strong>, priporočamo dodatno diagnostiko 
                      pri pediatričnem pulmologu ali alergologu.
                    </p>
                    <p className="text-muted-foreground">
                      V Asantis centru sodelujemo medspecialistično – pediater, pulmolog in alergolog 
                      ocenijo imunski sistem ter pripravijo dolgoročen načrt preventive in zdravljenja.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prednosti Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Prednosti pregleda pri Asantis
          </h2>

          <div className="max-w-2xl mx-auto space-y-3">
            {prednosti.map((prednost, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{prednost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Pogosta vprašanja staršev
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Naročite pregled otroka pri pediatru Asantis Ljubljana
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="text-lg px-8">
                Rezervirajte termin online
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Hiter termin, tudi isti dan</span>
              </div>
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

export default OkuzbaDihalPage;
