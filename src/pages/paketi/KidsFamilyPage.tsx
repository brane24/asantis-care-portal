import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Baby, Heart, Clock, FileText, MessageCircle, CalendarCheck, Users, Stethoscope, Percent } from "lucide-react";

const KidsFamilyPage = () => {
  const faqItems = [{
    question: "Ali paket vključuje cepljenja?",
    answer: "Ne. Cepljenja izvajamo samoplačniško in po veljavnih strokovnih smernicah."
  }, {
    question: "Kaj pomeni akutni pregled?",
    answer: "Pregled ob nenadni bolezni ali poslabšanju: vročina, okužbe, kašelj, bolečine, izpuščaji, prebavne težave ipd."
  }, {
    question: "Kaj če potrebujemo več kot 2 akutna pregleda?",
    answer: "Možno je doplačilo po znižani ceni za člane paketa."
  }, {
    question: "Ali so online posveti omejeni?",
    answer: "Online posveti so namenjeni kratkim vprašanjem in usmeritvam. V primeru potrebe vas pediater usmeri na pregled."
  }, {
    question: "Ali velja popust za več otrok?",
    answer: "Da. Za drugega in vsakega naslednjega otroka nudimo družinski popust."
  }, {
    question: "Ali lahko dobim zdravniško opravičilo?",
    answer: "Da, kadar je medicinsko upravičeno (vrtec, šola, odsotnost staršev)."
  }, {
    question: "Ali paket nadomešča izbranega pediatra?",
    answer: "Ne. Paket je namenjen dodatni, samoplačniški obravnavi in hitremu dostopu."
  }, {
    question: "Ali je vezava?",
    answer: "Priporočamo vsaj 6 mesecev, da ima program dejanski učinek. Podrobnosti so navedene ob naročilu."
  }];

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
    "name": "Kids & Family - Zasebni pediatrični program",
    "description": "Hiter dostop do pediatra. Manj stresa za starše. Boljše zdravje otrok. Preventivni in akutni pregledi z online podporo.",
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
      "price": "39",
      "priceCurrency": "EUR",
      "description": "Mesečna naročnina za pediatrični paket na otroka"
    }
  };

  const packageIncludes = [{
    icon: Stethoscope,
    title: "Letni preventivni pediatrični pregled",
    description: "Celostna ocena rasti, razvoja in zdravja otroka"
  }, {
    icon: Heart,
    title: "1 pregled mesečno",
    description: "Za bolezni, okužbe, vročino, kašelj, izpuščaje, bolečine …"
  }, {
    icon: MessageCircle,
    title: "Online posveti za starše",
    description: "Hitra vprašanja, dileme, usmeritve (ali je potreben pregled ali ne)"
  }, {
    icon: CalendarCheck,
    title: "Prioritetno naročanje",
    description: "Bistveno krajše čakalne dobe kot pri občasnih obiskih"
  }, {
    icon: FileText,
    title: "Zdravniška dokumentacija in opravičila",
    description: "Po potrebi za vrtec, šolo ali delodajalca"
  }, {
    icon: Percent,
    title: "Popusti na alergološko in pulmološko testiranje",
    description: "Ugodnejše cene za specialistična testiranja"
  }];

  const processSteps = [{
    step: "1",
    title: "Otroka vključite v program s plačilom naročnine"
  }, {
    step: "2",
    title: "Ko se pojavi težava, se naročite prioritetno ali vprašate online"
  }, {
    step: "3",
    title: "Pediater presodi: nasvet, pregled ali dodatna obravnava"
  }, {
    step: "4",
    title: "Starši dobite jasna navodila za nadzor nad zdravljenjem"
  }];

  const targetAudience = [{
    icon: "🌬️",
    text: "Za otroke z astmo, ki potrebujejo redno spremljanje in prilagajanje terapije"
  }, {
    icon: "🤧",
    text: "Za otroke z alergijami, ki jih zdravimo z imunoterapijo"
  }, {
    icon: "🩹",
    text: "Za otroke z atopijskim dermatitisom za redno prilagajanje terapije"
  }, {
    icon: "📈",
    text: "Za otroke, za katere želite nadzor nad razvojem in zdravjem"
  }];

  return (
    <Layout>
      <Helmet>
        <title>Kids & Family – zasebni pediatrični program | Asantis Ljubljana</title>
        <meta name="description" content="Hiter dostop do pediatra. Manj stresa za starše. Boljše zdravje otrok. Preventivni in akutni pregledi z online podporo za 39 €/mesec." />
        <meta name="keywords" content="zasebni pediater Ljubljana, pediatrični paket, otroški zdravnik, preventivni pregled otroka, akutni pregled otroka" />
        <link rel="canonical" href="https://asantis.si/paketi/kids-family" />
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
              👨‍👩‍👧‍👦 Kids & Family
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Zasebni pediatrični program
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-foreground">Hiter dostop do pediatra. Manj stresa za starše. Boljše zdravje otrok.</strong>
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
              Za družine, ki želijo zanesljivo pediatrično obravnavo brez čakanja, jasna navodila in podporo tudi takrat, ko otrok zboli nenadoma.
            </p>
            
            <p className="text-primary font-medium mb-8">
              👉 Namenjeno otrokom od rojstva do 18. leta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <NavLink to="/kontakt">
                  Naroči se na paket <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Zakaj Kids & Family paket?
            </h2>
          </div>

          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Večina staršev ne potrebuje pediatra vsak teden – <br />
                <strong className="text-foreground">ko pa ga potrebujejo, ga potrebujejo takoj.</strong>
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Kids & Family je naročniški program, ki:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">zagotavlja <strong>hiter dostop</strong>,</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">omogoča <strong>preventivo</strong>, ne samo gasenja težav,</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">in staršem daje <strong>občutek varnosti</strong>, da niso sami, ko zboli otrok.</span>
                </div>
              </div>

              <p className="text-lg font-medium text-primary">
                Namesto iskanja termina, klicev in negotovosti – imate svojega pediatra.
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
              Kaj vključuje paket (na otroka)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packageIncludes.map((item, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{item.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground ml-7">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Kako poteka v praksi?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">{step.step}</span>
                    </div>
                    <p className="text-lg pt-1">{step.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-medium text-primary">
                👉 Brez nepotrebnih obiskov, brez čakanja, brez negotovosti.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Za koga je paket še posebej primeren?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {targetAudience.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            💶 Cena
          </Badge>
          <div className="mt-6">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              🧒 Prvi pregled
            </Badge>
            <p className="text-lg font-medium">
              Celostni preventivni pediatrični pregled
            </p>
            <p className="text-muted-foreground mt-1">
              120 € <span className="text-sm">(enkratno)</span>
            </p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-6">
            39 € / mesec / otrok
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-primary/30 shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>preventiva</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>akutni pregledi</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>online podpora</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>prioritetni dostop</span>
                </div>
              </div>

              <Button size="lg" asChild className="w-full text-lg">
                <NavLink to="/kontakt">
                  Naroči se na paket <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              ❓ FAQ – Kids & Family
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-6">
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
            Pripravljen na mirnejše starševstvo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Vključite svojega otroka v Kids & Family program že danes.
          </p>
          <Button size="lg" asChild className="text-lg">
            <NavLink to="/kontakt">
              Naroči se na paket <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default KidsFamilyPage;
