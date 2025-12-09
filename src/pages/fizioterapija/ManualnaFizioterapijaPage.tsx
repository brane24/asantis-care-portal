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
  Hand,
  Activity,
  Zap,
  Target,
  ClipboardCheck,
  MessageCircle
} from "lucide-react";

const ManualnaFizioterapijaPage = () => {
  const benefits = [
    { icon: CheckCircle, text: "Odpravi mišične vozle in napetost" },
    { icon: CheckCircle, text: "Izboljša gibljivost sklepov" },
    { icon: CheckCircle, text: "Pospeši regeneracijo in zmanjšuje vnetje" },
    { icon: CheckCircle, text: "Odpravlja vzorce napačne drže" },
    { icon: CheckCircle, text: "Hitro olajšanje brez zdravil" },
  ];

  const processSteps = [
    { icon: ClipboardCheck, title: "Diagnostika", description: "Diagnostika in testiranje gibljivosti" },
    { icon: Hand, title: "Mobilizacije", description: "Mobilizacije sklepov in manipulacije (po potrebi)" },
    { icon: Activity, title: "Miofascialne tehnike", description: "Miofascialne tehnike in trigger point sproščanje" },
    { icon: Target, title: "Individualne vaje", description: "Individualne vaje za stabilizacijo" },
  ];

  const indications = [
    "Bolečine v vratu in križu",
    "Omejena gibljivost kolka, rame, kolena",
    "Glavoboli povezani z vratno hrbtenico",
    "Športne preobremenitve",
    "Kronične napetosti",
  ];

  const faqs = [
    {
      question: "Ali boli?",
      answer: "Občutljivost je možna, vendar tehnike prilagodimo vašemu stanju."
    },
    {
      question: "Koliko obiskov potrebujem?",
      answer: "Običajno 3–6, odvisno od kroničnosti."
    },
    {
      question: "Ali je primerna pri herniji diska?",
      answer: "Da – z mehkimi tehnikami in brez provokacije bolečine."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Manualna terapija Ljubljana – hitra sprostitev mišic in sklepov</title>
        <meta 
          name="description" 
          content="Manualna terapija za bolečine v vratu, križu, sklepih in mišicah. Strokovna obravnava v Ljubljani. Naročite termin." 
        />
        <meta name="keywords" content="manualna terapija Ljubljana, fizioterapija mišice, sprostitev sklepov, manualna fizioterapija, trigger point terapija" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Fizioterapija – manualna terapija
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Manualna terapija – hitra pot do sprostitve{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">sklepov, mišic in fascije</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Manualna terapija je učinkovita metoda fizioterapije, pri kateri fizioterapevt s specifičnimi 
              tehnikami rok sprosti omejitve v sklepih, fasciji in mišicah. Primerna je pri akutnih in 
              kroničnih bolečinah, slabi gibljivosti, napetostih ter državnih vzorcih, ki povzročajo obremenitve.
            </p>
            
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                📅 Naročite termin <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zakaj manualna terapija pomaga
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto grid gap-4">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <benefit.icon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit.text}</span>
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
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
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
            Komu je namenjena
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {indications.map((indication, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
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
                Naročite termin in prejmite razbremenitev že po prvem obisku
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

export default ManualnaFizioterapijaPage;
