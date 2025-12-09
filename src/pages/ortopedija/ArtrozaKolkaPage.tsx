import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
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

const ArtrozaKolkaPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const symptoms = [
    "bolečina v dimljah",
    "izžarevanje v stegno ali koleno",
    "okorelost zjutraj",
    "zmanjšana gibljivost",
    "šepanje"
  ];

  const treatments = [
    { name: "Ortopedski specialistični pregled", purpose: "Diagnostika + ultrazvok" },
    { name: "PRP (trombocitna plazma)", purpose: "Regeneracija sklepa" },
    { name: "Hialuronske injekcije", purpose: "Podpora gibanju, manj bolečine" },
    { name: "Blokade", purpose: "Hitro olajšanje" },
    { name: "Povezana fizioterapija", purpose: "Stabilizacija in razbremenitev kolka" }
  ];

  const earlyDiagnosisReasons = [
    "degeneracijo hrustanca",
    "razvoj kompenzacijskih težav v križu",
    "povečano potrebo po operaciji (kolčna proteza)"
  ];

  const faqs = [
    {
      question: "Katera terapija najbolj pomaga pri artrozi kolka?",
      answer: "Najbolj se uporabljajo PRP, hialuron in fizioterapija."
    },
    {
      question: "Ali lahko še naprej hodim na daljše sprehode?",
      answer: "Da, z ustreznim programom obremenitve."
    },
    {
      question: "Kdaj je potrebna zamenjava kolka?",
      answer: "Ko so bolečine kljub terapijam stalne in vplivajo na spanec ter mobilnost."
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
    "description": "Zdravljenje artroze kolka v Ljubljani - injekcije, PRP, ortopedski pregled",
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
        <title>Artroza kolka – ortopedski pregled, terapije in injekcije | Asantis</title>
        <meta name="description" content="Težave v kolku? Artroza kolka povzroča bolečine pri hoji in vstajanju. Asantis ortoped ponuja diagnozo, injekcije, PRP in rehabilitacijo." />
        <meta name="keywords" content="artroza kolka, zdravljenje artroze kolka, bolečina v kolku, PRP kolka, ortoped ljubljana, hialuronske injekcije kolk" />
        <link rel="canonical" href="https://asantis.si/ortopedija/artroza-kolka" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Neoperativno zdravljenje
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Artroza kolka – zdravljenje bolečine in izboljšanje gibljivosti
            </h1>
            
            <h2 className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Težave pri hoji, vstajanju ali dolgotrajnem sedenju?
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

      {/* Symptoms Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Tipični znaki artroze kolka
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <ArrowRight className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{symptom}</span>
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
              Kaj ponujamo pri zdravljenju artroze kolka?
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Storitev</th>
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

      {/* Early Diagnosis Section */}
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
                    <h2 className="text-xl font-bold text-foreground mb-4">Zakaj je zgodnja diagnostika nujna?</h2>
                    <p className="text-muted-foreground mb-4">Ker lahko prepreči:</p>
                    <ul className="space-y-2">
                      {earlyDiagnosisReasons.map((reason, index) => (
                        <li key={index} className="flex items-center gap-2 text-foreground">
                          <ArrowRight className="w-4 h-4 text-destructive" />
                          {reason}
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
              Naročite se na pregled
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Pošljite nam vprašanje ali rezervirajte termin za ortopedski pregled.
            </p>
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

export default ArtrozaKolkaPage;
