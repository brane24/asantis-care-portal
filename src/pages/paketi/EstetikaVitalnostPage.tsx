import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Heart,
  Calendar,
  BadgePercent,
  Users,
  Zap,
  Clock,
  Star,
  RefreshCw
} from "lucide-react";

const EstetikaVitalnostPage = () => {
  const faqItems = [
    {
      question: "Ali lahko izberem tretma vsak mesec?",
      answer: "Da. Vsak mesec izbereš 1 tretma iz menija, ki je primeren za tvojo kožo in cilj."
    },
    {
      question: "Zakaj so injektorji/posegi na 3 mesece?",
      answer: "Ker je to realen in varen interval za najboljše rezultate (in ker anti-aging deluje kumulativno: rutina mesečno, večji posegi kvartalno)."
    },
    {
      question: "Ali program vključuje botoks ali fillerje?",
      answer: "Ne kot \"vključeno storitev\". Imaš pa VIP popust (npr. -50%), ki velja 1× na 3 mesece."
    },
    {
      question: "Ali lahko preskočim mesec?",
      answer: "Da, po dogovoru (npr. dopust). Priporočamo kontinuiteto zaradi rezultatov."
    },
    {
      question: "Ali je program primeren za moške?",
      answer: "Da. Meni tretmajev in plan prilagodimo koži in cilju (anti-aging, pore, rdečica, utrujen videz)."
    },
    {
      question: "Kaj če želim samo poseg in nič mesečnega?",
      answer: "Potem je bolj smiselna enkratna storitev brez naročnine. Program je za ljudi, ki hočejo sistem in boljšo ceno posegov skozi čas."
    },
    {
      question: "Ali lahko koristim popust večkrat na mesec?",
      answer: "Ne. VIP popust je vezan na članstvo in je omejen (da ostane program vzdržen): 1× na 3 mesece za večje posege."
    },
    {
      question: "Kako hitro vidim rezultate?",
      answer: "Prve spremembe običajno v 4–8 tednih (koža), največji učinek pa je po 3–6 mesecih, ko se nabere rutina + pravilno tempirani posegi."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Estetika & Vitalnost - Anti-aging program",
    "description": "Mesečna estetika + wellbeing + prehransko svetovanje + analiza biološke starosti. Kvartalni posegi z VIP popustom.",
    "provider": {
      "@type": "MedicalClinic",
      "name": "ASANTIS",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Poljanski nasip 44",
        "addressLocality": "Ljubljana",
        "postalCode": "1000",
        "addressCountry": "SI"
      }
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Standard paket",
        "price": "99",
        "priceCurrency": "EUR",
        "description": "Mesečni tretma + vitality modul + letna analiza + VIP posegi -50%"
      },
      {
        "@type": "Offer",
        "name": "Premium paket",
        "price": "139",
        "priceCurrency": "EUR",
        "description": "Močnejši mesečni tretma + več coachinga + VIP posegi -50%"
      }
    ]
  };

  const monthlyTreatments = [
    "Medicinski piling / osvežilna nega",
    "Nega za akne / pore / rdečico",
    "Hidratacija / glow protokol",
    "Regenerativni protokol (po indikaciji)"
  ];

  const programSteps = [
    {
      month: "1. mesec",
      description: "Ocena + plan + prvi mesečni tretma"
    },
    {
      month: "2. mesec",
      description: "Tretma + prilagoditev rutine"
    },
    {
      month: "3. mesec",
      description: "Tretma + (po želji) VIP poseg/injektor"
    },
    {
      month: "4.–12. mesec",
      description: "Ponavljanje cikla z optimizacijo (najboljši rezultati so kumulativni)"
    }
  ];

  const objections = [
    {
      question: "\"Zakaj plačevati mesečno?\"",
      answer: "Ker dobiš mesečno estetiko + plan + coaching + VIP pogoje za posege. Anti-aging ni enkratna akcija, je sistem."
    },
    {
      question: "\"Ampak poseg je na 3 mesece…\"",
      answer: "To je namenoma. Kvartalni interval je pravi, mesečni del pa je tisto, kar rezultat drži in izboljšuje."
    },
    {
      question: "\"Kaj če izkoristim samo popust?\"",
      answer: "Popust je vezan na naročnino in omejen po frekvenci, zato je fer za obe strani."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Estetika & Vitalnost – anti-aging program | Asantis Ljubljana</title>
        <meta 
          name="description" 
          content="Mesečna estetika + wellbeing + prehransko svetovanje + analiza biološke starosti. Kvartalni posegi z VIP popustom (npr. injektorji -50%)." 
        />
        <meta 
          name="keywords" 
          content="anti-aging Ljubljana, estetski tretmaji, botoks popust, fillerji, pomlajevanje kože, wellbeing, prehransko svetovanje" 
        />
        <link rel="canonical" href="https://asantis.si/paketi/estetika-vitalnost" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              ✨ Estetika & Vitalnost
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Anti-aging program za{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                videz, energijo in dobro počutje
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
              Za ženske in moške, ki želijo rezultat brez "enkratnih impulznih tretmajev": redna nega, boljša koža, več energije, boljši lifestyle – in pameten sistem, kjer so večji posegi planirani na 3 mesece.
            </p>
            
            <p className="text-sm text-muted-foreground mb-8 italic">
              "Plan + rutina + VIP pogoji za posege – brez izgube časa in brez preplačevanja."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <NavLink to="/kontakt">
                  Včlani se v program <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <NavLink to="/kontakt">
                  Posvet z estetikom
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Monthly Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Zakaj mesečna naročnina, če so posegi na 3 mesece?
            </h2>
            <p className="text-lg text-muted-foreground">
              Ker anti-aging ni samo "injektor". Največji učinek naredi kombinacija rutine + planiranja + pravih intervalov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Mesečno
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nega/napredna kožna obravnava + smernice + optimizacija navad → <strong className="text-foreground">koža stalno napreduje</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  Na 3 mesece
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Injektorji/večji posegi → <strong className="text-foreground">varno, smiselno in v pravem tempu</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-muted/30">
            <CardContent className="p-6 text-center">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Vmes:</strong> ti imaš sistem in vodstvo, ne pa "ugibanja, kaj bi še probal/a".
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Package Includes Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Kaj vključuje program
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Monthly Treatment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  1× mesečni estetski tretma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Vsak mesec izbereš 1 tretma iz "menija" (odvisno od kože):
                </p>
                <div className="space-y-2">
                  {monthlyTreatments.map((treatment, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{treatment}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Tretmaji so definirani kot "mesečni modul". Ne gre za neomejene storitve, ampak za strukturiran plan.
                </p>
              </CardContent>
            </Card>

            {/* Vitality Module */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Vitality modul: prehrana + wellbeing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Prehransko svetovanje (kratko, usmerjeno v izvedbo)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Wellbeing coaching (spanje, stres, energija, navade)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Mini plan za 30 dni (realen, izvedljiv)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Annual Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Letna analiza biološke starosti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  1× letno "baseline" + cilji (anti-aging je tudi energija, spanje, sestava telesa).
                </p>
              </CardContent>
            </Card>

            {/* VIP Conditions */}
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BadgePercent className="h-5 w-5 text-primary" />
                  VIP pogoji za večje posege
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary flex-shrink-0" />
                    <span><strong>Injektorji / večji estetski posegi: -50%</strong> s članstvom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Izvedba največ 1× na 3 mesece (medicinsko smiselno + finančno varno)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Prioritetni termini za člane</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Kako poteka (preprosto)
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {programSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{step.month}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objections Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Morda se sprašuješ...
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {objections.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              ❓ Pogosta vprašanja
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Pripravljen/a na anti-aging sistem?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Začni z videzom, energijo in počutjem, ki ti pripada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                Včlani se v program <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <NavLink to="/kontakt">
                Posvet z estetikom
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EstetikaVitalnostPage;
