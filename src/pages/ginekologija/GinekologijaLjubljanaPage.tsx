import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Clock, 
  Heart, 
  Shield, 
  Users, 
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Stethoscope,
  Baby,
  Sparkles
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout/Layout";

const GinekologijaLjubljanaPage = () => {
  const handleBooking = () => {
    window.location.href = "/kontakt";
  };

  const services = [
    {
      problem: "Preventivni ginekološki pregled",
      therapy: "PAP test, UZ, pregled dojk",
      description: "Celovit preventivni pregled z odvzemom brisa in ultrazvočnim pregledom"
    },
    {
      problem: "Nosečnost in vodenje",
      therapy: "Predporodni pregledi, UZ",
      description: "Spremljanje nosečnosti z rednimi pregledi in ultrazvočno diagnostiko"
    },
    {
      problem: "Motnje menstrualnega cikla",
      therapy: "Hormonska diagnostika",
      description: "Diagnostika in zdravljenje nerednih, bolečih ali obilnih menstruacij"
    },
    {
      problem: "Kontracepcija",
      therapy: "Svetovanje, vstavitev",
      description: "Izbira ustrezne kontracepcije, vstavitev spirale ali implanona"
    },
    {
      problem: "Menopavza in hormonske spremembe",
      therapy: "Hormonska terapija",
      description: "Lajšanje simptomov menopavze in hormonsko uravnavanje"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Hiter dostop",
      description: "Termin že v 24–48 urah, brez dolgih čakalnih vrst"
    },
    {
      icon: Heart,
      title: "Empatičen pristop",
      description: "Prijazno in diskretno okolje za vsako žensko"
    },
    {
      icon: Stethoscope,
      title: "Izkušeni ginekologi",
      description: "Strokovnjaki z dolgoletnimi izkušnjami"
    },
    {
      icon: Shield,
      title: "Sodobna diagnostika",
      description: "UZ, kolposkopija, laboratorijske preiskave"
    }
  ];

  const pricing = [
    { service: "Ginekološki pregled + UZ", price: "od 85 €" },
    { service: "PAP test", price: "35 €" },
    { service: "Ultrazvok male medenice", price: "60 €" },
    { service: "Vstavitev spirale (IUD)", price: "od 150 €" },
    { service: "Nosečniški pregled + UZ", price: "od 90 €" },
    { service: "Paket za članice Asantis", price: "-15 % popust" }
  ];

  const faqs = [
    {
      question: "Kako hitro lahko dobim termin pri ginekologu?",
      answer: "Običajno v 1–2 dneh po naročilu. Za nujne primere nudimo tudi termine isti dan."
    },
    {
      question: "Ali potrebujem napotnico za ginekološki pregled?",
      answer: "Ne, sprejemamo samoplačniške pacientke brez napotnice. S članstvom Asantis imate dodatne ugodnosti."
    },
    {
      question: "Kako pogosto je priporočljiv preventivni ginekološki pregled?",
      answer: "Priporočamo letni preventivni pregled, ki vključuje PAP test in pregled dojk. Pri nekaterih starostnih skupinah ali zdravstvenih stanjih je lahko pogosteje."
    },
    {
      question: "Ali izvajate tudi preglede v nosečnosti?",
      answer: "Da, nudimo celovito vodenje nosečnosti z rednimi pregledi, ultrazvočno diagnostiko in svetovanjem."
    },
    {
      question: "Kakšne metode kontracepcije nudite?",
      answer: "Nudimo svetovanje o vseh metodah kontracepcije, vključno z vstavitvijo hormonske ali bakrene spirale, implanona ter predpisovanjem hormonske kontracepcije."
    },
    {
      question: "Ali so pregledi boleči?",
      answer: "Trudimo se, da so pregledi čim bolj udobni. Pri občutljivih posegih uporabljamo lokalno anestezijo ali lajševanje bolečin."
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis - Ginekologija Ljubljana",
    "description": "Ginekologija v Ljubljani brez čakalnih vrst. Preventivni pregledi, vodenje nosečnosti, kontracepcija in hormonska diagnostika.",
    "url": "https://asantis.si/ginekologija",
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
        <title>Ginekologija Ljubljana | Asantis medicinski center</title>
        <meta 
          name="description" 
          content="Ginekologija v Ljubljani brez čakalnih vrst. Preventivni pregledi, vodenje nosečnosti, kontracepcija, PAP test in UZ. Naročite termin še danes." 
        />
        <meta 
          name="keywords" 
          content="ginekologija Ljubljana, ginekolog Ljubljana, preventivni ginekološki pregled, PAP test, nosečnost, kontracepcija, spirala, ultrazvok, ginekolog brez napotnice" 
        />
        <link rel="canonical" href="https://asantis.si/ginekologija" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
              Ginekologija v Ljubljani – brez čakalnih vrst
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Skrb za žensko zdravje na enem mestu – ginekologija v Ljubljani
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Opravite preventivni pregled, nosečniški ultrazvok ali posvet o kontracepciji že v nekaj dneh. Empatičen pristop, sodobna diagnostika in izkušeni ginekologi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Naročite termin
              </Button>
              <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Povprašajte po terminu
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
              <span>Brez čakalne dobe</span>
              <span className="hidden sm:inline">|</span>
              <span>Izkušeni ginekologi</span>
              <span className="hidden sm:inline">|</span>
              <span>Asantis Ljubljana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ginekološka ambulanta Asantis nudi celovito skrb za žensko zdravje – od preventivnih pregledov, 
              PAP testov in ultrazvočne diagnostike do vodenja nosečnosti in svetovanja o kontracepciji. 
              Naša ekipa izkušenih ginekologov zagotavlja prijazen, diskreten in strokoven pristop 
              v sodobno opremljeni ambulanti v središču Ljubljane.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Zakaj izbrati našo ginekologijo?
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

      {/* Services Table */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Ginekološke storitve po vaši meri
          </h2>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-semibold text-foreground">Storitev / področje</th>
                  <th className="text-left p-4 font-semibold text-foreground">Vrsta pregleda</th>
                  <th className="text-left p-4 font-semibold text-foreground">Opis</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                    <td className="p-4 text-foreground font-medium">{service.problem}</td>
                    <td className="p-4 text-muted-foreground">{service.therapy}</td>
                    <td className="p-4 text-muted-foreground">{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button onClick={handleBooking} size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Rezervirajte termin za pregled
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kako poteka ginekološki pregled pri nas
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Users,
                title: "Pogovor in anamneza",
                description: "Ginekolog se z vami pogovori o vaših zdravstvenih težavah, ciklu in morebitnih simptomih."
              },
              {
                step: "2",
                icon: Stethoscope,
                title: "Pregled in diagnostika",
                description: "Opravimo ginekološki pregled, PAP test in/ali ultrazvočno diagnostiko."
              },
              {
                step: "3",
                icon: CheckCircle,
                title: "Izvidi in načrt",
                description: "Prejmete izvide in priporočila za nadaljnjo oskrbo ali zdravljenje."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Cenik ginekoloških storitev
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-semibold text-foreground">Storitev</th>
                      <th className="text-right p-4 font-semibold text-foreground">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                        <td className="p-4 text-foreground">{item.service}</td>
                        <td className="p-4 text-right font-semibold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              💬 Cene so informativne – za natančno ponudbo nas kontaktirajte.
            </p>
            
            <div className="text-center mt-6">
              <Button onClick={handleBooking} variant="outline">
                Pridobite ponudbo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Kaj pravijo naše pacientke
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Prvič sem bila pri ginekologu brez strahu. Prijazna ekipa in hiter termin!",
                author: "Ana, Ljubljana"
              },
              {
                text: "Odlično vodenje nosečnosti. Vedno sem dobila odgovore na vsa vprašanja.",
                author: "Petra, Bežigrad"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-medium text-foreground">– {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Nahajamo se v središču Ljubljane
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-col gap-3 text-muted-foreground mb-8">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Asantis medicinski center, Dunajska cesta, Ljubljana</span>
              </div>
              <p>🅿️ Brezplačno parkirišče za pacientke</p>
              <p>🚇 Enostaven dostop z javnim prevozom</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={handleBooking}>
                Poglejte pot na zemljevidu
              </Button>
              <Button onClick={handleBooking}>
                Naročite termin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Pogosta vprašanja o ginekologiji
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

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Poskrbite za svoje zdravje!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Naročite ginekološki pregled in začnite skrbeti za svoje zdravje že danes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleBooking} className="text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Pokličite nas
            </Button>
            <Button size="lg" variant="outline" onClick={handleBooking} className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Rezervirajte termin
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GinekologijaLjubljanaPage;
