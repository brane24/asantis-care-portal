import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ZenskaPage = () => {
  const features = [
    "Ginekološki pregled + PAP test + UZ",
    "Klinični pregled dojk",
    "Hormonski / internistični pregled",
    "Osnovni dermatološki pregled",
    "Online posvet s specializiranim zdravnikom",
    "Popusti na dodatne ginekološke storitve",
    "Popusti na dermatološke posege"
  ];

  const faqItems = [
    {
      question: "Za koga je paket Ženska 360 primeren?",
      answer: "Paket je zasnovan za ženske med 25. in 65. letom starosti, ki želijo celostno skrb za svoje zdravje. Primeren je tako za preventivne preglede kot za tiste, ki že imajo specifične zdravstvene težave."
    },
    {
      question: "Kako pogosto so vključeni pregledi?",
      answer: "V paketu je vključen letni preventivni ginekološki pregled s PAP testom in ultrazvokom, osnovni dermatološki pregled ter možnost hormonskega/internističnega pregleda. Dodatne preglede lahko opravite z ugodnim popustom."
    },
    {
      question: "Ali lahko kadarkoli naročim online posvet?",
      answer: "Da, kot član paketa Ženska 360 imate dostop do hitrega online posvetovanja z našimi specializiranimi zdravniki. Posvet lahko naročite prek spletne aplikacije ali telefonsko."
    },
    {
      question: "Kaj če potrebujem dodatne preiskave?",
      answer: "Vse dodatne preiskave in posege, ki niso vključeni v osnovni paket, lahko opravite z ugodnimi članski popusti. Cene dodatnih storitev so pregledne in brez skritih stroškov."
    },
    {
      question: "Ali lahko prekličem naročnino?",
      answer: "Da, naročnino lahko prekličete kadarkoli brez dodatnih stroškov. Preklic začne veljati ob koncu tekočega obračunskega obdobja."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              ⭐ Najbolj izbran paket
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ženska 360
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Celostna skrb za žensko zdravje od preventive do terapije. 
              Ginekologija, hormonsko zdravje, dermatologija in več na enem mestu.
            </p>
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                65€
              </span>
              <span className="text-2xl text-muted-foreground ml-3">/ mesec</span>
            </div>
            <Button size="lg" asChild>
              <NavLink to="/cenik">Naroči paket</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kaj je vključeno?</h2>
            <p className="text-lg text-muted-foreground">
              Kompleksna zdravstvena oskrba za vse vidike ženskega zdravja
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ginekologija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Preventivni in kurativni ginekološki pregledi s PAP testom in ultrazvočno diagnostiko.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hormonsko zdravje</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hormonska ravnovesja, menopavza, ščitnica in presnova pod nadzorom.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dermatologija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Preventivni pregled kože, sprememb in znamenj z dermatoskopijo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Kako deluje?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Izberite paket</h3>
                <p className="text-sm text-muted-foreground">
                  Kliknite na "Naroči paket" in izpolnite obrazec
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Varno plačilo</h3>
                <p className="text-sm text-muted-foreground">
                  Mesečno plačilo preko varne Stripe platforme
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Naročite termin</h3>
                <p className="text-sm text-muted-foreground">
                  Hitro in enostavno naročanje preko spleta ali telefona
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Uživajte v skrbi</h3>
                <p className="text-sm text-muted-foreground">
                  Celostna zdravstvena oskrba brez čakalnih vrst
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pogosta vprašanja</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pripravljene začeti skrbeti zase?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Izberite paket Ženska 360 in zagotovite si celostno zdravstveno oskrbo 
              z enostavno mesečno naročnino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/cenik">Naroči zdaj</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">Kontaktirajte nas</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default ZenskaPage;
