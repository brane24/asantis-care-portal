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
  CheckCircle2,
  Star,
  Sparkles,
  Clock,
  MapPin,
  Shield,
  Heart,
  Shirt,
  Search,
  Scissors,
  Stethoscope,
  Users,
  Microscope,
  Zap,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Zdravje",
    description: "Nekatera znamenja se lahko spremenijo v nevarne spremembe (melanom).",
  },
  {
    icon: Heart,
    title: "Estetika",
    description: "Moteča znamenja na obrazu, vratu ali telesu lahko zmanjšajo samozavest.",
  },
  {
    icon: Shirt,
    title: "Udobje",
    description: "Odstranimo znamenja, ki se drgnejo ob oblačila ali povzročajo draženje.",
  },
  {
    icon: Search,
    title: "Preventiva",
    description: "Redni dermatološki pregledi preprečijo zaplete.",
  },
];

const steps = [
  {
    number: "1",
    title: "Dermatološki pregled znamenja",
    description: "Ocena spremembe z dermatoskopom. Po potrebi histološka analiza.",
  },
  {
    number: "2",
    title: "Odstranitev znamenja",
    description: "Po potrebi v lokalni anesteziji. Možnost laserske ali kirurške odstranitve.",
  },
  {
    number: "3",
    title: "Nega in kontrola",
    description: "Svetovanje glede nege brazgotine. Kontrolni pregled po potrebi.",
  },
];

const methods = [
  {
    name: "Lasersko odstranjevanje znamenj",
    suitable: "Moteča, estetska znamenja in izrastki",
    advantages: "Brez krvavitve, minimalna brazgotina, hitro celjenje",
  },
  {
    name: "Kirurško odstranjevanje znamenj",
    suitable: "Sumljiva ali globlja znamenja",
    advantages: "Možnost histološke analize, popolna odstranitev",
  },
  {
    name: "Krioterapija (tekoči dušik)",
    suitable: "Bradavice, površinska znamenja",
    advantages: "Hitro, brez šivanja",
  },
];

const pricing = [
  { service: "Pregled znamenja z dermatoskopom", price: "45 €", note: "vključuje do 3 znamenja" },
  { service: "Odstranitev znamenja (laser)", price: "90 €", note: "odvisno od velikosti in števila" },
  { service: "Kirurška odstranitev z analizo", price: "140 €", note: "vključena histologija" },
  { service: "Kontrolni pregled", price: "30 €", note: "po potrebi" },
];

const faqItems = [
  {
    question: "Ali odstranjevanje znamenj boli?",
    answer: "Postopek se izvaja v lokalni anesteziji, zato je neboleč.",
  },
  {
    question: "Ali lahko odstranite znamenje kjerkoli na telesu?",
    answer: "Da, razen na mestih, kjer bi odstranitev ogrozila celjenje – odloči dermatolog.",
  },
  {
    question: "Ali je potrebna histološka analiza?",
    answer: "Pri sumljivih ali spremenjenih znamenjih – da. To zagotavlja varnost.",
  },
  {
    question: "Kako hitro se zaceli rana?",
    answer: "Pri laserski odstranitvi v 5–7 dneh, pri kirurški v 7–14 dneh.",
  },
  {
    question: "Ali potrebujem napotnico?",
    answer: "Ne, pri nas se naročite brez napotnice in brez čakalne dobe.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    text: "Izkušeni dermatologi z več kot 10 leti prakse",
  },
  {
    icon: Microscope,
    text: "Sodobni laserji (Er:YAG, CO₂)",
  },
  {
    icon: Zap,
    text: "Minimalne brazgotine, hitra regeneracija",
  },
  {
    icon: Award,
    text: "Vse na enem mestu – pregled, odstranitev, analiza",
  },
];

const OdstranjevanjeZnamenjPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Odstranjevanje znamenj Ljubljana – dermatolog, laser ali kirurško</title>
        <meta
          name="description"
          content="Varno in natančno odstranjevanje znamenj v Ljubljani. Laserska in kirurška metoda. Brez čakalne dobe – naročite pregled pri dermatologu."
        />
        <meta
          name="keywords"
          content="odstranjevanje znamenj, dermatolog Ljubljana, odstranitev znamenja, lasersko odstranjevanje znamenj, kirurško odstranjevanje znamenj, pregled znamenj"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Scissors className="w-4 h-4 mr-2" />
              Dermatološka kirurgija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Odstranjevanje znamenj – varno, natančno in brez vidnih brazgotin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Znebite se motečih ali nevarnih znamenj z najsodobnejšimi dermatološkimi metodami. 
              Pregled in odstranitev opravi izkušen dermatolog v Ljubljani.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Naročite pregled pri dermatologu
                </NavLink>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span>4.9 ocena pacientov</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Certificirani dermatologi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Brez čakalne dobe</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Ljubljana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remove Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Zakaj odstraniti znamenje?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((item, index) => (
                <Card key={index} className="text-center hover:border-primary/30 transition-colors">
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

      {/* Process Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Kako poteka postopek odstranitve znamenja
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
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
            <div className="text-center">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte termin za odstranjevanje znamenja
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Načini odstranjevanja
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold">Metoda</th>
                        <th className="text-left p-4 font-semibold">Primerno za</th>
                        <th className="text-left p-4 font-semibold">Prednosti</th>
                      </tr>
                    </thead>
                    <tbody>
                      {methods.map((item, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4 font-medium">{item.name}</td>
                          <td className="p-4 text-muted-foreground">{item.suitable}</td>
                          <td className="p-4 text-muted-foreground">{item.advantages}</td>
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

      {/* Pricing Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Cene
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold">Storitev</th>
                        <th className="text-right p-4 font-semibold">Cena (od)</th>
                        <th className="text-left p-4 font-semibold">Opombe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((item, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4">{item.service}</td>
                          <td className="p-4 text-right font-medium text-primary">{item.price}</td>
                          <td className="p-4 text-sm text-muted-foreground">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6">
              💬 Točen predračun prejmete po dermatološkem pregledu.
            </p>
            <div className="flex justify-center mt-6">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte pregled
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Zakaj izbrati nas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
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
              Najpogostejša vprašanja
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
              Ne odlašajte z odstranitvijo motečih znamenj
            </h2>
            <p className="text-muted-foreground mb-8">
              Zgodnje ukrepanje je ključ do zdravja in lepe kože.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte termin pri dermatologu zdaj
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Pokličite nas
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Brez čakalne dobe • Ljubljana • Zasebno
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OdstranjevanjeZnamenjPage;
