import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Clock, 
  Shield, 
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  Heart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UltrazvokTrebuhaPage = () => {
  const faqItems = [
    {
      question: "Kako se pripravim na ultrazvok trebuha?",
      answer: "Najbolje je biti 6 ur tešče, piti pa lahko vodo. Tako je pregled žolčnika bolj zanesljiv."
    },
    {
      question: "Ali ultrazvok trebuha boli?",
      answer: "Ne, preiskava je popolnoma neboleča in neinvazivna."
    },
    {
      question: "Ali vidite želodec in črevo?",
      answer: "Delno, ker zrak v prebavilih omejuje vidnost. Za podrobnejši pregled črevesja se uporablja kolonoskopija."
    },
    {
      question: "Kako dolgo traja preiskava?",
      answer: "Ultrazvok trebuha traja 10–20 minut."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški, brez napotnice in brez čakanja."
    }
  ];

  const indications = [
    "Bolečine v trebuhu",
    "Sum na žolčne kamne",
    "Slabost, napenjanje, prebavne težave",
    "Bolečine v ledvenem predelu",
    "Povišani jetrni encimi",
    "Sledenje cistam, tumorjem, maščobni jetri (steatoza)"
  ];

  const organs = [
    "Jetra",
    "Žolčnik",
    "Trebušna slinavka",
    "Vranica",
    "Ledvice",
    "Sečila",
    "Večje žile v trebuhu"
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
    "name": "Ultrazvok trebuha",
    "description": "Neboleča, neinvazivna preiskava za oceno jeter, žolčnika, trebušne slinavke, vranice, ledvic in sečil.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Trebuh",
    "preparation": "6 ur tešče pred preiskavo"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok trebuha Ljubljana",
    "description": "Samoplačniški ultrazvok trebuha v Ljubljani brez čakanja in napotnice.",
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
        <title>Ultrazvok trebuha Ljubljana – samoplačniško brez čakanja | Asantis</title>
        <meta 
          name="description" 
          content="Ultrazvok trebuha v Ljubljani – pregled jeter, žolčnika, ledvic, vranice. Samoplačniško, brez napotnice, termini v 48 urah. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok trebuha ljubljana, uz abdomen cena, samoplačniški ultrazvok trebuha, zdravnik ultrazvok trebuh, ultrazvok jeter, ultrazvok ledvic" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-trebuha" />
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
              Ultrazvok trebuha Ljubljana – samoplačniško brez čakanja
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Neboleča, neinvazivna preiskava za zgodnje odkrivanje sprememb na jetrih, žolčniku, 
              ledvicah, vranici in drugih organih trebuha. Brez napotnice, termini v 48 urah.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite termin
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
                Izkušeni specialisti
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Takojšnji izvid
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
              Kaj je ultrazvok trebuha?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Ultrazvok trebuha je neboleča, neinvazivna preiskava, s katero ocenimo stanje notranjih 
              organov v trebuhu. Omogoča zgodnje odkrivanje sprememb, ki lahko pomembno vplivajo na zdravje.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Organe, ki jih pregledamo
                  </h3>
                  <ul className="space-y-2">
                    {organs.map((organ, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {organ}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Potek preiskave
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      Preiskava traja 10–20 minut
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      Popolnoma varna in neboleča
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      Priporočamo 6 ur tešče
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      Takojšnji rezultat in pogovor z zdravnikom
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Kdaj je potreben ultrazvok trebuha?
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

      {/* Knowledge Bomb */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/20">
              <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Ali veste?</h3>
              <p className="text-lg text-muted-foreground">
                Vsak mesec v Ljubljani več kot <strong className="text-primary">350 ljudi</strong> opravi 
                ultrazvok trebuha zaradi bolečin ali preventivno. Zgodnje odkrivanje sprememb lahko 
                pomembno vpliva na izid zdravljenja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Cenik ultrazvoka trebuha
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok trebuha (kompletni pregled)</span>
                    <span className="text-primary font-bold">80–120 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ciljani ultrazvok (en organ)</span>
                    <span className="text-primary font-bold">50–70 €</span>
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
              Pogosta vprašanja – ultrazvok trebuha
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
              Naročite se na ultrazvok trebuha
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Brez čakanja, brez napotnice. Termini že v 48 urah.
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

export default UltrazvokTrebuhaPage;
