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
  Mail,
  Clock,
  Sparkles,
  Shield,
  CreditCard,
  User
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

const ProtetikaPage = () => {
  const prostheticTypes = [
    {
      type: "Zobne krone",
      description: "Prevleke iz keramike ali cirkonija za poškodovane ali estetsko moteče zobe.",
      advantages: "Naraven videz, trajnost, zaščita zoba"
    },
    {
      type: "Mostički",
      description: "Trajna rešitev za nadomestitev manjkajočih zob.",
      advantages: "Stabilnost, funkcionalnost, estetika"
    },
    {
      type: "Delne proteze",
      description: "Odstranljive rešitve, kadar manjkajo posamezni zobje.",
      advantages: "Ugodna in hitra izvedba"
    },
    {
      type: "Totalne proteze",
      description: "Popolna zamenjava vseh zob v čeljusti.",
      advantages: "Popolna funkcionalnost"
    },
    {
      type: "Protetika na implantatih",
      description: "Fiksna rešitev z implantati kot nosilci.",
      advantages: "Maksimalna stabilnost in udobje"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Diagnostika in načrtovanje",
      description: "Digitalni 3D odtis in analiza ugriza."
    },
    {
      step: "2",
      title: "Izdelava in preizkus",
      description: "Izdelava krone ali mostička v zobotehničnem laboratoriju."
    },
    {
      step: "3",
      title: "Namestitev in prilagoditev",
      description: "Natančno vstavljanje, prilagoditev ugriza in končni estetski pregled."
    }
  ];

  const whyUs = [
    "Digitalna protetika brez klasičnih odtisov",
    "Cirkonij, e.max in titan – najkakovostnejši materiali",
    "Brezbolečinski posegi",
    "Individualen pristop in estetska analiza nasmeha",
    "Možnost obročnega plačila"
  ];

  const testimonials = [
    {
      quote: "Moja nova krona izgleda popolnoma naravno. Zdaj se spet nasmehnem z veseljem!",
      author: "Marjeta",
      location: "Ljubljana"
    },
    {
      quote: "Mostiček mi je povrnil ugriz in samozavest. Profesionalen pristop od začetka do konca.",
      author: "Andrej",
      location: "Domžale"
    }
  ];

  const prices = [
    { service: "Zobna krona (keramika)", price: "350 €" },
    { service: "Zobna krona (cirkonij)", price: "420 €" },
    { service: "Mostiček (en člen)", price: "350 €" },
    { service: "Delna proteza", price: "550 €" },
    { service: "Totalna proteza", price: "750 €" },
    { service: "Protetika na implantatih", price: "po dogovoru" }
  ];

  const faqItems = [
    {
      question: "Kako dolgo traja postopek?",
      answer: "Približno 1–2 tedna od odtisa do končne namestitve."
    },
    {
      question: "Ali so krone trajne?",
      answer: "Da, ob pravilni higieni zdržijo 10–15 let ali več."
    },
    {
      question: "Ali so posegi boleči?",
      answer: "Ne, izvajamo jih v lokalni anesteziji – popolnoma neboleče."
    },
    {
      question: "Kateri material je najboljši za krone?",
      answer: "Cirkonij in e.max keramika nudita najboljšo kombinacijo estetike in trajnosti. Izbira je odvisna od lokacije zoba in vaših želja."
    },
    {
      question: "Ali lahko jem normalno s protezami?",
      answer: "Da, sodobne proteze omogočajo normalno prehranjevanje. Priporočamo le previdnost pri zelo trdi hrani."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Protetika Ljubljana – krone, mostički, proteze | Asantis zobozdravstvo</title>
        <meta 
          name="description" 
          content="Sodobna protetika v Ljubljani. Estetske zobne krone, mostički in proteze iz cirkonija in keramike. Digitalno načrtovanje, udobje in trajnost. Rezervirajte termin pri Asantis zobozdravstvu." 
        />
        <meta name="keywords" content="protetika Ljubljana, zobne krone Ljubljana, mostički Ljubljana, zobna protetika, proteze Ljubljana, zobozdravnik protetik" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo/protetika" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <span className="text-5xl">🦷</span>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Protetika Ljubljana
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Protetika Ljubljana – krone, mostički in proteze za popoln nasmeh
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Z naravnimi in estetsko dovršenimi rešitvami obnovite funkcijo in videz zob. V Asantis zobozdravstvu uporabljamo napredno digitalno protetiko, vrhunske materiale in osebni pristop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezervirajte brezplačen posvet
                </NavLink>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>4.9 Google ocena</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🦷</span>
                <span>Digitalni 3D odtis</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <span>Specialistka protetike</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Prosthetics */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Obnovite svoj nasmeh – funkcionalno in estetsko</h2>
          </div>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Protetika nadomešča manjkajoče, poškodovane ali obrabljene zobe. S sodobnimi pristopi, kot so digitalni odtisi, CAD/CAM izdelava in estetska keramika, zagotovimo naraven videz, natančno prileganje in trajno rešitev.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Ne glede na to, ali gre za eno krono ali celotno protezo, pri Asantisu oblikujemo nasmeh, ki vam povrne samozavest.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Prosthetics */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Izberite pravo rešitev za vaš primer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prostheticTypes.map((item, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{item.type}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item.advantages}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kako poteka protetično zdravljenje</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-center">
                💡 <strong>Možnost digitalnega prikaza končnega nasmeha pred začetkom!</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Asantis */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Zakaj izbrati Asantis zobozdravstvo</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resnične zgodbe zadovoljnih pacientov</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">— {testimonial.author}, {testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Okvirne cene protetike</h2>
            </div>
            <Card className="mb-6">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-2/3">Storitev</TableHead>
                      <TableHead className="text-right">Cena od</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prices.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell className="text-right text-primary font-semibold">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center">
                  💬 <strong>Ob prvem obisku opravimo natančno cenitev in načrt.</strong>
                </p>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  Rezervirajte termin ali povprašajte po ponudbi
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
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
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-hero border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Rezervirajte svoj termin danes</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" asChild>
                  <NavLink to="/kontakt">
                    <Calendar className="mr-2 h-5 w-5" />
                    Rezervirajte brezplačen posvet
                  </NavLink>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+38612345678">
                    <Phone className="mr-2 h-5 w-5" />
                    Pokličite nas
                  </a>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Asantis zobozdravstvo, Ljubljana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Termin po dogovoru</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ProtetikaPage;
