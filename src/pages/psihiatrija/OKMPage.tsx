import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Brain, Calendar, AlertCircle, RefreshCcw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const OKMPage = () => {
  const symptoms = [
    "vsiljive, ponavljajoče misli",
    "kompulzivna vedenja (umivanje, preverjanje, urejanje…)",
    "intenzivna tesnoba, če ritual ni izveden"
  ];

  const treatmentMethods = [
    "psihiatrični pregled",
    "CBT terapija (z izpostavitvijo in preprečevanjem ritualov – ERP)",
    "po potrebi zdravila",
    "dolgoročni program za stabilizacijo"
  ];

  const faqItems = [
    {
      question: "Ali se OKM lahko popolnoma odpravi?",
      answer: "Simptomi se lahko močno zmanjšajo ali popolnoma umirijo z ustrezno terapijo."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Obsesivno-kompulzivna motnja (OKM/OCD) – zdravljenje Ljubljana | Asantis</title>
        <meta name="description" content="Učinkovito zdravljenje obsesivno-kompulzivne motnje (OKM/OCD). Vsiljive misli in rituali so ozdravljivi z ustreznim pristopom." />
        <meta name="keywords" content="obsesivno kompulzivna motnja, OCD zdravljenje Ljubljana, vsiljive misli pomoč" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <RefreshCcw className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Psihiatrija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Obsesivno-kompulzivna motnja – učinkovito zdravljenje OKM
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Vsiljive misli in rituali so ozdravljivi z ustreznim pristopom.
            </h2>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                <Calendar className="mr-2 h-5 w-5" />
                Začnite zdravljenje
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Knowledge Bomb */}
      <section className="container py-12">
        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Ali veste?</h3>
                <p className="text-lg text-muted-foreground">
                  OCD prizadene <strong>2–3 % populacije</strong>, pri večini pa simptomi trajajo več let pred prvim obiskom specialista.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Symptoms */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Simptomi</h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Zdravljenje</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {treatmentMethods.map((method, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{method}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <Card className="bg-gradient-hero border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Začnite zdravljenje OKM in si povrnite nadzor nad življenjem.
              </h2>
              <Button size="lg" asChild>
                <NavLink to="/kontakt">Naročite se na pregled</NavLink>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pogosta vprašanja</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default OKMPage;
