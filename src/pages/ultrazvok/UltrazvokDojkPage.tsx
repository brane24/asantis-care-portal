import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
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

const UltrazvokDojkPage = () => {
  const faqItems = [
    {
      question: "Ali ultrazvok dojk zamenja mamografijo?",
      answer: "Ne – ultrazvok dopolnjuje mamografijo. Pri ženskah nad 45 let je priporočljivo kombinirati obe preiskavi za najbolj zanesljivo diagnostiko."
    },
    {
      question: "Ali ultrazvok dojk boli?",
      answer: "Ne, preiskava je popolnoma neboleča in neinvazivna."
    },
    {
      question: "Kdaj je najboljši čas za pregled?",
      answer: "Optimalno v prvi polovici menstrualnega ciklusa (7.–14. dan), ko je žlezno tkivo najmanj občutljivo."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški, brez napotnice."
    },
    {
      question: "Kako pogosto je priporočen preventivni pregled?",
      answer: "Pri ženskah 30–45 let enkrat letno, pri ženskah nad 45 let v kombinaciji z mamografijo po navodilih zdravnika."
    }
  ];

  const indications = [
    "Tipna zatrdlina v dojki",
    "Bolečine v dojki",
    "Družinska obremenjenost z rakom dojk",
    "Spremljanje znanih sprememb",
    "Preventivni pregledi (30–45 let)",
    "Gosto žlezno tkivo"
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
    "name": "Ultrazvok dojk",
    "description": "Ultrazvočna diagnostika za zgodnje odkrivanje sprememb v dojkah.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
    "bodyLocation": "Dojke"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok dojk Ljubljana",
    "description": "Samoplačniški ultrazvok dojk v Ljubljani brez čakanja.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Ginekologija"
  };

  return (
    <Layout>
      <Helmet>
        <title>Ultrazvok dojk Ljubljana – samoplačniško brez čakanja | Asantis</title>
        <meta 
          name="description" 
          content="Ultrazvok dojk v Ljubljani – zgodnje odkrivanje zatrdlin, cist, sprememb. Samoplačniško, brez napotnice. Termini v 48 urah. Asantis." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok dojk ljubljana, uz dojke cena, pregled dojk samoplačniško, ultrazvok dojk preventivni, zatrdlina v dojki" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-dojk" />
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
              <Heart className="h-4 w-4" />
              Preventivni pregled
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ultrazvok dojk – samoplačniško
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ključna diagnostična preiskava za zgodnje odkrivanje sprememb v dojkah. 
              Idealna za mlajše ženske in ženske z gostim žleznim tkivom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite UZ dojk
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
                Neboleče
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
              Zakaj je ultrazvok dojk ključnega pomena?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Ultrazvok dojk je primeren pri mlajših ženskah, gostem žleznem tkivu in za natančno 
              razlikovanje med cistami in solidnimi spremembami. Omogoča zgodnje odkrivanje, ko je 
              zdravljenje še najučinkovitejše.
            </p>
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
              Cenik ultrazvoka dojk
            </h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok dojk (obojestransko)</span>
                    <span className="text-primary font-bold">60–90 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Ultrazvok dojk + pazduhe</span>
                    <span className="text-primary font-bold">80–110 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground font-medium">Kontrolni ultrazvok</span>
                    <span className="text-primary font-bold">50–70 €</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 Za članice naročniških paketov Asantis veljajo dodatni popusti do 20%.
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
              Pogosta vprašanja – ultrazvok dojk
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
              Naročite se na ultrazvok dojk
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Preventiva je ključ do zdravja. Brez čakanja, brez napotnice.
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

export default UltrazvokDojkPage;
