import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Heart, Activity, Brain, Smile, Baby, Users, CheckCircle, ArrowRight, Sparkles, CircleDot, Scale, Scan } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Srce & Presnova",
      description: "Preventiva, energija in dolgoročno zdravje vašega srca in presnove.",
      price: "39",
      link: "/storitve/srce-presnova",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Ženska 360",
      description: "Celostna skrb za žensko zdravje od preventive do terapije.",
      price: "65",
      link: "/storitve/zenska-360",
      color: "text-pink-500",
      popular: true
    },
    {
      icon: Activity,
      title: "FreeMove",
      description: "Bolečina & gibanje - življenje brez bolečin v hrbtenici in sklepih.",
      price: "69",
      link: "/storitve/freemove",
      color: "text-blue-500"
    },
    {
      icon: Brain,
      title: "MindCare",
      description: "Duševno zdravje, fokus in ravnovesje za polno življenje.",
      price: "99",
      link: "/storitve/mindcare",
      color: "text-purple-500"
    },
    {
      icon: Smile,
      title: "Skin & Estetika",
      description: "Zdrava koža, preventiva in estetske rešitve za vašo samozavest.",
      price: "49",
      link: "/storitve/skin-estetika",
      color: "text-amber-500"
    },
    {
      icon: Baby,
      title: "Kids & Family",
      description: "Privat pediater za vašo družino, ko ga najbolj potrebujete.",
      price: "39",
      link: "/storitve/kids-family",
      color: "text-green-500"
    },
    {
      icon: Sparkles,
      title: "Estetika & Vitalnost",
      description: "Estetsko pomlajevanje, kožna diagnostika in svetovanje o vitalnosti.",
      price: "79",
      link: "/storitve/estetika-vitalnost",
      color: "text-rose-500"
    },
    {
      icon: CircleDot,
      title: "Zobni Plus",
      description: "Osnovna zobozdravstvena preventiva in ohranjanje ustnega zdravja.",
      price: "39",
      link: "/storitve/zobozdravstvo",
      color: "text-cyan-500"
    },
    {
      icon: Scale,
      title: "Slim+ Medikacija",
      description: "Izguba teže pod zdravniškim nadzorom z GLP-1 terapijo in celostno podporo.",
      price: "129",
      link: "/storitve/slim-medikacija",
      color: "text-orange-500"
    },
    {
      icon: Scan,
      title: "Dermatologija",
      description: "Strokovni dermatološki pregled in zdravljenje bolezni kože, nohtov in lasišča.",
      price: "60",
      link: "/dermatologija",
      color: "text-teal-500"
    }
  ];

  const benefits = [
    "Prednostno naročanje brez čakalnih dob",
    "Online posveti kadarkoli potrebujete",
    "Letni preventivni pregledi vključeni",
    "Popusti na dodatne storitve in terapije",
    "Osebni zdravstveni načrt",
    "Multidisciplinarna ekipa strokovnjakov"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Medicinski center nove generacije
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Vaše zdravje,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                naša prioriteta
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Celostna skrb za zdravje z mesečno naročnino. Izberite paket, ki ustreza vašim potrebam, 
              in zagotovite si preventivo ter podporo za aktivno in zdravo življenje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <NavLink to="/cenik">
                  Izberite paket <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <NavLink to="/storitve">Poglejte storitve</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Naše storitve in paketi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vsaka storitev je skrbno zasnovana z jasnimi paketi, 
            ki pokrivajo vse potrebe od preventive do terapije.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="relative hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-secondary border-0">
                  ⭐ Najbolj izbran
                </Badge>
              )}
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {service.price}€
                  </span>
                  <span className="text-muted-foreground ml-2">/ mesec</span>
                </div>
                <Button asChild className="w-full" variant={service.popular ? "default" : "outline"}>
                  <NavLink to={service.link}>
                    Več o paketu <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Zakaj izbrati ASANTIS?
              </h2>
              <p className="text-lg text-muted-foreground">
                Več kot le medicinski center – vaš partner za zdravje
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-start space-x-3 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <NavLink to="/o-nas">Spoznajte našo ekipo</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pripravljeni začeti?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Izberite paket, ki ustreza vašim potrebam, in se pridružite številnim zadovoljnim strankam, 
              ki jim zagotavljamo kakovostno zdravstveno oskrbo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/cenik">Primerjaj pakete</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">Kontaktirajte nas</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Index;
