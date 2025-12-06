import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { 
  Check, 
  Star, 
  Phone, 
  Calendar, 
  MapPin,
  Clock,
  Sparkles,
  Eye,
  UtensilsCrossed,
  Scan,
  Timer,
  Smile,
  CreditCard
} from "lucide-react";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const NevidniZobniAparatPage = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Nevidni in izjemno diskretni",
      description: "Idealni za delo, sestanke, javne nastope"
    },
    {
      icon: UtensilsCrossed,
      title: "Snemljivi",
      description: "Jejte vse, kar želite, brez omejitev"
    },
    {
      icon: Scan,
      title: "Digitalni 3D načrt",
      description: "Prej vidite simulacijo rezultata"
    },
    {
      icon: Timer,
      title: "Hitrejši rezultati",
      description: "Pogosto 6–12 mesecev"
    },
    {
      icon: Smile,
      title: "Manj bolečin in draženja",
      description: "Kot pri fiksnih aparatih"
    },
    {
      icon: CreditCard,
      title: "Obročno plačilo",
      description: "Ali vključitev v Asantis pakete"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Digitalni pregled in 3D skeniranje",
      description: "Ustvarimo natančen 3D model vaših zob brez klasičnih odtisov."
    },
    {
      step: "2",
      title: "Simulacija vašega novega nasmeha",
      description: "Pokažemo vam, kako bodo zobje izgledali po zdravljenju."
    },
    {
      step: "3",
      title: "Izdelava individualnih folij",
      description: "Vsak aligner nežno premakne zobe za droben korak naprej."
    },
    {
      step: "4",
      title: "Rezultati in kontrole",
      description: "Menjava folij vsakih 1–2 tedna, kontrola vsake 4–6 tednov."
    }
  ];

  const packages = [
    {
      name: "Nevidni zobni aparat – Light",
      price: "od 1.800 €",
      description: "Manjše nepravilnosti (sprednji zobje)"
    },
    {
      name: "Nevidni zobni aparat – Standard",
      price: "od 2.200 €",
      description: "Večina primerov, celoten nasmeh"
    },
    {
      name: "Nevidni zobni aparat – Advanced",
      price: "od 3.000 €",
      description: "Kompleksnejše ortodontske nepravilnosti"
    }
  ];

  const results = [
    "poravnavo zob",
    "estetiko nasmeha",
    "simetrijo obraza",
    "samozavest"
  ];

  const otherBraces = [
    "Keramični/safirni fiksni aparat",
    "Klasični kovinski aparat",
    "Snemni aparat za otroke"
  ];

  const faqItems = [
    {
      question: "Ali je nevidni zobni aparat res neviden?",
      answer: "Da — večina ljudi ga ne opazi niti od blizu."
    },
    {
      question: "Koliko časa ga nosim na dan?",
      answer: "Priporočeno 20–22 ur dnevno."
    },
    {
      question: "Ali lahko jem z alignerjem?",
      answer: "Ne — pred jedjo ga snamete, po jedi pa ponovno namestite."
    },
    {
      question: "Je zdravljenje boleče?",
      answer: "Ob menjavi folije morda občutite blago napetost."
    },
    {
      question: "Kako dolgo traja zdravljenje?",
      answer: "Običajno 6–18 mesecev, odvisno od kompleksnosti primera."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Nevidni zobni aparat Ljubljana | Alignerji – Asantis zobozdravstvo</title>
        <meta 
          name="description" 
          content="Nevidni zobni aparat v Ljubljani za odrasle in najstnike. Diskretno, udobno in učinkovito poravnavanje zob. 3D načrt zdravljenja. Rezervirajte pregled." 
        />
        <meta name="keywords" content="nevidni zobni aparat Ljubljana, alignerji Ljubljana, Invisalign Ljubljana, prozorni zobni aparat, ortodont Ljubljana" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo/nevidni-zobni-aparat" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <span className="text-5xl">🦷</span>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Nevidni zobni aparat
            </Badge>
            <p className="text-lg text-primary font-medium mb-4">
              Najbolj diskretna in učinkovita pot do ravnega nasmeha
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Raven nasmeh brez kovinskih žic. Popolnoma nevidno. Popolnoma po meri.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nevidni zobni aparat (alignerji) poravna zobe hitro, udobno in diskretno — idealno za odrasle in najstnike, ki si želijo brezžično ortodontsko zdravljenje.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>skoraj neviden</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>snemljiv</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>udoben brez žic</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>3D načrt zdravljenja</span>
              </div>
            </div>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte pregled za nevidni aparat
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">💎 Zakaj izbrati nevidni zobni aparat Asantis?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🔹 Kako delujejo nevidni alignerji?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item) => (
                <Card key={item.step} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔹 Cene nevidnega zobnega aparata</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-soft transition-all duration-300 ${index === 1 ? 'border-primary border-2' : ''}`}>
                <CardContent className="p-6 text-center">
                  {index === 1 && (
                    <Badge className="mb-4 bg-primary text-primary-foreground">Najpogostejši</Badge>
                  )}
                  <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center">
                  💡 <strong>Vključuje digitalno analizo, načrt terapije in set alignerjev.</strong>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="p-6">
                <p className="text-center">
                  💳 <strong>Možnost obročnega plačila.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🔹 Rezultati</h2>
              <p className="text-muted-foreground">Nevidni aparat izboljša:</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {results.map((result, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">{result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center font-semibold">
                  ✨ Rezultati so vidni že po 6–10 tednih.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">🔹 Pogosta vprašanja</h2>
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
      </section>

      {/* Other Braces */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🔹 Kaj pa drugi zobni aparati?</h2>
              <p className="text-muted-foreground">Ponujamo tudi:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherBraces.map((brace, index) => (
                <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <Check className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-medium">{brace}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <NavLink to="/zobozdravstvo/ortodont-ljubljana">
                  Več o ortodontiji
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🔹 Rezervirajte pregled
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nevidni zobni aparat je najbolj estetska rešitev za ravne zobe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezervirajte posvet pri ortodontu Asantis Ljubljana
                </NavLink>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Center Ljubljane</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>pon–pet, 8:00–19:00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default NevidniZobniAparatPage;
