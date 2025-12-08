import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  AlertCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UltrazvokScitnicePage = () => {
  const faqItems = [
    {
      question: "Ali je potrebna priprava na ultrazvok ščitnice?",
      answer: "Ne, za ultrazvok ščitnice ni potrebna nobena posebna priprava."
    },
    {
      question: "Kdaj je potrebna punkcija ščitnice?",
      answer: "Le pri specifičnih ultrazvočnih kriterijih – zdravnik vam svetuje med pregledom glede na velikost, strukturo in značilnosti vozliča."
    },
    {
      question: "Ali ultrazvok ščitnice boli?",
      answer: "Ne, preiskava je popolnoma neboleča in traja približno 10–15 minut."
    },
    {
      question: "Kako pogosto je potreben kontrolni ultrazvok?",
      answer: "Odvisno od izvida – pri normalnem izvidu enkrat letno preventivno, pri vozličih pa po navodilih zdravnika (3–12 mesecev)."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški, brez napotnice."
    }
  ];

  const indications = [
    "Občutek pritiska v vratu",
    "Sum na vozlič v ščitnici",
    "Motnje ščitničnih hormonov",
    "Povečana ščitnica (struma)",
    "Družinska obremenjenost z rakom ščitnice",
    "Preventivni pregled"
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
    "name": "Ultrazvok ščitnice",
    "description": "Ultrazvočna preiskava za oceno velikosti, strukture in sprememb ščitnice.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Vrat - ščitnica"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok ščitnice Ljubljana",
    "description": "Samoplačniški ultrazvok ščitnice v Ljubljani brez čakanja.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Endokrinologija"
  };

  return (
    <Layout>
      <Helmet>
        <title>Ultrazvok ščitnice Ljubljana – samoplačniško brez čakanja | Asantis</title>
        <meta 
          name="description" 
          content="Ultrazvok ščitnice v Ljubljani – pregled vozličev, cist, strukture ščitnice. Samoplačniško, brez napotnice. Termini v 48 urah. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok ščitnice ljubljana, vozlič ščitnica uz, pregled ščitnice samoplačniško, ultrazvok ščitnice cena" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-scitnice" />
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
              Ultrazvok ščitnice Ljubljana – samoplačniško
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Natančna ultrazvočna ocena ščitnice za zgodnje odkrivanje vozličev, cist in drugih sprememb. 
              Brez napotnice, brez čakanja.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte pregled ščitnice
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
                Termini v 48 urah
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
              Kaj pregledamo z ultrazvokom ščitnice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Z ultrazvokom ščitnice ocenimo velikost žleze, njeno strukturo, prisotnost vozličev, 
              cist, vnetnih sprememb ter morebitne sumljive spremembe, ki zahtevajo nadaljnjo obravnavo.
            </p>
            
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zakaj je ultrazvok ščitnice pomemben?</h3>
                    <p className="text-muted-foreground">
                      Ultrazvok ščitnice omogoča najbolj natančno oceno strukture žleze in zgodnje 
                      odkrivanje sumljivih sprememb. Pravočasna diagnostika je ključna za uspešno zdravljenje.
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
              Kdaj priporočamo ultrazvok ščitnice?
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
              Cenik ultrazvoka ščitnice
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok ščitnice</span>
                    <span className="text-primary font-bold">60–90 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok ščitnice + bezgavke vratu</span>
                    <span className="text-primary font-bold">80–110 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground font-medium">Kontrolni ultrazvok ščitnice</span>
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
              Pogosta vprašanja – ultrazvok ščitnice
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
              Rezervirajte pregled ščitnice
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Brez čakanja, brez napotnice. Takojšnji izvid.
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

export default UltrazvokScitnicePage;
