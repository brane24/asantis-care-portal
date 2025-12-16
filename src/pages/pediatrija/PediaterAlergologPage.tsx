import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Helmet } from "react-helmet";
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
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  ArrowRight,
  Stethoscope,
  ClipboardList,
  TestTube,
  FileText,
  CalendarCheck,
  Baby,
  AlertCircle
} from "lucide-react";

const PediaterAlergologPage = () => {
  const symptoms = [
    {
      symptom: "Dolgotrajno kihanje, smrkanje, zamašen nos",
      cause: "Alergijski rinitis",
      treatment: "Testiranje na inhalacijske alergene"
    },
    {
      symptom: "Suh kašelj, težko dihanje",
      cause: "Alergijska astma",
      treatment: "Spirometrija + alergološki test"
    },
    {
      symptom: "Izpuščaji, srbečica, suha koža",
      cause: "Atopijski dermatitis",
      treatment: "Dermatološko-alergološki pregled"
    },
    {
      symptom: "Bolečine v trebuhu po hrani",
      cause: "Alergija ali intoleranca na hrano",
      treatment: "Testiranje na prehranske alergene"
    },
    {
      symptom: "Otekanje ustnic, oči, srbečica po stiku s hrano ali živaljo",
      cause: "Urtikarija / kontaktna alergija",
      treatment: "Alergološki panel + izobraževanje staršev"
    }
  ];

  const processSteps = [
    {
      icon: ClipboardList,
      title: "Uvodni pogovor z otroškim pediatrom in alergologom",
      description: "Pregled anamneze, prehranskih navad, družinske obremenjenosti."
    },
    {
      icon: Stethoscope,
      title: "Klinični pregled otroka",
      description: "Pregled kože, dihal in splošnega stanja."
    },
    {
      icon: TestTube,
      title: "Alergološki testi",
      description: "Kožni vbodni testi (prick test) in krvni testi (specifična protitelesa IgE)."
    },
    {
      icon: FileText,
      title: "Interpretacija rezultatov in priporočila",
      description: "Na podlagi rezultatov oblikujemo individualen načrt prehrane, izogibanja alergenom in po potrebi zdravljenje."
    },
    {
      icon: CalendarCheck,
      title: "Kontrolni pregled / spremljanje",
      description: "Redno spremljanje napredka in prilagoditev terapije."
    }
  ];

  const benefits = [
    "Brez čakalnih vrst",
    "Pediatri in alergologi z izkušnjami iz terciarnih ustanov",
    "Celostna obravnava – en pregled, več strokovnjakov",
    "Prijazen pristop za otroke in starše",
    "Možnost nadaljnje obravnave (dermatolog, pulmolog, nutricionist) v istem centru"
  ];

  const warningSymptoms = [
    "kašlja ali kihne brez znakov okužbe",
    "ima ponavljajoče se izpuščaje ali srbečico",
    "težko diha ob športu ali v sezoni cvetenja",
    "ima prebavne težave po določenih živilih"
  ];

  const pricing = [
    { service: "Prvi alergološki pregled (vključuje testiranje)", price: "od 150-250€" },
    { service: "Kontrolni pregled", price: "80 €" },
    { service: "Kožni test na inhalacijske ali prehranske alergene (do 10 testov)", price: "150 €" },
    { service: "Testiranje na prehranske alergene (krvni test)", price: "od 55 €" }
  ];

  const faqs = [
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne. Pregled pri pediatru alergologu opravite samoplačniško brez napotnice."
    },
    {
      question: "Ali se testiranja izvajajo tudi pri majhnih otrocih?",
      answer: "Da, izvajamo testiranja od 6. meseca starosti naprej, prilagojeno starosti in občutljivosti otroka."
    },
    {
      question: "Ali lahko testirate tudi intolerance na hrano?",
      answer: "Da, izvajamo tudi krvne teste na prehranske intolerance (IgG4)."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Pediater alergolog Ljubljana | Testiranje alergij pri otrocih | Asantis</title>
        <meta 
          name="description" 
          content="Pediater alergolog v Ljubljani. Zgodnje odkrivanje in zdravljenje otroških alergij - dihalne, kožne, prehranske. Brez napotnice, kratek čakalni rok. Asantis." 
        />
        <meta name="keywords" content="pediater alergolog, otroški alergolog Ljubljana, testiranje alergij pri otrocih, alergije pri otrocih, pediater Ljubljana, alergijski test za otroke, kožne alergije otroci, astma pri otrocih, alergija na hrano otrok" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
                <Star className="h-3 w-3 mr-1 fill-yellow-500" /> Google ocena 4.9
              </Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                <Clock className="h-3 w-3 mr-1" /> Brez čakalne dobe
              </Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                <Users className="h-3 w-3 mr-1" /> Vrhunski pediatri in alergologi
              </Badge>
            </div>
            
            <div className="flex justify-center mb-6">
              <Baby className="h-16 w-16 text-primary" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Pediater alergolog – celostna obravnava otroških alergij v{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Ljubljani</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Zgodnje odkrivanje in zdravljenje alergij pri otrocih – dihalne, kožne in prehranske alergije. 
              Brez napotnice. Kratek čakalni rok.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <NavLink to="/kontakt">
                  Naročite pregled pri otroškem alergologu <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <NavLink to="/kontakt">Povprašajte po terminu</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Otroški alergolog se ukvarja z diagnosticiranjem in zdravljenjem alergij, ki se pogosto pojavijo 
                že v zgodnjem otroštvu – od alergij na hrano, pršice, cvetni prah, živalsko dlako, do atopijskega 
                dermatitisa in astme.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                V centru <strong className="text-foreground">Asantis Ljubljana</strong> otroka celostno obravnava 
                pediater in alergolog skupaj, kar omogoča hitro postavitev diagnoze in učinkovito zdravljenje.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Symptoms Table Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Najpogostejše težave, zaradi katerih obiščete pediatra alergologa
            </h2>
          </div>
          
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Simptom / težava pri otroku</TableHead>
                    <TableHead className="font-semibold">Možen vzrok</TableHead>
                    <TableHead className="font-semibold">Priporočena obravnava</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {symptoms.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.symptom}</TableCell>
                      <TableCell className="text-primary font-medium">{item.cause}</TableCell>
                      <TableCell>{item.treatment}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kako poteka pregled
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {processSteps.map((step, index) => (
            <Card 
              key={step.title} 
              className="hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{index + 1}. {step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Asantis Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Zakaj izbrati Asantis
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-start gap-3 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Visit Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center flex items-center justify-center gap-3">
                <AlertCircle className="h-8 w-8 text-primary" />
                Kdaj se naročiti na pregled?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-center mb-6">Če vaš otrok pogosto:</p>
              <ul className="space-y-3 max-w-xl mx-auto">
                {warningSymptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{symptom}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-center mt-6 font-semibold text-primary">
                … je čas za pregled pri pediatru alergologu.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cena pregleda
            </h2>
          </div>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Storitev</TableHead>
                    <TableHead className="font-semibold text-right">Cena (samoplačniško)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricing.map((item) => (
                    <TableRow key={item.service}>
                      <TableCell>{item.service}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            Točne cene preverite ob naročilu – možno je vključiti tudi v mesečni paket 
            Asantis Preventivni otroški program.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pogosta vprašanja
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ne čakajte, da alergije omejijo vašega otroka.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zgodnje zdravljenje pomeni manj težav kasneje.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                Rezervirajte termin pri pediatru alergologu v Ljubljani <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default PediaterAlergologPage;