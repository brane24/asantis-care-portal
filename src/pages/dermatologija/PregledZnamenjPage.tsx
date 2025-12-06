import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Search, 
  Zap, 
  Stethoscope, 
  Heart,
  Phone,
  Star,
  Building2,
  UserCheck,
  Camera,
  Brain,
  Clock,
  Check,
  MessageCircle
} from "lucide-react";

const PregledZnamenjPage = () => {
  const benefits = [
    {
      icon: Search,
      title: "Zgodnje odkrivanje melanoma",
      description: "Odkritje spremembe v zgodnji fazi močno poveča uspešnost zdravljenja."
    },
    {
      icon: Zap,
      title: "Brez čakalnih vrst",
      description: "Termin že v nekaj dneh – brez dolgega čakanja."
    },
    {
      icon: Stethoscope,
      title: "Dermatoskopska analiza",
      description: "Digitalna povečava in natančen vpogled v strukturo znamenj."
    },
    {
      icon: Heart,
      title: "Mirna vest",
      description: "Strokovno mnenje in priporočilo, ali je odstranitev potrebna ali ne."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Kratek posvet z dermatologom",
      description: "Pregled kože, pogovor o tveganjih in družinski anamnezi."
    },
    {
      number: "2",
      title: "Pregled z dermatoskopom",
      description: "Natančna analiza posameznih znamenj, ocena nevarnosti."
    },
    {
      number: "3",
      title: "Diagnoza in priporočilo",
      description: "Svetovanje glede odstranitve ali spremljanja znamenja."
    }
  ];

  const warningSymptoms = [
    "Sprememba barve, oblike ali velikosti znamenja",
    "Krvavitev ali srbečica",
    "Novo znamenje po 30. letu starosti",
    "Družinska anamneza melanoma"
  ];

  const testimonials = [
    {
      text: "Pregled sem dobila že naslednji dan. Zdravnica si je vzela čas in vse razložila. Zelo priporočam!",
      author: "Ana, 36 let, Ljubljana"
    },
    {
      text: "Odkrili spremembo, ki sem jo sam spregledal. Profesionalen pristop!",
      author: "Tomaž, 44 let"
    }
  ];

  const pricing = [
    {
      service: "Specialistični pregled znamenj (dermatolog)",
      price: "od 60 €",
      note: "vključuje dermatoskopski pregled do 10 znamenj"
    },
    {
      service: "Digitalno shranjevanje fotografij",
      price: "+20 €",
      note: "priporočeno za kontrolne preglede"
    },
    {
      service: "Odstranitev znamenja (kirurško ali lasersko)",
      price: "od 90 €",
      note: "po presoji dermatologa"
    }
  ];

  const faqItems = [
    {
      question: "Kolikokrat naj opravim pregled znamenj?",
      answer: "Priporočamo enkrat letno ali pogosteje, če imate veliko znamenj ali družinsko anamnezo raka kože."
    },
    {
      question: "Ali je pregled boleč?",
      answer: "Ne. Dermatoskopski pregled je popolnoma neboleč in traja le nekaj minut."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, pri nas naročanje poteka brez napotnice in brez čakalne dobe."
    },
    {
      question: "Ali se znamenja lahko odstranijo takoj po pregledu?",
      answer: "Da, v večini primerov odstranitev izvedemo isti ali naslednji dan."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Pregled znamenj Ljubljana – dermatolog brez čakalne dobe | Asantis</title>
        <meta 
          name="description" 
          content="Zanesljiv dermatoskopski pregled znamenj pri specialistu dermatologu v Ljubljani. Brez čakalnih vrst, natančna analiza, možnost odstranitve." 
        />
        <meta 
          name="keywords" 
          content="pregled znamenj, dermatolog Ljubljana, dermatoskop, znamenje, kožni pregled, melanoma check, mole screening Ljubljana, mole check" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Zgodnje odkrivanje rešuje življenja
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pregled znamenj z dermatoskopom – hitro, varno in brez čakalnih vrst
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zanesljiv dermatološki pregled vseh kožnih znamenj in sprememb – za mirno vest in zdravo kožo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">
                  Naročite pregled znamenj
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokličite nas
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span>4.9 / 5 zadovoljnih pacientov</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span>Asantis – zasebni dermatološki center Ljubljana</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                <span>Specialist dermatolog z več kot 10 leti izkušenj</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zakaj redni pregled znamenj prepreči resne težave
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" asChild>
            <NavLink to="/kontakt">Naročite termin še danes</NavLink>
          </Button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enostaven postopek v treh korakih
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full text-center hover:shadow-soft transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">
                💡 Po potrebi vam dermatolog predlaga odstranitev znamenja v isti ambulanti.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ne čakajte na spremembe
            </h2>
            <p className="text-xl text-muted-foreground">
              Obiščite dermatologa, če opazite:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {warningSymptoms.map((symptom, index) => (
              <Card key={index} className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-destructive" />
                  </div>
                  <span>{symptom}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="font-medium">Priporočeno: redni pregled znamenj 1× letno.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Equipment & Expertise */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Varnost in natančnost z digitalnim dermatoskopom
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Naši dermatologi uporabljajo visokoločljiv dermatoskop z digitalnim zajemom slike, 
                  kar omogoča primerjavo sprememb skozi čas in shranjevanje dokumentacije za nadaljnje spremljanje.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <Camera className="h-8 w-8 text-primary flex-shrink-0" />
                    <span className="font-medium">Digitalna dokumentacija kože</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <Brain className="h-8 w-8 text-primary flex-shrink-0" />
                    <span className="font-medium">Umetna inteligenca pomaga pri analizi pigmentnih vzorcev</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kaj pravijo naši pacienti
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                <p className="text-muted-foreground font-medium">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span>Ocena 4.9 / 5 (na podlagi 320 mnenj)</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cena pregleda znamenj
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold">Storitev</th>
                      <th className="text-right p-4 font-semibold">Cena</th>
                      <th className="text-left p-4 font-semibold hidden sm:table-cell">Opombe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4">
                          <span className="font-medium">{item.service}</span>
                          <span className="block sm:hidden text-sm text-muted-foreground mt-1">
                            {item.note}
                          </span>
                        </td>
                        <td className="p-4 text-right font-semibold text-primary whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="p-4 text-muted-foreground hidden sm:table-cell">
                          {item.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Rezervirajte termin zdaj
                </NavLink>
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="mr-2 h-5 w-5" />
                Pogovor z asistentko
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Najpogostejša vprašanja
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20 overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center">
            <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
              <Clock className="h-4 w-4 mr-1" />
              Omejeno število terminov ta mesec
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rezervirajte svoj termin za pregled znamenj še danes
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zagotovite si popoln pregled kože v 30 minutah pri specialistu dermatologu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <NavLink to="/kontakt">Rezerviraj termin</NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Pokliči zdaj – brez čakalne vrste
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default PregledZnamenjPage;
