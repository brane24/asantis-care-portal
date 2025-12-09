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
  ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BolecinaVRamiPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const causes = [
    "kalcinirajoči tendinitis",
    "utesnitveni sindrom",
    "poškodbe rotatorne manšete",
    "burzitis",
    "vnetje tetiv"
  ];

  const processSteps = [
    "Ortopedski pregled",
    "Ultrazvok rame",
    "Terapija (blokada, PRP, rehabilitacija)"
  ];

  const faqs = [
    {
      question: "Kako hitro lahko dobim termin?",
      answer: "Najpogosteje v 24–72 urah."
    },
    {
      question: "Ali so blokade boleče?",
      answer: "Minimalno. Večina posegov je opravljena v nekaj minutah z lokalnim anestetikom."
    },
    {
      question: "Ali potrebujem MRI pred pregledom?",
      answer: "Ne nujno, ortoped vam po ultrazvočni oceni svetuje nadaljnje preiskave."
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
    "description": "Zdravljenje bolečine v rami v Ljubljani - kalcinati, utesnitve, poškodbe tetiv",
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
        <title>Bolečina v rami – kalcinati, utesnitve, poškodbe tetiv | Ortoped Ljubljana</title>
        <meta name="description" content="Bolečina v rami? Kalcinati, utesnitve, tendinitis ali poškodba mišic. Ortoped Asantis nudi diagnostiko, ultrazvok in ciljno zdravljenje." />
        <meta name="keywords" content="bolečina v rami, kalcinati rama, utesnitveni sindrom, rotatorna manšeta, ortoped ljubljana, tendinitis rama" />
        <link rel="canonical" href="https://asantis.si/ortopedija/bolecina-v-rami" />
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
              Bolečina v rami – natančna diagnostika in hitro olajšanje
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Najpogostejši vzroki bolečine v rami
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

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Kako poteka zdravljenje?
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <Card className="w-full md:w-auto">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                        {index + 1}
                      </div>
                      <p className="text-foreground font-medium">{step}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Info */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Diagnostika</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Klinični ortopedski pregled</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ultrazvok rame in mehkih tkiv</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Napotnica za MRI po potrebi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Terapevtske možnosti</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kortikosteroidne blokade</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>PRP terapija za regeneracijo</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fizioterapevtska rehabilitacija</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Rezervirajte termin ali nam pošljite vprašanje
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

export default BolecinaVRamiPage;
