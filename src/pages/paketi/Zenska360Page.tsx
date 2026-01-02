import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Phone, Star, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
const Zenska360Page = () => {
  const stepOneServices = ["Celostni ginekološki pregled", "Ginekološki ultrazvok", "Klinični pregled dojk", "Ultrazvok dojk", "Preventivna ocena tveganj", "Osebni zdravstveni načrt (kaj, kdaj, zakaj)"];
  const subscriptionBenefits = ["Redno spremljanje in kratki posveti", "Hitrejši in prednostni termini", "Preventivni opomniki (PAP, UZ, kontrole)", "Koordinacija obravnave v centru", "–20 % na ginekološke in dermatološke posege", "Brez vezave – prekineš kadarkoli"];
  const faqItems = [{
    q: "Ali je pregled obvezen za naročnino?",
    a: "Da. Naročnina je možna šele po opravljenem celostnem preventivnem pregledu, saj ta postavi osnovo za varno in smiselno spremljanje."
  }, {
    q: "Ali lahko opravim samo pregled brez naročnine?",
    a: "Da. Pregled je samostojna storitev in popolnoma uporaben tudi brez nadaljevanja v naročniškem modelu."
  }, {
    q: "Kaj pomeni –20 % na posege?",
    a: "Članice imajo trajni popust na samoplačniške ginekološke in dermatološke posege ter prednostno obravnavo."
  }, {
    q: "Ali je naročnina obvezna ali vezana?",
    a: "Ne. Naročnina ni obvezna in nima vezave."
  }];
  return <Layout>
      <Helmet>
        <title>Ženska 360 | Celostni preventivni ginekološki pregled | Asantis</title>
        <meta name="description" content="Celostni preventivni ginekološki pregled z UZ dojk in jasnim zdravstvenim načrtom. Samostojen pregled 220 €. Opcijska naročnina 39 €/mesec z –20 % na posege." />
      </Helmet>

      <section className="bg-gradient-hero py-20">
        <div className="container max-w-4xl text-center">
          <div className="flex gap-2 justify-center mb-6">
            <Badge>Ženska 360</Badge>
            <Badge variant="outline">Samostojni pregled</Badge>
            <Badge variant="outline">Brez vezave</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Celostni preventivni ginekološki pregled z načrtom
          </h1>

          <p className="text-xl text-muted-foreground mb-8">To ni klasičen pregled. To je sistematična ocena vašega zdravja in tveganj – z jasnim načrtom za naprej.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                Rezerviraj pregled — 220 €
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+38631876104">
                <Phone className="mr-2 h-5 w-5" />
                Pokliči nas
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          KORAK 1 · Celostni preventivni pregled
        </h2>

        <Card>
          <CardContent className="p-6">
            <ul className="grid md:grid-cols-2 gap-3">
              {stepOneServices.map(item => <li key={item} className="flex gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>)}
            </ul>

            <p className="text-sm text-muted-foreground mt-6">
              Pregled je samostojna, zaključena storitev in je smiseln tudi brez
              nadaljevanja v naročniškem modelu.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            KORAK 2 · Nadaljevanje z naročnino (opcijsko)
          </h2>
          <p className="text-muted-foreground mb-10">
            Po opravljenem pregledu se lahko odločite, ali želite nadaljevati v
            naročniškem modelu za dolgoročno spremljanje.
          </p>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">
                39 € / mesec
              </h3>

              <ul className="space-y-3 text-left">
                {subscriptionBenefits.map(item => <li key={item} className="flex gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Zakaj ženske izberejo ta model
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {["Najprej jasna slika, potem odločitev", "Brez vezave in brez pritiska", "–20 % na posege za članice"].map(item => <div key={item} className="flex gap-2 items-center">
              <Star className="h-5 w-5 text-primary" />
              <span>{item}</span>
            </div>)}
        </div>
      </section>

      <section className="container py-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Pogosta vprašanja
        </h2>

        <Accordion type="single" collapsible>
          {faqItems.map((item, i) => <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </section>
    </Layout>;
};
export default Zenska360Page;