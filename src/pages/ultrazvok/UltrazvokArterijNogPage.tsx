import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  AlertTriangle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UltrazvokArterijNogPage = () => {
  const faqItems = [
    {
      question: "Ali lahko odkrijete zaporo arterije?",
      answer: "Da, ultrazvok zelo natančno pokaže prekrvavitev in morebitne zapore ali zožitve arterij."
    },
    {
      question: "Ali preiskava boli?",
      answer: "Ne, ultrazvok arterij je popolnoma neboleč."
    },
    {
      question: "Kako dolgo traja preiskava?",
      answer: "Običajno 20–30 minut."
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
    "Bolečina v mečih pri hoji (klavdikacija)",
    "Diabetiki",
    "Kadilci",
    "Hladna stopala",
    "Slabo celjenje ran na nogah",
    "Sum na periferno arterijsko bolezen"
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
    "name": "Ultrazvok arterij spodnjih okončin",
    "description": "Doppler ultrazvok arterij nog za oceno prekrvavitve in diagnostiko periferne arterijske bolezni.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Arterije nog"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok arterij nog Ljubljana",
    "description": "Samoplačniški Doppler ultrazvok arterij nog v Ljubljani.",
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
        <title>Ultrazvok arterij nog Ljubljana – Doppler diagnostika | Asantis</title>
        <meta 
          name="description" 
          content="Ultrazvok arterij nog v Ljubljani – Doppler diagnostika prekrvavitve, periferna arterijska bolezen. Samoplačniško, brez napotnice. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok arterij nog, doppler arterij ljubljana, periferna arterijska bolezen pregled, prekrvavitev nog, klavdikacija" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-arterij-nog" />
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
              Ultrazvok arterij spodnjih okončin
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Natančna Doppler diagnostika prekrvavitve nog za zgodnje odkrivanje zožitev 
              in periferne arterijske bolezni.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite UZ arterij nog
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

      {/* Why important */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Zakaj je ultrazvok arterij nog pomemben?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Ocenimo prekrvavitev nog, stopnjo zožitev (stenoz) in tveganje za periferne arterijske bolezni. 
              Zgodnje odkrivanje omogoča pravočasno ukrepanje in preprečuje resne zaplete.
            </p>
            
            <Card className="border-orange-300 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-800">Posebno ogrožene skupine</h3>
                    <p className="text-orange-700">
                      Diabetiki in kadilci imajo bistveno višje tveganje za periferno arterijsko bolezen. 
                      Redni preventivni pregledi so ključni za zgodnje odkrivanje sprememb.
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
              Indikacije za pregled
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
              Cenik ultrazvoka arterij nog
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Doppler ultrazvok arterij (obe nogi)</span>
                    <span className="text-primary font-bold">100–140 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Doppler ultrazvok arterij (ena noga)</span>
                    <span className="text-primary font-bold">70–100 €</span>
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
              Pogosta vprašanja – ultrazvok arterij nog
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
              Naročite se na ultrazvok arterij nog
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Preventivni pregled za zgodnje odkrivanje motenj prekrvavitve.
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

export default UltrazvokArterijNogPage;
