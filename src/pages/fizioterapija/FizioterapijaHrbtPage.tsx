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
  MapPin,
  Mail,
  Star,
  Car,
  Bus,
  Shield,
  Target,
  Heart
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FizioterapijaHrbtPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const trustBadges = [
    { icon: UserCheck, text: "Strokovni fizioterapevti" },
    { icon: Shield, text: "Brez napotnice" },
    { icon: Clock, text: "Termini v 48 h" },
    { icon: Car, text: "Enostavno parkiranje" }
  ];

  const benefits = [
    { 
      icon: Target, 
      title: "Individualni pristop", 
      description: "Terapije prilagodimo vašim vzrokom bolečine (ne samo simptomom)." 
    },
    { 
      icon: CheckCircle, 
      title: "Dokazano učinkovite metode", 
      description: "Manualna terapija, McKenzie, TECAR in elektroterapija." 
    },
    { 
      icon: Zap, 
      title: "Hitro olajšanje", 
      description: "V povprečju zmanjšanje bolečine že po 2–3 obiskih." 
    },
    { 
      icon: Activity, 
      title: "Celostni pristop", 
      description: "Povezujemo ortopeda, fiziatra in fizioterapevta za dolgoročne rezultate." 
    }
  ];

  const conditions = [
    "Bolečinah v križu (lumbago, išias)",
    "Napetosti v vratu in ramenih",
    "Herniji diska",
    "Degenerativnih spremembah hrbtenice",
    "Skoliozi in nepravilni drži",
    "Poškodbah po operacijah hrbtenice"
  ];

  const therapyTypes = [
    { 
      type: "Manualna terapija", 
      description: "Ročne tehnike za sproščanje mišic in sklepov", 
      when: "Akutne in kronične bolečine" 
    },
    { 
      type: "McKenzie metoda", 
      description: "Samostojne vaje za stabilizacijo hrbtenice", 
      when: "Išias, hernija diska" 
    },
    { 
      type: "TECAR terapija", 
      description: "Globinsko segrevanje tkiva za regeneracijo", 
      when: "Po operacijah, vnetjih" 
    },
    { 
      type: "Elektroterapija / ultrazvok", 
      description: "Protibolečinsko in protivnetno delovanje", 
      when: "Mišične napetosti, artritis" 
    },
    { 
      type: "Kineziotaping", 
      description: "Podpora drži in mišicam", 
      when: "Preventivno ali po poškodbah" 
    }
  ];

  const processSteps = [
    { step: "1", title: "Diagnostični pregled", description: "Fizioterapevt oceni stanje in vzroke bolečine" },
    { step: "2", title: "Načrt terapij", description: "Izbere ustrezno kombinacijo tehnik in vaj" },
    { step: "3", title: "Izvajanje terapij", description: "Prilagojeno napredku pacienta" },
    { step: "4", title: "Spremljanje rezultatov", description: "Svetovanje za domače vaje in preprečevanje ponovitev" }
  ];

  const testimonials = [
    {
      text: "Po treh obiskih v Asantis fizioterapiji so bolečine v križu skoraj popolnoma izginile. Zdaj se lahko brez težav vrnem k športu.",
      author: "Matej",
      age: "42 let"
    },
    {
      text: "Strokovno, prijazno, učinkovito. Priporočam vsem, ki imajo težave s hrbtenico.",
      author: "Tina",
      age: "36 let"
    }
  ];

  const services = [
    { name: "Diagnostični pregled fizioterapevta", price: "45 €" },
    { name: "Posamezna terapija hrbtenice", price: "40 €" },
    { name: "Paket 5 terapij", price: "180 €" },
    { name: "Paket 10 terapij", price: "340 €" }
  ];

  const faqs = [
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, pri Asantis lahko pridete brez napotnice."
    },
    {
      question: "Kdaj začutim izboljšanje?",
      answer: "Pri večini pacientov po 2–3 terapijah."
    },
    {
      question: "Ali nudite fizioterapijo tudi po operacijah hrbtenice?",
      answer: "Da, izvajamo prilagojene rehabilitacijske programe po posegih."
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
    "name": "Fizioterapija hrbtenice",
    "description": "Učinkovita odprava bolečin v križu, vratu in hrbtu z manualnimi in aparativnimi terapijami",
    "procedureType": "Therapeutic",
    "bodyLocation": "Hrbtenica",
    "preparation": "Ni posebne priprave",
    "followup": "Domače vaje in preventivni nasveti",
    "howPerformed": "Manualna terapija, McKenzie metoda, TECAR, elektroterapija, kineziotaping"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis Ljubljana - Fizioterapija",
    "description": "Fizioterapija hrbtenice v Ljubljani – odprava bolečin v hrbtu",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Physical Therapy",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "120"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Fizioterapija hrbtenice Ljubljana | Asantis – odprava bolečin v hrbtu</title>
        <meta name="description" content="Fizioterapija hrbtenice v Ljubljani – učinkovita odprava bolečin v križu, vratu in hrbtu. Manualna terapija, TECAR, McKenzie. Brez napotnice. Asantis." />
        <meta name="keywords" content="fizioterapija hrbtenice, fizioterapija hrbta, fizioterapija križa, bolečine v križu, išias, hernija diska, manualna terapija Ljubljana, TECAR terapija Ljubljana, fizioterapevt Ljubljana" />
        <link rel="canonical" href="https://asantis.si/fizioterapija/fizioterapija-hrbtenica" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalProcedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Fizioterapija hrbtenice v Ljubljani – trajna odprava bolečin in ponovno gibanje brez omejitev
            </h1>
            
            <h2 className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Zmanjšajte bolečine v križu, vratu ali med lopaticami z individualno prilagojeno terapijo pod strokovnim nadzorom fizioterapevta.
            </h2>
            
            <div className="mb-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Rezervirajte termin še danes
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Prvi pregled + individualni načrt terapij že ta teden
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
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
              Zakaj izbrati Asantis fizioterapijo hrbtenice?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Fizioterapija hrbtenice pomaga pri:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{condition}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Ne čakajte – naročite se še danes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Types Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Sodobne metode fizioterapije hrbtenice
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Vrsta terapije</th>
                        <th className="text-left p-4 font-semibold">Opis</th>
                        <th className="text-left p-4 font-semibold">Kdaj jo priporočamo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {therapyTypes.map((therapy, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 font-medium text-foreground">{therapy.type}</td>
                          <td className="p-4 text-muted-foreground">{therapy.description}</td>
                          <td className="p-4 text-primary font-medium">{therapy.when}</td>
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

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Kako poteka fizioterapija hrbtenice pri nas?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-lg font-medium text-foreground">
                Povprečno trajanje programa: <strong>5–10 obiskov</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-muted-foreground font-medium">
                      — {testimonial.author}, {testimonial.age}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
                <Star className="w-6 h-6 fill-primary text-primary" />
                <span className="text-lg font-bold text-foreground">Google ocena: 4.9 / 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Fizioterapija hrbtenice – cene in možnosti
            </h2>
            
            <Card className="overflow-hidden mb-6">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Storitev</th>
                        <th className="text-right p-4 font-semibold">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 text-foreground">{service.name}</td>
                          <td className="p-4 text-right font-semibold text-primary">{service.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
              <p className="text-foreground">
                💡 Za člane naročniških paketov Asantis je fizioterapija vključena z dodatnim <strong>popustom do 20 %</strong>.
              </p>
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

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Asantis – Fizioterapija Ljubljana
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Tržaška cesta XX, Ljubljana</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-foreground">01 / XXX XX XX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-foreground">info@asantis.si</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Odgovarjamo v 24 urah</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Brezplačno parkiranje</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bus className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Dober dostop z LPP</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                    <Calendar className="w-5 h-5 mr-2" />
                    Rezervirajte termin online
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Odpravite bolečine v hrbtenici – začnite še danes
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Zmanjšanje bolečine že po 2–3 obiskih pri večini pacientov.
          </p>
          <Button size="lg" variant="secondary" onClick={handleBooking} className="text-lg px-8">
            <Calendar className="w-5 h-5 mr-2" />
            Rezervirajte termin v Asantis centru Ljubljana
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FizioterapijaHrbtPage;
