import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  UserCheck, 
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  Zap,
  Stethoscope,
  Target,
  Syringe,
  Search,
  ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArtrozaKolenaPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const symptoms = [
    "bolečino pri hoji ali po daljšem sedenju",
    "otekanje kolena",
    "jutranjo okorelost",
    "»škrtanje« ali nestabilnost",
    "zmanjšano gibljivost"
  ];

  const benefits = [
    "Ortopedski specialist s dolgoletnimi izkušnjami",
    "Ultrazvočna ocena + individualni načrt",
    "Najsodobnejše neoperativne terapije",
    "Možnost PRP in hialuronskih injekcij",
    "Povezava s fizioterapijo na isti lokaciji"
  ];

  const treatments = [
    { name: "Ortopedski specialistični pregled", purpose: "Diagnostika", description: "Potrditev stopnje artroze, ocena gibljivosti", price: "90–120 €" },
    { name: "Hialuronska injekcija", purpose: "Mazanje sklepa", description: "Zmanjša bolečino 6–12 mesecev", price: "od 120 €" },
    { name: "PRP – plazma bogata s trombociti", purpose: "Regeneracija", description: "Naravno spodbuja obnovo hrustanca", price: "od 180 €" },
    { name: "Blokada sklepov", purpose: "Hitro zmanjšanje bolečine", description: "Protivnetna terapija", price: "od 70 €" },
    { name: "Načrt fizioterapije", purpose: "Krepitev in stabilizacija", description: "Zmanjša obremenitev sklepa", price: "po dogovoru" }
  ];

  const results = [
    "manj bolečine pri hoji",
    "lažje stopanje po stopnicah",
    "večja gibljivost",
    "manj otekanja po aktivnostih",
    "boljša kvaliteta življenja"
  ];

  const faqs = [
    {
      question: "Ali je artroza kolena ozdravljiva?",
      answer: "Ne popolnoma, lahko pa z zgodnjim zdravljenjem močno upočasnimo napredovanje in zmanjšamo simptome."
    },
    {
      question: "Ali so injekcije učinkovite?",
      answer: "Da – hialuron in PRP dokazano zmanjšata bolečino in povečata gibljivost."
    },
    {
      question: "Kdaj potrebujem operacijo?",
      answer: "Ko konzervativne metode ne pomagajo več in je bolečina trajna."
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
    "description": "Zdravljenje artroze kolena v Ljubljani - injekcije, PRP, ortopedski pregled",
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
        <title>Artroza kolena – zdravljenje, injekcije, ortoped Ljubljana | Asantis</title>
        <meta name="description" content="Artroza kolena povzroča bolečino, otekanje in omejeno gibanje. Pri Asantis ponujamo hialuronske injekcije, PRP, ortopedski pregled in načrt rehabilitacije. Naročite se." />
        <meta name="keywords" content="artroza kolena, zdravljenje artroze, hialuronske injekcije koleno, PRP koleno, ortoped ljubljana, bolečina v kolenu" />
        <link rel="canonical" href="https://asantis.si/ortopedija/artroza-kolena" />
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
              Artroza kolena – učinkovito zdravljenje brez operacije
            </h1>
            
            <h2 className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Bolečina v kolenu vas ovira pri hoji in vsakodnevnih opravilih?
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
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Artroza kolena je ena najpogostejših težav po 40. letu. Če opažate:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <ArrowRight className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{symptom}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-foreground text-center font-medium">
              … potem je čas za natančno ortopedsko oceno, preden se stanje poslabša.
            </p>
          </div>
        </div>
      </section>

      {/* Why Asantis Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Zakaj zdravljenje artroze na Asantis?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-center">Naš pristop:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-primary/20">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Table Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Kako poteka zdravljenje artroze kolena?
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Storitev</th>
                        <th className="text-left p-4 font-semibold">Namen</th>
                        <th className="text-left p-4 font-semibold">Kako pomaga</th>
                        <th className="text-right p-4 font-semibold">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      {treatments.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 text-foreground font-medium">{item.name}</td>
                          <td className="p-4 text-muted-foreground">{item.purpose}</td>
                          <td className="p-4 text-muted-foreground">{item.description}</td>
                          <td className="p-4 text-right font-semibold text-primary">{item.price}</td>
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

      {/* Results Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Rezultati, ki jih opažajo naši pacienti
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-primary/20">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Naredite prvi korak brez tveganja
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Pošljite opis težav ali se naročite na ortopedski pregled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Naročite se na pregled
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

export default ArtrozaKolenaPage;
