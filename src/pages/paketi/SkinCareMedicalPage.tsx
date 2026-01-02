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
  Scan, 
  Shield, 
  FileText,
  Sparkles,
  Eye,
  Users,
  XCircle,
  BadgePercent
} from "lucide-react";

const SkinCareMedicalPage = () => {
  const faqItems = [
    {
      question: "Ali paket vključuje odstranjevanje znamenj?",
      answer: "Ne neposredno, vendar imate 10 % popust, če je poseg indiciran."
    },
    {
      question: "Ali je vključen HydraFacial ali napredni estetski tretmaji?",
      answer: "Ne. Vključen je osnovni medicinski tretma (npr. nega, piling), ki podpira zdravljenje kože."
    },
    {
      question: "Ali je paket primeren za akne?",
      answer: "Da – paket je zelo primeren za akne in druge vnetne težave kože."
    },
    {
      question: "Kolikokrat letno lahko pridem?",
      answer: "Vključen je 1 temeljni pregled ter kontrola po medicinski indikaciji."
    },
    {
      question: "Kaj če potrebujem več obravnav?",
      answer: "Dodatne storitve se obračunajo po ceniku, z vključenim popustom."
    }
  ];

  const activationFaqItems = [
    {
      question: "Zakaj je potreben začetni preventivni pregled, če obstaja naročnina?",
      answer: "Ker se pri začetnem preventivnem pregledu opravi največ strokovnega dela: diagnostika, ocena tveganj, plan in odločitev o terapiji. Naročnina je namenjena spremljanju in prilagajanju obravnave skozi čas, ne začetni oceni."
    },
    {
      question: "Ali lahko opravim pregled brez naročnine?",
      answer: "Da. Pregled je samostojna storitev in ni vezan na nadaljevanje."
    },
    {
      question: "Ali moram po pregledu skleniti naročnino?",
      answer: "Ne. Po opravljenem pregledu se odločite, ali vam naročniško spremljanje prinaša vrednost."
    },
    {
      question: "Ali začetni preventivni pregled nadomesti samoplačniški dermatološki pregled?",
      answer: "Da. Vključuje poglobljen dermatološki pregled in strokovno oceno stanja, ki bi jo sicer plačali ločeno."
    },
    {
      question: "Kdaj je naročnina posebej priporočljiva?",
      answer: "Pri stanjih ali posegih, ki zahtevajo stalno spremljanje in prilagajanje: zdravljenje aken, rozaceje, zdravljenje brazgotin in estetski posegi."
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
    "name": "SkinCare Medical - Zdravstveni dermatološki paket",
    "description": "Medicinski dermatološki paket za akne, znamenja, občutljivo in problematično kožo. Redni pregledi, terapija in strokovni nadzor kože.",
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
    "offers": {
      "@type": "Offer",
      "name": "Mesečna naročnina",
      "price": "49",
      "priceCurrency": "EUR",
      "description": "Mesečna naročnina za dermatološki paket brez vezave"
    }
  };

  const packageIncludes = [
    {
      icon: Scan,
      title: "Dermatološki pregled z dermatoskopijo"
    },
    {
      icon: FileText,
      title: "Diagnostika kožnih bolezni in stanj"
    },
    {
      icon: Shield,
      title: "Individualni terapevtski načrt (kreme, terapija, navodila)"
    },
    {
      icon: Sparkles,
      title: "1 osnovni medicinsko usmerjen tretma kože"
    },
    {
      icon: Eye,
      title: "Kontrolni pregled po indikaciji"
    },
    {
      icon: BadgePercent,
      title: "10 % popust na dodatne dermatološke storitve"
    }
  ];

  const targetAudience = [
    "Odraslim in mladostnikom z aknami",
    "Osebam z občutljivo ali reaktivno kožo",
    "Pri kroničnih vnetjih kože (dermatitis, rozacea)",
    "Za spremljanje znamenj in kožnih sprememb",
    "Če želite zdravniški nadzor, ne le kozmetične nege"
  ];

  return (
    <Layout>
      <Helmet>
        <title>SkinCare Medical – zdravstveni dermatološki paket | Asantis Ljubljana</title>
        <meta 
          name="description" 
          content="Medicinski dermatološki paket za akne, znamenja, občutljivo in problematično kožo. Redni pregledi, terapija in strokovni nadzor kože." 
        />
        <meta 
          name="keywords" 
          content="dermatolog Ljubljana, akne zdravljenje, rozacea, dermatitis, kožne bolezni, dermatoskopija, kožni pregled" 
        />
        <link rel="canonical" href="https://asantis.si/paketi/skincare-medical" />
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
              🧴 SkinCare Medical
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Zdravje kože.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ne kozmetika.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
              Medicinski dermatološki paket za akne, znamenja in problematično kožo – z rednim strokovnim nadzorom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Brez vezave</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Brez skritih stroškov</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Medicinsko voden program</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <NavLink to="/kontakt">
                  Naroči se zdaj <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Package Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Zdravstveni dermatološki paket za dolgoročno zdravje kože
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Za ljudi, ki imajo težave s kožo in želijo medicinski nadzor – ne kozmetičnih eksperimentov.
            </p>
          </div>

          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ta paket je namenjen diagnostiki, zdravljenju in spremljanju kožnih stanj, ne trendni estetiki. 
                <strong className="text-foreground"> Koža je organ – in tako jo tudi obravnavamo.</strong>
              </p>
              <p className="text-lg font-medium text-primary">
                👉 Primerno za akne, rozaceo, dermatitis, pigmentacije, občutljivo kožo, sumljiva znamenja in kronične težave.
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
              Kaj vključuje paket
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packageIncludes.map((item, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            <Card className="bg-amber-50/50 border-amber-200 dark:bg-amber-900/10 dark:border-amber-800/30">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">
                  <strong>Estetski posegi niso fokus</strong> – vključeni so le, kadar podpirajo zdravljenje kože.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Package Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Zakaj paket in ne posamezni pregled?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Večina težav s kožo:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <span>ni enkratna</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <span>zahteva spremljanje</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <span>se izboljšuje postopno</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">Namesto vsakič znova plačevati pregled, imate:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>stalni odnos z dermatologom</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>pregled + kontrolo, ko je smiselno</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>jasen terapevtski načrt</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>nižje skupne stroške skozi leto</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Komu je paket namenjen?
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {targetAudience.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activation Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent-foreground border-accent/20">
            🧠 Prvi korak
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Celostni preventivni pregled kože</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To ni aktivacija in ni naročnina. To je poglobljen dermatološki pregled z analizo stanja, prepoznavo tveganj in jasnim načrtom nadaljnje obravnave. Pregled je samostojna zdravstvena storitev.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-4xl font-bold text-primary mb-2">120 €</p>
                <p className="text-muted-foreground">enkratni preventivni pregled</p>
                <p className="text-sm text-muted-foreground mt-2">Samostojna storitev. Brez obveznega nadaljevanja.</p>
              </div>

              <h3 className="text-xl font-bold mb-6">Kaj obsega preventivni pregled:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Temeljni dermatološki pregled",
                  "Dermatoskopijo znamenj",
                  "Diagnostično oceno kožnega stanja",
                  "Individualni terapevtski načrt",
                  "Skupna odločitev, ali je dolgoročno spremljanje smiselno"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-muted/50 border-muted">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>To je začetna strokovna ocena.</strong><br />Po opravljenem pregledu se odločite, ali želite nadaljevati z naročniškim spremljanjem – ali ne.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Monthly Subscription Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🔁 Po opravljenem pregledu
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Mesečna naročnina: 49 € / mesec
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/30 shadow-soft">
              <CardContent className="p-8">
                <div className="mb-8">
                  <Card className="bg-muted/50 border-muted">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Naročnina je posebej priporočljiva</strong> pri stanjih ali posegih, ki zahtevajo stalno spremljanje in prilagajanje obravnave:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {[
                          "zdravljenje aken",
                          "zdravljenje rozaceje",
                          "zdravljenje brazgotin",
                          "estetski posegi"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-bold mb-6 text-center">Vključeno:</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Spremljanje po indikaciji</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Kontrolni pregled</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Osnovni medicinski tretma</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>10 % popust na dodatne storitve</span>
                  </div>
                </div>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      <strong>Ni obveznih mesečnih obiskov.</strong><br />
                      Paket je zdravstveni odnos, ne urnik obiskov.
                    </p>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-6">
                    Za vstop v paket je potrebna začetna dermatološka obravnava, kjer ocenimo stanje kože 
                    in pripravimo individualni načrt zdravljenja. Šele nato je smiselno dolgoročno spremljanje.
                  </p>
                  <Button size="lg" asChild className="w-full text-lg">
                    <NavLink to="/kontakt">
                      Začni s pregledom <ArrowRight className="ml-2 h-5 w-5" />
                    </NavLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activation FAQ Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            ❓ Pogosta vprašanja – začetni pregled
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {activationFaqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`activation-${index}`}
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
            Pripravljen na zdravo kožo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Začnite z medicinskim nadzorom kože danes.
          </p>
          <Button size="lg" asChild className="text-lg">
            <NavLink to="/kontakt">
              Naroči se zdaj <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SkinCareMedicalPage;
