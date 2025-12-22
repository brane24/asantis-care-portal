import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Brain, Calendar, AlertCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet";
const DepresijaAnksioznostPage = () => {
  const depressionSymptoms = ["izguba energije, volje, veselja", "motnje spanja", "negativne misli", "težave s koncentracijo"];
  const anxietySymptoms = ["stalna napetost", "panični napadi", "hitri srčni utrip", "nemir, strahovi"];
  const treatmentMethods = ["individualna obravnava", "pogovorna terapija + po potrebi farmakoterapija", "učenje tehnik za zmanjšanje anksioznosti", "TMS kot inovativna možnost za depresijo"];
  const services = [{
    name: "Pregled za depresijo/anksioznost",
    price: "120–150 €"
  }, {
    name: "Kontrola",
    price: "80–90 €"
  }, {
    name: "TMS terapija",
    price: "po dogovoru"
  }];
  const faqItems = [{
    question: "Kako vem, ali imam depresijo ali anksioznost?",
    answer: "Psihiater opravi poglobljeno diagnostiko."
  }, {
    question: "Ali je zdravljenje varno?",
    answer: "Da, poteka po sodobnih smernicah."
  }];
  return <Layout>
      <Helmet>
        <title>Depresija in anksioznost – zdravljenje Ljubljana | Asantis</title>
        <meta name="description" content="Učinkovito zdravljenje depresije in anksioznosti v Ljubljani. Dokazano učinkoviti pristopi, prvi pregled v nekaj dneh. Panični napadi, tesnoba, strahovi." />
        <meta name="keywords" content="depresija zdravljenje Ljubljana, anksioznost simptomi, panični napadi pomoč, psihiatrična pomoč Ljubljana" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Psihiatrija
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Depresija in anksioznost – učinkovito zdravljenje v Ljubljani
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Dokazano učinkoviti pristopi. Prvi pregled v nekaj dneh.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Depresija in anksioznost sta najpogostejši duševni motnji v Sloveniji – in hkrati zelo dobro  odzivni na zdravljenje, sploh če se k zdravljenju pristopi pravočasno.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte termin
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
                  Več kot <strong>20 % Slovencev</strong> letno doživi epizodo depresije ali anksioznosti, večina pa začne zdravljenje prepozno.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary text-center">Depresija</h3>
                  <ul className="space-y-3">
                    {depressionSymptoms.map((symptom, index) => <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary text-center">Anksioznost</h3>
                  <ul className="space-y-3">
                    {anxietySymptoms.map((symptom, index) => <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Način zdravljenja</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {treatmentMethods.map((method, index) => <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{method}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Cenik</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Storitev</TableHead>
                      <TableHead className="text-right">Cena</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service, index) => <TableRow key={index}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell className="text-right font-semibold">{service.price}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Rezervirajte termin in začnite okrevanje.
            </h2>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">Naročite se na pregled</NavLink>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pogosta vprašanja</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>;
};
export default DepresijaAnksioznostPage;