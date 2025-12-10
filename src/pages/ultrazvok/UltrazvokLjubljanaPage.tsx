import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Activity,
  Clock, 
  Shield, 
  CheckCircle,
  Phone,
  Calendar,
  Stethoscope,
  Heart,
  Waves,
  ArrowRight,
  Zap,
  Users,
  Star
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UltrazvokLjubljanaPage = () => {
  const faqItems = [
    {
      question: "Ali potrebujem napotnico za ultrazvok?",
      answer: "Ne, v Asantis so vsi ultrazvočni pregledi samoplačniški – brez napotnice in brez čakanja."
    },
    {
      question: "Kako hitro dobim termin za ultrazvok?",
      answer: "Termini so pogosto na voljo že isti ali naslednji dan. Povprečna čakalna doba je krajša od 48 ur."
    },
    {
      question: "Koliko časa traja ultrazvočna preiskava?",
      answer: "Večina ultrazvočnih pregledov traja 10–20 minut, odvisno od območja pregleda."
    },
    {
      question: "Ali je ultrazvok boleč?",
      answer: "Ne, ultrazvok je popolnoma neboleča in neinvazivna preiskava brez stranskih učinkov ali sevanja."
    },
    {
      question: "Kdaj prejmem izvid?",
      answer: "Izvid in razlago prejmete takoj po pregledu, na licu mesta."
    },
    {
      question: "Kako se pripravim na ultrazvok?",
      answer: "Priprava je odvisna od vrste pregleda. Za ultrazvok trebuha je priporočljivo 6 ur tešče, za večino drugih pregledov posebna priprava ni potrebna."
    }
  ];

  const ultrasoundServices = [
    {
      title: "Ultrazvok trebuha",
      description: "Pregled jeter, žolčnika, trebušne slinavke, vranice, ledvic, mehurja.",
      conditions: "Vnetja, kamni, zamaščenost jeter, ciste, tumorji, obstrukcije.",
      link: "/ultrazvok/ultrazvok-trebuha",
      icon: Heart
    },
    {
      title: "Ultrazvok ščitnice",
      description: "Pregled strukture ščitnice in bezgavk vratu.",
      conditions: "Vozli, vnetja, povečana žleza, spremembe z malignim potencialom.",
      link: "/ultrazvok/ultrazvok-scitnice",
      icon: Activity
    },
    {
      title: "Ultrazvok testisov (mod)",
      description: "Za bolečine, zatrdline, poškodbe, sum na vnetje ali torzijo.",
      conditions: "Varikokela, hidrokela, epididimitis, tumorji.",
      link: "/ultrazvok/ultrazvok-mod",
      icon: Shield
    },
    {
      title: "Ultrazvok mehkih tkiv",
      description: "Mišice, kite, ligamenti, podkožno tkivo.",
      conditions: "Poškodbe, raztrganine, hematomi, gangliji, hernije.",
      link: "/ultrazvok/ultrazvok-mehkih-tkiv",
      icon: Waves
    },
    {
      title: "Ultrazvok dojk",
      description: "Za spremembe v dojkah, kontrolne preglede, bolečino ali zatrdline.",
      conditions: "Ciste, solidne spremembe, fibroadenomi, spremljanje.",
      link: "/ultrazvok/ultrazvok-dojk",
      icon: Heart
    },
    {
      title: "Ultrazvok ven",
      description: "Pregled venskega sistema nog.",
      conditions: "Krčne žile, globoka venska tromboza, refluks, vensko popuščanje.",
      link: "/ultrazvok/ultrazvok-ven",
      icon: Activity
    },
    {
      title: "Ultrazvok arterij nog",
      description: "Pregled arterijskega pretoka v spodnjih okončinah.",
      conditions: "Periferna arterijska bolezen, stenoze, zožitve, klavdikacija.",
      link: "/ultrazvok/ultrazvok-arterij-nog",
      icon: Heart
    },
    {
      title: "Ultrazvok vratnih arterij",
      description: "Karotidni doppler za oceno možganskega pretoka.",
      conditions: "Ateroskleroza, plaki, zožitve, ocena tveganja za možgansko kap.",
      link: "/ultrazvok/ultrazvok-vratnih-arterij",
      icon: Activity
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Najsodobnejši aparati",
      description: "Visoka ločljivost, doppler, elastografija kjer smiselno"
    },
    {
      icon: Users,
      title: "Izkušeni specialisti",
      description: "Radiologe z dolgoletnimi izkušnjami"
    },
    {
      icon: CheckCircle,
      title: "Natančni izvidi",
      description: "Razumljivi izvidi z razlago na licu mesta"
    },
    {
      icon: Clock,
      title: "Prilagodljivi termini",
      description: "Tudi popoldne in v soboto"
    },
    {
      icon: Stethoscope,
      title: "Nadaljnja obravnava",
      description: "Internist, endokrinolog, urolog, žilni kirurg, ortoped..."
    },
    {
      icon: Star,
      title: "Brez čakanja",
      description: "Termini pogosto isti ali naslednji dan"
    }
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
    "name": "Ultrazvok Ljubljana",
    "description": "Natančna in hitra ultrazvočna diagnostika brez čakalnih dob. Samoplačniško, brez napotnice.",
    "procedureType": "https://schema.org/DiagnosticProcedure"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Asantis - Ultrazvok Ljubljana",
    "description": "Samoplačniška ultrazvočna diagnostika v Ljubljani. Specialisti radiologije, najnovejši aparati, diagnoza pogosto že na prvem obisku.",
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
        <title>Ultrazvok Ljubljana – samoplačniško | Asantis Medical Center</title>
        <meta 
          name="description" 
          content="Natančna in hitra ultrazvočna diagnostika brez čakalnih dob. Specialisti radiologije, najsodobnejši aparati. Diagnoza pogosto že na prvem obisku. Samoplačniško." 
        />
        <meta 
          name="keywords" 
          content="ultrazvok ljubljana, samoplačniški ultrazvok, ultrazvok brez napotnice, ultrazvok trebuha, ultrazvok ščitnice, ultrazvok dojk, ultrazvok ven, ultrazvočna diagnostika" 
        />
        <link rel="canonical" href="https://asantis.si/ultrazvok/ultrazvok-ljubljana" />
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
              Samoplačniška ultrazvočna diagnostika
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ultrazvok Ljubljana – samoplačniško
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              Natančna in hitra ultrazvočna diagnostika brez čakalnih dob
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Specialisti radiologije in ultrazvočni aparati najnovejše generacije. 
              Diagnoza pogosto že na prvem obisku.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite se brez napotnice
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
                Hiter termin – pogosto isti dan
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Izvid na licu mesta
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Imate bolečine ali zdravstvene težave in potrebujete ultrazvok?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Z ultrazvokom lahko že v nekaj minutah odkrijemo vzroke bolečin, spremembe organov, 
              vnetja, ciste, tumorje, motnje prekrvitve in številne druge težave.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4 flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Naročite se brez napotnice</span>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4 flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Hiter termin – isti ali naslednji dan</span>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4 flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Izvid in razlaga na licu mesta</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Bomb */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/20">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                💡 Ali veste?
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                V Ljubljani je bilo zadnji mesec opravljenih več kot <strong className="text-primary">2.300 samoplačniških ultrazvočnih pregledov</strong>, 
                največ zaradi bolečin v trebuhu, težav s ščitnico, ožiljem, sklepi in testisi.
              </p>
              <p className="text-base text-muted-foreground mt-4">
                Ultrazvok je najhitrejša in najvarnejša neinvazivna metoda, ki omogoča pravočasno odkrivanje resnih stanj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Asantis */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Zakaj Asantis?
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <advantage.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ultrasound Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              Katere ultrazvočne preglede izvajamo?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-center">
              Izberite vrsto ultrazvoka za več informacij in naročanje.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {ultrasoundServices.map((service, index) => (
                <Link key={index} to={service.link} className="group">
                  <Card className="h-full border-primary/20 hover:shadow-lg transition-all hover:border-primary/40">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            {service.description}
                          </p>
                          <p className="text-sm text-muted-foreground/80 mb-4">
                            <span className="font-medium">Odkrivanje:</span> {service.conditions}
                          </p>
                          <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                            Več informacij
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Pogosta vprašanja – ultrazvok
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
              Naročite se na ultrazvok
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Brez čakanja, brez napotnice. Termini pogosto že isti dan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte termin
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UltrazvokLjubljanaPage;
