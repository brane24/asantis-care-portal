import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CircleDot } from "lucide-react";

const ZobniPlusPage = () => {
  const faqItems = [
    {
      question: "Ali se moram po pregledu vključiti v naročnino?",
      answer:
        "Ne. Celostni preventivni zobozdravstveni pregled je samostojna storitev. Po pregledu se sami odločite, ali želite nadaljevati z naročnino.",
    },
    {
      question: "Kaj če potrebujem več posegov?",
      answer:
        "Člani imajo nižje cene in prednostne termine. Posegi so dolgoročno načrtovani, kar pomeni manj presenečenj in nižje skupne stroške.",
    },
    {
      question: "Kaj vključuje mesečna naročnina?",
      answer:
        "Letni pregled, kontrolni posvet po indikaciji, prioritetno naročanje, opomnike ter stalni −15 % popust na vse zobozdravstvene storitve.",
    },
    {
      question: "Zakaj je 3D sken tako pomemben?",
      answer:
        "Omogoča natančno spremljanje sprememb skozi čas in preprečuje nepotrebne ali prezgodnje posege. Je osnova za dolgoročno načrtovanje.",
    },
    {
      question: "Kaj če trenutno nimam težav?",
      answer:
        "Odlično. Namen paketa je, da tako tudi ostane – z rednim spremljanjem in zgodnjim odkrivanjem morebitnih sprememb.",
    },
    {
      question: "Ali je čiščenje zobnega kamna vključeno?",
      answer:
        "Da. V naročnino je vključeno 1× letno profesionalno čiščenje zobnega kamna (po strokovni indikaciji).",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Celostni preventivni zobozdravstveni pregled",
    description:
      "Celostni preventivni zobozdravstveni pregled z RTG/CT po indikaciji, 3D skenom in dolgoročnim načrtom zdravljenja.",
    offers: [
      {
        "@type": "Offer",
        name: "Celostni preventivni zobozdravstveni pregled",
        price: "120",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Naročnina Zobni Plus",
        price: "29",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          unitText: "mesec",
        },
      },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>
          Zobni Plus – Celostni preventivni zobozdravstveni pregled | ASANTIS
          Ljubljana
        </title>
        <meta
          name="description"
          content="Celostni preventivni zobozdravstveni pregled (120 €) z možnostjo nadaljevanja v naročnino 29 €/mesec. Dolgoročno spremljanje zdravja zob."
        />
        <link rel="canonical" href="https://asantis.si/paketi/zobni-plus" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-6">🦷 Zobni Plus</Badge>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Celostni preventivni zobozdravstveni pregled
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Sistematična ocena stanja vaših zob in dlesni – z jasnim načrtom
            naprej in možnostjo dolgoročnega spremljanja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                Naroči pregled <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Pregled</h3>
            <p className="text-muted-foreground">
              Celosten pregled + RTG/CT po indikaciji + 3D sken.
            </p>
            <p className="font-semibold mt-2">120 €</p>
          </div>

          <div>
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Načrt</h3>
            <p className="text-muted-foreground">
              Jasna slika stanja in priporočila za naprej.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Naročnina (po želji)</h3>
            <p className="text-muted-foreground">
              Dolgoročno spremljanje, prioritetni dostop in nižje cene.
            </p>
            <p className="font-semibold mt-2">29 € / mesec</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Pogosta vprašanja
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-hero border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <CircleDot className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Začnite z jasnim pregledom stanja
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pregled je samostojna odločitev. Naročnina je možnost – ne
              obveznost.
            </p>
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                Naroči pregled <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default ZobniPlusPage;
