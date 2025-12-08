import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Clock, 
  UserCheck, 
  Stethoscope, 
  AlertTriangle,
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  Heart,
  Microscope,
  FileText,
  Lock,
  Sparkles
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GinekoloskaVnetjaPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const symptoms = [
    "pekoč občutek, srbenje",
    "rumen, zelenkast ali bel sirast izcedek",
    "neprijeten vonj",
    "bolečine med spolnim odnosom",
    "pogosta ali boleča mikcija",
    "rdečina, oteklina ali draženje",
    "ponavljajoča vnetja (2× ali več na leto)"
  ];

  const inflammationTypes = [
    {
      title: "Glivično vnetje (Candida)",
      symptoms: "Srbečica, bel sirast izcedek, pekoč občutek – pogosto po antibiotikih ali v nosečnosti.",
      treatment: "Zdravljenje: ciljna terapija, obnova vaginalne flore, preventivna strategija."
    },
    {
      title: "Bakterijska vaginoza",
      symptoms: "Neprijeten vonj, sivkast izcedek. Vzrok je porušeno razmerje bakterij.",
      treatment: "Zdravljenje: antibiotiki + obnova normalne flore."
    },
    {
      title: "Trichomonas vaginalis",
      symptoms: "Spolno prenosljivo parazitsko vnetje.",
      treatment: "Zdravljenje: sistemska terapija + zdravljenje partnerja."
    },
    {
      title: "Vnetja sečil (cistitis)",
      symptoms: "Pekoče uriniranje, bolečine v spodnjem delu trebuha.",
      treatment: "Zdravljenje: hitri testi, kultura urina, individualna terapija."
    },
    {
      title: "Virusna vnetja – HPV, herpes",
      symptoms: "Ocenitev sprememb, ciljna terapija, načrt kontrole.",
      treatment: ""
    },
    {
      title: "Kronična vnetja in ponavljajoče se težave",
      symptoms: "Celosten pristop: mikrobiološki brisi, PCR, vaginalna mikrobiota, individualni načrt zdravljenja.",
      treatment: ""
    }
  ];

  const processSteps = [
    "Pogovor o simptomih in dosedanjem zdravljenju",
    "Ginekološki pregled in ultrazvok (po potrebi)",
    "Mikrobiološki brisi, PCR diagnostika",
    "Natančna razlaga vzroka vnetja",
    "Takojšnji začetek terapije",
    "Načrt za preprečevanje ponavljajočih se vnetij"
  ];

  const services = [
    { name: "Ginekološki pregled + posvet", price: "70 €" },
    { name: "Bris za bakterije / glivice", price: "15–25 €" },
    { name: "PCR test za spolno prenosljive okužbe", price: "40–80 €" },
    { name: "Ultrazvok po potrebi", price: "40 €" },
    { name: "Kontrolni pregled", price: "50 €" }
  ];

  const benefits = [
    { icon: Clock, title: "Hitro", description: "Termin še isti ali naslednji dan" },
    { icon: Lock, title: "Diskretno", description: "Brez napotnice, 100 % zaupno" },
    { icon: Activity, title: "Celostno", description: "Diagnostika, UZ, brisi, terapija na enem mestu" },
    { icon: UserCheck, title: "Izkušeni ginekologi", description: "Najsodobnejša oprema" },
    { icon: Heart, title: "Prilagojeno", description: "Za ženske z dolgotrajnimi ali ponavljajočimi se vnetji" }
  ];

  const preventionTips = [
    "pravilna intimna higiena (brez agresivnih mil)",
    "bombažno perilo",
    "urejena črevesna mikrobiota",
    "probiotiki za vaginalno zdravje",
    "omejitev sladkorja",
    "zaščiteni spolni odnosi",
    "izogibanje samozdravljenju brez diagnostike",
    "redni ginekološki pregledi 1× letno"
  ];

  const faqs = [
    {
      question: "Kako vem, ali gre za glivično ali bakterijsko vnetje?",
      answer: "Simptomi so si lahko podobni. Razliko lahko zanesljivo ugotovi le ginekolog s pregledom in brisi. Napačna terapija lahko stanje poslabša."
    },
    {
      question: "Ali lahko vnetje mine samo od sebe?",
      answer: "Kratkotrajna vnetja lahko včasih spontano minejo, vendar priporočamo pregled, saj se brez diagnoze lahko ponavljajo ali preidejo v kronično obliko."
    },
    {
      question: "Zakaj se mi vnetja ponavljajo?",
      answer: "Najpogostejši razlogi so hormonske spremembe, oslabljena mikrobiota, slabo izbrana terapija, preveč agresivna higiena ali neprepoznane spolno prenosljive okužbe."
    },
    {
      question: "Ali lahko imam spolne odnose med vnetjem?",
      answer: "Priporočamo počitek spolnih odnosov do umiritve simptomov in do zaključka terapije."
    },
    {
      question: "Ali je pregled diskreten in samoplačniški?",
      answer: "Da. V Asantis lahko pridete brez napotnice, termin dobite hitro, obravnava pa je popolnoma diskretna."
    },
    {
      question: "Ali lahko opravite tudi HPV testiranje?",
      answer: "Da, izvajamo HPV teste, PAP brise in vse dodatne diagnostične postopke."
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
    "name": "Zdravljenje ginekoloških vnetij",
    "description": "Diagnostika in zdravljenje ginekoloških vnetij – bakterijskih, glivičnih, virusnih in kroničnih težav",
    "procedureType": "Diagnostic and therapeutic",
    "bodyLocation": "Ženski reproduktivni sistem",
    "preparation": "Ni posebne priprave",
    "followup": "Kontrolni pregled po potrebi",
    "howPerformed": "Ginekološki pregled, brisi, PCR diagnostika, individualna terapija"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis Ljubljana - Ginekologija",
    "description": "Specializirana obravnava ginekoloških vnetij v Ljubljani",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Gynecology"
  };

  return (
    <Layout>
      <Helmet>
        <title>Ginekološka vnetja – zdravljenje, diagnostika | Ginekolog Ljubljana | Asantis</title>
        <meta name="description" content="Specializirana obravnava ginekoloških vnetij v Ljubljani. Hitri samoplačniški ginekološki pregledi, brisi, PCR diagnostika in zdravljenje glivičnih, bakterijskih ter kroničnih vnetij. Naročite termin." />
        <meta name="keywords" content="ginekološka vnetja, glivično vnetje, bakterijska vaginoza, vnetje nožnice, vnetje materničnega vratu, zdravljenje vnetij, ginekolog Ljubljana, ginekološki pregled samoplačniško, candida zdravljenje, vaginalno vnetje, bolečine v nožnici, srbečica, pekoč občutek, ponavljajoča vnetja, PCR test ginekolog" />
        <link rel="canonical" href="https://asantis.si/ginekologija/ginekoloska-vnetja" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalProcedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              Diskretno in samoplačniško
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Hitro in diskretno do diagnoze ter učinkovitega zdravljenja ginekoloških vnetij
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              V Asantis ginekološkem centru v Ljubljani se ukvarjamo z diagnostiko in zdravljenjem vseh vrst ginekoloških vnetij – bakterijskih, glivičnih, virusnih in kroničnih težav, ki se ponavljajo. Samoplačniško, brez čakalnih vrst, z najnovejšo opremo in celostnim pristopom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Naročite se na pregled
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Pokličite nas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Bomb */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/30 bg-accent/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Ali veste?</h3>
                  <p className="text-lg text-muted-foreground">
                    V Sloveniji ima vsaj <strong className="text-foreground">1 od 3 žensk</strong> vsaj enkrat letno težave z vnetjem nožnice ali zunanjega spolovila.
                    <br /><br />
                    <strong className="text-foreground">Velik delež vnetij se ponavlja</strong>, če niso pravilno diagnosticirana ali zdravljena.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Simptomi ginekoloških vnetij
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Najpogostejši znaki, pri katerih priporočamo obisk:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Inflammations */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Najpogostejše vrste ginekoloških vnetij, ki jih zdravimo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {inflammationTypes.map((type, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Microscope className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {index + 1}. {type.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">{type.symptoms}</p>
                        {type.treatment && (
                          <p className="text-primary font-medium">{type.treatment}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Kako poteka pregled pri ginekologu Asantis
            </h2>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex flex-wrap gap-6 justify-center text-center">
                <div>
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">Čas pregleda</p>
                  <p className="text-muted-foreground">20–30 minut</p>
                </div>
                <div>
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">Samoplačniško</p>
                  <p className="text-muted-foreground">Brez napotnice in čakalne vrste</p>
                </div>
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
              Cenik – ginekološka vnetja
            </h2>
            <p className="text-muted-foreground text-center mb-8">Samoplačniško</p>
            
            <Card className="overflow-hidden">
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
            
            <p className="text-sm text-muted-foreground text-center mt-4">
              * Točen obseg preiskav določi ginekolog glede na simptome.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Zakaj Asantis?
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
            
            <div className="text-center mt-10">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Naročite termin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Preventiva: kako zmanjšati možnost ponavljajočih vnetij?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {preventionTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              FAQ – najpogostejša vprašanja
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
            Ne odlašajte z obiskom – vnetja se lahko ponavljajo
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pravilna diagnoza in zdravljenje preprečita kronične težave.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={handleBooking} className="text-lg px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Rezervirajte termin
            </Button>
            <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Pošljite vprašanje
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GinekoloskaVnetjaPage;
