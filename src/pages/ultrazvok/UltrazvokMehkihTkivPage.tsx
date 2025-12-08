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

const UltrazvokMehkihTkivPage = () => {
  const faqItems = [
    {
      question: "Ali z ultrazvokom vidite tudi kosti?",
      answer: "Ne, kosti ocenjujemo z RTG. Ultrazvok je namenjen pregledu mišic, kit, vezi in mehkih tkiv."
    },
    {
      question: "Ali ultrazvok mehkih tkiv boli?",
      answer: "Ne, preiskava je popolnoma neboleča."
    },
    {
      question: "Kako dolgo traja preiskava?",
      answer: "Običajno 10–20 minut, odvisno od obsega pregleda."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški, brez napotnice."
    }
  ];

  const indications = [
    "Bolečine v mišici ali tetivi",
    "Sum na natrgano mišico",
    "Zatrdline v podkožju",
    "Poškodbe pri športu",
    "Povečane bezgavke",
    "Hematomi po poškodbah"
  ];

  const structures = [
    "Mišice",
    "Kite in tetive",
    "Vezi",
    "Podkožje",
    "Bezgavke",
    "Hematomi in rupture"
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
    "name": "Ultrazvok mehkih tkiv",
    "description": "Ultrazvočna diagnostika mišic, kit, vezi, podkožja in bezgavk.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Mehka tkiva"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok mehkih tkiv Ljubljana",
    "description": "Samoplačniški ultrazvok mehkih tkiv v Ljubljani.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Radiologija"
  };

  return (
    <Layout>
      <Helmet>
        <title>Ultrazvok mehkih tkiv Ljubljana – mišice, kite, vezi | Asantis</title>
        <meta 
          name="description" 
          content="Ultrazvok mehkih tkiv v Ljubljani – pregled mišic, kit, vezi, podkožja. Športne poškodbe, zatrdline. Samoplačniško, brez napotnice. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok mehkih tkiv ljubljana, uz mišice kite, športne poškodbe uz pregled, ultrazvok vezi, ultrazvok bezgavk" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-mehkih-tkiv" />
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
              Samoplačniški ultrazvok
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ultrazvok mehkih tkiv – mišice, kite, vezi
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Natančna diagnostika poškodb mišic, kit, vezi, podkožja in bezgavk. 
              Idealno za športne poškodbe in sum na rupture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte UZ mehkih tkiv
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Brez napotnice
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Takojšnji izvid
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Športne poškodbe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Kaj je ultrazvok mehkih tkiv?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Ultrazvok mehkih tkiv omogoča pregled mišic, kit, vezi, podkožja, bezgavk, 
              hematomov, ruptur in sprememb po poškodbah. Je nepogrešljiv pri diagnostiki športnih poškodb.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Strukture, ki jih pregledamo</h3>
                  <ul className="space-y-2">
                    {structures.map((structure, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {structure}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Najpogostejše indikacije</h3>
                  <ul className="space-y-2">
                    {indications.map((indication, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {indication}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Cenik ultrazvoka mehkih tkiv
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok mehkih tkiv (ena regija)</span>
                    <span className="text-primary font-bold">50–80 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok mehkih tkiv (več regij)</span>
                    <span className="text-primary font-bold">80–120 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground font-medium">Kontrolni ultrazvok</span>
                    <span className="text-primary font-bold">40–60 €</span>
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Pogosta vprašanja – ultrazvok mehkih tkiv
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-secondary/30 rounded-lg border border-border px-6"
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
              Rezervirajte ultrazvok mehkih tkiv
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hitra diagnostika športnih poškodb in sprememb mehkih tkiv.
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

export default UltrazvokMehkihTkivPage;
