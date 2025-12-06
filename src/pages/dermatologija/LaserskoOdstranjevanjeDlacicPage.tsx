import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  CheckCircle2,
  Star,
  Sparkles,
  Heart,
  Shield,
  Users,
  Microscope,
  MessageCircle,
  Sun,
  Zap,
  Clock,
  Leaf,
  User,
} from "lucide-react";

const benefits = [
  "Dolgotrajno gladka koža",
  "Brez vraščenih dlačic ali razdraženosti",
  "Postopek traja le nekaj minut",
  "Klinično dokazano varno in učinkovito",
];

const steps = [
  {
    icon: User,
    title: "Dermatološki posvet",
    description: "Ocenimo tip kože, barvo dlačic in izberemo optimalne parametre.",
  },
  {
    icon: Zap,
    title: "Laserski tretma",
    description: "Usmerjen žarek selektivno deluje na pigment v dlačnem mešičku.",
  },
  {
    icon: Leaf,
    title: "Nega po posegu",
    description: "Svetujemo, kako zaščititi kožo in doseči najboljše rezultate.",
  },
];

const bodyAreas = [
  { area: "Obraz (brčice, brada)", description: "Natančen tretma brez draženja kože" },
  { area: "Pazduhe", description: "Hitro in trajno zmanjšanje dlačic" },
  { area: "Bikini predel", description: "Nežna in estetska rešitev" },
  { area: "Noge", description: "Dolgotrajno gladka koža" },
  { area: "Hrbet / prsi", description: "Idealno za moške z močnejšo poraščenostjo" },
];

const notSuitable = [
  "Pri nosečnosti",
  "Ob aktivnih okužbah ali ranah",
  "Po svežem sončenju ali samoporjavitvenih kremah",
];

const beforeTreatment = [
  "Ne voskajte ali pulite dlačic 4 tedne pred tretmajem",
  "Dovoljena je le britje",
  "Na dan tretmaja mora biti koža čista in brez ličil ali deodorantov",
];

const afterTreatment = [
  "Izogibajte se soncu in solariju 7 dni",
  "Uporabljajte zaščitno kremo (SPF 30+)",
  "Lahko se pojavi rahla rdečica, ki hitro izgine",
];

const pricing = [
  { area: "Pazduhe", single: "45 €", package: "230 €" },
  { area: "Bikini predel", single: "60 €", package: "310 €" },
  { area: "Noge (celotne)", single: "160 €", package: "850 €" },
  { area: "Hrbet / prsi", single: "120 €", package: "640 €" },
  { area: "Obraz", single: "40 €", package: "210 €" },
];

const faqItems = [
  {
    question: "Ali je odstranjevanje dlačic z laserjem trajno?",
    answer: "Da, dlačni mešički, ki jih laser uniči, se ne obnovijo več. Včasih pa je za ohranjanje rezultatov priporočljiv 1–2 vzdrževalna tretmaja letno.",
  },
  {
    question: "Ali postopek boli?",
    answer: "Večina pacientov občuti le rahlo toploto ali ščemenje, podobno nežnemu piku elastike.",
  },
  {
    question: "Koliko časa traja tretma?",
    answer: "Od 10 do 60 minut, odvisno od površine (pazduhe ≈ 10 min, noge ≈ 45 min).",
  },
  {
    question: "Koliko tretmajev potrebujem?",
    answer: "Za optimalen rezultat je običajno potrebnih 4–6 tretmajev, odvisno od dela telesa, tipa kože in dlačic.",
  },
  {
    question: "Ali potrebujem napotnico?",
    answer: "Ne, pri nas se naročite brez napotnice in brez čakalne dobe.",
  },
];

const whyChooseUs = [
  {
    icon: Microscope,
    title: "Najmodernejši laserji",
    description: "Uporabljamo medicinske laserje diode in Nd:YAG",
  },
  {
    icon: Users,
    title: "Izkušeni dermatologi",
    description: "Postopke izvajajo izkušeni strokovnjaki",
  },
  {
    icon: Heart,
    title: "Individualen pristop",
    description: "Varnost na prvem mestu",
  },
  {
    icon: Leaf,
    title: "Naravna nega",
    description: "Naravni pristop k negi kože po tretmajih",
  },
];

const LaserskoOdstranjevanjeDlacicPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lasersko odstranjevanje dlačic Ljubljana | Trajna depilacija – Asantis</title>
        <meta
          name="description"
          content="Trajno se znebite dlačic z medicinskim laserjem v Ljubljani. Varno, učinkovito, brez bolečin. Rezervirajte termin v dermatološkem centru Asantis."
        />
        <meta
          name="keywords"
          content="lasersko odstranjevanje dlačic, laserska epilacija, trajna depilacija, odstranjevanje dlačic Ljubljana, laser dlačice, epilacija Ljubljana"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Laserska dermatologija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Lasersko odstranjevanje dlačic – trajna gladka koža brez britja in voskanja
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Znebite se nadležnih dlačic za vedno z varnim, nebolečim in klinično preverjenim postopkom laserske epilacije.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte termin
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Pošljite povpraševanje
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span>4.9/5 povprečna ocena</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Več kot 2.000 zadovoljnih pacientov</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span>Najnovejša laserska tehnologija</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Zakaj izbrati lasersko odstranjevanje dlačic?
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-6">
              Učinkovito. Dolgotrajno. Brez vraščenih dlačic.
            </p>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              Lasersko odstranjevanje dlačic je najbolj napredna in dolgotrajna metoda za zmanjšanje in odpravo nezaželenih dlak. 
              Postopek je hiter, varen in primeren za skoraj vse dele telesa – obraz, pazduhe, noge, bikini predel, hrbet, prsni koš in roke.
              Z medicinskim laserjem natančno ciljamo pigment v dlačnem mešičku, kar prepreči ponovno rast dlačice, ne da bi poškodovali kožo.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Kako poteka postopek?
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-10">
              V 3 preprostih korakih do gladke kože
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {steps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              Za optimalen rezultat je običajno potrebnih <strong>4–6 tretmajev</strong>, odvisno od dela telesa, tipa kože in dlačic.
            </p>
          </div>
        </div>
      </section>

      {/* Body Areas Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Kateri deli telesa se lahko tretirajo?
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-10">
              Varno in učinkovito na vseh predelih
            </p>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold">Predel telesa</th>
                        <th className="text-left p-4 font-semibold">Opis tretmaja</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bodyAreas.map((item, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4 font-medium">{item.area}</td>
                          <td className="p-4 text-muted-foreground">{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Candidate Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Kdo je primeren kandidat?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Primerno za</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Lasersko odstranjevanje dlačic je primerno za večino ljudi z normalno kožo.
                    Najboljši rezultati so pri svetli koži in temnih dlačicah, a sodobni medicinski laserji 
                    omogočajo varno obravnavo tudi pri temnejši polti.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <Shield className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg">Postopek ni primeren</h3>
                  </div>
                  <ul className="space-y-2">
                    {notSuitable.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-destructive">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Pred in po posegu
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Pred tretmajem</h3>
                  </div>
                  <ul className="space-y-3">
                    {beforeTreatment.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sun className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Po tretmaju</h3>
                  </div>
                  <ul className="space-y-3">
                    {afterTreatment.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Cenik – Lasersko odstranjevanje dlačic
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-10">
              Dostopno in prilagodljivo glede na vaše potrebe
            </p>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold">Predel telesa</th>
                        <th className="text-right p-4 font-semibold">Posamezen tretma</th>
                        <th className="text-right p-4 font-semibold">Paket 6 tretmajev</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((item, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4">{item.area}</td>
                          <td className="p-4 text-right font-medium">{item.single}</td>
                          <td className="p-4 text-right font-medium text-primary">{item.package}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6">
              💬 <strong>Opomba:</strong> ob nakupu paketa je 7. tretma brezplačen.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Zakaj izbrati naš dermatološki center?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
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

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Pogosta vprašanja
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
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
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Rezervirajte termin ali pošljite povpraševanje zdaj
            </h2>
            <p className="text-muted-foreground mb-8">
              Dosezite trajno gladko kožo z varnim in učinkovitim laserskim tretmajem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte termin
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                01 000 00 00
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@asantis.si</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LaserskoOdstranjevanjeDlacicPage;
