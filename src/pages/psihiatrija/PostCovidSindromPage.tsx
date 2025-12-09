import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Brain, Calendar, AlertCircle, Activity } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const PostCovidSindromPage = () => {
  const symptoms = [
    "kognitivna megla",
    "utrujenost",
    "nizko razpoloženje",
    "anksioznost",
    "motnje spanja"
  ];

  const treatmentIncludes = [
    "celosten psihiatrični pregled",
    "personaliziran načrt",
    "prehranski in življenjski pristopi",
    "nadzor napredka"
  ];

  const faqItems = [
    {
      question: "Ali so težave po COVID-u normalne?",
      answer: "Da, zelo pogoste – in dobro odzivne na zdravljenje."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Post COVID sindrom – utrujenost, kognitivna megla, tesnoba | Asantis</title>
        <meta name="description" content="Celostna pomoč pri dolgotrajnih simptomih po prebolelem COVID-u. Utrujenost, kognitivna megla, anksioznost, motnje spanja." />
        <meta name="keywords" content="post covid sindrom zdravljenje, utrujenost po covid, kognitivna megla" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Activity className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Psihiatrija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Post COVID sindrom – utrujenost, kognitivna megla, tesnoba
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Celostna pomoč pri dolgotrajnih simptomih po prebolelem COVID-u.
            </h2>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite obravnavo
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
                  Pri <strong>10–30 % ljudi</strong> se po COVID-u pojavijo dolgotrajne psihične in kognitivne težave.
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
          <h2 className="text-3xl font-bold text-center mb-12">Obravnava</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {treatmentIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
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
                Naročite obravnavo post-COVID simptomov.
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

export default PostCovidSindromPage;
