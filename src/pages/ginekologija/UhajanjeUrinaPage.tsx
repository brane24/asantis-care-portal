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
  Zap,
  FileText,
  MapPin,
  Star,
  Users
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UhajanjeUrinaPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const causes = [
    "Oslabljene mišice medeničnega dna",
    "Spremembe po porodu",
    "Hormonske spremembe v menopavzi",
    "Kronični kašelj, zaprtje, težja fizična obremenitev",
    "Nevrogeni vzroki",
    "Prekomerno delovanje sečnega mehurja"
  ];

  const symptoms = [
    { text: "Uhajanje urina ob naporu (stresna inkontinenca)", icon: AlertTriangle },
    { text: "Nenadna, močna potreba po uriniranju (urgentna inkontinenca)", icon: AlertTriangle },
    { text: "Uhajanje urina v kombinaciji obeh vzorcev (mešana inkontinenca)", icon: AlertTriangle },
    { text: "Pogosta nočna prebujanja zaradi uriniranja", icon: AlertTriangle },
    { text: "Občutek nepopolnega praznjenja mehurja", icon: AlertTriangle }
  ];

  const diagnosticSteps = [
    "anamneza",
    "vaginalni pregled",
    "ocena medeničnega dna",
    "ultrazvok (po potrebi)",
    "ocena tipa inkontinence"
  ];

  const therapies = [
    "Vaje za medenično dno pod nadzorom fizioterapevta",
    "Elektrostimulacija",
    "Laserska ali radiofrekvenčna terapija (vaskularizacija in učvrstitev tkiva)",
    "Biofeedback",
    "Hormonsko zdravljenje (lokalni estrogen)",
    "Zdravila za prekomerno aktiven sečni mehur",
    "Kirurške metode (pri težjih oblikah)"
  ];

  const therapyComparison = [
    {
      therapy: "Vaje za medenično dno (Keglove + fizioterapija)",
      target: "Ženske vseh starosti, blaga–zmerna inkontinenca",
      advantages: "Neinvazivno, varno, dokazano učinkovito",
      results: "Izboljšanje v 4–8 tednih"
    },
    {
      therapy: "Radiofrekvenčna / laserska terapija",
      target: "Po porodu, v menopavzi, oslabljeno tkivo",
      advantages: "Hitro, neboleče, brez okrevanja",
      results: "Vidni rezultati po 2–3 tretmajih"
    },
    {
      therapy: "Biofeedback + elektrostimulacija",
      target: "Oslabljene mišice, težave po porodu",
      advantages: "Natančno krepi ciljne mišice",
      results: "Postopen, a stabilen napredek"
    },
    {
      therapy: "Zdravila",
      target: "Urgentna inkontinenca",
      advantages: "Hitro zmanjšanje urgenc",
      results: "Učinek ob rednem jemanju"
    },
    {
      therapy: "Kirurški trakovi (TVT, TOT)",
      target: "Težje oblike stresne inkontinence",
      advantages: "Dolgotrajni rezultati",
      results: "Po dogovoru s specialistom"
    }
  ];

  const benefits = [
    { icon: Users, title: "Specializirana ekipa", description: "Ginekološka in uroginekološka ekipa" },
    { icon: Activity, title: "Vse na enem mestu", description: "Diagnostika + terapija" },
    { icon: Heart, title: "Personalizirano", description: "Prilagojeno starosti in težavam" },
    { icon: Zap, title: "Hitro delujoče", description: "Neinvazivne terapije brez bolniške" },
    { icon: Stethoscope, title: "Celosten pristop", description: "Ginekolog + fizioterapija" }
  ];

  const services = [
    { name: "Ginekološki pregled + diagnostika inkontinence", price: "85–120 €" },
    { name: "Terapija medeničnega dna (fizioterapija)", price: "50–65 €" },
    { name: "Radiofrekvenčna / laserska terapija", price: "120–180 €" },
    { name: "Biofeedback", price: "50–70 €" },
    { name: "Kirurška obravnava", price: "po dogovoru" }
  ];

  const faqs = [
    {
      question: "Ali je uhajanje urina normalen del staranja?",
      answer: "Ne. Je zelo pogosto, ni pa normalno. Z današnjimi metodami je težavo mogoče odpraviti ali močno zmanjšati."
    },
    {
      question: "Ali lahko inkontinenca izgine sama od sebe?",
      answer: "Včasih po porodu da, a običajno se brez obravnave težave ponavljajo ali stopnjujejo."
    },
    {
      question: "Je zdravljenje boleče?",
      answer: "Večina terapij je nebolečih. Radiofrekvenca in laser sta topla, a ne boleča postopka."
    },
    {
      question: "Koliko obiskov je potrebnih?",
      answer: "Odvisno od oblike inkontinence – od 1–3 obiskov pri blagih oblikah do 6–8 za zmerne."
    },
    {
      question: "Ali je potrebna bolniška?",
      answer: "Pri neinvazivnih terapijah ne. Po kirurških metodah je okrevanje nekaj dni."
    },
    {
      question: "Ali lahko težavo preprečim?",
      answer: "Da – s krepitvijo medeničnega dna, urejanjem telesne teže, pravilnimi navadami in pravočasno obravnavo."
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
    "name": "Zdravljenje urinske inkontinence",
    "description": "Diagnostika in zdravljenje uhajanja urina pri ženskah vseh starosti",
    "procedureType": "Diagnostic and therapeutic",
    "bodyLocation": "Medenično dno, sečni mehur",
    "preparation": "Ni posebne priprave",
    "followup": "Kontrolni pregled po potrebi",
    "howPerformed": "Ginekološki pregled, fizioterapija, radiofrekvenčna ali laserska terapija"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis Ljubljana - Ginekologija",
    "description": "Specializirana obravnava urinske inkontinence v Ljubljani",
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
        <title>Uhajanje urina (urinska inkontinenca) – diagnostika in zdravljenje | Asantis Ljubljana</title>
        <meta name="description" content="Diskretna in učinkovita obravnava urinske inkontinence. Specializirani ginekologi in fizioterapija medeničnega dna. Ljubljana – samoplačniško. Naročite se hitro." />
        <meta name="keywords" content="uhajanje urina, urinska inkontinenca, stresna inkontinenca, urgentna inkontinenca, zdravljenje inkontinence Ljubljana, fizioterapija medeničnega dna, ginekolog Ljubljana samoplačniško, inkontinenca po porodu, menopavza uhajanje urina" />
        <link rel="canonical" href="https://asantis.si/ginekologija/uhajanje-urina-urinska-inkontinenca" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalProcedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Diskretno in učinkovito
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Uhajanje urina (Urinska inkontinenca)
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Diskretna, učinkovita in personalizirana obravnava za ženske vseh starosti
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Urinska inkontinenca pomeni nenadzorovano uhajanje urina, ki lahko nastopi pri kašljanju, teku, smehu, dvigovanju bremen ali brez opozorila. Težava je zelo pogosta (prizadene več kot <strong className="text-foreground">40 % žensk</strong>), vendar je tudi zelo učinkovito rešljiva, če je diagnoza pravilna.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Naročite se na posvet
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
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Kaj je urinska inkontinenca in zakaj nastane?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Najpogostejši vzroki:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {causes.map((cause, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
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
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Simptomi, na katere morate biti pozorni
            </h2>
            
            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-primary/20">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{symptom.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Asantis Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Zakaj izbrati Asantis Ljubljana?
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

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Kako poteka obravnava?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Posvet in diagnostika</h3>
                  <ul className="space-y-2">
                    {diagnosticSteps.map((step, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Načrt zdravljenja</h3>
                  <p className="text-muted-foreground">
                    Personalizirana terapija glede na starost, hormonski status, porod, stopnjo težav.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Terapije</h3>
                  <ul className="space-y-2">
                    {therapies.slice(0, 4).map((therapy, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {therapy}
                      </li>
                    ))}
                    <li className="text-sm text-primary font-medium">+ več možnosti...</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Comparison Table */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Terapije za urinsko inkontinenco – primerjalna tabela
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Terapija</th>
                        <th className="text-left p-4 font-semibold">Komu je namenjena</th>
                        <th className="text-left p-4 font-semibold">Prednosti</th>
                        <th className="text-left p-4 font-semibold">Rezultati</th>
                      </tr>
                    </thead>
                    <tbody>
                      {therapyComparison.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 font-medium text-foreground">{item.therapy}</td>
                          <td className="p-4 text-muted-foreground">{item.target}</td>
                          <td className="p-4 text-muted-foreground">{item.advantages}</td>
                          <td className="p-4 text-primary font-medium">{item.results}</td>
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
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Rezultati zdravljenja
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-6xl font-bold text-primary">80%+</div>
              <Star className="w-12 h-12 text-primary" />
            </div>
            
            <p className="text-lg text-muted-foreground">
              Več kot <strong className="text-foreground">80 % žensk</strong> poroča o občutnem izboljšanju že po 1–2 mesecih ustrezne terapije.
              <br /><br />
              Pri kombiniranem pristopu (ginekolog + fizioterapija) je uspešnost še višja.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/30 bg-primary/5">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Naročite se na posvet – diskretno, hitro, brez čakanja
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Prvi pregled vključuje diagnostiko + načrt zdravljenja.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                  <div className="flex items-center gap-2 text-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">041 / 000 000</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Asantis Medical Center, Ljubljana</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Termini tudi popoldne in sobota</span>
                  </div>
                </div>
                
                <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                  <Calendar className="w-5 h-5 mr-2" />
                  Rezervirajte termin
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Cenik
            </h2>
            
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Najpogostejša vprašanja (FAQ)
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
            Ne odlašajte – učinkovita rešitev je na dosegu roke
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Več kot 80 % žensk poroča o občutnem izboljšanju že po 1–2 mesecih.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={handleBooking} className="text-lg px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Rezervirajte termin
            </Button>
            <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Pokličite nas
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UhajanjeUrinaPage;
