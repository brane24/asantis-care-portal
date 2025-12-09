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
  Activity,
  Zap,
  Target,
  MessageCircle,
  Heart,
  Brain,
  Droplet
} from "lucide-react";

const AkupunkturaPage = () => {
  const benefits = [
    { icon: Target, text: "Zmanjšanje bolečine" },
    { icon: Brain, text: "Sprostitev živčnega sistema" },
    { icon: Droplet, text: "Izboljšanje prekrvavitve" },
    { icon: Heart, text: "Zmanjšanje stresa in napetosti" },
    { icon: Activity, text: "Primerna tudi kot dopolnilna terapija fizioterapiji" },
  ];

  const processSteps = [
    { title: "Diagnostični pogovor", description: "Pogovor o težavah in ciljih" },
    { title: "Vstavitev iglic", description: "Vstavitev tankih iglic v ciljne točke" },
    { title: "Sprostilne tehnike", description: "Sprostitev in umiritev" },
    { title: "Kombinirana terapija", description: "Po potrebi kombinacija z manualno terapijo" },
  ];

  const indications = [
    "Bolečine v vratu, križu in sklepih",
    "Glavoboli in migrene",
    "Stres in nespečnost",
    "Mišične napetosti",
    "Prebavne težave",
  ];

  const faqs = [
    {
      question: "Ali je akupunktura boleča?",
      answer: "Iglice so zelo tanke, večina strank občuti minimalen pritisk."
    },
    {
      question: "Koliko terapij potrebujem?",
      answer: "Najpogosteje 3–8 glede na težavo."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Akupunktura Ljubljana – naravno zmanjšanje bolečine in stresa</title>
        <meta 
          name="description" 
          content="Akupunktura za bolečino, glavobole, stres, nespečnost in napetosti. Strokovna izvedba v Ljubljani. Rezervirajte termin." 
        />
        <meta name="keywords" content="akupunktura Ljubljana, akupunktura bolečina, akupunktura stres, akupunktura glavobol, naravna terapija" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Fizioterapija – akupunktura
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Akupunktura –{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">naravna pot do zmanjšanja bolečine in sprostitve</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Akupunktura je preverjena metoda, ki spodbuja samozdravilne procese telesa. 
              Učinkovita je pri bolečinah, stresu, glavobolih, nespečnosti in kroničnih napetostih.
            </p>
            
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                📅 Rezervirajte termin <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prednosti akupunkture
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <benefit.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{benefit.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
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
        </div>
      </section>

      {/* Indications Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Komu pomaga
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
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Card className="max-w-3xl mx-auto bg-gradient-hero border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Naročite termin akupunkture – večina strank občuti sprostitev že po prvi terapiji
              </h2>
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <MessageCircle className="mr-2 h-5 w-5" /> Rezervirajte termin
                </NavLink>
              </Button>
            </CardContent>
          </Card>
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
    </Layout>
  );
};

export default AkupunkturaPage;
