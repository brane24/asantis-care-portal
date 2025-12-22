import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, MapPin, Clock, Mail, Star, Heart, Shield, Smile, Timer, Check, X, AlertTriangle } from "lucide-react";
const ZobniImplantatiPage = () => {
  const prednosti = [{
    icon: Heart,
    title: "Brez bolečin",
    description: "Poseg poteka v lokalni anesteziji z digitalno natančnostjo. Večina pacientov po posegu ne potrebuje niti protibolečinskih tablet."
  }, {
    icon: Shield,
    title: "Najvišja kakovost materialov",
    description: "Uporabljamo originalne Straumann® implantate s potrjeno 98% uspešnostjo in doživljenjsko garancijo."
  }, {
    icon: Timer,
    title: "Hitro okrevanje",
    description: "Implantat se popolnoma zaceli v nekaj tednih, večina pacientov pa se v službo vrne že naslednji dan."
  }, {
    icon: Smile,
    title: "Naraven videz",
    description: "Implantat izgleda, deluje in se občuti kot vaš pravi zob. Nihče ne bo opazil razlike."
  }];
  const testimonials = [{
    quote: "Po 10 letih z manjkajočimi zobmi imam končno spet nasmeh, kot sem ga imel v mladosti. Brez bolečin, brez zapletov.",
    author: "Matej",
    age: "48 let",
    location: "Ljubljana"
  }, {
    quote: "Vse so uredili v enem dnevu – od CT-ja do začasne krone. Ekipa Asantis je res izjemna.",
    author: "Tanja",
    age: "56 let",
    location: "Domžale"
  }, {
    quote: "Odlična komunikacija, neboleč postopek in popoln rezultat. Zdaj se spet smejim brez zadržkov.",
    author: "Robert",
    age: "61 let",
    location: "Grosuplje"
  }];
  const postopek = [{
    step: "1",
    title: "Pregled in 3D diagnostika",
    description: "Na prvem obisku opravimo digitalno CBCT slikanje (3D posnetek čeljusti) in oceno kostne gostote. Na podlagi tega določimo najboljši tip implantata in položaj."
  }, {
    step: "2",
    title: "Vgradnja implantata",
    description: "Vgradnja implantata poteka pod lokalno anestezijo in običajno traja manj kot eno uro. Poseg je popolnoma neboleč in izredno natančen zahvaljujoč 3D navigaciji."
  }, {
    step: "3",
    title: "Krona in končni nasmeh",
    description: "Po nekaj tednih se implantat popolnoma zraste s kostjo, nato vstavimo estetsko porcelanasto ali cirkon krono. Rezultat? Trajna in naravna zamenjava izgubljenega zoba."
  }];
  const cenik = [{
    postavka: "Vgradnja implantata (Straumann®)",
    cena: "od 690 €",
    opombe: "vključuje implantat in poseg"
  }, {
    postavka: "Abutment (povezovalni element)",
    cena: "150 €",
    opombe: "kovinski ali cirkon"
  }, {
    postavka: "Krona na implantatu",
    cena: "od 350 €",
    opombe: "kovinsko-keramična ali polna keramika"
  }, {
    postavka: "3D CBCT slikanje",
    cena: "60 €",
    opombe: "opravite pri nas, brez dodatnih obiskov"
  }];
  const primerjava = [{
    merilo: "Trajnost",
    implantat: {
      text: "Doživljenjska",
      good: true
    },
    mosticek: {
      text: "8–12 let",
      good: false
    }
  }, {
    merilo: "Brušenje zdravih zob",
    implantat: {
      text: "Ne",
      good: true
    },
    mosticek: {
      text: "Da, 2 sosednja zoba",
      good: false,
      warning: true
    }
  }, {
    merilo: "Naraven občutek",
    implantat: {
      text: "Da",
      good: true
    },
    mosticek: {
      text: "Delno",
      good: false,
      warning: true
    }
  }, {
    merilo: "Strošek na dolgi rok",
    implantat: {
      text: "Nižji",
      good: true
    },
    mosticek: {
      text: "Višji (zamenjave, popravila)",
      good: false
    }
  }];
  const rezultati = ["Izgubljen zob nadomeščen z implantatom Straumann® v 6 tednih", "Celotna obnova nasmeha z 4 implantati in mostičkom (All-on-4)", "Nadomeščanje dveh zob brez brušenja sosednjih zob"];
  const faq = [{
    question: "Ali je poseg boleč?",
    answer: "Ne. Poseg izvajamo v lokalni anesteziji, zato pacient ne čuti bolečine. Po potrebi uporabimo tudi sedacijo."
  }, {
    question: "Kako dolgo traja okrevanje?",
    answer: "Večina pacientov se počuti dobro že naslednji dan, popolna integracija implantata traja 6–8 tednov."
  }, {
    question: "Ali sem primeren za implantat?",
    answer: "Skoraj vsi odrasli z zdravo ustno higieno so primerni. Izjeme so redke (npr. aktivne bolezni dlesni ali nezdravljena sladkorna bolezen)."
  }, {
    question: "Koliko časa zdržijo implantati?",
    answer: "Z redno nego in kontrolami – doživljenjsko. Straumann® implantati imajo potrjeno več kot 20-letno klinično uspešnost."
  }];
  return <Layout>
      <Helmet>
        <title>Zobni implantati Ljubljana | Asantis – trajna rešitev za izgubljene zobe</title>
        <meta name="description" content="Vgradnja Straumann implantatov brez bolečin. Brezplačen prvi pregled in doživljenjska garancija. Asantis zobozdravstvo Ljubljana." />
        <meta name="keywords" content="zobni implantati Ljubljana, zobni vsadki, implantat cena, Straumann Ljubljana, implantat brez bolečin" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo/zobni-implantati" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🦷 Zobni implantati
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Zobni implantati Ljubljana – Naraven nasmeh, kot da bi bil vaš
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Brez protez, brez skrbi. Zobni implantati so najsodobnejša in trajna rešitev, 
              s katero nadomestimo izgubljene zobe popolnoma naravno – brez občutka tujka.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              V centru Asantis Ljubljana vgrajujemo vrhunske implantate <strong>Straumann®</strong> in 
              druge priznane blagovne znamke, z napredno 3D-navigacijo in popolnoma nebolečim postopkom.
            </p>
            
            <div className="bg-accent/50 border border-accent rounded-xl p-4 mb-8 inline-block">
              <p className="text-foreground font-medium">
                ✨ Brezplačen prvi pregled in posvet z implantologom.
              </p>
              <p className="text-sm text-primary font-semibold mt-1">
                Na voljo le 5 mest ta mesec →
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                Rezerviraj termin
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                +386 31 876 104
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span>4.9/5 na Google Reviews</span>
              </div>
              <span>•</span>
              <span>Certificirani implantologi</span>
              <span>•</span>
              <span>Straumann® partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prednosti Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            💎 Zakaj naši pacienti izberejo Asantis
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vrhunska kakovost, sodobna tehnologija in osebni pristop
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {prednosti.map((prednost, index) => <Card key={index} className="bg-card hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <prednost.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{prednost.title}</h3>
                  <p className="text-sm text-muted-foreground">{prednost.description}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Preverite, ali ste primeren kandidat za implantat
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">❤️ Vsako leto nam popravilo zob zaupa več kot 500 zadovoljnih pacientov</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-foreground">
                    — {testimonial.author}, {testimonial.age}, {testimonial.location}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="font-medium">4.9/5 na Google Reviews</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Certificirani implantologi | Straumann® partner
            </p>
          </div>
        </div>
      </section>

      {/* Postopek Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            🔧 Kako poteka postopek vgradnje implantata
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sodoben, varen in neboleč postopek v treh korakih
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {postopek.map((korak, index) => <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {korak.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{korak.title}</h3>
                  <p className="text-sm text-muted-foreground">{korak.description}</p>
                </div>)}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg">
              Rezerviraj brezplačen pregled
            </Button>
          </div>
        </div>
      </section>

      {/* Rezultati Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            📸 Rezultati naših pacientov
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Pred / po primeri
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {rezultati.map((rezultat, index) => <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Slika pred/po</span>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{rezultat}</p>
                </CardContent>
              </Card>)}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            (Galerija slik z rezultati in pacienti z dovoljenjem za objavo)
          </p>
        </div>
      </section>

      {/* Cenik Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            💰 Cene zobnih implantatov
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Jasne cene, brez presenečenj – vse na enem mestu
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Postavka</TableHead>
                    <TableHead className="font-semibold">Cena (EUR)</TableHead>
                    <TableHead className="font-semibold">Opombe</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cenik.map((item, index) => <TableRow key={index}>
                      <TableCell className="font-medium">{item.postavka}</TableCell>
                      <TableCell className="text-primary font-semibold">{item.cena}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{item.opombe}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">✔️ Garancija</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Doživljenjska garancija na implantat
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      5-letna garancija na zobno krono
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">💳 Plačilo</h3>
                  <p className="text-sm text-muted-foreground">
                    Na voljo plačilo na obroke ali vključitev v letni naročniški paket Asantis, 
                    ki vključuje redne preventivne preglede in čiščenja.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline">
                Pošlji povpraševanje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Primerjava Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            ⚖️ Implantat ali zobni mostiček – kaj je boljša rešitev?
          </h2>

          <div className="max-w-3xl mx-auto mt-10">
            <Card className="overflow-hidden border-border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Merilo</TableHead>
                    <TableHead className="font-semibold text-center">Implantat</TableHead>
                    <TableHead className="font-semibold text-center">Zobni mostiček</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {primerjava.map((row, index) => <TableRow key={index}>
                      <TableCell className="font-medium">{row.merilo}</TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{row.implantat.text}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.mosticek.warning ? <AlertTriangle className="h-4 w-4 text-yellow-500" /> : <X className="h-4 w-4 text-red-500" />}
                          <span className="text-sm">{row.mosticek.text}</span>
                        </div>
                      </TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </Card>

            <p className="text-center text-muted-foreground mt-6">
              💡 Implantat je dolgoročno varnejša in cenejša rešitev, saj ohrani zdrave zobe in čeljustno kost.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            ❓ Pogosta vprašanja o implantatih
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🦷 Pridobite nov nasmeh brez bolečin
            </h2>
            <p className="text-muted-foreground mb-8">
              Ste pripravljeni na trajno in estetsko rešitev za svoj nasmeh?
              Rezervirajte brezplačen pregled še danes in preverite, ali ste primeren kandidat za zobni implantat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="text-lg px-8">
                Rezerviraj brezplačen posvet zdaj
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                +386 31 876 104
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Asantis, Center Ljubljana</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Pon–pet: 8.00–19.00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@asantis.si</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default ZobniImplantatiPage;