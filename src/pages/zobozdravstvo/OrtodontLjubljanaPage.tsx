import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Star, Phone, Calendar, MapPin, Brain, Smile, CreditCard, Heart, Baby, User, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const OrtodontLjubljanaPage = () => {
  const whyUs = [{
    icon: Brain,
    title: "Strokovnost & digitalna natančnost",
    description: "3D skeni, simulacija končnega nasmeha"
  }, {
    icon: Smile,
    title: "Nevidne in estetske rešitve",
    description: "Invisalign, keramični aparati"
  }, {
    icon: CreditCard,
    title: "Fleksibilno plačilo",
    description: "Obroki ali paket Zobni Plus"
  }, {
    icon: Heart,
    title: "Celostna dentalna skrb",
    description: "Vse na enem mestu"
  }];
  const whoShouldVisit = [{
    icon: Baby,
    text: "Otrokom (7–9 let)"
  }, {
    icon: Users,
    text: "Mladostnikom"
  }, {
    icon: User,
    text: "Odraslim, ki želijo diskretno poravnavo zob"
  }];
  const bracesTypes = [{
    type: "Nevidni aparat (Invisalign)",
    description: "Prozorne folije, brez žic.",
    idealFor: "Odrasli, mladostniki",
    advantages: "Diskreten, snemljiv"
  }, {
    type: "Estetski aparat",
    description: "Keramični nosilci.",
    idealFor: "Odrasli",
    advantages: "Manj opazen"
  }, {
    type: "Kovinski aparat",
    description: "Klasična in robustna rešitev.",
    idealFor: "Otroci, mladostniki",
    advantages: "Najhitrejši rezultati"
  }, {
    type: "Lingvalni aparat",
    description: "Skrit na notranji strani zob.",
    idealFor: "Odrasli",
    advantages: "100% neviden"
  }];
  const processSteps = [{
    step: "1",
    title: "Prvi pregled + 3D-diagnostika"
  }, {
    step: "2",
    title: "Digitalni načrt zdravljenja"
  }, {
    step: "3",
    title: "Namestitev aparata (neboleče)"
  }, {
    step: "4",
    title: "Kontrole vsakih 6–8 tednov"
  }, {
    step: "5",
    title: "Retencija za popoln in stabilen rezultat"
  }];
  const prices = [{
    service: "Ortodontski pregled",
    price: "50 €"
  }, {
    service: "3D-sken + načrt",
    price: "80 €"
  }, {
    service: "Kovinski aparat",
    price: "900 €"
  }, {
    service: "Estetski aparat",
    price: "1.200 €"
  }, {
    service: "Invisalign",
    price: "od 2.400 €"
  }, {
    service: "Retencijska opornica",
    price: "100 €"
  }];
  const faqItems = [{
    question: "Ali boli?",
    answer: "Rahlo nelagodje nekaj dni po namestitvi ali prilagoditvi aparata je povsem normalno in hitro mine."
  }, {
    question: "Koliko časa traja zdravljenje?",
    answer: "Običajno 12–24 mesecev, odvisno od kompleksnosti primera."
  }, {
    question: "Ali je ortodontsko zdravljenje primerno za odrasle?",
    answer: "Da, več kot 50 % naših pacientov je starejših. Nikoli ni prepozno za lep nasmeh."
  }, {
    question: "Ali lahko jem vse s aparatom?",
    answer: "Pri nevidnih aparatih (Invisalign) lahko jeste normalno, saj jih odstranite. Pri fiksnih aparatih se izogibajte trdi in lepljivi hrani."
  }, {
    question: "Kako pogosto so kontrole?",
    answer: "Kontrole so običajno vsakih 6–8 tednov, odvisno od vrste aparata in faze zdravljenja."
  }];
  return <Layout>
      <Helmet>
        <title>Ortodont Ljubljana – Nevidni zobni aparat Invisalign | Asantis</title>
        <meta name="description" content="Ortodont v Ljubljani za otroke, mladostnike in odrasle. Nevidni zobni aparati Invisalign, keramični in kovinski aparati. Rezervirajte ortodontski pregled." />
        <meta name="keywords" content="ortodont Ljubljana, nevidni zobni aparat, Invisalign Ljubljana, zobni aparat za odrasle, ortodontija Ljubljana, poravnava zob" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo/ortodont-ljubljana" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <span className="text-5xl">💎</span>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Ortodont Ljubljana
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Popoln nasmeh – brez žic, brez bolečin, brez sramu.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sodobno ortodontsko zdravljenje za otroke, mladostnike in odrasle z nevidnimi zobnimi aparati (Invisalign, ClearCorrect) in klasičnimi rešitvami – v centru Ljubljane.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezerviraj ortodontski pregled
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/cenik">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Izračunaj ceno zdravljenja
                </NavLink>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span>Več kot 500 zadovoljnih pacientov</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zakaj izbrati naš ortodontski center</h2>
            <p className="text-muted-foreground">Zakaj nam zaupa več kot 500 pacientov:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => <Card key={index} className="hover:shadow-soft transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kdaj obiskati ortodonta</h2>
              <p className="text-muted-foreground">Priporočamo pregled:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {whoShouldVisit.map((item, index) => <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">{item.text}</p>
                  </CardContent>
                </Card>)}
            </div>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center">
                  💡 <strong>Zgodnje zdravljenje = krajši postopki + boljši rezultati.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Braces */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vrste zobnih aparatov</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {bracesTypes.map((brace, index) => <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{brace.type}</h3>
                  <p className="text-muted-foreground mb-4">{brace.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-medium">Idealno za:</span>
                      <span className="text-muted-foreground">{brace.idealFor}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{brace.advantages}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kako poteka zdravljenje</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              {processSteps.map((item, index) => <div key={item.step} className="flex-1 text-center relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <p className="text-sm font-medium">{item.title}</p>
                  {index < processSteps.length - 1 && <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/20" />}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cena in paketi</h2>
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
                  {prices.map((item, index) => <TableRow key={index}>
                      <TableCell className="font-medium">{item.service}</TableCell>
                      <TableCell className="text-right text-primary font-semibold">{item.price}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-center">
                💎 <strong>Možnost vključitve v paket Zobni Plus</strong> (redni pregledi + popusti).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pogosta vprašanja</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Zaslužite si samozavesten nasmeh. Začnite danes.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezerviraj ortodontski pregled
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
              <MapPin className="h-5 w-5 text-primary" />
              <span>Asantis – Zdravstveni center Ljubljana</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>;
};
export default OrtodontLjubljanaPage;