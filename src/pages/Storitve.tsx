import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Heart, Users, Activity, Brain, Smile, Baby, Stethoscope, ArrowRight, Scale } from "lucide-react";

const Storitve = () => {
  const services = [
    {
      icon: Heart,
      title: "Srce & Presnova",
      tagline: "Preventiva, energija in dolgoročno zdravje",
      description: "Internistični pristop za optimalno delovanje srca, presnove in celotnega organizma. Preventivni pregledi, laboratorijske preiskave in individualni zdravstveni načrti.",
      price: "39€/mesec",
      link: "/storitve/srce-presnova",
      color: "text-red-500",
      features: ["Preventivni pregledi", "Laboratorijske analize", "EKG", "Zdravstveni načrt"]
    },
    {
      icon: Users,
      title: "Ženska 360",
      tagline: "Celostna skrb za žensko zdravje",
      description: "Kompleksna zdravstvena oskrba žensk od preventive do terapije. Ginekologija, hormonsko zdravje, dermatologija in splošna medicina na enem mestu.",
      price: "65€/mesec",
      link: "/storitve/zenska-360",
      color: "text-pink-500",
      popular: true,
      features: ["Ginekološki pregledi", "Hormonsko zdravje", "Dermatologija", "Online posveti"]
    },
    {
      icon: Activity,
      title: "FreeMove - Bolečina & Gibanje",
      tagline: "Življenje brez bolečin",
      description: "Ortopedija in fizioterapija za aktivno življenje brez bolečin. Posebej zasnovano za težave s hrbtenico, sklepi in gibanjem.",
      price: "69€/mesec",
      link: "/storitve/freemove",
      color: "text-blue-500",
      features: ["Ortopedski pregledi", "Fizioterapija", "Program vaj", "Kontrolni pregledi"]
    },
    {
      icon: Brain,
      title: "MindCare",
      tagline: "Duševno zdravje, fokus in ravnovesje",
      description: "Psihiatrična in psihoterapevtska podpora za duševno zdravje. Strokovna pomoč pri stresu, anksioznosti, depresiji in drugih izzivih.",
      price: "od 99€/mesec",
      link: "/storitve/mindcare",
      color: "text-purple-500",
      features: ["Psihiatrični pregledi", "Psihoterapija", "Online posveti", "TMS terapija"]
    },
    {
      icon: Smile,
      title: "Skin & Estetika",
      tagline: "Zdrava koža in preventiva",
      description: "Dermatološka oskrba od preventivnih pregledov do estetskih posegov. Skrb za zdravje kože in samozavest.",
      price: "49€/mesec",
      link: "/storitve/skin-estetika",
      color: "text-amber-500",
      features: ["Dermatoskopija", "Preventiva", "Estetski posegi", "Laser terapije"]
    },
    {
      icon: Baby,
      title: "Kids & Family",
      tagline: "Privat pediater za vašo družino",
      description: "Pediatrična oskrba, ko jo potrebujete. Preventivni pregledi, akutna obravnava in online posveti za starše.",
      price: "39€/mesec/otrok",
      link: "/storitve/kids-family",
      color: "text-green-500",
      features: ["Preventiva", "Akutni pregledi", "Online posveti", "Prioritetno naročanje"]
    },
    {
      icon: Stethoscope,
      title: "Zobozdravstvo",
      tagline: "Zdrav nasmeh za življenje",
      description: "Celostna zobozdravstvena oskrba od preventive do zahtevnejših posegov. Basic in Plus paketi za različne potrebe.",
      price: "29€-49€/mesec",
      link: "/storitve/zobozdravstvo",
      color: "text-cyan-500",
      features: ["Preventivni pregledi", "Zobni kamen", "Plombe", "Estetika"]
    },
    {
      icon: Scale,
      title: "Slim+ Medikacija",
      tagline: "Medicinska izguba teže z GLP-1 terapijo",
      description: "Izguba teže pod zdravniškim nadzorom z uporabo GLP-1 agonistov (Mounjaro, Wegovy), psihološko podporo in telesno rehabilitacijo.",
      price: "129€/mesec + zdravila",
      link: "/storitve/slim-medikacija",
      color: "text-orange-500",
      features: ["GLP-1 terapija", "Mesečni posveti", "Psihološka podpora", "Fizioterapija"]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Celostna zdravstvena oskrba
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Naše storitve in dejavnosti
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Od preventive do terapije – vse storitve na enem mestu z jasnimi paketi 
            in mesečno naročnino. Izberite področje, ki ga potrebujete.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`relative hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                service.popular ? 'border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <Badge className="absolute -top-3 right-6 bg-gradient-secondary border-0">
                  ⭐ Najbolj izbran
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center ${service.color}`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <Badge variant="outline" className="text-base font-semibold">
                    {service.price}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-sm font-medium text-primary mb-3">
                  {service.tagline}
                </p>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-3 text-muted-foreground">Vključuje:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full" variant={service.popular ? "default" : "outline"}>
                  <NavLink to={service.link}>
                    Več o storitvi <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Zakaj izbrati ASANTIS?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Več kot le medicinski center – vaš dolgoročni partner za zdravje
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Brez čakalnih dob</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Prednostno naročanje in hitri termini za vse člane.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Multidisciplinarno</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Vsi specialisti pod eno streho za celostno obravnavo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pregledne cene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Jasni paketi brez skritih stroškov in presenečenj.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pripravljen/a začeti?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Izberite storitev in paket, ki ustreza vašim potrebam. 
              Naša ekipa vam z veseljem pomaga pri izbiri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/cenik">Primerjaj pakete</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">Kontakt</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Storitve;
