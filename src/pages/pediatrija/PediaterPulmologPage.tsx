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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Phone, MapPin, Clock, Stethoscope, 
  CheckCircle, Wind, Baby, Leaf,
  Calendar, Users, HeartPulse, Thermometer
} from "lucide-react";

const PediaterPulmologPage = () => {
  const znaki = [
    { icon: Wind, text: "Dolgotrajen ali ponavljajoč se kašelj, ki traja več kot 3 tedne" },
    { icon: HeartPulse, text: "Težko dihanje, piskanje, stiskanje v prsih" },
    { icon: Thermometer, text: "Ponavljajoče pljučnice ali pogosta vnetja dihal" },
    { icon: Wind, text: "Sum na astmo ali alergijsko bolezen dihal" },
    { icon: Stethoscope, text: "Kronični rinitis, sinusitis ali alergijski kašelj" },
    { icon: Users, text: "Družinska anamneza astme ali alergij" }
  ];

  const bolezni = [
    {
      name: "Astma pri otrocih",
      desc: "Kronična bolezen dihal z vnetjem in zožitvijo dihalnih poti.",
      simptomi: "Kašelj, piskanje, težko dihanje."
    },
    {
      name: "Alergijski kašelj in rinitis",
      desc: "Preobčutljivost dihal na alergene (prah, pelod, živali).",
      simptomi: "Kihanje, izcedek iz nosu, dražeč kašelj."
    },
    {
      name: "Bronhiolitis",
      desc: "Virusno vnetje malih dihalnih poti pri dojenčkih.",
      simptomi: "Hitro dihanje, kašelj, piskanje."
    },
    {
      name: "Ponavljajoče pljučnice",
      desc: "Večkratna vnetja pljuč zaradi oslabljenega imunskega sistema ali anatomskih sprememb.",
      simptomi: "Vročina, kašelj, utrujenost."
    },
    {
      name: "Kronični kašelj",
      desc: "Kašelj, ki traja več kot 8 tednov.",
      simptomi: "Suh ali moker kašelj brez jasnega vzroka."
    }
  ];

  const postopek = [
    {
      title: "Pogovor s starši in otrokom",
      desc: "Natančen opis simptomov, trajanja, okoliščin."
    },
    {
      title: "Klinični pregled",
      desc: "Poslušanje dihal, pregled nosu, žrela, prsnega koša."
    },
    {
      title: "Dodatne preiskave po potrebi",
      desc: "Spirometrija, alergološko testiranje, rentgensko slikanje pljuč, laboratorijske preiskave."
    },
    {
      title: "Postavitev diagnoze",
      desc: "Priprava individualnega načrta zdravljenja."
    },
    {
      title: "Spremljanje in kontrolni pregledi",
      desc: "Spremljanje učinkovitosti zdravljenja in rasti otroka."
    }
  ];

  const zdravljenje = [
    "Inhalacijsko terapijo",
    "Zdravljenje alergij",
    "Navodila za preprečevanje poslabšanj",
    "Izobraževanje staršev o pravilni uporabi zdravil in inhalatorjev"
  ];

  const prednosti = [
    { icon: Stethoscope, text: "Izkušen pediater pulmolog z dolgoletno klinično prakso" },
    { icon: Baby, text: "Prilagojen pristop otrokom – prijazno okolje brez strahu" },
    { icon: HeartPulse, text: "Diagnostika na enem mestu (spirometrija, alergološki testi, UZ, laboratorij)" },
    { icon: Clock, text: "Hiter termin brez čakalnih vrst" },
    { icon: Users, text: "Možnost celostne obravnave skupaj s pediatrom, alergologom in imunologom" }
  ];

  const faq = [
    {
      question: "Ali otrok potrebuje napotnico za pregled?",
      answer: "Ne, v Asantis se lahko naročite samoplačniško brez napotnice."
    },
    {
      question: "Kako dolgo traja pregled?",
      answer: "Prvi pregled običajno traja 30–45 minut, odvisno od potrebe po dodatnih preiskavah."
    },
    {
      question: "Ali se lahko v istem obisku opravi tudi spirometrija ali alergološki test?",
      answer: "Da, večino preiskav opravimo na mestu, kar omogoča hitro diagnozo in začetek zdravljenja."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Pediater pulmolog Ljubljana | Specialist za bolezni dihal pri otrocih – Asantis</title>
        <meta
          name="description"
          content="Pediater pulmolog v Ljubljani za otroški kašelj, astmo in bolezni dihal. Diagnostika in zdravljenje na enem mestu. Naročite se brez napotnice."
        />
        <meta
          name="keywords"
          content="pediater pulmolog, otroški pulmolog, otroški kašelj, otroška astma, specialist za dihala pri otrocih, pediater za kašelj, pulmolog Ljubljana, otroški pulmolog Ljubljana, otroški kašelj zdravljenje, pediater za astmo, dihalne bolezni otrok"
        />
        <link rel="canonical" href="https://asantis.si/pediatrija/pediater-pulmolog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🩺 Pediatrična pulmologija
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Pediater pulmolog – specialist za bolezni dihal pri otrocih
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Otroški pulmolog v centru Asantis Ljubljana je specialist, ki se ukvarja z diagnostiko, 
              zdravljenjem in spremljanjem bolezni dihal pri dojenčkih, otrocih in mladostnikih.
            </p>

            <Button size="lg" className="text-lg px-8">
              Naročite se na pregled
            </Button>
          </div>
        </div>
      </section>

      {/* Uvod Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Baby className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Strokovna obravnava otroških bolezni dihal
              </h2>
            </div>
            <p className="text-muted-foreground">
              Najpogosteje obravnavamo <strong>kašelj</strong>, <strong>ponavljajoče pljučnice</strong>, 
              <strong> težko dihanje</strong>, <strong>astmo</strong>, <strong>alergije dihal</strong> in 
              druge težave, ki vplivajo na zdravje dihalnega sistema.
            </p>
          </div>
        </div>
      </section>

      {/* Kdaj k pulmologu Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Kdaj obiskati pediatra pulmologa
            </h2>
            <p className="text-muted-foreground mb-8">
              Starši naj se za pregled pri pulmologu odločijo, če otrok kaže katerega od naslednjih znakov:
            </p>

            <div className="space-y-3">
              {znaki.map((znak, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <znak.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{znak.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bolezni Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Najpogostejše bolezni, ki jih obravnavamo
            </h2>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Bolezen / težava</TableHead>
                    <TableHead className="font-semibold">Opis</TableHead>
                    <TableHead className="font-semibold">Možni simptomi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bolezni.map((bolezen, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-foreground">{bolezen.name}</TableCell>
                      <TableCell className="text-muted-foreground">{bolezen.desc}</TableCell>
                      <TableCell className="text-muted-foreground">{bolezen.simptomi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Kako poteka pregled Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Kako poteka pregled pri pediatru pulmologu
              </h2>
            </div>

            <div className="space-y-4">
              {postopek.map((korak, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{korak.title}</h3>
                        <p className="text-sm text-muted-foreground">{korak.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zdravljenje Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Zdravljenje in podpora staršem
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">
              Zdravljenje je prilagojeno starosti otroka in vrsti bolezni. Uporabljamo sodobne metode:
            </p>

            <div className="space-y-3 mb-8">
              {zdravljenje.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-foreground">
                  Staršem nudimo tudi <strong>celostno podporo</strong> pri spremljanju bolezni doma.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zakaj Asantis Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Zakaj izbrati Asantis Ljubljana
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {prednosti.map((prednost, index) => (
              <div key={index} className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <prednost.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-foreground font-medium">{prednost.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
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
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Naročite pregled
            </h2>
            <p className="text-muted-foreground mb-8">
              Za pregled pri pediatru pulmologu se lahko naročite brez napotnice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="text-lg px-8">
                Naročite se na pregled
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                01 xxx xxx
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Asantis – Zasebni medicinski center, Ljubljana</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PediaterPulmologPage;
