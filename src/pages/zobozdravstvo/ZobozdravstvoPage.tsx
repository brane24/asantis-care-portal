import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Clock, Sparkles, MessageCircle, Star, Phone, Calendar, Shield, Heart } from "lucide-react";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ZobozdravstvoPage = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Izkušeni zobozdravniki specialisti",
      description: "Vsak pregled in poseg opravi zdravnik specialist z dolgoletnimi izkušnjami."
    },
    {
      icon: Clock,
      title: "Brez čakanja, hitri termini",
      description: "Naročite se takoj, brez dolgih čakalnih vrst."
    },
    {
      icon: Sparkles,
      title: "Sodobna oprema in tehnologija",
      description: "Digitalni rentgen, 3D diagnostika, laserska terapija, estetska zobozdravstva."
    },
    {
      icon: MessageCircle,
      title: "Celostna obravnava",
      description: "Od preventive in diagnostike do estetskih posegov in protetike."
    }
  ];

  const examinationSteps = [
    "Pogovor o težavah, anamneza in pregled ustne votline.",
    "Digitalni rentgen in diagnostika stanja zob ter dlesni.",
    "Po potrebi dodatna diagnostika ali takojšnje zdravljenje.",
    "Načrt zdravljenja in priporočila za ustno higieno."
  ];

  const services = [
    {
      category: "Preventiva in diagnostika",
      items: ["preventivni pregledi", "profesionalno čiščenje zob", "rentgenska diagnostika", "pregled za otroke"]
    },
    {
      category: "Zdravljenje zobnih bolezni",
      items: ["zdravljenje kariesa", "polnjenje zob", "endodontsko zdravljenje (zdravljenje koreninskih kanalov)", "ekstrakcije"]
    },
    {
      category: "Parodontologija",
      items: ["zdravljenje dlesni", "globoko čiščenje obzobnih žepov", "parodontalna kirurgija"]
    },
    {
      category: "Estetska zobozdravstva",
      items: ["beljenje zob", "estetske zalivke", "keramične luske (veneers)", "preoblikovanje nasmeha"]
    },
    {
      category: "Protetika in implantati",
      items: ["zobne krone in mostički", "zobni implantati", "snemne in fiksne proteze"]
    }
  ];

  const treatmentApproach = [
    "Temelji na natančni diagnostiki in individualnem pristopu.",
    "Uporabljamo sodobne materiale in tehnologije za dolgotrajne rezultate.",
    "Nežen pristop za paciente, ki jih je strah zobozdravnika.",
    "Preventiva je na prvem mestu – redno spremljanje in vzdrževanje ustnega zdravja."
  ];

  const bookingSteps = [
    { step: "1", title: "Izpolnite obrazec", description: "Izpolnite kratek obrazec ali pokličite." },
    { step: "2", title: "Izbira termina", description: "Izberemo termin, ki vam ustreza." },
    { step: "3", title: "Pregled", description: "Opravite pregled pri zobozdravniku specialistu." },
    { step: "4", title: "Nadaljnje zdravljenje", description: "Po potrebi se dogovorimo za nadaljevanje zdravljenja." }
  ];

  const faqItems = [
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, pregled je samoplačniški in brez čakalne dobe."
    },
    {
      question: "Kako pogosto naj obiščem zobozdravnika?",
      answer: "Priporočamo preventivni pregled vsaj dvakrat letno za ohranjanje ustnega zdravja."
    },
    {
      question: "Ali izvajate tudi estetske posege?",
      answer: "Da, izvajamo beljenje zob, keramične luske, estetske zalivke in celostno preoblikovanje nasmeha."
    },
    {
      question: "Koliko stane prvi pregled?",
      answer: "Cena osnovnega zobozdravstvenega pregleda: od 50 €. Natančno ceno prejmete pred posegom."
    },
    {
      question: "Ali je poseg boleč?",
      answer: "Uporabljamo sodobne metode lokalne anestezije, zato so posegi neboleči. Za bolj anksiozne paciente nudimo tudi sedacijo."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Zobozdravstvo Ljubljana | Zobni pregledi in zdravljenje – Asantis</title>
        <meta 
          name="description" 
          content="Sodobno zobozdravstvo v Ljubljani. Preventivni pregledi, zdravljenje kariesa, estetska zobozdravstva, implantati. Brez čakalne dobe – naročite se zdaj!" 
        />
        <meta name="keywords" content="zobozdravstvo Ljubljana, zobozdravnik, zobni pregled, beljenje zob, zobni implantati, estetska zobozdravstva" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Zobozdravstvo
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Zobozdravstvo – sodobna skrb za vaše zobe in nasmeh
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Zaupajte svoje zobe strokovnjakom. Nudimo celostno zobozdravstveno oskrbo – od preventive do estetskih posegov in implantologije.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Naročite se na pregled
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+38612345678">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokličite nas
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Google ocena 4.9 | Več kot 1500 zadovoljnih pacientov</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zakaj pacienti izberejo nas?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kaj pričakovati pri prvem pregledu</h2>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <ol className="space-y-4">
                  {examinationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center">
                  🦷 <strong>Prvi pregled običajno traja 30–45 minut.</strong> Po potrebi se dogovori načrt zdravljenja ali takojšnji poseg.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Naše zobozdravstvene storitve</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/10 border-secondary/20">
            <CardContent className="p-6">
              <p className="text-center">
                📌 <strong>Redno spremljanje ustnega zdravja preprečuje večje težave</strong> – naročite se na preventivni pregled.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Naš pristop k zdravljenju</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {treatmentApproach.map((approach, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{approach}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preprost in hiter postopek naročanja</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {bookingSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">📅 Možnost naročanja tudi prek spleta 24/7.</p>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                <Heart className="mr-2 h-5 w-5" />
                Naročite se na pregled zdaj
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pogosta vprašanja</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Zaupajte svoje zobe strokovnjakom
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ne čakajte na bolečino – preventivni pregledi so ključ do zdravega nasmeha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">Naročite se na zobozdravstveni pregled</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">Pokličite nas ali pišite</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default ZobozdravstvoPage;
