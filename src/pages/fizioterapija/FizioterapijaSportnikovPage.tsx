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
  Dumbbell,
  Activity,
  Zap,
  Target,
  MessageCircle,
  Hand,
  TrendingUp
} from "lucide-react";

const FizioterapijaSportnikovPage = () => {
  const services = [
    { icon: Hand, text: "Manualna terapija" },
    { icon: Activity, text: "Kineziotaping" },
    { icon: Dumbbell, text: "Vadba za stabilizacijo in eksplozivnost" },
    { icon: Zap, text: "Rehabilitacija poškodovanih tkiv" },
    { icon: TrendingUp, text: "Analiza gibanja in tehnike" },
  ];

  const injuries = [
    "Vnetje ahilove tetive",
    "Bolečina v kolenu (patelarna tetiva, meniskus)",
    "Zvin gležnja",
    "Poškodbe ramena pri dvigovanju bremen",
    "Prenapetosti v hrbtu",
  ];

  const processSteps = [
    { title: "Ocena vzroka težav", description: "Diagnostični pregled" },
    { title: "Terapija + trening", description: "Terapija + stabilizacijski trening" },
    { title: "Preprečevanje ponovitve", description: "Preprečevanje ponovitve poškodbe" },
    { title: "Vrnitev k športu", description: "Vodenje vrnitve k športu" },
  ];

  const targetAudience = [
    "Rekreativnim in profesionalnim športnikom",
    "Športnikom po poškodbah",
    "Osebam, ki želijo varno izboljšati rezultate",
  ];

  const faqs = [
    {
      question: "Ali lahko treniram med terapijo?",
      answer: "Odvisno od vrste poškodbe – program vam natančno prilagodimo."
    },
    {
      question: "Kako hitro lahko pričakujem rezultate?",
      answer: "Večina športnikov občuti izboljšanje po 1–3 obiskih."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Fizioterapija športnikov Ljubljana – rehabilitacija poškodb</title>
        <meta 
          name="description" 
          content="Športna fizioterapija za hitrejše okrevanje, boljšo stabilnost in preprečevanje poškodb. Naročite termin." 
        />
        <meta name="keywords" content="športna fizioterapija, fizioterapija športnikov, rehabilitacija poškodb, športne poškodbe Ljubljana, ahilova tetiva" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Fizioterapija – športniki
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Fizioterapija športnikov –{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">hitrejše okrevanje in maksimalna učinkovitost</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Za športnike izvajamo specializirano fizioterapijo, ki vključuje preventivo, zdravljenje poškodb 
              in optimizacijo gibanja. Program je vedno individualno prilagojen glede na šport in obremenitve.
            </p>
            
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                📅 Rezervirajte termin <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kaj vključuje športna fizioterapija
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <service.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{service.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Injuries Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Najpogostejše športne težave
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {injuries.map((injury, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Dumbbell className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{injury}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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

      {/* Target Audience Section */}
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
                  {targetAudience.map((audience, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{audience}</span>
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
              Rezervirajte termin in poskrbite za varno vrnitev v šport
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

export default FizioterapijaSportnikovPage;
