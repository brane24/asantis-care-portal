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
  Brain, 
  Calendar, 
  MessageSquare, 
  Shield, 
  CheckCircle2, 
  Clock, 
  Heart,
  Zap,
  Users,
  TrendingDown,
  ArrowRight
} from "lucide-react";
import { NavLink } from "react-router-dom";

const MindCarePage = () => {
  const faqItems = [
    {
      question: "Ali se aktivacija plača samo enkrat?",
      answer: "Da. Aktivacija = prvi pregled + postavitev načrta."
    },
    {
      question: "Kaj če po prvem pregledu ne želim nadaljevati?",
      answer: "Mesečna naročnina se aktivira šele po prvem pregledu."
    },
    {
      question: "Je mesečna konzultacija dovolj?",
      answer: "Za večino primerov: da. Če potrebujete več, obstaja doplačljiva razširjena možnost."
    },
    {
      question: "Kaj če potrebujem zdravila?",
      answer: "Psihiater predpiše e-recept in ga mesečno prilagaja."
    },
    {
      question: "Kako dolga je minimalna vezava?",
      answer: "3 mesece, ker psihiatrično zdravljenje potrebuje kontinuiteto."
    },
    {
      question: "Ali vključuje psihoterapijo?",
      answer: "Ne; psihiater priporoči ustrezno smer, mi pomagamo z organizacijo."
    }
  ];

  const comparisonData = [
    { service: "Prvi pregled", individual: "150–180 €", package: "v aktivaciji za 120 €" },
    { service: "12 × kratka konzultacija", individual: "600–960 €", package: "vključeno v 69 € / mesec" },
    { service: "E-mail podpora", individual: "40–50 €", package: "vključeno" },
    { service: "TMS popusti", individual: "—", package: "–20 %" },
    { service: "Letni strošek", individual: "800–1.200 €", package: "948 € / leto" },
    { service: "Prihranek", individual: "—", package: "300–450 € / leto" }
  ];

  const targetAudience = [
    "ljudem z depresijo, ki potrebujejo stabilizacijo",
    "tistim, ki se vračajo po burnoutu",
    "bolnikom z ADHD (diagnostika + redne prilagoditve)",
    "posameznikom z OCD in paničnimi napadi",
    "tistim, ki želijo dostop brez čakalnih vrst",
    "vsem, ki imajo nihajoče stanje in potrebujejo stalno spremljanje"
  ];

  const steps = [
    { step: 1, title: "Plačaš aktivacijo", description: "120 € enkratno plačilo" },
    { step: 2, title: "Izbereš termin", description: "Za prvi pregled (60–90 min)" },
    { step: 3, title: "Izdelamo načrt", description: "Tvoj osebni načrt zdravljenja" },
    { step: 4, title: "Začneš naročnino", description: "69 € mesečno" },
    { step: 5, title: "Stalna podpora", description: "Mesečne konzultacije + prilagoditve" }
  ];

  return (
    <>
      <Helmet>
        <title>MindCare – Psihiatrični Paket | ASANTIS</title>
        <meta 
          name="description" 
          content="Osebni psihiater, stalna podpora in načrt zdravljenja brez čakalnih vrst. Aktivacija 120 € + 69 €/mesec. Za depresijo, anksioznost, ADHD, burnout." 
        />
        <meta name="keywords" content="psihiater Ljubljana, depresija zdravljenje, anksioznost, ADHD, burnout, psihiatrična pomoč" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Za odrasle 20–65 let z depresijo, anksioznostjo, stresom ali ADHD
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Osebni psihiater, stalna podpora in načrt zdravljenja — <span className="text-primary">brez čakalnih vrst</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Prvi obsežni pregled kot del aktivacije + mesečna podpora, ko jo potrebujete.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  120 € aktivacija + 69 € mesečno
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <NavLink to="/kontakt">
                    <Brain className="mr-2 h-5 w-5" />
                    Začni z MindCare
                  </NavLink>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Aktivacija vključuje celoten prvi pregled (60–90 min).
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Why this model */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Zakaj model aktivacija + naročnina?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 text-center">
                Psihiatrija ni en obisk. Je proces.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Aktivacija poskrbi, da dobiš:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>60–90 min prvi pregled</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>diagnostično oceno (F32–F33, F40–F41, F43, F90, Z73)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>izhodiščni načrt zdravljenja</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>oceno tveganj + načrt stabilizacije</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Naročnina pa omogoča:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>mesečno podporo, ko se stanje spreminja</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>kontinuirano prilagajanje terapij</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>stabilen odnos z enim zdravnikom</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>nižjo mesečno ceno → večji dostop</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Package contents */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
                Vsebina paketa
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Activation Card */}
                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-foreground">Aktivacija</h3>
                      <span className="text-3xl font-bold text-primary">120 €</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">(enkratno plačilo)</p>
                    
                    <h4 className="font-semibold text-foreground mb-4">Vključuje:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Prvi psihiatrični pregled (60–90 min)</p>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• diagnostika depresije, anksioznosti, ADHD, burnouta, OCD</li>
                            <li>• ocena tveganj (suicidalnost, panični napadi)</li>
                            <li>• oblikovanje začetnega načrta zdravljenja</li>
                            <li>• izpis priporočil + načrt nadaljnjih korakov</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6 pt-4 border-t">
                      Realna vrednost: 150–180 €
                    </p>
                  </CardContent>
                </Card>

                {/* Subscription Card */}
                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-foreground">Mesečna naročnina</h3>
                      <span className="text-3xl font-bold text-primary">69 €</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">/ mesec</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Kratka kontrolna konzultacija 1× mesečno (10–15 min)</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Osebno ali online: prilagoditev terapije, ocena napredka, obravnava simptomov, stabilizacija stanja
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">E-mail / VC sporočila 1× mesečno</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Kratko klinično usmerjanje (npr. nespečnost, stranski učinki, poslabšanja)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">TMS članska cena: –20 %</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Velik finančni benefit za depresijo + burnout
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Comparison table */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Primerjava stroškov
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Zakaj ljudje izberejo to verzijo? → Ker loči "drag prvi pregled" od "nizkega mesečnega commitmenta".
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-semibold text-foreground">Storitev</th>
                      <th className="text-left p-4 font-semibold text-foreground">Posamično</th>
                      <th className="text-left p-4 font-semibold text-primary">Aktivacija + Naročnina</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-secondary/20" : "bg-background"}>
                        <td className="p-4 text-foreground">{row.service}</td>
                        <td className="p-4 text-muted-foreground">{row.individual}</td>
                        <td className="p-4 text-primary font-medium">{row.package}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How it works */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
                Kako poteka vstop?
              </h2>
              
              <div className="space-y-6">
                {steps.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-primary hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Target audience */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Komu je ta model pisan na kožo?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {targetAudience.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="py-16 bg-secondary/30">
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

        {/* Final CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Začnite psihiatrično zdravljenje z osebnim pristopom, ne s čakanjem.
              </h2>
              <p className="text-xl text-primary font-bold mb-4">
                120 € aktivacija + 69 € / mesec
              </p>
              <p className="text-muted-foreground mb-8">
                Prvi pregled je vključen.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <NavLink to="/kontakt">
                  <Brain className="mr-2 h-5 w-5" />
                  Začni z MindCare
                </NavLink>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Varno plačilo. Možnost online posveta.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MindCarePage;
