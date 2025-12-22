import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { 
  Check, 
  Star, 
  Phone, 
  Calendar, 
  MapPin,
  Clock,
  Sparkles,
  Shield,
  Leaf
} from "lucide-react";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BeljenjeZobPage = () => {
  const benefits = [
    {
      icon: "🦷",
      title: "Najboljši sistemi (Zoom, Opalescence)",
      description: "Uporabljamo preverjene, varne in certificirane metode."
    },
    {
      icon: "💎",
      title: "Rezultat že po 1 obisku",
      description: "Do 8 odtenkov svetlejši zobje v eni uri."
    },
    {
      icon: "🌿",
      title: "Brez bolečin in občutljivosti",
      description: "Zaščita dlesni in sklenine z gelom medicinske kakovosti."
    },
    {
      icon: "⏱️",
      title: "Učinek, ki traja",
      description: "Rezultat ostane viden 12–24 mesecev."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Pregled in priprava zob",
      description: "Zdravnik preveri stanje zob in po potrebi odstrani zobni kamen."
    },
    {
      step: "2",
      title: "Zaščita in nanos belilnega gela",
      description: "Dlesni zaščitimo s posebno bariero, nato nanesemo belilni gel."
    },
    {
      step: "3",
      title: "Aktivacija z LED svetlobo / laserjem",
      description: "Postopek traja približno 45–60 minut."
    },
    {
      step: "4",
      title: "Končni rezultat",
      description: "Zobje so vidno svetlejši, brez poškodb sklenine."
    }
  ];

  const whiteningTypes = [
    {
      type: "Beljenje v ordinaciji (Philips Zoom)",
      description: "Hitro in učinkovito, rezultat takoj po posegu.",
      duration: "~1 ura",
      price: "od 250 €"
    },
    {
      type: "Beljenje z opornicami doma",
      description: "Individualne opornice + profesionalni gel.",
      duration: "7–10 dni",
      price: "od 180 €"
    },
    {
      type: "Kombinirano beljenje",
      description: "Ordinacijsko + domače – maksimalen učinek.",
      duration: "1–2 tedna",
      price: "od 320 €"
    }
  ];

  const testimonials = [
    {
      quote: "Neverjetna razlika že po eni uri! Končno samozavestno nasmejana.",
      author: "Maja",
      location: "Ljubljana"
    },
    {
      quote: "Postopek popolnoma neboleč, rezultat takojšen.",
      author: "Luka",
      location: "Bežigrad"
    },
    {
      quote: "Profesionalno, prijazno in učinkovito – priporočam!",
      author: "Nina",
      location: "Vič"
    }
  ];

  const faqItems = [
    {
      question: "Ali je beljenje zob varno?",
      answer: "Da, uporabljamo samo medicinsko odobrene gele in tehnologijo, ki ne poškoduje sklenine."
    },
    {
      question: "Kako dolgo traja učinek?",
      answer: "Med 12 in 24 mesecev, odvisno od prehrane in nege."
    },
    {
      question: "Ali postopek boli?",
      answer: "Ne. Lahko pride do rahle prehodne občutljivosti, ki hitro mine."
    },
    {
      question: "Ali lahko belim zobne prevleke ali plombe?",
      answer: "Ne, materiali se ne obarvajo – možna menjava po postopku."
    },
    {
      question: "Kaj moram storiti pred beljenjem?",
      answer: "Priporočamo profesionalno čiščenje zobnega kamna za optimalen rezultat."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Beljenje zob Ljubljana | Profesionalno beljenje – Asantis zobozdravstvo</title>
        <meta 
          name="description" 
          content="Profesionalno beljenje zob v Ljubljani – hitro, varno in učinkovito. Asantis zobozdravstvo z najsodobnejšo tehnologijo Philips Zoom in strokovno ekipo." 
        />
        <meta name="keywords" content="beljenje zob Ljubljana, beljenje zob cena, Zoom beljenje zob, beljenje zob pri zobozdravniku, Asantis zobozdravstvo" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo/beljenje-zob" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <span className="text-5xl">✨</span>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Beljenje zob Ljubljana
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Beljenje zob Ljubljana – do naravno belega in sijočega nasmeha v eni uri
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              V centru Asantis zobozdravstvo Ljubljana izvajamo profesionalno, neboleče in varno beljenje zob z najnovejšo tehnologijo Philips Zoom in Opalescence – rezultat že po enem obisku!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezerviraj termin
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+38631876104">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokliči: +386 31 876 104
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>Ocena 4.9 / 5 (Google Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>👩‍⚕️</span>
                <span>500+ zadovoljnih pacientov</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">💎 Zakaj pacienti izberejo beljenje zob prav pri Asantis Ljubljana</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">⚙️ Kako poteka profesionalno beljenje zob</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item) => (
                <Card key={item.step} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types and Prices */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📋 Izberite metodo, ki vam najbolj ustreza</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {whiteningTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-primary">{type.type}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-primary">{type.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-center">
                💬 <strong>Vse metode so varne, neboleče in preverjeno učinkovite.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">💬 Nasmehi, ki povedo več kot tisoč besed</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">— {testimonial.author}, {testimonial.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">❓ Najpogostejša vprašanja o beljenju zob</h2>
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

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-hero border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                🌟 Ste pripravljeni na sijoč, bel nasmeh?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rezervirajte termin in odkrijte, kako hitro in varno lahko dosežete naravno belino zob.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" asChild>
                  <NavLink to="/kontakt">
                    <Calendar className="mr-2 h-5 w-5" />
                    Rezerviraj termin
                  </NavLink>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+38631876104">
                    <Phone className="mr-2 h-5 w-5" />
                    Pokliči: +386 31 876 104
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Asantis – Zobozdravstvo Ljubljana, Center</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BeljenjeZobPage;
