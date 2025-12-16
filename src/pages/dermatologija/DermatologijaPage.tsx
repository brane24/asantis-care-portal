import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Stethoscope, Clock, Sparkles, MessageCircle, Star, Phone, Calendar, ArrowRight, Search, Scissors, Zap, Syringe, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DermatologijaPage = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Izkušeni specialisti dermatologije",
      description: "Vsak pregled opravi zdravnik specialist z dolgoletnimi izkušnjami."
    },
    {
      icon: Clock,
      title: "Brez čakanja, hiter dostop do diagnoze",
      description: "Naročite se takoj, brez napotnice."
    },
    {
      icon: Sparkles,
      title: "Sodobna diagnostika in terapija",
      description: "Digitalni dermatoskop, krioterapija, laserske terapije, biopsije."
    },
    {
      icon: MessageCircle,
      title: "Celostna obravnava",
      description: "Od pregleda in diagnostike do terapije in svetovanja za nego kože."
    }
  ];

  const examinationSteps = [
    "Pogovor o težavah, anamneza in pregled kože.",
    "Dermatoskopski pregled sumljivih sprememb ali izpuščajev.",
    "Po potrebi laboratorijska ali histološka diagnostika.",
    "Načrt zdravljenja in priporočila za nego kože."
  ];

  const conditions = [
    {
      category: "Kožne bolezni",
      items: ["akne", "rozacea", "seboreja", "luskavica", "ekcemi", "dermatitis"]
    },
    {
      category: "Alergijske reakcije in izpuščaji",
      items: ["kontaktni dermatitis", "urtikarija"]
    },
    {
      category: "Okužbe kože",
      items: ["glivične", "bakterijske", "virusne (herpes, bradavice)"]
    },
    {
      category: "Bolezni nohtov in lasišča",
      items: ["prhljaj", "izpadanje las", "glivice na nohtih"]
    },
    {
      category: "Preventiva",
      items: ["pregled pigmentnih znamenj", "preventivni pregled kože za odkrivanje rakavih sprememb"]
    }
  ];

  const treatmentApproach = [
    "Temelji na natančni diagnostiki.",
    "Uporabljamo kombinacijo sodobnih metod: lokalna terapija, zdravila, laserski postopki, fototerapija.",
    "Po potrebi sodelujemo z drugimi specialisti (alergolog, internist, endokrinolog).",
    "Vedno sledimo načelu: varno, učinkovito in z individualnim pristopom."
  ];

  const bookingSteps = [
    { step: "1", title: "Izpolnite obrazec", description: "Izpolnite kratek obrazec ali pokličite." },
    { step: "2", title: "Izbira termina", description: "Izberemo termin, ki vam ustreza." },
    { step: "3", title: "Pregled", description: "Opravite pregled pri specialistu dermatologu." },
    { step: "4", title: "Nadaljnje zdravljenje", description: "Po potrebi se dogovorimo za kontrolni pregled ali dodatno zdravljenje." }
  ];

  const faqItems = [
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, pregled je samoplačniški in brez čakalne dobe."
    },
    {
      question: "Kako se pripravim na pregled?",
      answer: "Ni posebne priprave – priporočamo, da ne nanašate ličil in krem na dan pregleda."
    },
    {
      question: "Ali lahko na istem pregledu odstranite znamenje ali bradavico?",
      answer: "Da, če zdravnik oceni, da je poseg smiseln, se lahko opravi takoj."
    },
    {
      question: "Koliko stane pregled?",
      answer: "Cena osnovnega dermatološkega pregleda: od 60 €. Natančno ceno prejmete pred posegom – možnost paketa s popustom ob več storitvah."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Stethoscope className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Dermatologija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Dermatološki pregled in zdravljenje bolezni kože – hitro, strokovno in brez napotnice
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Zaupajte koži strokovnjaku. Nudimo celostne dermatološke preglede in zdravljenje najpogostejših bolezni kože, nohtov in lasišča – brez čakalnih vrst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Naročite se na pregled
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+38612345678">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokličite nas
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Google ocena 4.9 | Več kot 1000 zadovoljnih pacientov</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zakaj pacienti izberejo nas?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <NavLink key={index} to="/kontakt" className="group">
                <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kaj pričakovati pri prvem pregledu</h2>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <ol className="space-y-4">
                  {examinationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center">
                  🧾 <strong>Prvi pregled običajno traja 20–30 minut.</strong> Po potrebi se dogovori kontrolni pregled ali dodatna obravnava.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zdravljenje vseh pogostih bolezni kože</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {conditions.map((condition, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{condition.category}</h3>
                  <ul className="space-y-2">
                    {condition.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/10 border-secondary/20">
            <CardContent className="p-6">
              <p className="text-center">
                📌 <strong>Zgodnje odkrivanje sprememb na koži lahko prepreči resne zaplete</strong> – naročite se pravočasno.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Naš pristop k zdravljenju</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {treatmentApproach.map((approach, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{approach}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preprost in hiter postopek naročanja</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {bookingSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">📅 Možnost naročanja tudi prek spleta 24/7.</p>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                <Stethoscope className="mr-2 h-5 w-5" />
                Naročite se na pregled zdaj
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pogosta vprašanja</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
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
        </div>
      </section>

      {/* Related Services */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Naše dermatološke storitve</h2>
            <p className="text-muted-foreground">Odkrijte vse specializirane dermatološke storitve, ki jih nudimo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NavLink to="/dermatologija/pregled-nevarnih-koznih-znamenj" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pregled kožnih znamenj</h3>
                  <p className="text-muted-foreground text-sm mb-4">Dermatoskopski pregled pigmentnih znamenj za zgodnje odkrivanje melanoma.</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/dermatologija/odstranjevanje-znamenj" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Scissors className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Odstranjevanje znamenj</h3>
                  <p className="text-muted-foreground text-sm mb-4">Kirurško ali lasersko odstranjevanje nevarnih ali estetsko motečih znamenj.</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/dermatologija/odstranjevanje-bradavic" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Odstranjevanje bradavic</h3>
                  <p className="text-muted-foreground text-sm mb-4">Krioterapija, laser ali elektrokavterizacija za učinkovito odstranitev bradavic.</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/dermatologija/lasersko-odstranjevanje-zil" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Syringe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Lasersko odstranjevanje žil</h3>
                  <p className="text-muted-foreground text-sm mb-4">Odstranjevanje vidnih žilic na obrazu in nogah z lasersko terapijo.</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/dermatologija/lasersko-odstranjevanje-dlacic" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Lasersko odstranjevanje dlačic</h3>
                  <p className="text-muted-foreground text-sm mb-4">Trajna odstranitev neželenih dlačic z diodnim in Nd:YAG laserjem.</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </NavLink>

            <NavLink to="/dermatologija/pomlajevanje-koze" className="group">
              <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pomlajevanje kože</h3>
                  <p className="text-muted-foreground text-sm mb-4">Botox, polnila, mikro iglanje, PRP in radiofrekvenca za mladostno kožo.</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Več informacij <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Zaupajte svoji koži strokovnjaku
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ne čakajte, da težave napredujejo – pravočasno zdravljenje kože prinese najboljše rezultate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">Naročite se na dermatološki pregled</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">Pokličite nas ali pišite</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default DermatologijaPage;
