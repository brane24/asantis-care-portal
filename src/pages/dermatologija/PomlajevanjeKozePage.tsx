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
  Clock,
  MapPin,
  Gem,
  Lightbulb,
  Zap,
  Leaf,
  Stethoscope,
  Calendar,
  User,
} from "lucide-react";

const whyChoose = [
  {
    icon: Lightbulb,
    title: "Individualni pristop",
    description: "Izbira metode glede na stanje in starost kože",
  },
  {
    icon: Zap,
    title: "Napredne tehnologije",
    description: "Laser, radiofrekvenca in injekcijski tretmaji (botoks, polnila)",
  },
  {
    icon: Leaf,
    title: "Naravni rezultati",
    description: "Brez pretiranega učinka, z ohranjeno mimiko in svežim videzom",
  },
  {
    icon: Stethoscope,
    title: "Strokovni nadzor",
    description: "Vsak tretma vodi izkušen specialist dermatolog",
  },
];

const treatments = [
  {
    name: "Botoks",
    description: "Zmanjša gubice okoli oči, na čelu in med obrvmi.",
    suitable: "Mimične gubice, preventivno pomlajevanje",
  },
  {
    name: "Dermalna polnila (hialuron)",
    description: "Obnavlja volumen in elastičnost kože.",
    suitable: "Ustnice, ličnice, nazolabialne gube",
  },
  {
    name: "Microneedling (kolagenska terapija)",
    description: "Spodbuja tvorbo kolagena z mikroiglicami.",
    suitable: "Povešena koža, brazgotine, gube",
  },
  {
    name: "Laser za pomlajevanje kože",
    description: "Neinvazivno obnavljanje površinske plasti kože.",
    suitable: "Neenakomeren ton, pigmentacije, gube",
  },
  {
    name: "PRP terapija (plazma)",
    description: "Uporaba lastne krvi za regeneracijo kože.",
    suitable: "Utrujena, povešena, tanka koža",
  },
  {
    name: "Radiofrekvenca",
    description: "Globinsko segrevanje kože za napenjanje.",
    suitable: "Obraz, vrat, dekolte",
  },
];

const steps = [
  {
    number: "1",
    title: "Dermatološki posvet",
    description: "Ocena stanja kože in izbira optimalnega tretmaja.",
  },
  {
    number: "2",
    title: "Priprava kože",
    description: "Čiščenje, zaščita občutljivih predelov.",
  },
  {
    number: "3",
    title: "Izvedba tretmaja",
    description: "Neinvazivno, traja 20–60 minut.",
  },
  {
    number: "4",
    title: "Po tretmaju",
    description: "Brez okrevanja, možna takojšnja vrnitev k aktivnostim.",
  },
];

const results = [
  "Gladka, sijoča in napeta koža",
  "Manj gubic in izboljšan ton kože",
  "Obnovljen volumen in svež videz",
  "Dolgotrajni učinek, brez umetnega videza",
];

const pricing = [
  { service: "Posvet z dermatologom", price: "40 € (odbitno ob izvedenem tretmaju)" },
  { service: "Botoks (ena regija)", price: "130 €" },
  { service: "Dermalna polnila (1 ml)", price: "250 €" },
  { service: "PRP terapija", price: "180 €" },
  { service: "Microneedling", price: "120 €" },
  { service: "Laser pomlajevanje", price: "150 €" },
];

const faqItems = [
  {
    question: "Ali je tretma boleč?",
    answer: "Večina postopkov je nebolečih ali le minimalno neprijetnih – po potrebi uporabimo lokalno anestezijo.",
  },
  {
    question: "Koliko tretmajev potrebujem?",
    answer: "Za optimalen rezultat priporočamo 3–5 tretmajev, odvisno od metode in stanja kože.",
  },
  {
    question: "Kdaj so vidni rezultati?",
    answer: "Prvi učinki so vidni že po nekaj dneh, končni rezultat pa v nekaj tednih.",
  },
  {
    question: "Ali je primeren tudi za moške?",
    answer: "Da, vse metode pomlajevanja so primerne tako za ženske kot moške.",
  },
  {
    question: "Ali potrebujem napotnico?",
    answer: "Ne, pri nas se naročite brez napotnice in brez čakalne dobe.",
  },
];

const PomlajevanjeKozePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pomlajevanje kože Ljubljana | Asantis dermatologija</title>
        <meta
          name="description"
          content="Profesionalno pomlajevanje kože brez operacije – botoks, hialuronska polnila, PRP, laser. Dermatolog Asantis Ljubljana. Rezervirajte termin še danes!"
        />
        <meta
          name="keywords"
          content="pomlajevanje kože, pomlajevanje obraza, botoks Ljubljana, hialuronska polnila, microneedling, PRP terapija, laser pomlajevanje, dermatolog Ljubljana"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Estetska dermatologija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Pomlajevanje kože – naravno, učinkovito in brez kirurškega posega
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Odkrijte mladostnejši videz s sodobnimi dermatološkimi tretmaji v centru Asantis Ljubljana. 
              Brez bolečin, brez okrevanja – z opaznimi rezultati.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="w-5 h-5 mr-2" />
                  Rezervirajte termin za posvet
                </NavLink>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span>Strokovni dermatologi</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-primary" />
                <span>Napredna tehnologija</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Hitri rezultati</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Ljubljana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Zakaj izbrati Asantis za pomlajevanje kože?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {whyChoose.map((item, index) => (
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
            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="w-5 h-5 mr-2" />
                  Rezervirajte brezplačen posvet
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Katere tretmaje izvajamo za pomlajevanje kože?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment, index) => (
                <Card key={index} className="hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{treatment.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{treatment.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {treatment.suitable}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Kako poteka pomlajevanje kože?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {steps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              💬 Rezultati so vidni že po prvem tretmaju in se postopno izboljšujejo v naslednjih tednih.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Kakšni so rezultati pomlajevanja kože?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{result}</span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Cenik pomlajevanja kože
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold">Storitev</th>
                        <th className="text-right p-4 font-semibold">Cena od</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((item, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4">{item.service}</td>
                          <td className="p-4 text-right font-medium text-primary">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6">
              💬 Točne cene se določijo po posvetu glede na obseg tretmaja.
            </p>
            <div className="flex justify-center mt-6">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte termin
                </NavLink>
              </Button>
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              📍 Asantis Dermatologija Ljubljana
            </h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Tržaška cesta 00, Ljubljana</p>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>041 000 000</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@asantis.si</span>
              </div>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Po dogovoru (možnost naročanja tudi popoldne in sobote)</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte termin zdaj
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Pokličite nas
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Število mest v akciji je omejeno!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PomlajevanjeKozePage;
