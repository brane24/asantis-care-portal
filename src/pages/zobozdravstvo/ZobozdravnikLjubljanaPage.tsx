import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Clock, Sparkles, Star, Phone, Calendar, Shield, Heart, Users, Zap, Eye, Smile, MapPin, CreditCard, ArrowRight, Wrench, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const ZobozdravnikLjubljanaPage = () => {
  const targetAudience = ["Vsem, ki želite zanesljivega osebnega zobozdravnika v Ljubljani.", "Tisti, ki potrebujete hitro odpravo bolečin ali nujno zdravljenje.", "Posameznikom, ki želijo lep, bel in poravnan nasmeh.", "Družinam, ki želijo redno preventivo brez čakalnih vrst."];
  const problems = ["Zobobol in vnetja", "Karies, poškodbe zob, zlomljeni zobje", "Estetske težave: barva, oblika, manjkajoči zobje", "Nepravilni ugriz, krivi zobje", "Zobni kamen, krvavenje dlesni, parodontoza", "Izguba zob in potreba po implantatih", "Strah pred zobozdravnikom – nežne, neboleče metode"];
  const services = [{
    title: "Preventiva in diagnostika",
    items: ["Celostni zobozdravstveni pregled", "RTG in 3D CBCT diagnostika", "Načrt zdravljenja", "Profesionalno čiščenje zobnega kamna in peskanje"]
  }, {
    title: "Zdravljenje zob",
    items: ["Plombe (bele kompozitne zalivke)", "Zdravljenje koreninskih kanalov (endodontija)", "Odstranitev zob (rutinska + zahtevna)", "Zobne kronice in mostički"]
  }, {
    title: "Estetsko zobozdravstvo",
    items: ["Beljenje zob", "Luske (veneers)", "Keramične prevleke", "Popolna estetska preobrazba nasmeha (Smile Design)"]
  }, {
    title: "Zobni implantati",
    items: ["Implantati vrhunskih materialov", "Kostna regeneracija", "All-on-4 / All-on-6", "Trajne rešitve za manjkajoče zobe"]
  }, {
    title: "Ortodontija (odrasli + mladostniki)",
    items: ["Nevidni zobni aparat (clear alignerji)", "Klasični aparati", "Digitalno načrtovanje premika zob"]
  }, {
    title: "Nujna zobozdravstvena pomoč",
    items: ["Zobobol", "Oteklina, vnetje", "Izpadle plombe / poškodbe", "Hitri termini"]
  }];
  const processSteps = [{
    step: "1",
    title: "Uvodni pregled + pogovor",
    description: "Ocena stanja, fotografije, diagnostični posnetki."
  }, {
    step: "2",
    title: "Načrt zdravljenja",
    description: "Jasno in razumljivo predstavimo možnosti in stroške."
  }, {
    step: "3",
    title: "Izvedba posega",
    description: "Neboleče, sodobno, z vrhunsko opremo."
  }, {
    step: "4",
    title: "Nadzor + preventiva",
    description: "Skrbimo za zdravje vaših zob dolgoročno."
  }];
  const whyUs = ["Vrhunski zobozdravniki z dolgoletnimi izkušnjami", "Sodobna tehnologija – digitalni odtisi, 3D diagnostika", "Neboleče zdravljenje (lokalna analgezija, soft-approach)", "Natančna estetska obravnava", "Kratke čakalne dobe", "Transparentne cene", "Možnost obročnega plačila in paketov Asantis Dental"];
  const prices = [{
    service: "Prvi zobozdravstveni pregled + načrt",
    price: "70–90 €"
  }, {
    service: "Čiščenje zobnega kamna + peskanje",
    price: "70–120 €"
  }, {
    service: "Bela kompozitna plomba",
    price: "80–140 €"
  }, {
    service: "Zdravljenje koreninskega kanala",
    price: "120–250 €"
  }, {
    service: "Beljenje zob",
    price: "250–390 €"
  }, {
    service: "Keramična luska",
    price: "400–600 €"
  }, {
    service: "Implantat",
    price: "900–1.200 €"
  }, {
    service: "Nevidni zobni aparat",
    price: "1.600–3.200 €"
  }];
  const packageBenefits = ["2× letni pregled", "2× čiščenje zobnega kamna", "1× RTG diagnostika", "15 % popust na vse posege", "15 % popust na estetske posege", "Prednostno naročanje"];
  const faqItems = [{
    question: "Ali je zdravljenje boleče?",
    answer: "Ne – uporabljamo sodobne anestetike in neboleče tehnike."
  }, {
    question: "Ali lahko pridem brez napotnice?",
    answer: "Da, Asantis zobozdravnik je samoplačniški."
  }, {
    question: "Kdaj lahko pridem na nujni pregled?",
    answer: "Navadno isti ali naslednji dan."
  }, {
    question: "Ali nudite obročno plačilo?",
    answer: "Da, plačilo možno s kartico, Stripe in obročki."
  }, {
    question: "Kako pogosto naj obiščem zobozdravnika?",
    answer: "Priporočamo preventivni pregled vsaj dvakrat letno za ohranjanje ustnega zdravja."
  }];
  return <Layout>
      <Helmet>
        <title>Zobozdravnik Ljubljana – Asantis | Estetsko, preventivno in nujno zobozdravstvo</title>
        <meta name="description" content="Vrhunski zobozdravnik v Ljubljani. Preventiva, estetsko zobozdravstvo, implantati, ortodontija in nujna pomoč. Kratke čakalne dobe. Rezervirajte termin." />
        <meta name="keywords" content="zobozdravnik Ljubljana, zobozdravstvo Ljubljana, dentalni center Ljubljana, beljenje zob Ljubljana, zobni implantati Ljubljana, estetsko zobozdravstvo Ljubljana, nevidni zobni aparat Ljubljana, nujni zobozdravnik Ljubljana" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo/zobozdravnik-ljubljana" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Smile className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Zobozdravnik Ljubljana
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Zobozdravnik v Ljubljani, ki mu lahko zaupate
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Celostna zobozdravstvena oskrba za zdrav, lep in dolgotrajen nasmeh.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-left">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Estetsko in preventivno zobozdravstvo</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Hitra obravnava</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Izkušeni zobozdravniki in sodobna oprema</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezervirajte termin
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
              <span>Lokacija: Ljubljana – Asantis medicinski center</span>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prednosti, da izberete zobozdravnika pri nas:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetAudience.map((item, index) => <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Katere težave rešujemo</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {problems.map((problem, index) => <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{problem}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Naše zobozdravstvene storitve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Potek obiska</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map(item => <div key={item.step} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zakaj Asantis zobozdravstvo?</h2>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyUs.map((item, index) => <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prices */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Cene (orientacijske)</h2>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-2/3">Storitev</TableHead>
                      <TableHead className="text-right">Cena</TableHead>
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
            <p className="text-center text-muted-foreground mt-4 text-sm">
              * Končna cena se določi po pregledu glede na obseg zdravljenja.
            </p>
          </div>
        </div>
      </section>

      {/* Package */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  Paket Asantis Zobni+
                </Badge>
                <h2 className="text-3xl font-bold mb-2">12-mesečna preventiva in ugodnosti</h2>
                <p className="text-muted-foreground">
                  Idealen za paciente, ki želijo minimalne stroške in maksimalno zaščito.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {packageBenefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>)}
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">29 €/mesec</span>
                </div>
                <Button size="lg" asChild>
                  <NavLink to="/kontakt">
                    Zanima me paket Zobni+
                  </NavLink>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dental Sub-Services */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Naše zobozdravstvene storitve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Izberite storitev in izveste več o naših specializiranih zobozdravstvenih obravnavah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NavLink to="/zobozdravstvo/ortodont-ljubljana" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Smile className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Ortodont Ljubljana</h3>
                  <p className="text-muted-foreground text-sm mb-4">Ortodontsko zdravljenje za otroke in odrasle – klasični in nevidni aparati.</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Več informacij <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
            
            <NavLink to="/zobozdravstvo/nevidni-zobni-aparat" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Nevidni zobni aparat</h3>
                  <p className="text-muted-foreground text-sm mb-4">Prozorne opornice za diskretno poravnavo zob brez kovinskih elementov.</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Več informacij <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
            
            <NavLink to="/zobozdravstvo/zobni-implantati" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Zobni implantati</h3>
                  <p className="text-muted-foreground text-sm mb-4">Trajna rešitev za manjkajoče zobe z vrhunskimi materiali Straumann.</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Več informacij <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
            
            <NavLink to="/zobozdravstvo/protetika" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Protetika</h3>
                  <p className="text-muted-foreground text-sm mb-4">Kronice, mostički in proteze za popolno obnovo funkcije in estetike zob.</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Več informacij <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
            
            <NavLink to="/zobozdravstvo/beljenje-zob" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Beljenje zob</h3>
                  <p className="text-muted-foreground text-sm mb-4">Profesionalno beljenje za bleščeče bel nasmeh z dolgoročnim učinkom.</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Več informacij <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
            
            <NavLink to="/zobozdravstvo/zobozdravnik-nujno-zobobol" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Nujna pomoč – zobobol</h3>
                  <p className="text-muted-foreground text-sm mb-4">Hitra pomoč pri akutni bolečini, vnetjih in poškodbah zob.</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Več informacij <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
          </div>
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
              Rezervirajte svoj termin pri zobozdravniku v Ljubljani
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zdrav nasmeh se začne z enim klikom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezerviraj termin
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+38612345678">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokličite nas
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Asantis medicinski center, Ljubljana</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>;
};
export default ZobozdravnikLjubljanaPage;