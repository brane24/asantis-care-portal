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
  Heart,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const MindCarePage = () => {
  const faqItems = [
    {
      question: "Ali je celostni preventivni menedžerski pregled enkratna storitev?",
      answer:
        "Da. Gre za samostojno, obsežno storitev (60–90 min) z oceno stanja in jasnim načrtom naprej.",
    },
    {
      question: "Kaj če po pregledu ne želim nadaljevati z naročnino?",
      answer:
        "Popolnoma v redu. Naročnina ni obvezna in se aktivira šele, če se po pregledu sami odločite za nadaljevanje.",
    },
    {
      question: "Je mesečna konzultacija dovolj?",
      answer:
        "Za večino primerov: da. Če potrebujete pogostejše obravnave, so na voljo doplačljive razširitve.",
    },
    {
      question: "Kaj če potrebujem zdravila?",
      answer:
        "Psihiater lahko predpiše e-recept in terapijo sproti prilagaja glede na učinek in stranske učinke.",
    },
    {
      question: "Ali obstaja minimalna vezava?",
      answer:
        "Ne. Po opravljenem pregledu se sami odločite, ali želite nadaljevati v naročniškem modelu.",
    },
    {
      question: "Ali vključuje psihoterapijo?",
      answer:
        "Ne; psihiater priporoči ustrezno smer, mi pa vam pomagamo z usmeritvijo in organizacijo.",
    },
  ];

  const comparisonData = [
    { service: "Celostni preventivni menedžerski pregled", individual: "150–180 €", package: "150 € enkratno" },
    { service: "12 × kratka konzultacija (10–15 min)", individual: "600–960 €", package: "vključeno v 69 € / mesec" },
    { service: "E-mail / sporočila (kratko usmerjanje)", individual: "40–50 €", package: "vključeno" },
    { service: "TMS popusti", individual: "—", package: "–20 %" },
    { service: "Letni strošek (če nadaljujete)", individual: "800–1.200 €", package: "978 € / leto" },
    { service: "Prihranek", individual: "—", package: "200–350 € / leto" },
  ];

  const targetAudience = [
    "ljudem z depresijo, ki potrebujejo stabilizacijo",
    "tistim, ki se vračajo po burnoutu",
    "bolnikom z ADHD (diagnostika + redne prilagoditve)",
    "posameznikom z OCD in paničnimi napadi",
    "tistim, ki želijo dostop brez čakalnih vrst",
    "vsem, ki imajo nihajoče stanje in potrebujejo stalno spremljanje",
  ];

  const steps = [
    { step: 1, title: "Rezerviraš celostni pregled", description: "150 € enkratno" },
    { step: 2, title: "Izbereš termin", description: "Za prvi pregled (60–90 min)" },
    { step: 3, title: "Izdelamo načrt", description: "Tvoj osebni načrt obravnave" },
    { step: 4, title: "Po želji nadaljuješ z naročnino", description: "69 € mesečno" },
    { step: 5, title: "Stalna podpora", description: "Mesečne konzultacije + prilagoditve" },
  ];

  return (
    <>
      <Helmet>
        <title>MindCare – Mentalno-zdravstveni pregled | ASANTIS</title>
        <meta
          name="description"
          content="Celostni preventivni menedžerski MindCare pregled (150 €) + možnost nadaljevanja z naročnino 69 €/mesec. Za depresijo, anksioznost, ADHD, burnout in stres. Brez čakalnih vrst."
        />
        <meta
          name="keywords"
          content="psihiater Ljubljana, depresija zdravljenje, anksioznost, ADHD, burnout, psihiatrična pomoč, pregled"
        />
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
                Osebni psihiater, stalna podpora in načrt obravnave —{" "}
                <span className="text-primary">brez čakalnih vrst</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Začnete s celostnim preventivnim menedžerskim pregledom. Po njem se sami odločite, ali želite nadaljevati z naročnino.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  150 € celostni pregled{" "}
                  <span className="text-muted-foreground font-semibold">→ možnost nadaljevanja 69 € / mesec</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <NavLink to="/kontakt">
                    <Brain className="mr-2 h-5 w-5" />
                    Rezerviraj MindCare pregled
                  </NavLink>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Celostni pregled vključuje 60–90 min obravnave + jasen načrt naprej. Naročnina ni obvezna.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Why this model */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Zakaj pregled → (po želji) naročnina?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 text-center">
                Psihiatrija ni en obisk. Je proces.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Celostni pregled poskrbi, da dobite:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>60–90 min poglobljen prvi pregled</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>diagnostično oceno (F32–F33, F40–F41, F43, F90, Z73)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>izhodiščni načrt obravnave</span>
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
                      Naročnina (če želite) omogoča:
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
                Vsebina MindCare
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Review Card */}
                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-foreground">
                        Celostni preventivni menedžerski pregled
                      </h3>
                      <span className="text-3xl font-bold text-primary">150 €</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">(enkratno plačilo)</p>

                    <h4 className="font-semibold text-foreground mb-4">Vključuje:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Poglobljen pregled (60–90 min)</p>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• psihiatrična/psihološka ocena (po indikaciji)</li>
                            <li>• ocena stresa, razpoloženja, izgorelosti</li>
                            <li>• identifikacija tveganj (npr. panični napadi, poslabšanja)</li>
                            <li>• jasen zdravstveni načrt + priporočila (ne nujno terapija)</li>
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
                    <p className="text-sm text-muted-foreground mb-6">/ mesec (po želji, brez obveznosti)</p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Kratka kontrolna konzultacija 1× mesečno (10–15 min)</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Osebno ali online: ocena napredka, obravnava simptomov, prilagoditev terapije, stabilizacija stanja
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">E-mail / sporočila 1× mesečno</p>
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
                            Finančni benefit pri depresiji in burnoutu (po indikaciji).
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-8">
                Naročnina je odločitev po pregledu. Če ne nadaljujete, ostane pregled samostojna storitev.
              </p>
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
                Zakaj ljudje izberejo to verzijo? → Ker loči "konkreten prvi pregled" od "nizkega mesečnega commitmenta" (po želji).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-semibold text-foreground">Storitev</th>
                      <th className="text-left p-4 font-semibold text-foreground">Posamično</th>
                      <th className="text-left p-4 font-semibold text-primary">Pregled + (po želji) naročnina</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-secondary/20" : "bg-background"}
                      >
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
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg"
                  >
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
                Začnite z jasnostjo: pregled, načrt, in potem odločitev.
              </h2>
              <p className="text-xl text-primary font-bold mb-2">150 € celostni MindCare pregled</p>
              <p className="text-muted-foreground mb-6">
                Nato se sami odločite, ali želite nadaljevati z naročnino 69 € / mesec.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <NavLink to="/kontakt">
                  <Brain className="mr-2 h-5 w-5" />
                  Rezerviraj MindCare pregled
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
