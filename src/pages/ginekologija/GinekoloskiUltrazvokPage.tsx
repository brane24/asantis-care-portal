import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Clock, 
  Heart, 
  Shield, 
  CheckCircle,
  Phone,
  Calendar,
  AlertTriangle,
  Zap,
  Eye,
  Users,
  Sparkles
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout/Layout";

const GinekoloskiUltrazvokPage = () => {
  const handleBooking = () => {
    window.location.href = "/kontakt";
  };

  const ultrasoundFindings = [
    "ciste na jajčnikih",
    "miome, polipe",
    "vzroke za bolečine v spodnjem delu trebuha",
    "težave s ciklusom, PMS, obilnimi menstruacijami",
    "nepravilnosti sluznice maternice",
    "zgodnjo nosečnost",
    "vpliv hormonskih terapij ali spirale (IUD)"
  ];

  const complications = [
    "kronične bolečine",
    "večje ciste, ki lahko zahtevajo operacijo",
    "močnejše in neredne krvavitve",
    "težave s plodnostjo",
    "zaplete v nosečnosti"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Kratek pogovor z zdravnikom",
      description: "Razjasnimo simptome, zgodovino in želje."
    },
    {
      step: "2",
      title: "Ultrazvočni pregled (transvaginalni ali abdominalni)",
      description: "Traja 5–10 minut. Neboleče, brez sevanja."
    },
    {
      step: "3",
      title: "Interpretacija izvidov in načrt zdravljenja",
      description: "Zdravnik vam vse razloži in po potrebi predlaga terapijo ali dodatne preiskave."
    }
  ];

  const services = [
    {
      service: "Osnovni ginekološki UZ",
      content: "Pregled maternice, jajčnikov, sluznice, meritev foliklov",
      notes: "Idealno kot preventivni pregled"
    },
    {
      service: "Folikulometrija",
      content: "Spremljanje ovulacije",
      notes: "Uporabno pri načrtovanju nosečnosti"
    },
    {
      service: "Nosečniški UZ (zgodnja nosečnost)",
      content: "Potrditev nosečnosti, srčni utrip, starost",
      notes: "6.–12. teden"
    },
    {
      service: "UZ po porodu / operaciji",
      content: "Ocena celjenja, stanje maternice",
      notes: "Po dogovoru"
    },
    {
      service: "Kontrola IUD (spirale)",
      content: "Položaj spirale, debelina sluznice",
      notes: "Takoj dobite potrditev pravilne lege"
    },
    {
      service: "3D/4D UZ (dodatno)",
      content: "Podrobnejša 3D vizualizacija",
      notes: "Po želji"
    }
  ];

  const targetAudience = [
    "ženskam z bolečinami v spodnjem delu trebuha",
    "pri nerednih, bolečih ali premočnih menstruacijah",
    "pri sumu na ciste ali miome",
    "pri težavah s plodnostjo",
    "v zgodnji nosečnosti",
    "ob uporabi spirale (IUD)",
    "kot del letnega preventivnega pregleda"
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Najnovejša ultrazvočna tehnologija",
      description: "Kristalno jasna slika in takojšnji izvid."
    },
    {
      icon: Clock,
      title: "Brez čakalnih dob",
      description: "Termin dobite v 24–48 urah."
    },
    {
      icon: Users,
      title: "Izkušeni ginekologi",
      description: "Obravnava, ki temelji na izkušnjah, dokazih in individualnem pristopu."
    },
    {
      icon: Heart,
      title: "Nežni, diskretni in prijazni pregledi",
      description: "Posebej pomembno za ženske, ki jih je pregled strah."
    }
  ];

  const faqs = [
    {
      question: "Ali je ginekološki ultrazvok boleč?",
      answer: "Ne. Transvaginalni UZ je lahko rahlo neprijeten, a neboleč."
    },
    {
      question: "Kdaj je najboljši čas za pregled?",
      answer: "Med 5. in 10. dnem ciklusa, razen če imate akutne težave."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne. V Asantis delamo samoplačniško, brez napotnic."
    },
    {
      question: "Ali je UZ škodljiv?",
      answer: "Ultrazvok ne uporablja sevanja in je popolnoma varen tudi v nosečnosti."
    },
    {
      question: "Kako dolgo traja pregled?",
      answer: "Približno 10–15 minut, skupaj s posvetom 20 minut."
    },
    {
      question: "Ali lahko dobim izvid takoj?",
      answer: "Da, izvid prejmete takoj po pregledu."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Ginekološki ultrazvok",
    "description": "Ginekološki ultrazvok v Ljubljani. Hiter termin, izkušeni ginekologi, najsodobnejša oprema, pregled brez čakalnih vrst.",
    "procedureType": "DiagnosticProcedure",
    "howPerformed": "Transvaginalni ali abdominalni ultrazvočni pregled z najnovejšo 2D/3D/4D opremo.",
    "preparation": "Pred pregledom ni posebne priprave. Priporočamo pregled med 5. in 10. dnem ciklusa.",
    "bodyLocation": "Maternica, jajčniki, mala medenica"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis - Ginekološki ultrazvok Ljubljana",
    "description": "Ginekološki ultrazvok v Ljubljani. Hiter termin, izkušeni ginekologi, najsodobnejša oprema.",
    "url": "https://asantis.si/ginekologija/ginekoloski-ultrazvok",
    "telephone": "+386 1 XXX XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dunajska cesta",
      "addressLocality": "Ljubljana",
      "postalCode": "1000",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Gynecology"
  };

  return (
    <Layout>
      <Helmet>
        <title>Ginekološki ultrazvok Ljubljana | Asantis – hiter in natančen pregled brez čakalne dobe</title>
        <meta 
          name="description" 
          content="Ginekološki ultrazvok v Ljubljani. Hiter termin, izkušeni ginekologi, najsodobnejša oprema, pregled brez čakalnih vrst. Preventiva, ciste, miomi, zgodnja nosečnost. Naročite se." 
        />
        <meta 
          name="keywords" 
          content="ginekološki ultrazvok, ultrazvok ginekolog, ginekološki uz ljubljana, folikulometrija, uz jajčniki, uz maternica, zgodnja nosečnost uz, uz spirala, samoplačniško ginekologija" 
        />
        <link rel="canonical" href="https://asantis.si/ginekologija/ginekoloski-ultrazvok" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalProcedureSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Ginekološki ultrazvok — Asantis Ljubljana
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Zanesljiv, natančen in neboleč ginekološki ultrazvok za ženske vseh starosti
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              V Asantis Ljubljana izvajamo vrhunski 2D in 3D/4D ginekološki ultrazvok z najnovejšo opremo, 
              brez čakalnih dob, z izkušenimi ginekologi specialisti. Idealno za preventivo, diagnostiko, 
              težave s ciklusom, bolečinami, nosečnostjo ali za redni letni pregled.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Rezervirajte termin
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Povpraševanje
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1">Google ocena 4.9</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>Termin v 24–48 urah</span>
              <span className="hidden sm:inline">|</span>
              <span>Takojšnji izvid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 md:py-16 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Ste opazili spremembe? Ne ignorirajte simptomov.
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Mnoge ženske čakajo predolgo, čeprav je ultrazvok najhitrejša, najvarnejša in najtočnejša diagnostična metoda v ginekologiji.
            </p>
          </div>
        </div>
      </section>

      {/* What Ultrasound Reveals */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              Z ginekološkim ultrazvokom odkrijemo:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {ultrasoundFindings.map((finding, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{finding}</span>
                </div>
              ))}
            </div>

            {/* Knowledge Bomb */}
            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Ali veste?</p>
                    <p className="text-muted-foreground">
                      Več kot 120 žensk v Ljubljani vsak mesec poišče pomoč zaradi težav, 
                      ki bi jih lahko odkrili že z osnovnim ultrazvokom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It's Serious */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
              Zakaj je to lahko resno?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Če simptome ignoriramo, se lahko stanje razvije v:
            </p>
            
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {complications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="text-center text-primary font-medium mt-6">
              Prej ko ukrepate, večja je možnost, da stanje rešimo s preprostim, nebolečim postopkom.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kako poteka ginekološki ultrazvok
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kaj vključuje ultrazvok pri nas
          </h2>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-semibold text-foreground">Storitev</th>
                  <th className="text-left p-4 font-semibold text-foreground">Vsebina</th>
                  <th className="text-left p-4 font-semibold text-foreground">Opombe</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                    <td className="p-4 text-foreground font-medium">{service.service}</td>
                    <td className="p-4 text-muted-foreground">{service.content}</td>
                    <td className="p-4 text-muted-foreground">{service.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Komu je namenjen ginekološki ultrazvok?
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {targetAudience.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Zakaj izbrati Asantis?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Cena
          </h2>
          
          <div className="max-w-md mx-auto text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-primary mb-2">55–75 €</p>
                <p className="text-foreground font-medium mb-2">Ginekološki ultrazvok</p>
                <p className="text-sm text-muted-foreground">
                  + možnost doplačila za 3D/4D vizualizacijo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Naročite se na ginekološki ultrazvok v Ljubljani
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hitro, strokovno in brez čakalnih vrst.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              Povpraševanje
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              Termin v 24–48 urah
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              Izkušen specialist
            </span>
          </div>

          <Button size="lg" onClick={handleBooking} className="text-lg px-8">
            <Calendar className="mr-2 h-5 w-5" />
            Rezervirajte termin
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            FAQ – Pogosta vprašanja
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GinekoloskiUltrazvokPage;
