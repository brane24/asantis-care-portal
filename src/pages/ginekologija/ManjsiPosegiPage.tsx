import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  CheckCircle,
  Phone,
  Calendar,
  Clock,
  Shield,
  Users,
  Heart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout/Layout";

const ManjsiPosegiPage = () => {
  const handleBooking = () => {
    window.location.href = "/kontakt";
  };

  const spiralaBenefits = [
    "zaščita 3–8 let, odvisno od modela",
    "minimalno boleč poseg",
    "takojšnja vrnitev k vsakodnevnim aktivnostim",
    "priporočljivo tudi za nerodile ženske (odvisno od modela)"
  ];

  const polipIndications = [
    "neredne krvavitve",
    "krvavitve po spolnem odnosu",
    "sumljive spremembe na UZ ali ginekološkem pregledu"
  ];

  const konizacijaBenefits = [
    "hitra diagnostika in poseg",
    "sodobna LLETZ (zanka) metoda",
    "celjenje brez zapletov in skrbna kontrola po posegu"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Ginekološki pregled + UZ + posvet",
      description: "Najprej preverimo stanje maternice, materničnega vratu, prisotnost polipa, vnetij ali kontraindikacij za poseg."
    },
    {
      step: "2",
      title: "Izvedba posega",
      description: "Večina posegov traja 5–20 minut. Uporabljamo lokalno anestezijo, da je poseg prijeten in neboleč."
    },
    {
      step: "3",
      title: "Navodila po posegu",
      description: "Izogibanje večjim naporom 24–48 h, spolni odnosi po 3–7 dneh (odvisno od vrste posega), kontrolni pregled po potrebi."
    }
  ];

  const pricing = [
    { service: "Vstavitev spirale (bakrena ali hormonska – spirala ni vključena v ceno)", price: "od 90 €" },
    { service: "Menjava ali odstranitev spirale", price: "70–90 €" },
    { service: "Odstranitev polipa", price: "120–160 €" },
    { service: "Konizacija (LLETZ)", price: "320–450 €" },
    { service: "Ginekološki pregled + UZ (če je potreben pred posegom)", price: "70–85 €" }
  ];

  const benefits = [
    { icon: Clock, text: "Brez čakalnih dob" },
    { icon: Users, text: "Specialist z dolgoletnimi izkušnjami" },
    { icon: Shield, text: "Natančna diagnostika + sodobni ambulantni posegi" },
    { icon: Heart, text: "Diskretno, udobno in brez bolečin" }
  ];

  const faqs = [
    {
      question: "Ali je vstavitev spirale boleča?",
      answer: "Večina pacientk opisuje poseg kot neprijeten le nekaj sekund. Uporabimo lokalno anestezijo, zato je poseg dobro prenosljiv."
    },
    {
      question: "Kako dolgo traja celjenje po konizaciji?",
      answer: "Celjenje traja 4–6 tednov. Običajno ni bolečin, lahko pa se pojavi blag izcedek."
    },
    {
      question: "Ali lahko spiralo dobim, če še nisem rodila?",
      answer: "Da, obstajajo modeli, ki so primerni za nerodile ženske. O tem vas seznanimo na pregledu."
    },
    {
      question: "Ali je odstranitev polipa nevarna?",
      answer: "Ne, gre za rutinski ambulantni poseg. Vzorec pošljemo na histološko analizo."
    },
    {
      question: "Kako hitro po posegu se lahko vrnem na delo?",
      answer: "Večinoma isti dan ali naslednji dan – odvisno od vrste posega."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, posegi pri nas potekajo samoplačniško."
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

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Manjši ginekološki posegi",
    "description": "Vstavitev spirale, odstranitev polipa in konizacija – hitro, varno in brez čakalnih dob v Ljubljani.",
    "procedureType": "SurgicalProcedure",
    "howPerformed": "Ambulantni posegi z lokalno anestezijo.",
    "preparation": "Ginekološki pregled in UZ pred posegom.",
    "bodyLocation": "Maternica, maternični vrat"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis - Manjši ginekološki posegi Ljubljana",
    "description": "Vstavitev spirale, odstranitev polipa in konizacija – hitro, varno in brez čakalnih dob.",
    "url": "https://asantis.si/ginekologija/manjsi-posegi",
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
        <title>Manjši ginekološki posegi – spirala, polipi, konizacija | Asantis Ljubljana</title>
        <meta 
          name="description" 
          content="Vstavitev spirale, odstranitev polipa in konizacija – hitro, varno in brez čakalnih dob. Samoplačniški ginekološki posegi v Ljubljani. Naročite se še danes." 
        />
        <meta 
          name="keywords" 
          content="ginekološki posegi, spirala vstavitev, odstranitev polipa, konizacija, LLETZ, ginekolog Ljubljana, samoplačniško, HPV spremembe, CIN, polip maternice, hormonska spirala, bakrena spirala" 
        />
        <link rel="canonical" href="https://asantis.si/ginekologija/manjsi-posegi" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalProcedureSchema)}
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
              Manjši ginekološki posegi – Asantis Ljubljana
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Manjši ginekološki posegi – hitro, varno in samoplačniško v Ljubljani
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Brez čakanja. Brez napotnice. Brez bolečin po posegu.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              V Asantis ginekološkem centru izvajamo najpogostejše manjše ginekološke posege: 
              vstavitev materničnega vložka (spirale), odstranitev polipov materničnega vratu ali maternice ter konizacijo. 
              Posegi so kratki, minimalno invazivni, z najnovejšo tehnologijo in izkušenim specialistom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite se na posvet
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
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
              <span>Izkušeni specialisti</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kaj obravnavamo?
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Spirala */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  1) Vstavitev materničnega vložka (spirale)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Spirala je eden najučinkovitejših metod dolgoročne kontracepcije. 
                  Izvajamo vstavitev bakrene spirale, hormonske spirale in odstranitev ter menjavo obstoječe spirale.
                </p>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Prednosti:</h4>
                  <ul className="space-y-2">
                    {spiralaBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Polip */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  2) Odstranitev polipa materničnega vratu ali maternice
                </h3>
                <p className="text-muted-foreground mb-4">
                  Polipi so benigni izrastki, ki lahko povzročajo krvavitve ali izcedek. 
                  Odstranitev je hitri ambulantni poseg, običajno traja 5–10 minut.
                </p>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Kdaj je poseg potreben?</h4>
                  <ul className="space-y-2">
                    {polipIndications.map((indication, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{indication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Konizacija */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  3) Konizacija materničnega vratu (LLETZ)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Konizacija je poseg, pri katerem se odstrani del materničnega vratu zaradi sprememb celic (CIN 2–3), 
                  ki jih pogosto povzročajo visoko rizični HPV sevi.
                </p>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Zakaj pri nas?</h4>
                  <ul className="space-y-2">
                    {konizacijaBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Potek obravnave
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Cenik manjših ginekoloških posegov
          </h2>
          
          <div className="max-w-3xl mx-auto">
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
                        <td className="p-4 text-right font-semibold text-primary whitespace-nowrap">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Končni strošek je odvisen od vrste spirale in morebitnih dodatnih preiskav.
            </p>
          </div>
        </div>
      </section>

      {/* Why Asantis */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Zakaj Asantis?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Možnost posveta še isti teden
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            FAQ – Pogosta vprašanja
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

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Naročite se na posvet ali poseg
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hitro, varno in brez čakalnih vrst. Termin že ta teden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleBooking} className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Rezervirajte termin
            </Button>
            <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Pokličite nas
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManjsiPosegiPage;
