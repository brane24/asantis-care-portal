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
  User, 
  Calendar, 
  Heart, 
  Shield, 
  CheckCircle2, 
  Clock, 
  Activity,
  Zap,
  ArrowRight,
  Unlock,
  AlertCircle
} from "lucide-react";
import { NavLink } from "react-router-dom";

const MenCarePage = () => {
  const faqItems = [
    {
      question: "Zakaj moram najprej plačati aktivacijo?",
      answer: "Ker v aktivaciji opravimo najdražje in ključne preiskave ter postavimo osnovo."
    },
    {
      question: "Kaj če program prekinem po nekaj mesecih?",
      answer: "Opravljene so le storitve, ki so bile do takrat predvidene."
    },
    {
      question: "Ali je paket primeren tudi, če nimam težav?",
      answer: "Da. Prav v tem primeru ima preventiva največji učinek."
    },
    {
      question: "Ali lahko kasneje dodam druge pakete?",
      answer: "Da. Aktivacija se lahko smiselno poveže z drugimi programi ali paketi."
    }
  ];

  const activationServices = [
    "Urološki pregled + UZ prostate",
    "Laboratorij (krvna slika, holesterol, glukoza)",
    "Hormoni: testosteron, TSH",
    "PSA (po starosti / indikaciji)",
    "Ocena srčno-žilnega tveganja"
  ];

  const subscriptionBenefits = [
    "Spremljanje zdravstvenega stanja",
    "Dostop do zdravnika za dodatne nasvete",
    "Koordinacijo morebitnih posegov ali zdravljenja",
    "Pravočasno ukrepanje v primeru bolezni"
  ];

  const monthlyIncludes = [
    "Stalni nadzor vašega zdravja",
    "Prioritetno naročanje",
    "Opomniki (mi vas aktivno opominjamo, ko je čas za pregled)",
    "Hitra obravnava ob težavah",
    "–20 % popust na dodatne storitve ali posege"
  ];

  return (
    <>
      <Helmet>
        <title>MenCare 360 – Preventivni program za moške | ASANTIS</title>
        <meta 
          name="description" 
          content="Sistematična skrb za moško zdravje skozi čas. Aktivacija 149 € + 39 €/mesec. Urologija, hormoni, srce-ožilje. Brez vezave, brez presenečenj." 
        />
        <meta name="keywords" content="moško zdravje, preventivni pregled moški, urolog Ljubljana, testosteron, PSA, prostata pregled" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                🧔 Preventivni zdravstveni program za moške
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                MenCare 360
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                Ne gre za enkratni pregled.<br />
                Gre za <span className="text-foreground font-semibold">sistematično skrb za tvoje zdravje – skozi čas</span>.
              </p>
              <div className="flex flex-col gap-2 text-muted-foreground mb-8 max-w-md mx-auto">
                <p>👉 Vstop z aktivacijo</p>
                <p>👉 Nadaljuješ mesečno</p>
                <p>👉 Brez vezave, brez presenečenj</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <NavLink to="/kontakt">
                    👉 Začni z aktivacijo
                  </NavLink>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <a href="#kako-poteka">
                    👉 Kako program poteka?
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why not check-up Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                ❓ Zakaj MenCare ni "check-up"
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Večina moških obišče zdravnika:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6 text-center">
                    <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
                    <p className="text-foreground">ko je zdravstveni problem že prisoten</p>
                  </CardContent>
                </Card>
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6 text-center">
                    <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
                    <p className="text-foreground">enkrat, brez spremljanja</p>
                  </CardContent>
                </Card>
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6 text-center">
                    <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
                    <p className="text-foreground">brez jasnega plana</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
                  MenCare 360 to spremeni.
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">Najprej naredimo temeljito oceno</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">Nato zdravje spremljamo skozi celo leto</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">Preglede izvajamo takrat, ko imajo smisel – ne vse v enem dnevu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Activation */}
        <section id="kako-poteka" className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  🔑 Korak 1
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Aktivacija (enkratno)
                </h2>
                <p className="text-muted-foreground">Vstop v program – postavimo izhodišče</p>
              </div>

              <Card className="border-2 border-primary max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-foreground">Aktivacija</h3>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-primary">149 €</span>
                      <p className="text-sm text-muted-foreground">ob vpisu</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    V prvih 14–45 dneh opravimo ključne preiskave:
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {activationServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg mb-4">
                    <p className="text-foreground font-medium">
                      🎯 Rezultat: Jasen pregled stanja + osebni preventivni načrt za naslednjih 12 mesecev.
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    💡 Aktivacija pokrije najzahtevnejši del obravnave. Zato je obvezna in se ne ponavlja.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Step 2: Monthly subscription */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  🔄 Korak 2
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Mesečni program (brez vezave)
                </h2>
              </div>

              <Card className="border-2 border-primary max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-foreground">Mesečna naročnina</h3>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-primary">39 €</span>
                      <span className="text-muted-foreground"> / mesec</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    ostaneš, kolikor želiš
                  </p>
                  
                  <p className="text-foreground mb-6">
                    Mesečna naročnina ni plačilo za posamezne preglede, ampak za:
                  </p>
                  
                  <div className="space-y-3">
                    {subscriptionBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's included Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                🧠 Kaj vključuje mesečna naročnina
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {monthlyIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* No commitment Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Unlock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Brez vezave = več zaupanja
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-primary/5 rounded-lg">
                  <p className="text-foreground">Ostaneš, dokler vidiš vrednost</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-lg">
                  <p className="text-foreground">Odpoveš lahko kadarkoli</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-lg">
                  <p className="text-foreground">Če odpoveš prej, se kasnejše storitve preprosto ne izvedejo</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-muted-foreground">
                <p>👉 Brez drobnega tiska.</p>
                <p>👉 Brez "ujeli smo te".</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                ❓ Pogosta vprašanja
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background rounded-lg border px-6"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
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
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Začni z zdravjem, preden postane problem.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                MenCare 360 = zdravje, nadzor in dolgoročna energija za moške.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <NavLink to="/kontakt">
                    👉 Začni z aktivacijo
                  </NavLink>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <NavLink to="/kontakt">
                    👉 Vprašaj zdravnika
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MenCarePage;
