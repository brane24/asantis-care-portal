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
  AlertTriangle,
  Stethoscope,
  Target,
  Syringe,
  ClipboardList,
  Search,
  ArrowRight,
  Bone,
  CircleDot
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OrtopedLjubljanaPage = () => {
  const handleBooking = () => {
    window.location.href = '/kontakt';
  };

  const services = [
    {
      title: "Ortopedski specialistični pregled",
      icon: Stethoscope,
      items: [
        "temeljita anamneza in klinični pregled",
        "ocena gibalnega sistema",
        "analiza predhodnih izvidov",
        "načrt diagnostike (UZ, RTG, MRI)",
        "individualni načrt zdravljenja"
      ]
    },
    {
      title: "Ultrazvočna diagnostika (UZ MSK)",
      icon: Search,
      items: [
        "pregled mehkih tkiv, kit, vezi, mišic, sklepnih struktur",
        "takojšen rezultat",
        "vodena diagnostika za ciljanje terapije"
      ]
    },
    {
      title: "Injekcijske terapije",
      icon: Syringe,
      items: [
        "kortikosteroidne blokade",
        "viskosuplementacija (hialuron)",
        "PRP – plazma bogata s trombociti",
        "protibolečinske infiltracije"
      ]
    },
    {
      title: "Obravnava najpogostejših težav",
      icon: Activity,
      items: [
        "bolečine v kolenu (meniskus, hrustanec, artritis)",
        "poškodbe križnih vezi",
        "skakalno koleno / tekaško koleno",
        "bolečine v hrbtenici (hernija, išias, utesnitve)",
        "bolečine v rami (kalcinacije, utesnitveni sindrom)",
        "poškodbe mišic in tetiv",
        "artroze sklepov",
        "športne poškodbe"
      ]
    }
  ];

  const pricing = [
    { name: "Ortopedski pregled", price: "90–120 €" },
    { name: "Kontrolni pregled", price: "70–90 €" },
    { name: "UZ mišično-skeletnega sistema", price: "60–80 €" },
    { name: "Kortikosteroidna injekcija", price: "70–120 €" },
    { name: "Hialuronska injekcija", price: "120–250 €" },
    { name: "PRP terapija", price: "180–250 €" }
  ];

  const benefits = [
    { 
      title: "Brez čakalnih vrst", 
      description: "Pregled dobite najkasneje v nekaj dneh.",
      icon: Clock
    },
    { 
      title: "Celostna obravnava", 
      description: "Ortoped + fizioterapevt + diagnostična obravnava.",
      icon: UserCheck
    },
    { 
      title: "Dokazano učinkovite terapije", 
      description: "Od klasičnih blokad do PRP regenerativnih terapij.",
      icon: Zap
    },
    { 
      title: "Individualni načrt okrevanja", 
      description: "Jasen načrt: diagnostika → terapija → kontrola → rehabilitacija.",
      icon: Target
    }
  ];

  const processSteps = [
    "Uvodni pogovor o težavah in simptomih",
    "Ortopedski pregled",
    "Po potrebi UZ diagnostika",
    "Predlog takojšnje terapije",
    "Načrt fizioterapije ali nadaljnjih preiskav",
    "Kontrolni pregled po potrebi"
  ];

  const whenToVisit = [
    "ko bolečina traja > 7 dni",
    "ko je prisotna oteklina, škripanje, zmanjšana gibljivost",
    "po športni poškodbi",
    "ob sumu na pretrgano mišico ali vez",
    "pri kroničnih bolečinah v hrbtenici",
    "ob sumu artroze"
  ];

  const faqs = [
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne. V Asantis so vsi ortopedski pregledi samoplačniški, brez napotnice."
    },
    {
      question: "Kako hitro lahko pridem na pregled?",
      answer: "Najpogosteje v 24–72 urah."
    },
    {
      question: "Ali lahko opravim UZ na prvem obisku?",
      answer: "Da, če je na voljo termin – po navadi isti dan."
    },
    {
      question: "Ali injekcije bolijo?",
      answer: "Minimalno. Večina posegov je opravljena v nekaj minutah."
    },
    {
      question: "Kako se pripravim na ortopedski pregled?",
      answer: "Prinesite: stare izvide, MRI/RTG slike, športne čevlje za analizo obremenitev."
    },
    {
      question: "Ali ortoped napiše napotnico za MRI ali fizioterapijo?",
      answer: "Da, ob indikaciji vam lahko izda napotnico za nadaljnjo diagnostiko ali rehabilitacijo."
    },
    {
      question: "Ali sprejemate zavarovalnice?",
      answer: "Storitev je samoplačniška; nekateri dodatni paketi zavarovalnic omogočajo refundacijo."
    },
    {
      question: "Kako dolgo traja okrevanje?",
      answer: "Odvisno od diagnoze – od nekaj dni do več tednov. Ortoped vam pripravi individualni načrt."
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
    "description": "Samoplačniški ortopedski pregledi brez čakalnih vrst v Ljubljani",
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
        <title>Ortoped Ljubljana – samoplačniški pregled brez čakalne vrste | Asantis</title>
        <meta name="description" content="Iščete ortopeda v Ljubljani brez čakanja? Samoplačniški ortopedski pregledi, UZ, injekcije, diagnostika in zdravljenje bolečin v sklepih. Naročanje takoj." />
        <meta name="keywords" content="ortoped ljubljana, samoplačniški ortoped, ortopedski pregled, ortopedska klinika ljubljana, ortoped brez čakalne vrste, bolečine v kolenu, bolečine v hrbtenici, ortopedija ljubljana, meniskus, artroza, ortoped samoplačniško" />
        <link rel="canonical" href="https://asantis.si/ortopedija/ortoped-ljubljana" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Brez čakalnih vrst
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ortoped Ljubljana – samoplačniški pregledi brez čakalnih vrst
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Bolečine v kolenu, hrbtenici, rami ali drugih sklepih? Pri Asantis vas ortoped pregleda brez napotnice, brez čakanja in z možnostjo takojšnje diagnostične obravnave (UZ mišično-skeletnega sistema, RTG napotitev, napotnica za MRI).
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

      {/* Why Act Fast Section */}
      <section className="py-12 bg-destructive/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-destructive/30 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/20 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">Zakaj je pomembno hitro ukrepati?</h2>
                  <p className="text-muted-foreground">
                    Nezdravljene ortopedske težave vodijo v <strong className="text-foreground">kronične bolečine</strong>, zmanjšano gibljivost, izostanke od dela in težje poškodbe. Z zgodnjim pregledom preprečimo poslabšanja in skrajšamo čas okrevanja.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Knowledge Bomb Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Ali veste...
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2400+</div>
                  <p className="text-foreground">
                    V zadnjem mesecu je v Ljubljani več kot 2400 ljudi iskalo pomoč ortopeda zaradi bolečin v kolenu, hrbtenici ali rami.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">#1</div>
                  <p className="text-foreground">
                    Najpogostejši razlog so preobremenitve, športne poškodbe in degenerativne spremembe.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Če ste to vi...</h3>
                <p className="text-muted-foreground mb-6">
                  Preizkusili ste protibolečinske tablete, počitek, masažo, a se stanje ne izboljša. Težava se pogosto vrača.
                  <br /><br />
                  <strong className="text-foreground">Zdaj smo na vrsti mi.</strong>
                </p>
                <p className="text-foreground">
                  V Asantis se osredotočamo na <strong>hitro diagnostiko</strong>, jasen načrt zdravljenja in takojšnje ukrepanje (blokade, injekcije, usmeritev na fizioterapijo).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Storitve ortopeda Asantis
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <a key={index} href="/kontakt" className="group">
                    <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-bold text-foreground text-lg pt-2">{service.title}</h3>
                        </div>
                        <ul className="space-y-2 pl-4">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Cenik ortopedskih storitev
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
                      {pricing.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 text-foreground">{item.name}</td>
                          <td className="p-4 text-right font-semibold text-primary">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-sm text-muted-foreground text-center mt-4">
              * Cene so orientacijske in se lahko razlikujejo glede na obseg obravnave.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Naš pristop – zakaj izbrati Asantis?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="h-full border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Potek obiska
            </h2>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Visit Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Kdaj je čas za ortopeda?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {whenToVisit.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-destructive/20">
                  <ArrowRight className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Rezervirajte pregled
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

      {/* Related Services Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Naše ortopedske storitve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Raziščite vse naše specializirane ortopedske storitve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a href="/artroza-kolena" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <CircleDot className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Artroza kolena</h3>
                  <p className="text-muted-foreground text-sm mb-4">Diagnostika in zdravljenje obrabe kolena</p>
                  <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Več <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            <a href="/artroza-kolka" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Bone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Artroza kolka</h3>
                  <p className="text-muted-foreground text-sm mb-4">Zdravljenje bolečin in obrabe kolčnega sklepa</p>
                  <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Več <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            <a href="/bolecina-v-krizu-ortopedija" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Activity className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Bolečina v križu</h3>
                  <p className="text-muted-foreground text-sm mb-4">Ortopedska obravnava bolečin v hrbtenici</p>
                  <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Več <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            <a href="/bolecina-v-rami" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Bolečina v rami</h3>
                  <p className="text-muted-foreground text-sm mb-4">Diagnostika in zdravljenje ramenskih težav</p>
                  <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Več <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Pripravite se na življenje brez bolečin
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rezervirajte svoj ortopedski pregled še danes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={handleBooking} className="text-lg px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Naročite se
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

export default OrtopedLjubljanaPage;
