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
  Brain,
  Activity,
  Zap,
  ClipboardCheck,
  MessageCircle,
  Target,
  Hand
} from "lucide-react";

const FizioterapijaGlavobolaPage = () => {
  const causes = [
    "Pretirana napetost trapeznih in vratnih mišic",
    "Slaba drža pri računalniku",
    "Zategnjena čeljust (TMJ disfunkcija)",
    "Blokade v zgornjih vratnih sklepih",
  ];

  const treatments = [
    { icon: Target, text: "Sprostitev trigger točk" },
    { icon: Hand, text: "Manualna terapija vratne hrbtenice" },
    { icon: Activity, text: "Korekcija drže" },
    { icon: Zap, text: "Vaje za globoke stabilizatorje vratu" },
    { icon: Brain, text: "Obravnava čeljustnega sklepa (po potrebi)" },
  ];

  const processSteps = [
    { title: "Ocena izvora glavobola", description: "Diagnostični pregled" },
    { title: "Ročne tehnike", description: "Ročne tehnike in razbremenitev" },
    { title: "Program vaj", description: "Individualni program vaj" },
    { title: "Preventivni nasveti", description: "Nasveti za preprečevanje" },
  ];

  const indications = [
    "Napetostni glavoboli",
    "Migrene, sprožene z vratno napetostjo",
    "Glavoboli zaradi stresa",
    "Glavoboli po poškodbah vratu",
  ];

  const faqs = [
    {
      question: "Ali terapija pomaga tudi pri migrenah?",
      answer: "Da, če ima migrena sprožilce v napetostih vratnega dela."
    },
    {
      question: "Koliko obiskov potrebujem?",
      answer: "Najpogosteje 3–5."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Fizioterapija glavobola Ljubljana – napetostni in vratni glavoboli</title>
        <meta 
          name="description" 
          content="Manualna terapija, sprostitev vratnih mišic in korekcija drže za zmanjšanje glavobolov. Strokovna fizioterapija Ljubljana." 
        />
        <meta name="keywords" content="fizioterapija glavobol, napetostni glavobol, vratni glavobol, migrena fizioterapija, glavobol Ljubljana" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Fizioterapija – glavoboli
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Fizioterapija glavobola –{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">odprava napetostnih in vratnih glavobolov</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Mnogi glavoboli izvirajo iz napetih vratnih mišic, blokad v zgornjem delu hrbtenice in slabe drže. 
              Specializirana fizioterapija lahko glavobole učinkovito zmanjša ali odpravi.
            </p>
            
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                📅 Naročite pregled <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zakaj nastanejo glavoboli?
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {causes.map((cause, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-primary flex-shrink-0" />
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
              Kako pomaga terapija
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
            Potek terapije
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

      {/* Indications Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Komu je namenjena
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {indications.map((indication, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{indication}</span>
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
              Naročite pregled in zmanjšajte pogostost glavobolov
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

export default FizioterapijaGlavobolaPage;
