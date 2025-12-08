import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Clock, 
  Heart, 
  Shield, 
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Stethoscope,
  FileCheck,
  Activity
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout/Layout";

const PreventivniPregledPage = () => {
  const handleBooking = () => {
    window.location.href = "/kontakt";
  };

  const checkupIncludes = [
    {
      icon: Stethoscope,
      title: "Ginekološki pregled",
      description: "Klinični pregled zunanjih in notranjih spolnih organov"
    },
    {
      icon: FileCheck,
      title: "PAP bris",
      description: "Odvzem brisa materničnega vratu za zgodnje odkrivanje sprememb"
    },
    {
      icon: Activity,
      title: "Ultrazvok male medenice",
      description: "Slikovna diagnostika maternice, jajčnikov in okolice"
    },
    {
      icon: Heart,
      title: "Pregled dojk",
      description: "Tipni pregled dojk za odkrivanje morebitnih sprememb"
    }
  ];

  const whenToVisit = [
    "Ste spolno aktivni in niste bili pregledani več kot leto dni",
    "Imate neredne, boleče ali obilne menstruacije",
    "Opažate neobičajen izcedek, srbečico ali neprijeten vonj",
    "Načrtujete nosečnost ali spremembo kontracepcije",
    "Ste v obdobju menopavze",
    "Želite preveriti splošno zdravje reproduktivnih organov"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Pogovor in anamneza",
      description: "Pogovorimo se o vaših težavah, menstrualnem ciklu, kontracepciji in družinski zgodovini."
    },
    {
      step: "2",
      title: "Klinični pregled",
      description: "Ginekolog opravi pregled zunanjih in notranjih spolnih organov ter dojk."
    },
    {
      step: "3",
      title: "PAP bris",
      description: "Odvzamemo bris materničnega vratu za citološko analizo."
    },
    {
      step: "4",
      title: "Ultrazvočni pregled",
      description: "Opravimo UZ pregled maternice, jajčnikov in male medenice."
    },
    {
      step: "5",
      title: "Izvidi in priporočila",
      description: "Prejmete izvide in priporočila za nadaljnjo skrb za zdravje."
    }
  ];

  const pricing = [
    { service: "Preventivni ginekološki pregled (posvet + pregled)", price: "od 65 €" },
    { service: "Preventivni pregled + PAP bris", price: "od 85 €" },
    { service: "Preventivni pregled + PAP + UZ male medenice", price: "od 120 €" },
    { service: "Kontrolni pregled", price: "50 €" },
    { service: "Paket za članice Asantis", price: "-15 % popust" }
  ];

  const faqs = [
    {
      question: "Kako dolgo traja pregled?",
      answer: "Običajno traja pregled 20–30 minut, vključno s posvetom, kliničnim pregledom in morebitnim ultrazvokom."
    },
    {
      question: "Ali je pregled boleč?",
      answer: "Ne. Pregled je praviloma neboleč. Uporabljamo nežno tehniko in vas sproti seznanjamo s potekom."
    },
    {
      question: "Ali lahko pridem tudi, če sem že opravila pregled pri drugem ginekologu?",
      answer: "Seveda. Pregled pri nas je samostojen, z upoštevanjem vaše zgodovine. Lahko prinesete obstoječe izvide."
    },
    {
      question: "Ali lahko opravim pregled pred cepljenjem proti HPV?",
      answer: "Da, priporočamo ginekološki pregled pred cepljenjem, še posebej če ste spolno aktivni."
    },
    {
      question: "Kaj če mi PAP test pokaže spremembe?",
      answer: "V primeru odstopanj vas o tem natančno obvestimo in skupaj določimo nadaljnje korake – npr. ponovni bris, kolposkopija ali napotitev."
    },
    {
      question: "Kako pogosto naj opravim pregled?",
      answer: "Priporočamo 1x letno, v nekaterih primerih pogosteje (po zdravljenju sprememb, v menopavzi ipd.)."
    },
    {
      question: "Ali lahko pridem kot mlada pacientka (npr. prvi pregled)?",
      answer: "Seveda. Prvi pregled je običajno prilagojen vašemu počutju – pogosto gre le za posvet brez invazivnega pregleda."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne. Preventivni pregled opravite samoplačniško brez napotnice, brez čakalne dobe."
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
    "name": "Preventivni ginekološki pregled",
    "description": "Celovit preventivni ginekološki pregled vključuje klinični pregled, PAP bris, ultrazvok male medenice in pregled dojk.",
    "procedureType": "DiagnosticProcedure",
    "howPerformed": "Pregled izvaja izkušen ginekolog z uporabo sodobne ultrazvočne opreme.",
    "preparation": "Pred pregledom ni posebne priprave. Priporočamo, da ne prihajate med menstruacijo.",
    "followUp": "Po pregledu prejmete izvide PAP brisa v nekaj dneh.",
    "bodyLocation": "Reproduktivni organi"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis - Ginekologija Ljubljana",
    "description": "Preventivni ginekološki pregled brez čakalne dobe. PAP bris, ultrazvok, svetovanje in individualen pristop.",
    "url": "https://asantis.si/ginekologija/preventivni-pregled",
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
        <title>Preventivni ginekološki pregled | Zasebna ginekološka ordinacija Ljubljana</title>
        <meta 
          name="description" 
          content="Preventivni ginekološki pregled brez čakalne dobe. PAP bris, ultrazvok, svetovanje in individualen pristop. Naročite se v Ljubljani!" 
        />
        <meta 
          name="keywords" 
          content="preventivni ginekološki pregled, PAP bris, ginekološki pregled brez čakalne dobe, zasebni ginekolog Ljubljana, pregled materničnega vratu, samoplačniški ginekolog" 
        />
        <link rel="canonical" href="https://asantis.si/ginekologija/preventivni-pregled" />
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
              Brez čakalne dobe – termin že v nekaj dneh
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Preventivni ginekološki pregled – vaše zdravje na prvem mestu
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Celovit preventivni pregled s PAP brisom, ultrazvočno diagnostiko in osebnim svetovanjem. 
              Zgodnje odkrivanje sprememb za vaše zdravje in mir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite preventivni pregled
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
              <span>Brez napotnice</span>
              <span className="hidden sm:inline">|</span>
              <span>Hiter termin</span>
              <span className="hidden sm:inline">|</span>
              <span>Izkušeni ginekologi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              Zakaj je preventivni pregled pomemben?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center leading-relaxed">
                Preventivni ginekološki pregled je ključen za <strong>zgodnje odkrivanje sprememb</strong> na 
                materničnem vratu, jajčnikih in dojkah. Redno spremljanje omogoča <strong>pravočasno ukrepanje</strong> 
                in zmanjšuje tveganje za resnejše bolezni. Pregled je hiter, neboleč in lahko reši življenje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kaj pregled vključuje?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {checkupIncludes.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kdaj opraviti preventivni ginekološki pregled?
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6 text-center">
                  Priporočamo preventivni pregled, če:
                </p>
                <ul className="space-y-3">
                  {whenToVisit.map((item, index) => (
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

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kako poteka pregled?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Cena preventivnega pregleda
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
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Cene so informativne. Možnost vključitve v mesečni paket Asantis.
            </p>
            
            <div className="text-center mt-6">
              <Button onClick={handleBooking}>
                Rezervirajte termin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Pogosta vprašanja (FAQ)
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
            Naročite se na preventivni pregled
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ne odlašajte s skrbjo za svoje zdravje. Rezervirajte termin še danes – brez čakalne dobe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={handleBooking} className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Rezervirajte termin
            </Button>
            <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Pokličite nas
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Asantis medicinski center, Dunajska cesta, Ljubljana</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreventivniPregledPage;
