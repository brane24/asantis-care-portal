import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Phone, MapPin, Clock, Car, Train, Star, Baby, Syringe, 
  Stethoscope, Brain, TrendingUp, Heart, CheckCircle,
  Calendar, Building, Users, ArrowRight, Wind, Activity, Sparkles
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const PrivatPediaterPage = () => {
  const storitve = [
    { icon: Baby, title: "Preventivni pregledi", desc: "Redni pregledi dojenčkov, otrok in mladostnikov po starostnih skupinah" },
    { icon: Syringe, title: "Cepljenja", desc: "Obvezna in priporočena cepljenja, svetovanje staršem" },
    { icon: Stethoscope, title: "Zdravljenje bolezni", desc: "Pregled in zdravljenje okužb, alergij, prebavnih težav, vročine, kašlja ipd." },
    { icon: Heart, title: "Specialistična diagnostika", desc: "Laboratorijske preiskave, UZ trebuha, EKG, napotitev k specialistom" },
    { icon: Brain, title: "Psihofizični razvoj", desc: "Svetovanje pri razvoju, vedenjskih in učnih težavah" },
    { icon: TrendingUp, title: "Spremljanje rasti", desc: "Redno merjenje in interpretacija rasti, telesne mase in razvoja otroka" }
  ];

  const cenik = [
    { storitev: "Prvi pediatrični pregled", cena: "od 120 €" },
    { storitev: "Kontrolni pregled", cena: "od 45 €" },
    { storitev: "Preventivni pregled dojenčka", cena: "od 70 €" },
    { storitev: "Cepljenje (brez cene cepiva)", cena: "od 30 €" },
    { storitev: "Izdaja potrdila za vrtec/šolo", cena: "20 €" }
  ];

  const prednosti = [
    { icon: Clock, text: "Brez čakalnih vrst in administrativnih zamud" },
    { icon: Users, text: "Individualen pristop in več časa za vsakega otroka" },
    { icon: Heart, text: "Prijazno okolje, prilagojeno otrokom" },
    { icon: Stethoscope, text: "Možnost dodatnih pregledov (UZ, laboratorij, dermatolog, alergolog)" },
    { icon: Calendar, text: "Možnost vključitve v letni naročniški program za družine" }
  ];

  const testimonials = [
    {
      quote: "Končno pediater, ki si vzame čas in res posluša. Hčerka se ne boji več pregleda.",
      author: "Maja",
      location: "Ljubljana"
    },
    {
      quote: "Super izkušnja, hitro naročanje in profesionalen pristop.",
      author: "Andrej",
      location: "oče dveh otrok"
    }
  ];

  const postopek = [
    { step: "1", title: "Kontaktirajte nas", desc: "preko obrazca ali telefona" },
    { step: "2", title: "Izberite termin", desc: "ki vam ustreza (tudi isti dan)" },
    { step: "3", title: "Obiščite pediatra", desc: "v prijetnem ambientu centra Asantis" },
    { step: "4", title: "Nadaljnje preiskave", desc: "po potrebi napotitev k specialistom" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Privat pediater Ljubljana | Asantis zdravstveni center</title>
        <meta
          name="description"
          content="Zasebni pediater v Ljubljani brez čakalne dobe. Celostni pregledi, cepljenja in diagnostika otrok v varnem okolju centra Asantis."
        />
        <meta
          name="keywords"
          content="privat pediater Ljubljana, zasebni pediater, pediatrična ambulanta Ljubljana, otroški zdravnik Ljubljana, pregled pri pediatru, pediater brez čakalne dobe, cepljenje otrok Ljubljana, preventivni pregledi otrok, zasebni pediater cena"
        />
        <link rel="canonical" href="https://asantis.si/pediatrija/privat-pediater-ljubljana" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                🩺 Pediatrija
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Privat pediater v Ljubljani – brez čakalne dobe, z osebnim pristopom
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Hiter dostop do izkušenega pediatra za vašega otroka. Celostni pregledi, 
                diagnostika in zdravljenje – v varnem okolju zasebnega medicinskega centra Asantis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-8" asChild>
                  <NavLink to="/kontakt">Naročite pregled</NavLink>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="tel:+38631876104">
                    <Phone className="mr-2 h-5 w-5" />
                    +386 31 876 104
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Brez čakalnih vrst",
                  "Prijazen pristop do otrok",
                  "Izkušeni specialist pediater",
                  "Sodobna oprema in laboratorij"
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Uvodni opis Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Zakaj izbrati zasebnega pediatra v Ljubljani?
            </h2>
            <div className="text-muted-foreground space-y-4 text-left md:text-center">
              <p>
                Starši si želite, da ima vaš otrok vedno dostop do strokovnega in prijaznega zdravnika.
              </p>
              <p>
                V Asantis centru nudimo celostno pediatrično obravnavo brez čakalnih vrst – 
                z individualnim pristopom, daljšim pregledom in sproščenim okoljem.
              </p>
              <p>
                Naš privat pediater pokriva vse od rutinskih preventivnih pregledov, cepljenj in 
                meritev rasti do diagnostike in zdravljenja pogostih bolezni otrok in mladostnikov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storitve Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Kaj vključuje obisk pri našem pediatru?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Celovita pediatrična oskrba na enem mestu
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {storitve.map((storitev, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <storitev.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{storitev.title}</h3>
                  <p className="text-sm text-muted-foreground">{storitev.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cenik Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Cene storitev – pregled pri privat pediatru
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Transparentne cene brez skritih stroškov
          </p>

          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden border-border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Storitev</TableHead>
                    <TableHead className="font-semibold text-right">Cena</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cenik.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.storitev}</TableCell>
                      <TableCell className="text-right text-primary font-semibold">{item.cena}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <div className="mt-6 p-4 bg-accent/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💬 Možnost mesečnega paketa za družine z več otroki – po dogovoru.
              </p>
              <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                ➡️ Povprašajte za ponudbo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prednosti Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Zakaj starši zaupajo Asantis pediatru
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {prednosti.map((prednost, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <prednost.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground">{prednost.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Mnenja staršev
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-foreground">
                    — {testimonial.author}, {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9 / 5</span>
              <span className="text-muted-foreground">(Google Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Postopek Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Kako poteka obisk pri privat pediatru
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Enostaven postopek v štirih korakih
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {postopek.map((korak, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {korak.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{korak.title}</h3>
                <p className="text-sm text-muted-foreground">{korak.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10">
            📅 Delujemo tudi popoldne in ob sobotah po dogovoru.
          </p>
        </div>
      </section>

      {/* Lokacija Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Asantis zdravstveni center – Ljubljana
          </h2>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Naslov</p>
                        <p className="text-muted-foreground">Dunajska cesta 123, Ljubljana</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Parkiranje</p>
                        <p className="text-muted-foreground">Brezplačno parkirišče za paciente</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Train className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Javni prevoz</p>
                        <p className="text-muted-foreground">LPP linije 6, 8, 11</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Delovni čas</p>
                        <p className="text-muted-foreground">Pon–pet 8:00–19:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Naše pediatrične storitve</h2>
            <p className="text-muted-foreground">Specializirana obravnava otrok in mladostnikov</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <NavLink to="/pediatrija/okuzba-dihal-pri-otroku" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Wind className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Okužba dihal pri otroku</h3>
                  <p className="text-sm text-muted-foreground mb-4">Diagnostika in zdravljenje virusnih in bakterijskih okužb dihal.</p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/pediatrija/kaselj-pri-otroku" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Kašelj pri otroku</h3>
                  <p className="text-sm text-muted-foreground mb-4">Obravnava akutnega in dolgotrajnega kašlja – viroza, astma, alergija, bronhiolitis.</p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/pediatrija/atopijski-dermatitis" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Atopijski dermatitis</h3>
                  <p className="text-sm text-muted-foreground mb-4">Obravnava ekcemov in atopijskega dermatitisa pri otrocih.</p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/pediatrija/pediater-alergolog" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Pediater alergolog</h3>
                  <p className="text-sm text-muted-foreground mb-4">Specialistična obravnava alergij pri otrocih – hrana, inhalacijski alergeni.</p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/pediatrija/pediater-pulmolog" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Pediater pulmolog</h3>
                  <p className="text-sm text-muted-foreground mb-4">Specialist za kronične bolezni dihal, astmo in alergijsko pljučno bolezen.</p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/pediatrija/pediater-astma-pri-otroku" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Obravnava astme pri otroku</h3>
                  <p className="text-sm text-muted-foreground mb-4">Diagnostika, zdravljenje in dolgoročno spremljanje otroške astme.</p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivatPediaterPage;
