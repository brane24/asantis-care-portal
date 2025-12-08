import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle,
  Phone,
  Calendar,
  Activity
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UltrazvokVenPage = () => {
  const faqItems = [
    {
      question: "Ali ultrazvok ven pokaže tudi trombozo?",
      answer: "Da – z dopplerskim načinom natančno ocenimo pretok in morebitne zapore v venah."
    },
    {
      question: "Ali preiskava boli?",
      answer: "Ne, ultrazvok ven je popolnoma neboleč."
    },
    {
      question: "Kako dolgo traja preiskava?",
      answer: "Običajno 15–30 minut, odvisno od obsega pregleda."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški, brez napotnice."
    },
    {
      question: "Ali je potrebna priprava?",
      answer: "Ne, posebna priprava ni potrebna."
    }
  ];

  const indications = [
    "Vidne krčne žile",
    "Težke ali utrujene noge",
    "Otekline nog",
    "Nočne krče",
    "Po preboleli trombozi",
    "Bolečine v nogah"
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
    "name": "Ultrazvok venskega ožilja",
    "description": "Doppler ultrazvok ven za diagnostiko krčnih žil in tromboz.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Vene nog"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok ven Ljubljana",
    "description": "Samoplačniški ultrazvok ven in krčnih žil v Ljubljani.",
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
        <title>Ultrazvok ven / krčnih žil Ljubljana – Doppler | Asantis</title>
        <meta 
          name="description" 
          content="Ultrazvok ven in krčnih žil v Ljubljani – Doppler diagnostika, pregled pretoka, tromboza. Samoplačniško, brez napotnice. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok ven krčne žile, doppler ven ljubljana, pregled krčnih žil uz, ultrazvok nog, tromboza ultrazvok" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-ven" />
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
              <Activity className="h-4 w-4" />
              Doppler ultrazvok
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ultrazvok venskega ožilja – krčne žile
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Natančna Doppler diagnostika krčnih žil, venskega pretoka in morebitnih zapor. 
              Nujna preiskava pri diagnostiki krčnih žil in tromboz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte UZ ven
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Doppler diagnostika
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
              Kaj pregledamo z ultrazvokom ven?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Ocenimo pretok v venah nog, prisotnost povratnega toka (refluksa), zapore ali vnetij. 
              Pregled je nujen pri diagnostiki krčnih žil in sum na globoko vensko trombozo.
            </p>
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Kdaj na pregled?
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
              Cenik ultrazvoka ven
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Doppler ultrazvok ven (obe nogi)</span>
                    <span className="text-primary font-bold">80–120 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Doppler ultrazvok ven (ena noga)</span>
                    <span className="text-primary font-bold">60–80 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground font-medium">Kontrolni ultrazvok</span>
                    <span className="text-primary font-bold">50–70 €</span>
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
              Pogosta vprašanja – ultrazvok ven
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
              Rezervirajte ultrazvok ven
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Natančna diagnostika krčnih žil in venskega pretoka.
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

export default UltrazvokVenPage;
