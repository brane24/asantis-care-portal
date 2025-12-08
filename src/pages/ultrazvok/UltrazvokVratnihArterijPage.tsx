import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  Brain
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UltrazvokVratnihArterijPage = () => {
  const faqItems = [
    {
      question: "Ali se je treba pripraviti na karotidni ultrazvok?",
      answer: "Ne, preiskava je enostavna in ne zahteva posebne priprave."
    },
    {
      question: "Kako dolgo traja preiskava?",
      answer: "Preiskava traja 10–15 minut."
    },
    {
      question: "Ali ultrazvok boli?",
      answer: "Ne, preiskava je popolnoma neboleča."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški, brez napotnice."
    },
    {
      question: "Kako pogosto je priporočen preventivni pregled?",
      answer: "Pri osebah nad 50 let z dejavniki tveganja (hipertenzija, holesterol) enkrat letno ali po navodilih zdravnika."
    }
  ];

  const indications = [
    "Visok krvni pritisk",
    "Povišan holesterol",
    "Glavoboli, omotice",
    "Šumenje v ušesih",
    "Preventivno po 50. letu",
    "Sum na aterosklerozo"
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

  const medicalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Ultrazvok vratnih arterij - karotidni Doppler",
    "description": "Doppler ultrazvok karotidnih in vertebralnih arterij za oceno tveganja za možgansko kap.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Vratne arterije"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Karotidni ultrazvok Ljubljana",
    "description": "Samoplačniški karotidni Doppler ultrazvok v Ljubljani.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Angiologija"
  };

  return (
    <Layout>
      <Helmet>
        <title>Ultrazvok vratnih arterij Ljubljana – karotidni Doppler | Asantis</title>
        <meta 
          name="description" 
          content="Karotidni Doppler ultrazvok v Ljubljani – ocena tveganja za možgansko kap, pregled zožitev, oblog. Samoplačniško, brez napotnice. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok vratnih arterij, karotidni doppler ljubljana, pregled ožilja vrat uz, karotidne arterije, ateroskleroza vrat" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-vratnih-arterij" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              Preventivni pregled
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ultrazvok vratnih arterij – karotidni Doppler
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ključna preiskava za oceno tveganja za možgansko kap. Ocenimo karotidne in vertebralne arterije, 
              hitrost pretoka, zožitve in obloge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte karotidni UZ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                10–15 minut
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Brez napotnice
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Takojšnji izvid
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we examine */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Kaj pregledamo s karotidnim ultrazvokom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Ocenimo karotidne in vertebralne arterije, hitrost pretoka, morebitne zožitve (stenoze) in 
              aterosklerotične obloge. Gre za ključno preiskavo za oceno tveganja za možgansko kap.
            </p>
            
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Brain className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zakaj je preiskava pomembna?</h3>
                    <p className="text-muted-foreground">
                      Karotidni ultrazvok omogoča zgodnje odkrivanje aterosklerotičnih sprememb, še preden 
                      povzročijo simptome. Pravočasno odkrivanje zožitev lahko prepreči možgansko kap.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Priporočamo pri:
            </h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {indications.map((indication, index) => (
                <Card key={index} className="border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{indication}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Cenik karotidnega ultrazvoka
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Karotidni Doppler ultrazvok</span>
                    <span className="text-primary font-bold">80–120 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Karotidni + vertebralne arterije</span>
                    <span className="text-primary font-bold">100–140 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground font-medium">Kontrolni ultrazvok</span>
                    <span className="text-primary font-bold">60–80 €</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 Za člane naročniških paketov Asantis veljajo dodatni popusti do 20%.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Pogosta vprašanja – karotidni ultrazvok
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg border border-border px-6"
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

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Rezervirajte karotidni ultrazvok
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Preventivni pregled za oceno tveganja za možgansko kap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte termin
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                01 / XXX XX XX
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UltrazvokVratnihArterijPage;
