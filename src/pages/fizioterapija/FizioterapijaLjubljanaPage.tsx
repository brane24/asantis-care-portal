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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Star, 
  Clock, 
  Users, 
  ArrowRight,
  Stethoscope,
  Settings,
  Banknote,
  ClipboardCheck,
  Activity,
  MapPin,
  Car,
  Train,
  Phone,
  MessageCircle,
  Quote
} from "lucide-react";

const FizioterapijaLjubljanaPage = () => {
  const benefits = [
    {
      icon: Users,
      title: "Izkušeni fizioterapevti",
      description: "Vsak s certifikati in dolgoletno prakso."
    },
    {
      icon: Settings,
      title: "Sodobna oprema",
      description: "TECAR, ultrazvok, kinezioterapija, manualna terapija."
    },
    {
      icon: Clock,
      title: "Hiter dostop",
      description: "Pregled že v 24–48 urah."
    },
    {
      icon: Banknote,
      title: "Možnost članstva",
      description: "Nižja cena terapij za člane Asantis paketa."
    }
  ];

  const services = [
    {
      problem: "Bolečine v križu",
      therapy: "Manualna terapija, TECAR",
      description: "Sprostitev mišic, razbremenitev živcev"
    },
    {
      problem: "Poškodbe kolena ali rame",
      therapy: "Rehabilitacija po poškodbah",
      description: "Povrnitev gibljivosti in moči"
    },
    {
      problem: "Športne poškodbe",
      therapy: "Individualni protokol",
      description: "Pospešitev celjenja, preprečevanje ponovitev"
    },
    {
      problem: "Rehabilitacija po operacijah",
      therapy: "Pasivna in aktivna terapija",
      description: "Prilagojena vsakemu pacientu"
    },
    {
      problem: "Preventivna fizioterapija",
      therapy: "Vaje za držo in stabilizacijo",
      description: "Preprečevanje ponovnih težav"
    }
  ];

  const processSteps = [
    {
      icon: ClipboardCheck,
      number: "1",
      title: "Pregled in diagnostika",
      description: "Fizioterapevt oceni stanje in pripravi načrt."
    },
    {
      icon: Activity,
      number: "2",
      title: "Izvedba terapije",
      description: "Individualno izbrane metode."
    },
    {
      icon: Stethoscope,
      number: "3",
      title: "Spremljanje napredka",
      description: "Prilagajanje programa in domače vaje."
    }
  ];

  const pricing = [
    { service: "Prvi pregled + terapija", price: "od 45 €" },
    { service: "Manualna terapija", price: "40 €" },
    { service: "TECAR terapija", price: "50 €" },
    { service: "Rehabilitacijski paket (5 obiskov)", price: "180 €" },
    { service: "Paket za člane Asantis", price: "-15 % popust" }
  ];

  const testimonials = [
    {
      text: "Po dveh terapijah sem spet lahko hodila brez bolečin. Hvala ekipi Asantis!",
      author: "Maja",
      location: "Ljubljana"
    },
    {
      text: "Profesionalni pristop in izjemno prijazno osebje.",
      author: "Andrej",
      location: "Bežigrad"
    }
  ];

  const faqs = [
    {
      question: "Kako hitro lahko dobim termin?",
      answer: "Običajno v 1–2 dneh po naročilu."
    },
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, sprejemamo samoplačniške paciente."
    },
    {
      question: "Koliko terapij bom potreboval?",
      answer: "Odvisno od diagnoze; povprečno 3–6 obiskov."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Fizioterapija Ljubljana | Asantis medicinski center</title>
        <meta 
          name="description" 
          content="Fizioterapija v Ljubljani brez čakalnih vrst. Manualna terapija, TECAR, rehabilitacija po poškodbah in športne terapije. Naročite termin še danes." 
        />
        <meta name="keywords" content="fizioterapija Ljubljana, fizioterapevt Ljubljana, rehabilitacija Ljubljana, manualna terapija, TECAR terapija, športne poškodbe, bolečine v križu, fizioterapija brez napotnice" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Fizioterapija v Ljubljani – brez čakalnih vrst
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Hitro do gibanja brez bolečin – vrhunska fizioterapija v{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Ljubljani</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Opravite pregled in terapijo že v nekaj dneh. Individualni pristop, sodobne metode 
              in strokovnjaki z izkušnjami v športni in medicinski rehabilitaciji.
            </p>
            
            <Button size="lg" asChild className="text-lg mb-8">
              <NavLink to="/kontakt">
                📅 Naročite termin <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>

            <div className="flex items-center justify-center gap-2 text-lg">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-muted-foreground italic">"Odlični rezultati že po 3 obiskih!"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zakaj izbrati našo fizioterapijo?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Table Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fizioterapija po meri vaših težav
            </h2>
          </div>
          
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Težava / področje</TableHead>
                    <TableHead className="font-semibold">Vrsta terapije</TableHead>
                    <TableHead className="font-semibold">Opis storitve</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.problem}</TableCell>
                      <TableCell className="text-primary">{item.therapy}</TableCell>
                      <TableCell className="text-muted-foreground">{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <NavLink to="/kontakt">
                🗓️ Rezervirajte termin za pregled in načrt terapije <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kako poteka fizioterapija pri nas
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <Card 
              key={step.title} 
              className="text-center hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <NavLink to="/kontakt">
              Začnite z brezplačnim svetovanjem <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cenik fizioterapije
            </h2>
          </div>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Storitev</TableHead>
                    <TableHead className="font-semibold text-right">Cena</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricing.map((item) => (
                    <TableRow key={item.service}>
                      <TableCell>{item.service}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            💬 Cene so informativne – za natančno ponudbo nas kontaktirajte.
          </p>

          <div className="text-center mt-6">
            <Button asChild>
              <NavLink to="/kontakt">Pridobite ponudbo</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kaj pravijo naši pacienti
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-2" />
                <p className="text-lg italic mb-4">{testimonial.text}</p>
                <p className="font-semibold">
                  – {testimonial.author}, <span className="text-muted-foreground font-normal">{testimonial.location}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nahajamo se v središču Ljubljane
            </h2>
          </div>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Asantis medicinski center, Dunajska cesta XX, Ljubljana</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Brezplačno parkirišče za paciente</span>
                </div>
                <div className="flex items-center gap-3">
                  <Train className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Enostaven dostop z javnim prevozom</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="outline" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Poglejte pot na zemljevidu <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild>
                  <NavLink to="/kontakt">
                    Naročite termin <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pogosta vprašanja o fizioterapiji
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Povrnite si gibanje brez bolečin!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Naročite prvi fizioterapevtski pregled in začnite okrevanje že danes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+38612345678">
                  <Phone className="mr-2 h-5 w-5" /> Pokličite nas
                </a>
              </Button>
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <MessageCircle className="mr-2 h-5 w-5" /> Rezervirajte termin
                </NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default FizioterapijaLjubljanaPage;