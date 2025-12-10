import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Brain, Clock, Shield, MessageCircle, Star, Phone, Calendar, AlertCircle, Flame, Moon, Utensils, Activity, Repeat, ArrowRight } from "lucide-react";
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
import { Helmet } from "react-helmet";

const PsihiaterLjubljanaPage = () => {
  const symptoms = [
    "dolgotrajno nizko razpoloženje, utrujenost, izguba motivacije",
    "panični napadi, pretirana zaskrbljenost",
    "težave s spanjem",
    "izgorelost, stres, težave pri delu",
    "motnje hranjenja",
    "post-COVID težave (kognitivna megla, anksioznost, slabo počutje)",
    "OCD, ponavljajoče vsiljive misli",
    "potrebe po mnenju, terapiji ali uvajanju zdravljenja"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Prvi pregled",
      description: "Natančen razgovor, ocena stanja, psihodiagnostika, predlog zdravljenja."
    },
    {
      step: "2",
      title: "Terapijski načrt",
      description: "Kombinacija pogovorne terapije, farmakoterapije, TMS (po potrebi) in integriranega pristopa."
    },
    {
      step: "3",
      title: "Kontrolni pregledi",
      description: "Spremljanje napredka, prilagoditev terapije, podporni programi."
    }
  ];

  const services = [
    { name: "Prvi psihiatrični pregled", description: "anamneza, diagnostika, načrt", price: "120–150 €" },
    { name: "Kontrolni pregled", description: "prilagoditev terapije", price: "80–90 €" },
    { name: "Ocena za bolniški stalež", description: "mnenje, dokumentacija", price: "40–60 €" },
    { name: "TMS terapija (po potrebi)", description: "protokoli za depresijo/anksioznost", price: "po dogovoru" }
  ];

  const faqItems = [
    {
      question: "Kako hitro lahko dobim termin?",
      answer: "Običajno v 3–7 dneh."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, obravnava je samoplačniška."
    },
    {
      question: "Ali je zdravljenje diskretno?",
      answer: "Da, zagotovljena je popolna anonimnost."
    },
    {
      question: "Ali lahko dobim potrdilo za bolniški stalež?",
      answer: "Da."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Psihiater Ljubljana – Samoplačniški psihiatrični pregled | Asantis</title>
        <meta name="description" content="Psihiater Ljubljana brez čakalnih dob. Hitra, diskretna in strokovna obravnava depresije, anksioznosti, nespečnosti, izgorelosti. Prvi pregled v 3-7 dneh." />
        <meta name="keywords" content="psihiater Ljubljana, samoplačniški psihiatrični pregled, depresija zdravljenje Ljubljana, anksioznost pomoč, hitro k psihiatru" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Psihiatrija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Psihiater Ljubljana – hitra, diskretna in strokovna obravnava
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Brez čakalnih dob. Prvi pregled že v nekaj dneh.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Težave kot so depresija, anksioznost, nespečnost, izgorelost, panični napadi in druge duševne motnje zahtevajo pravočasno, strokovno in individualno obravnavo. V Asantis Ljubljana nudimo celostno psihiatrično obravnavo in sodobne metode zdravljenja.
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
              <span>Diskretno in zaupno</span>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Bomb */}
      <section className="container py-12">
        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Ali veste?</h3>
                <p className="text-lg text-muted-foreground">
                  V Sloveniji je več kot <strong>300.000 ljudi</strong> z izraženimi simptomi duševnih motenj, a večina čaka več mesecev na pregled. Pri nas prejmete termin v <strong>3–7 dneh</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Who Is It For */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Komu je pregled pri psihiatru namenjen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Potek obravnave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Cenik storitev</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Storitev</TableHead>
                      <TableHead>Vsebina</TableHead>
                      <TableHead className="text-right">Cena</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell className="text-muted-foreground">{service.description}</TableCell>
                        <TableCell className="text-right font-semibold">{service.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ne odlašajte – zgodnje zdravljenje pomeni hitrejše okrevanje.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pošljite vprašanje ali se naročite na prvi pregled.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">Naročite se na pregled</NavLink>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Naše psihiatrične storitve */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Naše psihiatrične storitve</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pomagamo pri različnih duševnih težavah – od blažjih do kompleksnejših.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Depresija in anksioznost", description: "Strokovna obravnava depresije, tesnobe in paničnih napadov.", icon: Brain, href: "/depresija-anksioznost" },
              { title: "Izgorelost", description: "Pomoč pri poklicni izgorelosti, kroničnem stresu in izgubi motivacije.", icon: Flame, href: "/izgorelost" },
              { title: "Nespečnost", description: "Diagnostika in zdravljenje motenj spanja.", icon: Moon, href: "/nespecnost" },
              { title: "Motnje hranjenja", description: "Celostna obravnava anoreksije, bulimije in kompulzivnega prenajedanja.", icon: Utensils, href: "/motnje-hranjenja" },
              { title: "Post COVID sindrom", description: "Pomoč pri psihičnih posledicah po prebolelem COVID-19.", icon: Activity, href: "/post-covid-sindrom" },
              { title: "OKM (obsesivno-kompulzivna motnja)", description: "Zdravljenje vsiljenih misli in ponavljajočih se vedenj.", icon: Repeat, href: "/okm" },
            ].map((service, index) => (
              <NavLink key={index} to={service.href} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                        <span className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                          Več informacij
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            ))}
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
    </Layout>
  );
};

export default PsihiaterLjubljanaPage;
