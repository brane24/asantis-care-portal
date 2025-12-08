import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  UserCheck, 
  Stethoscope, 
  AlertTriangle,
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  Lightbulb,
  MapPin,
  Zap,
  Heart
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BolecinaVratuPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const causes = [
    "dolgotrajno sedenje in nepravilna drža",
    "delo z računalnikom ali mobilnimi napravami",
    "stres in napetost",
    "degenerativne spremembe v vratni hrbtenici",
    "hernija diska ali utesnitev živcev",
    "poškodbe (npr. whiplash po prometni nesreči)"
  ];

  const symptoms = [
    "togost ali napetost v vratu",
    "bolečina pri obračanju glave",
    "glavoboli, ki izvirajo iz vratu",
    "mravljinčenje v rokah ali ramenih",
    "občutek težke glave ali slabše koncentracije",
    "bolečina, ki seva v lopatice ali roke"
  ];

  const treatments = [
    "Manualno terapijo za sproščanje mišic in sklepov",
    "TECAR terapijo ali ultrazvok za zmanjšanje vnetja",
    "Vadbo za stabilizacijo vratne hrbtenice",
    "Kineziotaping za podporo drže",
    "po potrebi posvet pri ortopedu ali nevrologu"
  ];

  const selfHelpTips = [
    "poskrbite za pravilno držo pri sedenju",
    "redno razgibavajte vrat in ramena",
    "izogibajte se dolgotrajnemu delu v isti drži",
    "uporabljajte ergonomski vzglavnik",
    "ob stresu izvajajte dihalne in sprostitvene vaje"
  ];

  const benefits = [
    { icon: UserCheck, title: "Izkušeni strokovnjaki", description: "Fizioterapevti, ortopedi, nevrologi" },
    { icon: Clock, title: "Brez čakanja", description: "Termin brez čakalne dobe" },
    { icon: Lightbulb, title: "Sodobna tehnologija", description: "TECAR, ultrazvok, kineziotaping" },
    { icon: Activity, title: "Celosten pristop", description: "Diagnostika, terapija in preventiva" },
    { icon: MapPin, title: "Odlična lokacija", description: "V središču Ljubljane" }
  ];

  const services = [
    { name: "Diagnostični pregled", price: "45 €", note: "vključuje pogovor in klinični pregled vratne hrbtenice" },
    { name: "Terapija za bolečino v vratu", price: "40 €", note: "manualna ali aparativna terapija" },
    { name: "Paket 5 terapij", price: "180 €", note: "priporočeno pri kroničnih težavah" },
    { name: "Paket 10 terapij", price: "340 €", note: "optimalno za dolgotrajno izboljšanje drže in gibljivosti" }
  ];

  const faqs = [
    {
      question: "Ali moram imeti napotnico?",
      answer: "Ne, obravnavamo samoplačniške paciente brez čakalnih vrst."
    },
    {
      question: "Koliko časa traja terapija?",
      answer: "Približno 45 minut. Število terapij je odvisno od vzroka in trajanja težav."
    },
    {
      question: "Ali se bolečina lahko ponovi?",
      answer: "Če se ne odpravijo vzroki (npr. drža, mišična šibkost), se lahko. Zato vedno vključimo preventivne vaje in nasvete za dolgoročno stabilnost."
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

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zdravljenje bolečine v vratu",
    "description": "Diagnostika in zdravljenje bolečine v vratu z manualnimi in aparativnimi terapijami",
    "procedureType": "Therapeutic",
    "bodyLocation": "Vratna hrbtenica, vrat",
    "preparation": "Ni posebne priprave",
    "followup": "Preventivne vaje in nasveti za dolgoročno stabilnost",
    "howPerformed": "Manualna terapija, TECAR, ultrazvok, kineziotaping"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis Ljubljana - Fizioterapija",
    "description": "Strokovno zdravljenje bolečine v vratu v Ljubljani",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Physical Therapy"
  };

  return (
    <Layout>
      <Helmet>
        <title>Bolečina v vratu – vzroki, simptomi in zdravljenje | Asantis Ljubljana</title>
        <meta name="description" content="Vas boli vrat? Odpravite vzrok bolečine z natančno diagnostiko in strokovnim zdravljenjem v Asantis centru Ljubljana. Brez čakanja, z individualnim pristopom." />
        <meta name="keywords" content="bolečina v vratu, vratna hrbtenica, zatrd vrat, napetost v vratu, mravljinčenje v roki, zdravljenje bolečine v vratu Ljubljana, fizioterapija vrat, manualna terapija vrat" />
        <link rel="canonical" href="https://asantis.si/fizioterapija/bolecina-v-vratu" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalProcedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Prvi termin v 24 urah
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Bolečina v vratu – poiščite vzrok in učinkovito rešitev
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Napetost, omejena gibljivost ali glavoboli, ki izvirajo iz vratu? V Asantis centru v Ljubljani ugotovimo vzrok in vas vodimo do trajne rešitve – brez čakalnih vrst.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Rezervirajte pregled
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Pokličite nas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Zakaj nastane bolečina v vratu?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Bolečina v vratu je med najpogostejšimi težavami današnjega časa. Pojavi se lahko nenadno ali postopno, pogosto zaradi kombinacije fizičnih in psihičnih dejavnikov:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {causes.map((cause, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{cause}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Kako prepoznate, da gre za vratni izvor težav?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Kako poteka zdravljenje bolečine v vratu
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-center">
              V Asantis centru pristopamo celostno – poiščemo vzrok težave in ga ciljno zdravimo. Po začetnem pregledu in pogovoru vam pripravimo individualni načrt, ki lahko vključuje:
            </p>
            
            <div className="space-y-4 mb-8">
              {treatments.map((treatment, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-foreground">{treatment}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Dogovorite se za prvi pregled
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Help Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Samopomoč pri bolečini v vratu
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {selfHelpTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Zakaj izbrati Asantis center Ljubljana
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Cene storitev
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Storitev</th>
                        <th className="text-center p-4 font-semibold">Cena</th>
                        <th className="text-left p-4 font-semibold">Opombe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 font-medium text-foreground">{service.name}</td>
                          <td className="p-4 text-center font-semibold text-primary">{service.price}</td>
                          <td className="p-4 text-muted-foreground">{service.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Rezervirajte termin brez napotnice
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
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{faq.question}</span>
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

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Povrnite gibljivost in sprostite vrat
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pravočasno ukrepanje prepreči kronične težave.
          </p>
          <Button size="lg" variant="secondary" onClick={handleBooking} className="text-lg px-8">
            <Calendar className="w-5 h-5 mr-2" />
            Rezervirajte pregled v Asantis centru Ljubljana
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BolecinaVratuPage;
