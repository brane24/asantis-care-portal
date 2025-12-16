import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MapPin, Clock, AlertTriangle, Stethoscope, CheckCircle, ThermometerSun, Wind, Search, Heart, Calendar, Baby, Droplets, Activity } from "lucide-react";
const KaseljPriOtrokuPage = () => {
  const obravnava = [{
    icon: Search,
    title: "1. Podroben razgovor in klinični pregled",
    items: ["Vrsta kašlja (suh, moker, lajajoč, nočni kašelj, napadi kašlja)", "Trajanje in sprožilci", "Prisotnost vročine, težkega dihanja ali utrujenosti"]
  }, {
    icon: Activity,
    title: "2. Ocena dihal in saturacije",
    items: ["Auskultacija (pregled pljuč)", "Meritev kisika", "Ocena dihalne stiske"]
  }, {
    icon: Droplets,
    title: "3. Ocena nosne votline, sinusov in žrela",
    items: ["Pogosto kašelj izvira iz postnazalnega kapljanja, alergij ali vnetja zgornjih dihal"]
  }, {
    icon: Stethoscope,
    title: "4. Diagnostika po potrebi",
    items: ["CRP", "Izvid urina (pri dojenčkih sum na infekcijo)", "Bris žrela", "Alergološki testi", "UZ ali RTG pljuč (ob sumu na pljučnico ali zapletih okužbe)"]
  }, {
    icon: Heart,
    title: "5. Načrt zdravljenja",
    items: ["Terapija glede na vzrok (bronhiolitis, astma, alergija, bakterijska okužba…)", "Inhalacijska terapija z dodatkom kisika (salbutamol, protivnetna zdravila, fiziološka raztopina)", "Kontrolni pregled po potrebi"]
  }];
  const vzroki = ["Viroze (najpogosteje, predvsem pri otrocih, ki hodijo v vrtec ali imajo starejše sorojence)", "Postinfekcijski kašelj (kašelj lahko traja od 7 dni do 4 tedne)", "Zatekanje sluzi iz nosu v žrelo (postnazalni drip)", "Astma ali ponavljajoči bronhitisi in bronhiolitisi", "Gastroezofagealni refluks", "Okužbe z atipičnimi bakterijami (otroci in mladostniki)", "Bakterijske okužbe (pljučnica, sinuzitis)", "Oslovski kašelj (nevarno predvsem pri necepljenih)"];
  const nujniZnaki = [{
    icon: Wind,
    text: "Težko dihanje, piskanje, povišana frekvenca dihanja"
  }, {
    icon: AlertTriangle,
    text: "Ugrezanje medrebrnih prostorov, dihanje s trebuščkom"
  }, {
    icon: ThermometerSun,
    text: "Visoka temperatura > 38,5 °C več kot 3 dni"
  }, {
    icon: Calendar,
    text: "Kašelj traja več kot 3 tedne"
  }, {
    icon: AlertTriangle,
    text: "Otrok bruha zaradi kašlja"
  }, {
    icon: Baby,
    text: "Dojenček < 6 mesecev s kašljem"
  }, {
    icon: AlertTriangle,
    text: "Sum na oslovski kašelj"
  }, {
    icon: AlertTriangle,
    text: "Sum na bakterijsko okužbo"
  }];
  const postopek = ["Hitra anamneza + pregled", "Meritev saturacije", "Po potrebi testiranje / laboratorij", "Terapija + edukacija staršev", "Možnost ponovnega pregleda v 48 h, če se stanje ne izboljša"];
  const prednosti = ["Izkušeni pediatri s specialističnim znanjem", "Možnost testiranja in laboratorija na mestu", "Hitro naročanje – tudi isti dan", "Možnost nadaljnjega spremljanja pri istem zdravniku", "Prijazen pristop, prilagojen otrokom"];
  const faq = [{
    question: "Kdaj je kašelj normalen in kdaj je znak bolezni?",
    answer: "Pri virusnih okužbah kašelj pogosto traja do 2 tedna. Pregled je smiseln, če otrok težko diha, če kašelj napreduje ali traja predolgo."
  }, {
    question: "Ali lahko pride otrok na pregled, če ima vročino?",
    answer: "Da. Vročina je pri kašlju pogosta in je pomembna informacija za diagnozo."
  }, {
    question: "Kako vem, ali gre za astmo ali alergijo?",
    answer: "Če se kašelj pojavlja ponavljajoče, ponoči ali po naporu, ali če je prisotno piskanje, je pomembna alergološka in pulmološka ocena."
  }, {
    question: "Ali potrebujemo RTG pljuč?",
    answer: "Ne vedno. Slika je potrebna le ob sumu na pljučnico ali dolgotrajen kašelj brez izboljšanja."
  }, {
    question: "Kako pogosto je potreben kontrolni pregled?",
    answer: "Po navadi po 3–7 dneh, odvisno od poteka bolezni."
  }, {
    question: "Kako dolgo traja obravnava?",
    answer: "Običajno 20–30 minut, pri akutnih stanjih pa se čas prilagodi potrebi."
  }];
  return <Layout>
      <Helmet>
        <title>Obravnava kašlja pri otroku | Pediater Ljubljana – Asantis</title>
        <meta name="description" content="Kašelj pri otroku? Hitro diagnosticiramo vzrok – viroza, alergija, astma, bronhiolitis ali pljučnica. Samoplačniški pediater v Ljubljani. Naročanje brez čakalne vrste." />
        <meta name="keywords" content="kašelj pri otroku, pediater kašelj Ljubljana, otrok kašlja dolgo, dolgotrajen kašelj otrok, obravnava kašlja pri otrocih, akutni kašelj otrok, bronhiolitis, astma otrok, pediater samoplačniško" />
        <link rel="canonical" href="https://asantis.si/pediatrija/kaselj-pri-otroku" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🩺 Pediatrija
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Obravnava kašlja pri otroku
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Kašelj je eden najpogostejših razlogov za obisk pediatra. V Asantis pediatrični ambulanti 
              opravimo celovito oceno stanja, da hitro ugotovimo vzrok in zagotovimo pravočasno zdravljenje.
            </p>

            <Button size="lg" className="text-lg px-8">
              Naročite pregled pri pediatru
            </Button>
          </div>
        </div>
      </section>

      {/* Zakaj otrok kašlja Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Zakaj otrok kašlja in kdaj je potreben pregled?
            </h2>
            <p className="text-muted-foreground mb-6">
              Večina okužb mine sama, vendar lahko kašelj pri otroku nakazuje tudi <strong>bronhiolitis, 
              astmo, alergijo, oslabelo imunost, bakterijsko okužbo</strong> ali zaplet po virozi.
            </p>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-foreground">
                  👉 V <strong>Asantis pediatrični ambulanti</strong> opravimo celovito oceno stanja, 
                  da hitro ugotovimo vzrok in zagotovimo pravočasno zdravljenje.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kaj vključuje obravnava Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kaj vključuje obravnava kašlja pri otroku?
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {obravnava.map((korak, index) => <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <korak.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">{korak.title}</h3>
                      <ul className="space-y-2">
                        {korak.items.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Najpogostejši vzroki Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Najpogostejši vzroki kašlja pri otroku
            </h2>

            <Card className="bg-muted/30 border-border">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {vzroki.map((vzrok, index) => <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{vzrok}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kdaj je nujen pregled Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Kdaj je potreben nujen pregled?
            </h2>
            <p className="text-muted-foreground mb-8">
              Če otrok kaže katerega od teh znakov:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {nujniZnaki.map((znak, index) => <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <znak.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="text-foreground text-sm">{znak.text}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Potek obiska Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Potek obiska pri nas
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {postopek.map((korak, index) => <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{korak}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Prednosti Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Prednosti obravnave pri Asantis
          </h2>

          <div className="max-w-2xl mx-auto space-y-3">
            {prednosti.map((prednost, index) => <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{prednost}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Cenik Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Cenik
            </h2>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-xl font-semibold text-foreground mb-2">
                  Pediatrični pregled z obravnavo kašlja
                </p>
                <p className="text-3xl font-bold text-primary mb-4">120 €</p>
                <p className="text-sm text-muted-foreground">
                  (dodatne preiskave po potrebi)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Pogosta vprašanja
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Naročite pregled otroka pri pediatru Asantis Ljubljana
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="text-lg px-8">
                Rezervirajte termin online
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Hiter termin, tudi isti dan</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Asantis, Ljubljana</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default KaseljPriOtrokuPage;