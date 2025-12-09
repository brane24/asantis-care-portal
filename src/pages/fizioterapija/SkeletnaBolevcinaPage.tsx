import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowRight,
  CheckCircle,
  Bone,
  Activity,
  Zap,
  ClipboardCheck,
  MessageCircle,
  Target
} from "lucide-react";

const SkeletnaBolevcinaPage = () => {
  const causes = [
    "Artroza sklepov",
    "Poškodbe hrustanca",
    "Preobremenitve",
    "Slaba telesna drža",
    "Degenerativne spremembe hrbtenice",
  ];

  const treatments = [
    { icon: Activity, text: "Manualna terapija" },
    { icon: Bone, text: "Sklepne mobilizacije" },
    { icon: Target, text: "Terapija mehkih tkiv" },
    { icon: Zap, text: "Vadba za stabilizacijo" },
    { icon: CheckCircle, text: "Terapija bolečine (TENS, TECAR, udarni val)" },
  ];

  const processSteps = [
    { title: "Ocena vzroka bolečine", description: "Diagnostični pregled in identifikacija vzroka" },
    { title: "Individualni načrt terapije", description: "Priprava osebnega programa zdravljenja" },
    { title: "Terapija + vaje", description: "Izvedba terapevtskih tehnik in vaj" },
    { title: "Spremljanje napredka", description: "Prilagajanje programa glede na rezultate" },
  ];

  const conditions = [
    "Bolečina v križu",
    "Bolečina v vratu",
    "Bolečina v kolku ali kolenu",
    "Bolečina v rami (impingement)",
    "Artritične bolečine",
  ];

  const faqs = [
    {
      question: "Ali lahko fizioterapija prepreči operacijo?",
      answer: "V mnogih primerih da – z izboljšanjem stabilizacije in zmanjšanjem obremenitev."
    },
    {
      question: "Kako hitro se izboljšanje pozna?",
      answer: "Pri akutnih stanjih pogosto že po 1–2 terapijah."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Skeletna bolečina – fizioterapija za hrbtenico in sklepe | Ljubljana</title>
        <meta 
          name="description" 
          content="Odpravite skeletne bolečine z manualno terapijo, stabilizacijskimi vajami in celostno fizioterapijo. Naročite termin v Ljubljani." 
        />
        <meta name="keywords" content="skeletna bolečina, fizioterapija hrbtenica, bolečina v sklepih, fizioterapija Ljubljana, artroza fizioterapija" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Fizioterapija – skeletna bolečina
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Fizioterapija za skeletno bolečino –{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">hrbtenica, sklepi, degenerativne spremembe</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Skeletna bolečina vključuje bolečine v hrbtenici, kolku, kolenu, ramenu in drugih sklepih. 
              Z naprednimi fizioterapevtskimi tehnikami zmanjšamo vnetje, izboljšamo gibljivost in povrnemo normalno funkcijo.
            </p>
            
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                📅 Naročite termin <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najpogostejši vzroki
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {causes.map((cause, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Bone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{cause}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kako pomagamo
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {treatments.map((treatment, index) => (
              <Card 
                key={index} 
                className="hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <treatment.icon className="h-8 w-8 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{treatment.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Potek obravnave
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Conditions Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Primeri, kjer smo učinkoviti
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {conditions.map((condition, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="max-w-3xl mx-auto bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Naročite termin in začnite zmanjševati bolečino že danes
            </h2>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                <MessageCircle className="mr-2 h-5 w-5" /> Rezervirajte termin
              </NavLink>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
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
        </div>
      </section>
    </Layout>
  );
};

export default SkeletnaBolevcinaPage;
