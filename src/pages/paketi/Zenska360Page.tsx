import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Heart, Shield, Clock, Phone, Star, Stethoscope, Sparkles, Activity, ThermometerSun, ArrowRight } from "lucide-react";
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
import { Helmet } from "react-helmet";

const Zenska360Page = () => {
  const activationServices = [
    {
      title: "Ginekologija",
      icon: Heart,
      items: [
        "Ginekološki pregled",
        "PAP + HPV test",
        "UZ rodil (maternica + jajčniki)"
      ]
    },
    {
      title: "Dojke",
      icon: Shield,
      items: [
        "UZ dojk",
        "Klinični pregled dojk",
        "Ocena osebnega tveganja za rak dojke"
      ]
    },
    {
      title: "Dermatologija",
      icon: Sparkles,
      items: [
        "Osnovni dermatološki pregled",
        "Pregled znamenj + pigmentacij",
        "Identifikacija tveganih sprememb"
      ]
    },
    {
      title: "Hormoni & Ščitnica",
      icon: Activity,
      items: [
        "Klinična hormonska ocena (perimenopavza, PMS, neredni cikli)",
        "UZ ščitnice",
        "Ocena tveganja za Hashimoto, hipo/hipertiroidizem"
      ]
    },
    {
      title: "Načrtovanje",
      icon: ThermometerSun,
      items: [
        "Osebni letni preventivni načrt",
        "Digitalni karton + opozorila",
        "Intervalli HPV, PAP, UZ dojk, ščitnica"
      ]
    }
  ];

  const subscriptionBenefits = [
    {
      category: "Ginekologija",
      items: [
        "Nujni termin v 48h (vnetje, bolečina, dvom)",
        "Letni ginekološki UZ",
        "Mesečni posvet (e-posvet ali video)"
      ]
    },
    {
      category: "Dojke",
      items: [
        "Letni ultrazvok dojk",
        "Klinični pregled po potrebi"
      ]
    },
    {
      category: "Dermatologija",
      items: [
        "Letni dermato pregled",
        "Kontrola nevarnih znamenj",
        "Posveti ob spremembah (slika → ocena → odločitev)"
      ]
    },
    {
      category: "Hormoni",
      items: [
        "Letna hormonska ocena",
        "Vodenje simptomov (PMS, cikel, perimenopavza, menopavza)",
        "Mesečni check-in"
      ]
    },
    {
      category: "Ščitnica",
      items: [
        "Letni UZ ščitnice",
        "Klinična ocena delovanja",
        "Vključitev v hormonski načrt, če je potrebno"
      ]
    },
    {
      category: "Dodatne ugodnosti",
      items: [
        "20% popusta: kolposkopija, odstranitve znamenj, ginekološki posegi",
        "Prednostni termini",
        "Koordinacija zdravljenja in napotitve",
        "Digitalni nadzor nad intervali preventivnih pregledov"
      ]
    }
  ];

  const comparisonData = [
    { service: "Ginekološki pregled", regular: "60–80 €", included: true },
    { service: "PAP + HPV", regular: "80–120 €", included: true },
    { service: "UZ ginekološki", regular: "60–80 €", included: true },
    { service: "UZ dojk", regular: "60–80 €", included: true },
    { service: "Klinični pregled dojk", regular: "40–50 €", included: true },
    { service: "Dermatološki pregled", regular: "50–80 €", included: true },
    { service: "UZ ščitnice", regular: "60–80 €", included: true },
    { service: "Hormonska ocena", regular: "50–80 €", included: true },
    { service: "Nujni termin", regular: "40–60 €", included: true },
    { service: "Mesečni posveti", regular: "40–60 €", included: true }
  ];

  const timeline = [
    {
      step: 1,
      title: "Rezerviraš termin aktivacije",
      description: "Takoj prejmeš datum in dostop do kartona."
    },
    {
      step: 2,
      title: "V 30–40 min opravimo 6 ključnih pregledov",
      description: "Ginekologija, dojke, koža, hormoni, ščitnica."
    },
    {
      step: 3,
      title: "Prejmeš osebni letni načrt",
      description: "Kaj spremljamo, kdaj, zakaj."
    },
    {
      step: 4,
      title: "Od drugega meseca naprej",
      description: "39 € / mesec — mesečni posveti, nujni termini, pregledi, spremljanje."
    }
  ];

  const trustPoints = [
    "Brez čakanja",
    "Rezultati PAP/HPV razloženi isti teden",
    "UZ dojk isti dan v centru",
    "Dermatolog in ginekolog komunicirata med seboj",
    "Dostopne cene za celoten sklop preventiv",
    "Koordinacija vsega na enem mestu"
  ];

  const faqItems = [
    { question: "Ali so VSI pregledi v aktivaciji dejansko vključeni v ceni 159 €?", answer: "Da. Vse: ginekolog, PAP/HPV, UZ rodil, UZ dojk, klinični pregled dojk, osnovni dermatološki pregled, UZ ščitnice in hormonska ocena." },
    { question: "Ali je dermatolog res vključen v naročnino?", answer: "Da, paket vključuje letni pregled in kontrole kožnih sprememb po potrebi." },
    { question: "Kako hitro dobim termin?", answer: "Za nujne ginekološke težave v 48 urah. Za aktivacijo običajno v 3–7 dneh." },
    { question: "Kako delujejo mesečni posveti?", answer: "Gre za kratek video ali e-posvet za vprašanja, spremembe, interpretacijo izvidov ali simptome." },
    { question: "Ali lahko opravim vse preglede ob prvem obisku?", answer: "Da — to je namen aktivacije. Vse naredimo v enem terminu." },
    { question: "Kaj če kateri pregled ni potreben pri meni?", answer: "Zdravnik vseeno opravi oceno tveganja in po potrebi prilagodi plan." },
    { question: "Ali lahko koristim dermatologa več kot enkrat na leto?", answer: "Kontrole nevarnih znamenj in sprememb so vključene. Celotni pregled pa 1× letno." },
    { question: "Kaj če imam neredne cikle ali sum na hormonsko neravnovesje?", answer: "To je ravno namen paketa — hormoni so vključeni v naročnino brez doplačila." },
    { question: "Kaj pa ščitnica?", answer: "Letni UZ + ocena simptomov + spremljanje, če so znaki Hashimota ali hipo/hipertiroidizma." },
    { question: "Ali paket zamenja klasičnega osebnega ginekologa?", answer: "Ne, gre za nadstandardno, specialistično preventivo." },
    { question: "Ali lahko paket prekličem kadarkoli?", answer: "Da. Nima vezave." },
    { question: "Ali lahko ponovno aktiviram paket?", answer: "Da. Vendar se ponovno obračuna aktivacija 159 €." },
    { question: "Ali lahko koristim paket med nosečnostjo?", answer: "Da, vendar nosečniški UZ ni vključen." },
    { question: "Koliko časa traja aktivacijski pregled?", answer: "30–40 minut." },
    { question: "Kako pogosto se delajo PAP in HPV testi?", answer: "Najpogosteje 1× na 3 leta, vendar odvisno od rezultatov. Sistem vas opozori na čas." },
    { question: "Koliko plačam dodatno?", answer: "Vse vključeno razen posegov (kolposkopija, odstranitve sprememb) – a dobite 20% popusta." },
    { question: "Ali lahko združim ta paket z drugimi?", answer: "Da — vse Asantis naročnine so kompatibilne." },
    { question: "Imam družinsko anamnezo raka dojk. Je paket primeren?", answer: "Da. Letni UZ + klinični pregled sta prva linija presejanja." },
    { question: "Kaj pa kožna znamenja, ki so sumljiva?", answer: "Dermatolog jih dokumentira, spremlja in po potrebi predlaga odstranitev." },
    { question: "Ali so vključen laboratorij, hormoni in krvni testi?", answer: "Laboratorij ni vključen, a imate dostop do znižanih cen." }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Ženska Preventiva 360 | Ginekologija, dojke, koža, hormoni | Asantis</title>
        <meta name="description" content="Najcelovitejši ženski zdravstveni paket v Sloveniji. Ginekologija, UZ dojk, dermatologija, hormoni, ščitnica. Aktivacija 159 € + 39 €/mesec. Brez čakanja." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-pink-100 text-pink-700 border-pink-200">
              🎀 Ženska Preventiva 360
            </Badge>
            <p className="text-lg text-muted-foreground mb-4">
              Ginekologija • Dojke • Koža • Hormoni • Ščitnica
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Najcelovitejši ženski zdravstveni paket v Sloveniji
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Takojšnja aktivacija vseh preventivnih pregledov + celoletna specialistična naročnina za samo <span className="font-semibold text-foreground">39 €/mesec</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  Začni z aktivacijo — 159 €
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="tel:+38631876104">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokliči nas za vprašanja
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ➡️ Aktivacija vključuje: pregled, PAP/HPV, UZ rodil, UZ dojk, dermato pregled, UZ ščitnice
            </p>
          </div>
        </div>
      </section>

      {/* Why This Package */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Zakaj ta paket?</h2>
          <p className="text-center text-muted-foreground mb-12">Za ženske 25–65, ki želijo:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              "odkriti raka materničnega vratu na najzgodnejši stopnji",
              "redno spremljanje dojk z UZ + kliniko",
              "varno spremljanje kožnih sprememb (melanom)",
              "urejene hormone, ciklus, menopavzo",
              "pregled ščitnice",
              "hitre rešitve ob vnetjih, bolečinah ali dvomih",
              "zdravstveni sistem, ki deluje brez čakanja"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-lg italic">
                "Preventiva ni dogodek. Je mesečni proces."
              </p>
              <p className="text-muted-foreground mt-2">
                Zato paket združuje vse ključne ženske specialnosti v eno članstvo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activation Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Plača se 1×
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Kaj vključuje AKTIVACIJA — 159 €</h2>
              <p className="text-muted-foreground">
                Ob aktivaciji (1. obisk) opravimo celoten "full body screening" ženskih tveganj
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activationServices.map((service) => (
                <Card key={service.title} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  Začni z aktivacijo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mesečna naročnina — 39 € / mesec</h2>
            <p className="text-muted-foreground">
              Vse, kar potrebujete za celoletno preventivo in podporo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriptionBenefits.map((benefit) => (
              <Card key={benefit.category} className="h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">{benefit.category}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Primerjava: Paket vs. posamezne storitve</h2>
            <p className="text-center text-muted-foreground mb-8">Zakaj je paket bolj smiseln?</p>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2">Storitev</TableHead>
                      <TableHead>Cena posamezno</TableHead>
                      <TableHead className="text-center">V paketu</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.service}</TableCell>
                        <TableCell className="text-muted-foreground">{row.regular}</TableCell>
                        <TableCell className="text-center">
                          {row.included && <Check className="h-5 w-5 text-primary mx-auto" />}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-primary/5 font-semibold">
                      <TableCell>Skupna vrednost</TableCell>
                      <TableCell>550–750 €</TableCell>
                      <TableCell className="text-center text-primary">Aktivacija 159 € + 39 €/mes</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kako poteka 1. mesec</h2>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zakaj ženske izberejo nas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <Star className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
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
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Začni z aktivacijo — 159 €
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Z enim obiskom opravite celotno letno preventivo dojk, materničnega vratu, kože, hormonov in ščitnice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  Začni z aktivacijo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  Postani članica — 39 €/mesec
                </NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Zenska360Page;
