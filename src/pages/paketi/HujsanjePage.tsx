import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  X, 
  Stethoscope, 
  Brain, 
  Dumbbell, 
  Apple,
  ChevronRight,
  Users,
  Shield,
  Clock,
  Heart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HujsanjePage = () => {
  const faqItems = [
    {
      question: "Ali so zdravila vključena v ceno programa?",
      answer: "Ne. Zdravila (Mounjaro, Wegovy) se doplačajo posebej v lekarni. Program vključuje celotno strokovno obravnavo."
    },
    {
      question: "Zakaj je program naročniški (mesečno)?",
      answer: "Ker hujšanje z GLP terapijo zahteva postopno prilagajanje odmerkov, redno spremljanje učinkov in stranskih pojavov ter dolgoročno spremembo vedenja. Enkraten obisk tega ne more zagotoviti."
    },
    {
      question: "Ali lahko sodelujem brez psihološke podpore?",
      answer: "Ne priporočamo. Psihološki del je ključen za trajen rezultat in preprečevanje ponovnega pridobivanja teže."
    },
    {
      question: "Ali je program primeren, če nimam prekomerne telesne teže?",
      answer: "Ne. Program je namenjen izključno osebam z medicinsko indicirano potrebo po hujšanju."
    },
    {
      question: "Ali lahko terapijo prekinem?",
      answer: "Da. Program lahko kadarkoli prekinete. Pomagamo vam tudi pri varnem izhodu iz terapije."
    },
    {
      question: "Ali bom moral/a jemati zdravila trajno?",
      answer: "Ne nujno. Cilj programa je doseči zdravo telesno težo, stabilizirati navade in postopno zmanjšati ali ukiniti terapijo, kjer je to mogoče."
    },
    {
      question: "Koliko teže lahko izgubim?",
      answer: "Rezultati so individualni. Povprečno 10–20 % telesne teže v nekaj mesecih ob doslednem sledenju programu."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hujšanje – GLP terapija & coaching",
    "description": "Medicinski program za varno, nadzorovano in dolgoročno hujšanje z GLP agonisti, psihološko podporo in prehranskim svetovanjem.",
    "brand": {
      "@type": "Brand",
      "name": "Asantis"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "149",
      "highPrice": "149",
      "offerCount": "1"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Hujšanje – GLP terapija & coaching | Asantis Ljubljana</title>
        <meta 
          name="description" 
          content="Medicinski program za varno hujšanje z GLP agonisti (Mounjaro, Wegovy). Internistični nadzor, psihološka podpora, prehransko svetovanje. Aktivacija 299€ + 149€/mesec." 
        />
        <meta name="keywords" content="hujšanje Ljubljana, GLP terapija, Mounjaro, Wegovy, medicinska izguba teže, debelost zdravljenje" />
        <link rel="canonical" href="https://asantis.si/paketi/hujsanje" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              📍 Ljubljana | Samoplačniško | Specialistična obravnava
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hujšanje – GLP terapija & coaching
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Medicinski program za varno, nadzorovano in dolgoročno hujšanje
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                Prijava v program
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Posvet z internistom
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              "Strukturiran medicinski proces – aktivacija + mesečna naročnina + vaš zdravnik ob strani."
            </p>
          </div>
        </div>
      </section>

      {/* Za koga je program */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Za koga je program?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Za odrasle z prekomerno telesno težo ali debelostjo, ki:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "So že poskusili z dietami in vadbo, brez trajnega uspeha",
                "Imajo pridružene težave (inzulinska rezistenca, visok holesterol, utrujenost, bolečine v sklepih)",
                "Želijo zdravniško voden, varen in učinkovit pristop",
                "Razumejo, da hujšanje ni le zdravilo – ampak proces"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zakaj GLP program */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Zakaj GLP program in ne "samo zdravila"?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              GLP agonisti (Mounjaro, Wegovy) zmanjšujejo apetit in vplivajo na presnovo, vendar:
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 mb-8">
              <div className="space-y-4">
                {[
                  "Brez psihološke podpore, gibanja in prehranskega vodenja",
                  "Brez nadzora odmerkov in stranskih učinkov",
                  "Brez postopnega izhoda iz terapije"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-destructive font-medium">
                … je tveganje za ponovno pridobivanje teže zelo visoko.
              </p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-8 text-center">
              <p className="text-xl font-semibold text-foreground">
                Ta program ni bližnjica – je strukturirana medicinska obravnava.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kaj vključuje program */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Kaj vključuje program
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Medicinska osnova */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Stethoscope className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Medicinska osnova</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Uvodni internistični pregled",
                  "Presoja primernosti za GLP terapijo",
                  "Uvedba terapije (Mounjaro / Wegovy)*",
                  "Redni kontrolni posveti in prilagajanje odmerkov"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">
                * zdravila niso vključena v ceno (doplačilo v lekarni)
              </p>
            </div>

            {/* Psihološka podpora */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Brain className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Psihološka podpora</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Razumevanje čustvenega prenajedanja",
                  "Podpora pri spremembi navad",
                  "Preprečevanje \"yo-yo\" efekta",
                  "Pomoč pri vzdrževanju rezultata po koncu terapije"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gibanje & telo */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Dumbbell className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Gibanje & telo</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Fizioterapevtska presoja",
                  "Program gibanja prilagojen telesni teži in sklepom",
                  "Preprečevanje bolečin in poškodb",
                  "Postopna aktivacija metabolizma"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prehransko svetovanje */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Apple className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Prehransko svetovanje</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Prehranski okvir ob GLP terapiji",
                  "Preprečevanje pomanjkanj hranil",
                  "Priprava na življenje po terapiji"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kako poteka program */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Kako poteka program (v praksi)
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {[
                { step: "1", title: "Uvodni pregled in odločitev o terapiji" },
                { step: "2", title: "Postopna uvedba GLP zdravila" },
                { step: "3", title: "Mesečni kontrolni posveti" },
                { step: "4", title: "Psihološka in gibalna podpora vzporedno" },
                { step: "5", title: "Priprava na zmanjšanje ali prekinitev terapije" },
                { step: "6", title: "Vzdrževanje telesne teže" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-card rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-lg text-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aktivacija */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-4">
                🔑 Enkratna aktivacija
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Aktivacija programa
              </h2>
              <p className="text-lg text-muted-foreground">
                Aktivacija je obvezna in se plača ob vstopu v program.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-10 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">Kaj vključuje aktivacija:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Podroben internistični pregled",
                  "Presoja primernosti za GLP terapijo",
                  "Zdravniška odločitev o uvedbi zdravila",
                  "Razlaga učinkov, tveganj in stranskih pojavov",
                  "Uvodno prehransko svetovanje",
                  "Uvodni psihološki posvet (navade, čustveno hranjenje)",
                  "Fizioterapevtska presoja (gibanje, sklepi, omejitve)",
                  "Individualni načrt hujšanja (zdravilo + vedenje + gibanje)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">⏱ Skupno: več strokovnjakov, več ur obravnave</p>
                <div className="inline-block bg-card rounded-2xl px-8 py-6 shadow-lg">
                  <p className="text-sm text-muted-foreground mb-2">Cena aktivacije</p>
                  <p className="text-4xl font-bold text-primary">299 €</p>
                  <p className="text-sm text-muted-foreground mt-2">enkratno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mesečna naročnina */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                🔁 Tekoča obravnava
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mesečna naročnina
              </h2>
              <p className="text-lg text-muted-foreground">
                Naročnina pokriva vse, kar GLP terapijo naredi učinkovito in dolgoročno.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Kaj vključuje mesečna naročnina:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Redni zdravniški kontrolni posveti",
                  "Prilagajanje odmerkov GLP terapije",
                  "Spremljanje stranskih učinkov",
                  "Psihološka podpora (vzdrževanje navad)",
                  "Prehransko svetovanje po potrebi",
                  "Podpora pri gibanju (usmeritve, nadgradnje)",
                  "Priprava na zmanjšanje ali ukinitev terapije"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-destructive/10 rounded-xl p-4 mb-8 flex items-center gap-3">
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-foreground">Zdravila (Mounjaro / Wegovy) niso vključena – doplačilo v lekarni.</span>
              </div>

              <div className="text-center">
                <div className="inline-block bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl px-10 py-8">
                  <p className="text-sm text-muted-foreground mb-2">Mesečna naročnina</p>
                  <p className="text-5xl font-bold text-primary mb-2">149 €</p>
                  <p className="text-muted-foreground">na mesec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Pogosta vprašanja
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Zakaj Asantis */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Zakaj Asantis?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "Multidisciplinarna medicinska ekipa" },
              { icon: Shield, title: "Varna, nadzorovana terapija" },
              { icon: Clock, title: "Brez hitrih obljub – dolgoročni rezultati" },
              { icon: Heart, title: "Fokus na zdravju, ne le kilogramih" }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="font-medium text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Začnite svojo pot do trajne spremembe
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Aktivacija 299 € + 149 € / mesec. Zdravila se doplačajo posebej.
            </p>
            <Button size="lg" className="text-lg px-10 py-6">
              Prijava v program
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HujsanjePage;
