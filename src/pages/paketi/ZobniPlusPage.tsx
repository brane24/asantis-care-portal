import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Scan, Calendar, Shield, BadgePercent, Clock, FileText, Smile, Brain, Target, Zap, Star, CircleDot, XCircle } from "lucide-react";
const ZobniPlusPage = () => {
  const faqItems = [{
    question: "Ali lahko po aktivaciji prekličem?",
    answer: "Da, vendar se doplača razlika do rednih cen, če je članstvo krajše kot 12 mesecev. To zagotavlja pošteno razmerje med koristmi in stroški."
  }, {
    question: "Kaj če potrebujem več posegov?",
    answer: "Člani imajo nižje cene in prednostne termine, zato so hitreje obravnavani in plačajo manj. Vaši posegi so načrtovani in izvedeni učinkovito."
  }, {
    question: "Kaj vključuje mesečna naročnina?",
    answer: "Letni pregled, kontrolni posvet, popuste na posege, prioritetno naročanje in dostop do stalnega nadzora nad zdravjem vaših zob."
  }, {
    question: "Zakaj je 3D sken tako pomemben?",
    answer: "Omogoča izjemno natančno diagnostiko in preprečuje napake ter nepotrebne posege. S 3D modelom lahko odkrijemo mikropoke, spremljamo premike zob in načrtujemo protetiko."
  }, {
    question: "Kaj če ne potrebujem nobenega posega?",
    answer: "Čestitamo — to pomeni, da paket deluje! Članstvo skrbi, da tako tudi ostane z rednimi pregledi in zgodnjim odkrivanjem morebitnih težav."
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
    "name": "Zobni Plus - Zobni preventivni paket",
    "description": "Celosten zobni paket z diagnostiko, 3D skenom in mesečno naročnino za predvidljive stroške zobozdravstva.",
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
    "offers": [{
      "@type": "Offer",
      "name": "Aktivacija",
      "price": "89",
      "priceCurrency": "EUR",
      "description": "Enkratna aktivacija z pregledom, RTG/CT, 3D skenom in načrtom zdravljenja"
    }, {
      "@type": "Offer",
      "name": "Mesečna naročnina",
      "price": "19",
      "priceCurrency": "EUR",
      "description": "Mesečna naročnina z letnim pregledom, popusti in prioritetnimi termini"
    }]
  };
  return <Layout>
      <Helmet>
        <title>Zobni Plus - Preventivni zobni paket | ASANTIS Ljubljana</title>
        <meta name="description" content="Zobni Plus je prvi zobni paket v Sloveniji z 3D skenom, RTG/CT diagnostiko in mesečno naročnino. Aktivacija 89-129€, mesečno 19-29€. Prihranite do 600€ letno." />
        <meta name="keywords" content="zobni paket, zobozdravstvo Ljubljana, preventivni pregled zob, 3D sken zob, zobni članstvo, poceni zobozdravnik" />
        <link rel="canonical" href="https://asantis.si/paketi/zobni-plus" />
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
              🦷 Prvi zobni paket v Sloveniji
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Želite zdrave zobe{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                brez dragih presenečenj?
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
              Zobni Plus je prvi zobni paket v Sloveniji, ki združuje celostno diagnostiko (RTG/CT + 3D sken), 
              natančen načrt zdravljenja in dostop do ugodnejših posegov — za samo <strong>29 €/mesec</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Aktivacija: pregled + CT/RTG + 3D sken + načrt</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Prednostni termini in nižje cene posegov</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <NavLink to="/kontakt">
                  Aktiviraj članstvo <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Package Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Zakaj sploh paket in ne posameznih obiskov?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Zmanjša možnost dragih posegov</h3>
                  <p className="text-muted-foreground">
                    Z zgodnjim odkrivanjem skritih kariesov, parodontoze in razpok prihranite 100–1000 €.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Scan className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Celosten 3D pregled stanja</h3>
                  <p className="text-muted-foreground">
                    Z 3D skenom in CT/RTG snemanjem dobite najbolj natančno diagnostiko v Sloveniji.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prednostni termini za člane</h3>
                  <p className="text-muted-foreground">
                    Ni več čakanja — člani so obravnavani prednostno pri vseh terminih.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BadgePercent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Nižji stroški zobozdravstva</h3>
                  <p className="text-muted-foreground">
                    Do 25 % nižje cene izbranih posegov in stalni nadzor nad zdravjem zob.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activation Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Enkratna aktivacija
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Kaj vključuje aktivacija?
            </h2>
            <p className="text-xl text-muted-foreground">
              <span className="font-bold text-foreground">149€</span> - plača se ob prvem pregledu, nato naročnina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-soft transition-all duration-300 border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Smile className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Celosten zobozdravstveni pregled</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Ocena stanja zob in dlesni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Pregled ugriza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Parodontalni status</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">RTG ali CT (po indikaciji)</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Ocena korenin, živcev, preteklih posegov</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Načrtovanje implantatov ali večjih posegov</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Scan className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">3D intraoralni skener</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Shrani se vaš 3D model zob</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Osnova za vse prihodnje posege</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Zazna mikropoke in obrabo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Načrt zdravljenja</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>1–3 scenariji za vaše zdravje zob</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Jasen pregled, česa se lotiti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Izognete se nepotrebnim posegom</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 border-primary/20 md:col-span-2 lg:col-span-2">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Aktivacija članstva</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>Pridobite dostop do članskih cen, popustov in prioritetnih terminov.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                Aktiviraj članstvo <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Monthly Subscription Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Mesečna naročnina
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Kaj vključuje mesečna naročnina?
          </h2>
          <p className="text-xl text-muted-foreground">
            <span className="font-bold text-foreground">29 €</span> / mesec
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Letni pregled</h3>
                  <p className="text-muted-foreground text-sm">Celosten pregled stanja zob in dlesni</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Letni kontrolni posvet</h3>
                  <p className="text-muted-foreground text-sm">Spremljanje napredka in svetovanje</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hitri posveti</h3>
                  <p className="text-muted-foreground text-sm">Preko e-maila ali telefona</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Prednostno naročanje</h3>
                  <p className="text-muted-foreground text-sm">Dostop do hitrejših terminov</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">AI analiza 3D modela</h3>
                  <p className="text-muted-foreground text-sm">Trendi obrabe, premiki, nastajanje težav</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <BadgePercent className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Članski popusti na posege</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Čiščenje zobnega kamna: <strong>-15%</strong></li>
                    <li>• Zalivke: <strong>-10%</strong></li>
                    <li>• Protetika: <strong>-10–15%</strong></li>
                    <li>• Ortodontija: <strong>-5–10%</strong></li>
                    <li>• Implantati: <strong>-3–5%</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Objection Block */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Brain className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      Najpogostejši ugovor: "Zakaj bi plačeval mesečno, če imam samo en pregled letno?"
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Zato ker članstvo ni plačilo za pregled — ampak za <strong>stalno skrbništvo</strong>, 
                  preprečevanje dragih posegov in dostop do ugodnejših cen.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Samo pregled <strong>ne prepreči</strong> težav</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Članstvo <strong>odkrije</strong> težave, še preden bolijo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Zmanjša</strong> stroške zobozdravstva v prihodnosti</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Zagotovi <strong>prioriteto</strong> pri terminih</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Ustvari <strong>predvidljive</strong> stroške</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Omogoča redne <strong>posvete brez dodatnih plačil</strong></span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <p className="text-lg font-semibold text-primary">
                    Povprečni član s paketom prihrani 120–600 € letno.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Primerjava: Brez paketa vs. Paket Zobni Plus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                <XCircle className="h-6 w-6 text-destructive" />
                Brez paketa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Pregled</span>
                  <span className="font-medium">40–60 €</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">RTG/CT</span>
                  <span className="font-medium">40–120 €</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">3D sken</span>
                  <span className="font-medium">50–90 €</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Posvet</span>
                  <span className="font-medium">30–40 €</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Prioritetni termini</span>
                  <span className="font-medium text-destructive">❌</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Popusti na posege</span>
                  <span className="font-medium text-destructive">❌</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-destructive/20">
                <p className="text-center text-muted-foreground">
                  Hitro preseže <strong className="text-destructive">200–300 €</strong> že na začetku
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-primary/5">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                S paketom Zobni Plus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Aktivacija</span>
                  <span className="font-medium text-primary">149 €</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Mesečno</span>
                  <span className="font-medium text-primary">19–29 €</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Natančen načrt</span>
                  <span className="font-medium text-primary">✓ Vključeno</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Popusti</span>
                  <span className="font-medium text-primary">-10–25%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Prioritetni termini</span>
                  <span className="font-medium text-primary">✓</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Stalna podpora</span>
                  <span className="font-medium text-primary">✓</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-primary/20">
                <p className="text-center">
                  <strong className="text-primary">Predvidljivi stroški</strong> in dolgoročno manjši finančni šoki
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <NavLink to="/kontakt">
              Aktiviraj članstvo <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* 3D Scan Importance */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Napredna tehnologija
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Zakaj je 3D sken tako pomemben?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-lg p-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Zgodnje odkrivanje mikropok</span>
              </div>
              <div className="bg-background rounded-lg p-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Spremljanje premikov zob</span>
              </div>
              <div className="bg-background rounded-lg p-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Identifikacija obrab</span>
              </div>
              <div className="bg-background rounded-lg p-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Lažje načrtovanje protetike</span>
              </div>
              <div className="bg-background rounded-lg p-4 flex items-center gap-3 sm:col-span-2 lg:col-span-2">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span>"Digitalni dvojček" vaših zob</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">
              To je tehnologija, ki jo imajo samo <strong>redke ordinacije</strong> v Sloveniji — 
              in je <strong>vključena v aktivacijo</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Kako deluje?
          </h2>
          <p className="text-lg text-muted-foreground">3 enostavni koraki</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Aktivacija</h3>
            <p className="text-muted-foreground">
              Rezervirate termin → opravimo pregled, RTG/CT in 3D sken.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Načrt</h3>
            <p className="text-muted-foreground">
              Pripravimo 1–3 scenarije za kratkoročno in dolgoročno zdravje zob.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Članstvo</h3>
            <p className="text-muted-foreground">
              Plačujete nizko mesečno naročnino (19–29 €) in koristite ugodnosti ter nižje cene posegov.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <NavLink to="/kontakt">
              Aktiviraj članstvo <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Pogosta vprašanja
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left hover:no-underline">
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

      {/* Legal Block */}
      <section className="container py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-muted/30 border-muted">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                Pravne osnove
              </h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Program Zobni Plus je 12-mesečni preventivni program.</li>
                <li>Aktivacijska cena 89–129 € se plača ob prvem obisku in ni vračljiva.</li>
                <li>Minimalno trajanje naročnine je 3 mesece.</li>
                <li>Če uporabnik prekine pred 12 meseci, doplača razliko do rednih cen storitev.</li>
                <li>Odpoved z 30-dnevnim rokom po minimalnem obdobju.</li>
                <li>Preventivne storitve ne nadomeščajo urgentne medicine.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-hero border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <CircleDot className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Zobni Plus — najbolj pameten način za dolgoročno zdravje zob
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aktivacija vključuje vse, kar potrebujete za celostni začetek. 
              Mesečno članstvo skrbi, da zobozdravstvo ostane predvidljivo in cenovno ugodno.
            </p>
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                Aktiviraj članstvo zdaj <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </CardContent>
        </Card>
      </section>
    </Layout>;
};
export default ZobniPlusPage;