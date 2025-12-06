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
  Clock,
  CheckCircle2,
  MapPin,
  Star,
  Sparkles,
  Heart,
  Shield,
  Users,
  Microscope,
  MessageCircle,
  ParkingCircle,
  Sun,
  Droplets,
  CircleDot,
  Activity,
  Zap,
} from "lucide-react";

const indications = [
  {
    icon: CircleDot,
    text: "Razširjene ali popokane kapilare na obrazu (nos, lica, brada)",
  },
  {
    icon: Activity,
    text: "Žile na nogah (pajkaste žilice, telangiektazije)",
  },
  {
    icon: Droplets,
    text: "Rdečica (kuperoza) ali rozacea",
  },
  {
    icon: Zap,
    text: "Žile po poškodbah ali vnetjih",
  },
];

const steps = [
  {
    number: "1",
    title: "Dermatološki pregled",
    description: "Najprej ocenimo vrsto in globino žilic ter določimo optimalen pristop.",
  },
  {
    number: "2",
    title: "Laserski poseg",
    description: "Svetlobni žarek ciljno segreje žilo, ki se nato postopno razgradi.",
  },
  {
    number: "3",
    title: "Po tretmaju",
    description: "Možna je rahla rdečina, ki izgine v nekaj urah. Običajno 1–3 tretmaji za optimalen rezultat.",
  },
];

const benefits = [
  "Natančno in učinkovito odstranjevanje žilic različnih velikosti",
  "Minimalno nelagodje, brez anestezije",
  "Brez brazgotin ali poškodb kože",
  "Hiter postopek in takojšnji učinek",
  "Primerno za obraz, noge in druge dele telesa",
];

const beforeTreatment = [
  "Ne uporabljajte samoporjavitvenih krem in solarija 2 tedna",
  "Ne nanašajte ličil na področje zdravljenja",
];

const afterTreatment = [
  "Kožo negujte z blagimi kremami",
  "Izogibajte se soncu in uporabljajte zaščito SPF 50",
  "Ne izvajajte pilingov 5–7 dni",
];

const pricing = [
  { area: "Obraz (nos, lica, brada)", price: "od 80 €" },
  { area: "Noge – manjše žilice", price: "od 100 €" },
  { area: "Noge – večje površine", price: "od 150 €" },
  { area: "Kontrolni poseg / dodatni tretma", price: "po dogovoru" },
];

const faqItems = [
  {
    question: "Ali je postopek boleč?",
    answer: "Občutek je podoben rahlemu pikcu ali toploti – večina pacientov ga dobro prenaša. Anestezija običajno ni potrebna.",
  },
  {
    question: "Koliko tretmajev potrebujem?",
    answer: "Večina pacientov doseže želeni učinek po 1–3 obiskih, odvisno od velikosti in globine žilic.",
  },
  {
    question: "Ali se žile lahko ponovijo?",
    answer: "Nove žilice se lahko pojavijo zaradi genetskih dejavnikov ali življenjskega sloga, zato priporočamo vzdrževalne tretmaje 1× letno.",
  },
  {
    question: "Koliko časa traja poseg?",
    answer: "Postopek traja 15–30 minut, odvisno od obsega področja. Takoj po posegu se lahko vrnete k običajnim aktivnostim.",
  },
  {
    question: "Ali potrebujem napotnico?",
    answer: "Ne, pri nas se naročite brez napotnice in brez čakalne dobe.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Izkušeni dermatologi",
    description: "Izvajajo dermatologi z dolgoletnimi izkušnjami",
  },
  {
    icon: Microscope,
    title: "Vrhunska tehnologija",
    description: "Uporabljamo laserske sisteme Nd:YAG in IPL",
  },
  {
    icon: MessageCircle,
    title: "Individualen pristop",
    description: "Prilagojen načrt zdravljenja za vsakega pacienta",
  },
  {
    icon: ParkingCircle,
    title: "Udobna lokacija",
    description: "Ljubljana + brezplačno parkirišče",
  },
];

const LaserskoOdstranjevanjeZilPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lasersko odstranjevanje žil – Asantis Ljubljana | Dermatolog</title>
        <meta
          name="description"
          content="Odstranite vidne žilice hitro in varno z medicinskim laserjem. Dermatolog v Ljubljani. Brez brazgotin, brez bolečin, takojšen učinek. Naročite se zdaj!"
        />
        <meta
          name="keywords"
          content="lasersko odstranjevanje žil, odstranjevanje kapilar, pajkaste žilice, lasersko odstranjevanje žilic, kuperoza, rozacea, odstranjevanje žil Ljubljana, dermatolog laser, zdravljenje žilic"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Droplets className="w-4 h-4 mr-2" />
              Laserska dermatologija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Lasersko odstranjevanje žil
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Varno, učinkovito in brez bolečin – z najsodobnejšo lasersko tehnologijo v Ljubljani.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Vidne kapilare, popokane žilice ali rdečina na obrazu in nogah so pogosta težava, 
              ki jo danes lahko učinkovito odpravimo z laserjem. V našem centru uporabljamo napredne 
              medicinske laserje, ki selektivno delujejo na žilne spremembe, brez poškodbe okoliške kože.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte posvet pri dermatologu
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Pokličite nas
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span>4.9/5 zadovoljnih pacientov</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Asantis Ljubljana</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Brez čakalnih vrst</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indications Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Kdaj se odločiti za lasersko odstranjevanje žil
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Postopek je primeren, če opazite:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {indications.map((item, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground">{item.text}</p>
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
              Kako poteka zdravljenje
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
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span>Trajanje posega: 15–30 minut</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-primary" />
                <span>Brez okrevanja – takojšen povratek k aktivnostim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Prednosti laserskega odstranjevanja žil
            </h2>
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

      {/* Preparation & Aftercare Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Priprava in nega po posegu
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Pred posegom</h3>
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
                    <h3 className="font-semibold text-lg">Po posegu</h3>
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Cena laserskega odstranjevanja žil
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold">Področje telesa</th>
                        <th className="text-right p-4 font-semibold">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((item, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4">{item.area}</td>
                          <td className="p-4 text-right font-medium text-primary">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6">
              📞 Pokličite ali rezervirajte pregled pri dermatologu za individualni načrt zdravljenja.
            </p>
            <div className="flex justify-center mt-6">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Naročite se na pregled
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Zakaj izbrati Asantis
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
      <section className="py-16 bg-background">
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
              Odstranite vidne žilice hitro in varno
            </h2>
            <p className="text-muted-foreground mb-8">
              Naročite se na pregled pri dermatologu in pridobite individualni načrt zdravljenja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rezervirajte termin
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Pokličite zdaj
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LaserskoOdstranjevanjeZilPage;
