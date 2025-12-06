import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { 
  Phone, 
  Star, 
  Clock, 
  MapPin, 
  FileText,
  Zap,
  Shield,
  Sparkles,
  CheckCircle,
  Hand,
  Footprints,
  User,
  Heart
} from "lucide-react";

const OdstranjevanjeBradavicPage = () => {
  const methods = [
    {
      name: "Kriooterapija (zamrzovanje)",
      description: "Uporaba tekočega dušika za uničenje virusa in tkiva",
      suitable: "Navadne, plantarne bradavice",
      healing: "7–10 dni"
    },
    {
      name: "Lasersko odstranjevanje",
      description: "Usmerjen laserski žarek selektivno uniči tkivo",
      suitable: "Obraz, vrat, estetske lokacije",
      healing: "Hitro, minimalna brazgotina"
    },
    {
      name: "Elektrokoagulacija",
      description: "Visokofrekvenčni tok izžge tkivo",
      suitable: "Posamezne, večje bradavice",
      healing: "7–14 dni"
    },
    {
      name: "Kirurška ekscizija",
      description: "Odstranitev z rezom pri večjih ali trdovratnih spremembah",
      suitable: "Globoke ali ponavljajoče se bradavice",
      healing: "10–14 dni"
    },
    {
      name: "Zdravljenje genitalnih bradavic",
      description: "Kombinacija lokalne terapije in laserskega postopka",
      suitable: "Genitalno področje",
      healing: "Odvisno od obsega"
    }
  ];

  const pricing = [
    { service: "Dermatološki pregled", price: "50–60 €" },
    { service: "Odstranitev posamezne bradavice", price: "40–70 €" },
    { service: "Odstranitev več bradavic (paket)", price: "80–150 €" },
    { service: "Lasersko odstranjevanje bradavic", price: "70–120 €" },
    { service: "Odstranitev genitalnih bradavic", price: "90–180 €" }
  ];

  const benefits = [
    "Izkušeni dermatologi s specializacijo iz estetske dermatologije",
    "Najsodobnejša oprema (laser, elektrokoagulacija, krioterapija)",
    "Minimalno boleč postopek",
    "Estetski pristop brez brazgotin",
    "Kratki čakalni roki",
    "Možnost odstranitve več bradavic hkrati"
  ];

  const wartTypes = [
    { icon: Hand, text: "Na rokah in prstih (navadne bradavice)" },
    { icon: Footprints, text: "Na podplatih (plantarne bradavice)" },
    { icon: User, text: "Na obrazu ali vratu (nitaste bradavice)" },
    { icon: Heart, text: "Na spolovilu (kondilomi – genitalne bradavice)" }
  ];

  const faqItems = [
    {
      question: "Ali je odstranjevanje bradavic boleče?",
      answer: "Ne, postopek je hiter in običajno neboleč. Po potrebi uporabimo lokalno anestezijo."
    },
    {
      question: "Ali se bradavice lahko ponovijo?",
      answer: "Da, če virus ostane v koži. Zato svetujemo krepitev imunskega sistema in po potrebi kontrolni pregled."
    },
    {
      question: "Ali lahko odstranim več bradavic hkrati?",
      answer: "Da, pogosto odstranimo več sprememb v enem posegu."
    },
    {
      question: "Kako dolgo traja celjenje?",
      answer: "Običajno od 7 do 14 dni, odvisno od metode in mesta posega."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Odstranjevanje bradavic Ljubljana – hitro, varno in brez bolečin | Asantis dermatolog</title>
        <meta 
          name="description" 
          content="Bradavice? Odstranimo jih strokovno, neboleče in brez brazgotin. Dermatološki center Asantis Ljubljana – naročite termin brez čakalne dobe." 
        />
        <meta 
          name="keywords" 
          content="odstranjevanje bradavic, bradavice na rokah, bradavice na podplatih, bradavice na obrazu, lasersko odstranjevanje bradavic, dermatolog Ljubljana, odstranitev kondilomov, odstranjevanje kožnih izrastkov" 
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Odstranjevanje bradavic – hitro, varno in brez bolečin
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Znebite se nadležnih bradavic na obrazu, rokah, stopalih ali spolovilu – strokovno in estetsko v dermatološkem centru Asantis Ljubljana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Naročite pregled pri dermatologu
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Pošljite fotografijo za oceno
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span>Strokovnjaki za lasersko in klasično odstranitev</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Brez čakalnih vrst</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Asantis, Ljubljana</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Možnost povračila prek dodatnega zavarovanja</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Kaj so bradavice in zakaj jih je treba odstraniti?
              </h2>
              <p className="text-muted-foreground mb-6">
                Bradavice so virusne izrastline kože, ki jih povzroča humani papiloma virus (HPV). 
                Čeprav so večinoma nenevarne, so lahko zelo nalezljive, moteče in estetsko neprijetne. 
                Pogosto se širijo ob britju, dotikanju ali potenju.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Najpogosteje se pojavljajo:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {wartTypes.map((type, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <type.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-foreground">{type.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Kako poteka odstranjevanje bradavic pri nas?
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                V našem centru izvajamo več sodobnih metod, izbranih glede na tip bradavice in mesto:
              </p>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Metoda</TableHead>
                      <TableHead className="font-semibold">Opis postopka</TableHead>
                      <TableHead className="font-semibold">Primerno za</TableHead>
                      <TableHead className="font-semibold">Celjenje</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {methods.map((method, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{method.name}</TableCell>
                        <TableCell>{method.description}</TableCell>
                        <TableCell>{method.suitable}</TableCell>
                        <TableCell>{method.healing}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
                Kako poteka postopek v našem centru
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Dermatološki pregled in diagnostika
                    </h3>
                    <p className="text-muted-foreground">
                      Zdravnik pregleda spremembo, določi vrsto bradavice in izbere optimalen način odstranitve.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Odstranitev
                    </h3>
                    <p className="text-muted-foreground">
                      Postopek traja 10–20 minut, poteka v lokalni anesteziji ali brez nje.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Nega po posegu
                    </h3>
                    <p className="text-muted-foreground">
                      Dobite pisna navodila za nego kože in kontrolni pregled po potrebi.
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Večina bradavic izgine po 1 posegu, pri trdovratnih primerih so potrebni 2–3 obiski.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Prednosti odstranjevanja bradavic v našem centru
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Cena odstranitve bradavic
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Cena je odvisna od vrste in števila sprememb.
              </p>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Storitev</TableHead>
                        <TableHead className="font-semibold text-right">Cena</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pricing.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.service}</TableCell>
                          <TableCell className="text-right font-medium">{item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <p className="text-muted-foreground text-center mt-6 mb-8">
                💬 Točen predračun prejmete po pregledu. Možno je tudi slikovno svetovanje.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Rezervirajte termin
                </Button>
                <Button size="lg" variant="outline">
                  Pošljite fotografijo spremembe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Pogosta vprašanja
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background rounded-lg border border-border/50 px-4"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {item.question}
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

        {/* Final CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Znebite se bradavic hitro in varno
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Rezervirajte termin pri dermatologu Asantis Ljubljana še danes!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokličite zdaj
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Rezerviraj termin
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>01 XXX XX XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Tržaška cesta …, Ljubljana</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default OdstranjevanjeBradavicPage;
