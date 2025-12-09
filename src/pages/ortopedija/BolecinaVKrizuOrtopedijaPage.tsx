import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BolecinaVKrizuOrtopedijaPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const causes = [
    "hernija diska",
    "išias",
    "artroza hrbtenice",
    "utesnitve živcev",
    "mišične disfunkcije",
    "slaba stabilizacija trupa"
  ];

  const treatments = [
    { name: "Ortopedski pregled", purpose: "Identifikacija vzroka bolečine" },
    { name: "Ultrazvok", purpose: "Ocena mehkih tkiv" },
    { name: "Blokade (fasetne, epiduralne)", purpose: "Hitro zmanjšanje bolečine" },
    { name: "PRP", purpose: "Regeneracija" },
    { name: "Povezana fizioterapija", purpose: "Krepitev stabilizacije, mobilnost" }
  ];

  const urgentSigns = [
    "bolečina, ki traja več kot 2 tedna",
    "izžarevanje v nogo",
    "mravljinčenje / izguba moči",
    "bolečina, ki moti spanec"
  ];

  const faqs = [
    {
      question: "Ali je bolečina v križu vedno posledica hernije?",
      answer: "Ne, večino težav povzročajo mišično-skeletni vzroki."
    },
    {
      question: "Kdaj pomaga blokada?",
      answer: "Pri vnetjih fasetnih sklepov ali živčnih utesnitvah."
    },
    {
      question: "Ali moram pred pregledom opraviti MRI?",
      answer: "Ne, ortoped vam po potrebi svetuje nadaljnje preiskave."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis Ljubljana - Ortopedija",
    "description": "Zdravljenje bolečine v križu v Ljubljani - blokade, injekcije, ortopedski pregled",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Orthopedics"
  };

  return (
    <Layout>
      <Helmet>
        <title>Bolečina v križu – ortoped, injekcije, blokade in rehabilitacija | Ljubljana</title>
        <meta name="description" content="Kronična ali akutna bolečina v križu? Na Asantis nudimo ortopedski pregled, injekcije, zdravljenje išiasa, hernije diska in mišično-skeletnih težav." />
        <meta name="keywords" content="bolečina v križu, hernija diska, išias zdravljenje, ortoped ljubljana, blokade hrbtenica, bolečina v hrbtu" />
        <link rel="canonical" href="https://asantis.si/ortopedija/bolecina-v-krizu" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Ortopedska obravnava
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Bolečina v križu – hitro do diagnoze in olajšanja
            </h1>
            
            <h2 className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Se bolečina pojavi pri sedenju, vstajanju, dvigovanju ali med spanjem?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Naročite se na pregled
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Pošljite vprašanje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Najpogostejši vzroki bolečine v križu
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {causes.map((cause, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{cause}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Kako vam pomaga ortoped?
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Pregled / Terapija</th>
                        <th className="text-left p-4 font-semibold">Namen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {treatments.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 text-foreground font-medium">{item.name}</td>
                          <td className="p-4 text-muted-foreground">{item.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgent Signs Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/20 rounded-full">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Znaki, da potrebujete pregled takoj</h2>
                    <ul className="space-y-2">
                      {urgentSigns.map((sign, index) => (
                        <li key={index} className="flex items-center gap-2 text-foreground">
                          <ArrowRight className="w-4 h-4 text-destructive" />
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Pošljite opis težav ali se naročite na pregled
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Naročite se
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5 mr-2" />
                Pošljite vprašanje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Pogosta vprašanja
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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

export default BolecinaVKrizuOrtopedijaPage;
