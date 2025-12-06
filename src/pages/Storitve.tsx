import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Users, Activity, Brain, Smile, Baby, Stethoscope, ArrowRight, Scale, Scan } from "lucide-react";

const Storitve = () => {
  // Posamezne storitve (ne paketi)
  const services = [
    {
      icon: Scan,
      title: "Dermatologija",
      tagline: "Strokovni pregled in zdravljenje bolezni kože",
      description: "Celostni dermatološki pregledi in zdravljenje najpogostejših bolezni kože, nohtov in lasišča – brez čakalnih vrst in napotnice.",
      price: "od 60€",
      link: "/dermatologija",
      color: "text-teal-500",
      features: ["Dermatoskopija", "Zdravljenje kože", "Krioterapija", "Brez napotnice"]
    },
    {
      icon: Stethoscope,
      title: "Internistični pregled",
      tagline: "Kompleten zdravstveni pregled",
      description: "Celostni internistični pregled z laboratorijskimi analizami, EKG in posvetom o preventivi ter zdravem življenjskem slogu.",
      price: "od 80€",
      link: "/storitve/internistika",
      color: "text-red-500",
      features: ["Anamneza", "Klinični pregled", "EKG", "Laboratorij"]
    },
    {
      icon: Users,
      title: "Ginekologija",
      tagline: "Celostna skrb za žensko zdravje",
      description: "Ginekološki pregledi, PAP test, ultrazvok in svetovanje za ženske v vseh življenjskih obdobjih.",
      price: "od 70€",
      link: "/storitve/ginekologija",
      color: "text-pink-500",
      features: ["PAP test", "UZ pregled", "Posvet", "Preventiva"]
    },
    {
      icon: Activity,
      title: "Ortopedija",
      tagline: "Diagnostika in zdravljenje gibalnega sistema",
      description: "Ortopedski pregledi za težave s sklepi, hrbtenico in mišicami. Diagnostika in načrt zdravljenja.",
      price: "od 90€",
      link: "/storitve/ortopedija",
      color: "text-blue-500",
      features: ["Pregled sklepov", "Hrbtenica", "Diagnostika", "Načrt zdravljenja"]
    },
    {
      icon: Brain,
      title: "Psihiatrija",
      tagline: "Strokovna pomoč za duševno zdravje",
      description: "Psihiatrični pregledi, diagnostika in zdravljenje duševnih motenj. Strokovna in diskretna obravnava.",
      price: "od 100€",
      link: "/storitve/psihiatrija",
      color: "text-purple-500",
      features: ["Diagnoza", "Terapija", "Zdravljenje", "Posveti"]
    },
    {
      icon: Smile,
      title: "Zobozdravstvo",
      tagline: "Zdrav nasmeh za življenje",
      description: "Preventivni in kurativni zobozdravstveni pregledi, zobni kamen, plombe in estetski posegi.",
      price: "od 50€",
      link: "/storitve/zobozdravstvo",
      color: "text-cyan-500",
      features: ["Preventiva", "Plombe", "Zobni kamen", "Estetika"]
    },
    {
      icon: Baby,
      title: "Pediatrija",
      tagline: "Zdravstvena oskrba za otroke",
      description: "Preventivni in akutni pediatrični pregledi za dojenčke, malčke in mladostnike.",
      price: "od 60€",
      link: "/storitve/pediatrija",
      color: "text-green-500",
      features: ["Preventiva", "Akutni pregledi", "Cepljenja", "Svetovanje"]
    },
    {
      icon: Scale,
      title: "Slim+ Medikacija",
      tagline: "Medicinska izguba teže z GLP-1 terapijo",
      description: "Izguba teže pod zdravniškim nadzorom z uporabo GLP-1 agonistov (Mounjaro, Wegovy), psihološko podporo in telesno rehabilitacijo.",
      price: "od 129€/mesec",
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
            Posamezne storitve
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rezervirajte posamezen pregled ali poseg pri naših specialistih – 
            brez napotnice in brez dolgih čakalnih vrst.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="relative hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
                <Button asChild className="w-full" variant="outline">
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
