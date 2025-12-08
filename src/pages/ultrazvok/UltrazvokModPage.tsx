import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UltrazvokModPage = () => {
  const faqItems = [
    {
      question: "Ali ultrazvok mod boli?",
      answer: "Ne, preiskava je popolnoma neboleča."
    },
    {
      question: "Kako dolgo traja ultrazvok testisov?",
      answer: "Preiskava traja 10–15 minut."
    },
    {
      question: "Ali je potrebna priprava?",
      answer: "Ne, posebna priprava ni potrebna."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški, brez napotnice."
    },
    {
      question: "Kdaj so rezultati znani?",
      answer: "Takoj po preiskavi – zdravnik vam pojasni izvid."
    }
  ];

  const conditions = [
    "Bolečina v modu",
    "Sum na torzijo",
    "Ciste ali tumorji",
    "Varikokela (razširjene vene)",
    "Vnetje (epididimitis, orhitis)",
    "Težave s plodnostjo"
  ];

  const symptoms = [
    "Tipna zatrdlina",
    "Boleča moda",
    "Občutek teže ali zatekanje",
    "Povečano modo"
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
    "name": "Ultrazvok mod / testisov",
    "description": "Ultrazvočna diagnostika za oceno stanja mod in epididimisov.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Moda / testisi"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok mod Ljubljana",
    "description": "Samoplačniški ultrazvok mod v Ljubljani brez čakanja.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Urologija"
  };

  return (
    <Layout>
      <Helmet>
        <title>Ultrazvok mod / testisov Ljubljana – samoplačniško | Asantis</title>
        <meta 
          name="description" 
          content="Ultrazvok mod v Ljubljani – diagnostika bolečin, zatrdlin, varikokele, vnetij. Samoplačniško, brez napotnice. Termini v 48 urah. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok mod cena, uz testisov ljubljana, bolečina v modu pregled, ultrazvok testisov, varikokela ultrazvok" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-mod" />
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
              Ultrazvok mod / testisov – samoplačniško
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Hitra in neboleča diagnostika bolečin, zatrdlin, varikokele in drugih sprememb mod. 
              Brez napotnice, termini v 48 urah.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite UZ mod
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
                <Clock className="h-4 w-4 text-primary" />
                10–15 minut
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
              Kaj ocenimo z ultrazvokom mod?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Stanja, ki jih diagnosticiramo</h3>
                  <ul className="space-y-2">
                    {conditions.map((condition, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {condition}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Kdaj se priporočamo?</h3>
                  <ul className="space-y-2">
                    {symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {symptom}
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
              Cenik ultrazvoka mod
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok mod (obojestransko)</span>
                    <span className="text-primary font-bold">60–90 €</span>
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Pogosta vprašanja – ultrazvok mod
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
              Naročite se na ultrazvok mod
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Brez čakanja, brez napotnice. Diskretno in strokovno.
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

export default UltrazvokModPage;
