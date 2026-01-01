import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import {
  Check,
  Shield,
  Phone,
  Star,
  Sparkles,
  Activity,
  ThermometerSun,
  ArrowRight,
  CalendarClock,
} from "lucide-react";
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
  // --- ACTIVATION (1×) ---
  const activationServices = [
    {
      title: "Ginekologija",
      icon: Shield,
      items: ["Ginekološki pregled", "PAP + HPV test", "UZ rodil (maternica + jajčniki)"],
    },
    {
      title: "Dojke",
      icon: Shield,
      items: ["UZ dojk", "Klinični pregled dojk", "Ocena osebnega tveganja za rak dojke"],
    },
    {
      title: "Dermatologija",
      icon: Sparkles,
      items: [
        "Osnovni dermatološki pregled",
        "Pregled znamenj + pigmentacij",
        "Identifikacija tveganih sprememb",
      ],
    },
    {
      title: "Hormoni & Ščitnica",
      icon: Activity,
      items: [
        "Klinična hormonska ocena (PMS, neredni cikli, perimenopavza/menopavza)",
        "UZ ščitnice",
        "Ocena tveganja za Hashimoto, hipo/hipertiroidizem",
      ],
    },
    {
      title: "Načrtovanje",
      icon: ThermometerSun,
      items: ["Osebni letni preventivni načrt", "Digitalni karton + opozorila", "Smiselni intervali pregledov"],
    },
  ];

  // --- SUBSCRIPTION (monthly) ---
  const subscriptionBenefits = [
    {
      category: "Ginekologija",
      items: [
        "Nujni termin v 48h (vnetje, bolečina, dvom)",
        "Letni ginekološki UZ (po planu)",
        "Mesečni posvet (e-posvet ali video) za simptome, izvide, vprašanja",
      ],
    },
    {
      category: "Dojke",
      items: ["Letni ultrazvok dojk (po planu)", "Klinični pregled po potrebi"],
    },
    {
      category: "Dermatologija",
      items: [
        "Letni dermatološki pregled",
        "Kontrola sumljivih sprememb",
        "Posvet ob spremembah (slika → ocena → odločitev)",
      ],
    },
    {
      category: "Hormoni",
      items: [
        "Letna hormonska ocena",
        "Vodenje simptomov (PMS, cikel, perimenopavza/menopavza)",
        "Mesečni check-in (kratko, praktično)",
      ],
    },
    {
      category: "Ščitnica",
      items: ["Letni UZ ščitnice (po planu)", "Klinična ocena + spremljanje po potrebi"],
    },
    {
      category: "Članski popusti – posegi",
      items: [
        "–20 % na kolposkopijo",
        "–20 % na odstranjevanje znamenj",
        "–20 % na manjše ginekološke posege",
        "–20 % na dermatološke posege",
        "Prednostna obravnava pri posegih",
      ],
    },
    {
      category: "Dodatne ugodnosti",
      items: ["Prednostni termini", "Koordinacija obravnave (v istem centru)", "Digitalni nadzor nad intervali preventive"],
    },
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
    { service: "Mesečni posveti", regular: "40–60 €", included: true },
  ];

  const timeline = [
    { step: 1, title: "Rezerviraš termin aktivacije", description: "Takoj prejmeš datum in dostop do kartona." },
    { step: 2, title: "Aktivacija = ključni pregledi + ocena tveganj", description: "V enem obisku pokrijemo glavne ženske rizike in postavimo plan." },
    { step: 3, title: "Prejmeš osebni letni načrt", description: "Kaj spremljamo, kdaj in zakaj — prilagojeno starosti, anamnezi in simptomom." },
    { step: 4, title: "Od drugega meseca naprej", description: "39 € / mesec — posveti, nujni termini, letne kontrole, opomniki in koordinacija." },
  ];

  // Yearly flow (Men360 logika: baseline → spremljanje)
  const yearlyFlow = [
    {
      period: "1. mesec (aktivacija)",
      focus: "Baseline + tveganja + plan",
      items: [
        "Ginekološki pregled + PAP/HPV + UZ rodil",
        "UZ dojk + klinični pregled",
        "Dermatološki pregled (znamenja)",
        "UZ ščitnice + hormonska ocena",
        "Osebni letni plan + opomniki",
      ],
      note: "Največ vrednosti dobiš takoj: baseline + tveganja + jasen plan.",
    },
    {
      period: "2.–12. mesec (naročnina)",
      focus: "Spremljanje + hiter dostop",
      items: [
        "Mesečni check-in (e-posvet/video) za simptome, izvide, vprašanja",
        "Nujni termin v 48h, če se pojavi težava",
        "Letni kontrolni UZ (ginekološki / dojke / ščitnica) po planu",
        "Dermato kontrola sumljivih sprememb in dokumentacija",
        "–20 % na posege + prednostna obravnava pri posegih",
      ],
      note: "Naročnina ni 'neomejeno vseh pregledov vsak mesec', ampak urejen sistem preventive + hitra pot, ko jo rabiš.",
    },
  ];

  const trustPoints = [
    "Brez čakanja",
    "PAP/HPV razložimo hitro in jasno",
    "UZ dojk v istem centru",
    "Dermatolog in ginekolog delujeta usklajeno",
    "Sistem opomnikov (da plan res izvedeš)",
    "Brez vezave — prekineš kadarkoli",
    "–20 % na posege za članice",
  ];

  const faqItems = [
    {
      question: "Ali so VSI pregledi v aktivaciji res vključeni v ceno 159 €?",
      answer:
        "Da. Aktivacija vključuje: ginekološki pregled + PAP/HPV + UZ rodil, UZ dojk + klinični pregled dojk, osnovni dermatološki pregled ter UZ ščitnice in hormonsko oceno.",
    },
    {
      question: "Ali naročnina pomeni, da lahko vsak mesec opravim vse preglede?",
      answer:
        "Ne. Naročnina je namenjena spremljanju, mesečnim posvetom, nujnim terminom in letnim kontrolam po osebnem planu. To ohranja kakovost, termine in vzdržnost sistema za vse članice.",
    },
    {
      question: "Kako hitro dobim termin?",
      answer:
        "Za nujne ginekološke težave v 48 urah. Za aktivacijo običajno v 3–7 dneh (odvisno od zasedenosti).",
    },
    {
      question: "Kako delujejo mesečni posveti?",
      answer:
        "Gre za kratek video ali e-posvet za vprašanja, spremembe simptomov, interpretacijo izvidov ali odločitev o nadaljnjih korakih.",
    },
    {
      question: "Ali lahko opravim vse preglede ob prvem obisku?",
      answer:
        "Da — to je namen aktivacije: v enem obisku postavimo baseline in tvoj letni preventivni plan.",
    },
    {
      question: "Kaj, če kak pregled pri meni ni potreben?",
      answer:
        "Zdravnik opravi oceno tveganja in plan prilagodi. Cilj je smiselna preventiva, ne 'več storitev'.",
    },
    {
      question: "Ali je dermatolog res vključen?",
      answer:
        "Da, paket vključuje letni dermatološki pregled in kontrole kožnih sprememb po potrebi.",
    },
    {
      question: "Kaj pa ščitnica in hormoni?",
      answer:
        "Vključena sta UZ ščitnice + hormonska klinična ocena ob aktivaciji ter letno spremljanje po planu in potrebi.",
    },
    {
      question: "Ali lahko paket prekličem kadarkoli?",
      answer: "Da. Paket nima vezave.",
    },
    {
      question: "Ali lahko ponovno aktiviram paket?",
      answer:
        "Da. Če se ponovno vključiš po prekinitvi, se aktivacija ponovno obračuna (ker ponovno postavimo baseline).",
    },
    {
      question: "Kaj ni vključeno in kako je s popusti?",
      answer:
        "Posegi (npr. kolposkopija, odstranitve sprememb) niso 'vključeni', vendar imajo članice stalni –20 % popust in prednostno obravnavo.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Ženska360 | Ginekologija, dojke, koža, hormoni | Asantis</title>
        <meta
          name="description"
          content="Celostni ženski preventivni paket: ginekologija, dojke, koža, hormoni, ščitnica. Aktivacija 159 € + 39 €/mesec. Brez vezave. –20 % na posege za članice."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Badge className="bg-pink-100 text-pink-700 border-pink-200">🎀 Ženska360</Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">Brez vezave</Badge>
              <Badge className="bg-muted text-foreground border-muted-foreground/20">Aktivacija + naročnina</Badge>
              <Badge className="bg-background border-primary/20">–20 % na posege</Badge>
            </div>

            <p className="text-lg text-muted-foreground mb-4">
              Ginekologija • Dojke • Koža • Hormoni • Ščitnica
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Preventiva, ki ni "en pregled na leto" — ampak sistem
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Najprej naredimo <span className="font-semibold text-foreground">aktivacijo (baseline + tveganja)</span>, nato pa
              mesečno skrbimo za <span className="font-semibold text-foreground">spremljanje, nujne termine in letne kontrole</span>{" "}
              za <span className="font-semibold text-foreground">39 €/mesec</span>. Članice imajo{" "}
              <span className="font-semibold text-foreground">–20 % na posege</span>.
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
                  Pokliči nas
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Aktivacija vključuje: ginekolog + PAP/HPV + UZ rodil + UZ dojk + dermato pregled + UZ ščitnice + hormonska ocena
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Zakaj ta paket?</h2>
          <p className="text-center text-muted-foreground mb-12">
            Za ženske 25–65, ki želijo urejeno preventivo + hitro pot, ko se pojavi težava.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              "odkriti raka materničnega vratu na najzgodnejši stopnji (PAP/HPV)",
              "redno spremljanje dojk z UZ + kliničnim pregledom",
              "varno spremljanje kožnih sprememb (melanom)",
              "urejene hormone, ciklus, perimenopavzo/menopavzo",
              "pregled ščitnice",
              "hitre rešitve ob vnetjih, bolečinah ali dvomih",
              "sistem brez čakanja, z opomniki in jasnim planom",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-lg italic">"Preventiva ni dogodek. Je proces."</p>
              <p className="text-muted-foreground mt-2">
                Aktivacija postavi baseline, naročnina pa skrbi, da se plan res izvede (in da imaš hitro pot, ko jo rabiš).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Annual flow */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <CalendarClock className="inline-block h-4 w-4 mr-2" />
                Časovna porazdelitev
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Kako razporedimo storitve skozi leto</h2>
              <p className="text-muted-foreground">
                Najprej baseline, potem spremljanje + planirane kontrole (ne "vse vsak mesec").
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yearlyFlow.map((block) => (
                <Card key={block.period} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">{block.focus}</p>
                        <h3 className="font-semibold text-lg">{block.period}</h3>
                      </div>
                      <Badge className="bg-background border-muted-foreground/20">
                        {block.period.includes("aktivacija") ? "1×" : "mesečno"}
                      </Badge>
                    </div>

                    <ul className="space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-muted-foreground mt-4">{block.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                * Če imaš višje tveganje (npr. družinska anamneza), plan prilagodimo — dodatni posegi pa so na voljo z –20 %.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it is NOT */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kaj paket NI (in zakaj je to dobro zate)</h2>
            <p className="text-muted-foreground">
              Ženska360 ni "neomejen buffet pregledov" — je pametno zasnovan preventivni sistem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">❌ NI neomejenih pregledov vsak mesec</h3>
                <p className="text-sm text-muted-foreground">
                  To bi vodilo v nepotrebne preiskave, čakalne vrste in slabšo obravnavo.
                  Namesto tega imaš jasen letni plan in hiter dostop, ko je res potrebno.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">❌ NI "prodaje storitev"</h3>
                <p className="text-sm text-muted-foreground">
                  Naš cilj ni več posegov, ampak pravočasna preventiva.
                  Preglede prilagodimo tvojemu tveganju, ne ceniku.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">❌ NI vezave ali drobnega tiska</h3>
                <p className="text-sm text-muted-foreground">
                  Paket lahko kadarkoli prekineš. Če se odločiš za ponovno vključitev,
                  se aktivacija ponovno izvede — brez kazni, brez pasti.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">✅ JE sistem, ki dela</h3>
                <p className="text-sm text-muted-foreground">
                  Aktivacija → osebni plan → spremljanje → hitra pot, ko jo rabiš.
                  Zato lahko ohranimo visoko kakovost, kratke roke in dostopno ceno.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activation */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Plača se 1×</Badge>
              <h2 className="text-3xl font-bold mb-4">Kaj vključuje AKTIVACIJA — 159 €</h2>
              <p className="text-muted-foreground">
                Ob aktivaciji opravimo ključne preglede + postavimo tvoj letni preventivni plan.
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
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
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

      {/* Subscription */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mesečna naročnina — 39 € / mesec</h2>
            <p className="text-muted-foreground">Dostop, spremljanje, nujni termini in letne kontrole po planu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriptionBenefits.map((benefit) => (
              <Card key={benefit.category} className="h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">{benefit.category}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
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

      {/* -20% section */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Članice Ženska360 imajo –20 % na posege</h2>
            <p className="text-muted-foreground mb-8">
              Ko si v sistemu, nisi "nova stranka", ampak članica — zato imaš stalno ugodnejše pogoje in prednost pri obravnavi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-primary mt-0.5" />Kolposkopija</li>
                    <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-primary mt-0.5" />Odstranitev znamenj</li>
                    <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-primary mt-0.5" />Manjši ginekološki posegi</li>
                    <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-primary mt-0.5" />Dermatološki posegi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20">
                <CardContent className="p-6">
                  <p className="font-semibold mb-2">Zakaj to delamo?</p>
                  <p className="text-sm text-muted-foreground">
                    Ker redne članice že poznamo, imamo dokumentacijo, izvide in kontekst.
                    To pomeni hitrejšo, varnejšo in učinkovitejšo obravnavo.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              * Popust velja za samoplačniške posege in se ne sešteva z drugimi akcijami.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
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
                    {comparisonData.map((row) => (
                      <TableRow key={row.service}>
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
          <h2 className="text-3xl font-bold text-center mb-12">Kako poteka</h2>

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

          <Card className="mt-10 bg-background border-muted-foreground/20">
            <CardContent className="p-6">
              <p className="font-semibold mb-1">Pomembno:</p>
              <p className="text-sm text-muted-foreground">
                Naročnina ni "neomejeno vseh pregledov", ampak membership model:{" "}
                <span className="font-medium">dostop + spremljanje + planirane kontrole + nujna pot</span>.
                Zato lahko držimo kakovost, kratke roke in ceno fer za vse članice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zakaj ženske izberejo nas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 p-4 bg-background rounded-lg">
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
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Začni z aktivacijo — 159 €</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              V enem obisku postavimo baseline (dojke, maternični vrat, koža, hormoni, ščitnica) in nato skozi leto izvajamo planirano spremljanje.
              Članice imajo tudi –20 % na posege.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  Začni z aktivacijo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">Postani članica — 39 €/mesec</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Zenska360Page;
