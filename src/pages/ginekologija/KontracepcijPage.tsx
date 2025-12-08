import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  CheckCircle,
  Phone,
  Calendar,
  Zap,
  MessageCircle,
  Heart,
  Shield,
  Clock,
  Pill
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout/Layout";

const KontracepcijPage = () => {
  const handleBooking = () => {
    window.location.href = "/kontakt";
  };

  const hormonalMethods = [
    {
      title: "Kontracepcijske tabletke",
      benefits: [
        "urejajo menstruacijski cikel",
        "zmanjšujejo PMS in bolečine",
        "lahko izboljšajo akne",
        "visoka učinkovitost ob rednem jemanju"
      ]
    },
    {
      title: "Hormonski maternični vložek (IUS)",
      benefits: [
        "zaščita 3–5 let",
        "zelo nizka hormonska obremenitev",
        "primeren za ženske po porodu in tiste z močnimi menstruacijami"
      ]
    },
    {
      title: "Vaginalni obroček",
      benefits: [
        "uporaba 1× mesečno",
        "stabilen hormonski nivo",
        "enostavna uporaba"
      ]
    },
    {
      title: "Kontracepcijski obliž",
      benefits: [
        "menjava 1× tedensko",
        "primeren za ženske, ki pozabljajo na tabletke"
      ]
    }
  ];

  const nonHormonalMethods = [
    {
      title: "Bakarni IUD maternični vložek",
      benefits: [
        "zaščita 5–10 let",
        "brez hormonov",
        "primeren za ženske, ki ne želijo hormonskih metod"
      ]
    },
    {
      title: "Kondomi",
      benefits: [
        "zaščita pred nosečnostjo",
        "zaščita pred spolno prenosljivimi boleznimi",
        "priporočeni vsem ženskam – kot dodatna zaščita"
      ]
    }
  ];

  const comparisonTable = [
    { method: "Tabletke", effectiveness: "★★★★☆", duration: "dnevno", pros: "ureja cikel, manj PMS", cons: "potrebno redno jemanje" },
    { method: "Hormonski IUD", effectiveness: "★★★★★", duration: "3–5 let", pros: "minimalni hormoni, manj krvavitev", cons: "vstavljanje zahteva poseg" },
    { method: "Bakarni IUD", effectiveness: "★★★★☆", duration: "5–10 let", pros: "brez hormonov", cons: "lahko poveča krvavitev" },
    { method: "Obliž", effectiveness: "★★★★☆", duration: "tedensko", pros: "stabilni hormoni", cons: "možni kožni odzivi" },
    { method: "Vaginalni obroček", effectiveness: "★★★★☆", duration: "mesečno", pros: "enostavna uporaba", cons: "občutljivost pri partnerju" },
    { method: "Kondomi", effectiveness: "★★★☆☆", duration: "ob uporabi", pros: "zaščita pred SPB", cons: "ni najvišja zaščita" }
  ];

  const whenToConsult = [
    "pri začetku spolnega življenja",
    "po porodu",
    "ob spremembah menstruacijskega cikla",
    "ob neželenih stranskih učinkih obstoječe kontracepcije",
    "pri PMS, bolečih menstruacijah ali aknah",
    "ob načrtovanju nosečnosti v prihodnosti",
    "pri nevarnosti za trombozo ali drugih zdravstvenih tveganjih"
  ];

  const processSteps = [
    "Pogovor in anamneza",
    "Pregled pri ginekologu",
    "Pregled tveganj in prilagoditev izbire",
    "Predstavitev možnosti",
    "Predpis kontracepcije ali vstavitev IUD"
  ];

  const pricing = [
    { service: "Svetovanje o kontracepciji + pregled", price: "80–120 €" },
    { service: "Vstavitev hormonskega IUD", price: "150–250 € + cena vložka" },
    { service: "Vstavitev bakrenega IUD", price: "150–200 € + cena vložka" },
    { service: "Menjava IUD", price: "100–150 €" },
    { service: "Kontrola po 6 tednih", price: "vključena / 40 €" }
  ];

  const ctaBenefits = [
    "manj bolečin",
    "bolj urejen cikel",
    "manj PMS",
    "več nadzora nad plodnostjo",
    "več varnosti in manj stresa"
  ];

  const faqs = [
    {
      question: "Katera kontracepcija je najvarnejša?",
      answer: "Najvišjo zaščito nudita hormonski in bakreni IUD. Izbira pa je odvisna od zdravstvenega stanja in načina življenja."
    },
    {
      question: "Ali hormonska kontracepcija redi?",
      answer: "Povečanje teže je zelo redko. Pogosteje opazimo bolj urejene cikle, manj PMS in stabilnejše hormone."
    },
    {
      question: "Ali je IUD primeren za ženske, ki še niso rodile?",
      answer: "Da, ob ustrezni izbiri vložka je varen in dobro prenosljiv."
    },
    {
      question: "Kako hitro po prenehanju tabletke lahko zanosim?",
      answer: "Plodnost se običajno povrne v 1–3 mesecih, včasih tudi prej."
    },
    {
      question: "Kaj če pozabim vzeti tabletko?",
      answer: "Odvisno od zamude. Ob večji zamudi priporočamo dodatno zaščito (kondom) in po potrebi nujno kontracepcijo."
    },
    {
      question: "Ali IUD boli?",
      answer: "Vstavitev lahko povzroči krče, ki trajajo nekaj minut. Večina žensk ocenjuje izkušnjo kot znosno."
    },
    {
      question: "Ali IUD vpliva na dojenje?",
      answer: "Hormonski IUD (levonorgestrel) je varen v času dojenja."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis - Kontracepcija Ljubljana",
    "description": "Varna in prilagojena kontracepcija v Ljubljani. Svetovanje, pregled, hormonski in bakreni IUD, tabletke, obliž, vaginalni obroček.",
    "url": "https://asantis.si/ginekologija/kontracepcija",
    "telephone": "+386 1 XXX XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dunajska cesta",
      "addressLocality": "Ljubljana",
      "postalCode": "1000",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Gynecology"
  };

  return (
    <Layout>
      <Helmet>
        <title>Kontracepcija Ljubljana – tabletke, IUD, svetovanje | Asantis Ginekologija</title>
        <meta 
          name="description" 
          content="Varna in prilagojena kontracepcija v Ljubljani. Svetovanje, pregled, hormonski in bakreni IUD, tabletke, obliž, vaginalni obroček. Strokovni ginekologi Asantis." 
        />
        <meta 
          name="keywords" 
          content="kontracepcija, kontracepcija ljubljana, kontracepcijske tabletke, IUD, spirala, hormonska kontracepcija, bakrena spirala, ginekolog ljubljana, kontracepcijsko svetovanje" 
        />
        <link rel="canonical" href="https://asantis.si/ginekologija/kontracepcija" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Kontracepcija – Asantis Ginekologija Ljubljana
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Kontracepcija – strokovno svetovanje in izbira prave zaščite
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Varna, individualno prilagojena kontracepcija za ženske vseh starosti
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Iskanje prave metode kontracepcije ni enostavno. Vsaka ženska ima svoje potrebe, zdravstveno ozadje, 
              hormonsko stanje, življenjski slog in načrte za prihodnost. V Asantis ginekološkem centru vam zagotovimo 
              celostno svetovanje, pregled in izbiro najprimernejše kontracepcije, ki je varna, učinkovita in prilagojena vašemu zdravju.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite se
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
                <MessageCircle className="mr-2 h-5 w-5" />
                Pošljite vprašanje
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1">Google ocena 4.9</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>Brez čakalne dobe</span>
              <span className="hidden sm:inline">|</span>
              <span>Izkušeni ginekologi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              »Ne veste, katera kontracepcija je najboljša za vas?«
            </h2>
            <p className="text-muted-foreground mb-8">
              Veliko žensk se znajde pred istim vprašanjem. Številne metode, različni učinki, stranski učinki, dvomi o varnosti…
              Pri nas prejmete jasno razlago, pregled in priporočilo.
            </p>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Lahko nadaljujete z branjem ali nam pošljete vaše težave – pripravimo vam rešitev
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleBooking} variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Pošljite nam simptome
                  </Button>
                  <Button onClick={handleBooking}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Naročite se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Knowledge Bomb */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Ali veste?</p>
                    <p className="text-muted-foreground mb-4">
                      Vsaj 150 žensk vsak mesec v Ljubljani išče strokovno pomoč pri izbiri kontracepcije.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Najpogostejši razlogi: neželeni stranski učinki, želja po menjavi metode, neurejene menstruacije, 
                      bolečine, PMS, neredni cikli ali načrtovanje nosečnosti v prihodnosti.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Which Method Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Katera kontracepcija je prava zame?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vsaka metoda ima svoje prednosti in omejitve. Na podlagi pregleda in vaših želja vam priporočimo najbolj primeren pristop.
          </p>

          {/* Hormonal Methods */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Pill className="h-5 w-5 text-primary" />
              Hormonske metode
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {hormonalMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-3">{method.title}</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Non-Hormonal Methods */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Nehormonske metode
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {nonHormonalMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-3">{method.title}</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Tabela metod kontracepcije (primerjava)
          </h2>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-semibold text-foreground">Metoda</th>
                  <th className="text-left p-4 font-semibold text-foreground">Učinkovitost</th>
                  <th className="text-left p-4 font-semibold text-foreground">Trajanje</th>
                  <th className="text-left p-4 font-semibold text-foreground">Prednosti</th>
                  <th className="text-left p-4 font-semibold text-foreground">Slabosti</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                    <td className="p-4 text-foreground font-medium">{row.method}</td>
                    <td className="p-4 text-primary">{row.effectiveness}</td>
                    <td className="p-4 text-muted-foreground">{row.duration}</td>
                    <td className="p-4 text-muted-foreground">{row.pros}</td>
                    <td className="p-4 text-muted-foreground">{row.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Consult */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kdaj priporočamo svetovanje za kontracepcijo?
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {whenToConsult.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kako poteka pregled?
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Cenik kontracepcije
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-semibold text-foreground">Storitev</th>
                      <th className="text-right p-4 font-semibold text-foreground">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                        <td className="p-4 text-foreground">{item.service}</td>
                        <td className="p-4 text-right font-semibold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Ne odlašajte – prava kontracepcija izboljša kakovost življenja
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm mb-8">
            {ctaBenefits.map((benefit, index) => (
              <span key={index} className="flex items-center gap-1 text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                {benefit}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleBooking} className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Naročite se na pregled
            </Button>
            <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
              <MessageCircle className="mr-2 h-5 w-5" />
              Pošljite vprašanje ginekologu
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            FAQ – najpogostejša vprašanja
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KontracepcijPage;
