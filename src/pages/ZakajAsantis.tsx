import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Heart, 
  Stethoscope, 
  CalendarCheck, 
  MessageCircle,
  ArrowRight,
  Award,
  Zap
} from "lucide-react";

const ZakajAsantis = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Brez čakalnih dob",
      description: "Prednostno naročanje in hitri termini. Ne čakajte mesece – pri nas dobite termin v nekaj dneh."
    },
    {
      icon: Users,
      title: "Multidisciplinarna ekipa",
      description: "Strokovnjaki različnih področij sodelujejo za celostno obravnavo vašega zdravja."
    },
    {
      icon: Shield,
      title: "Predvidljivi stroški",
      description: "Mesečna naročnina brez skritih stroškov. Veste, kaj plačujete, brez neprijetnih presenečenj."
    },
    {
      icon: Heart,
      title: "Preventiva na prvem mestu",
      description: "Raje preprečimo kot zdravimo. Letni preventivni pregledi so vključeni v vsak paket."
    },
    {
      icon: Stethoscope,
      title: "Izkušeni specialisti",
      description: "Naša ekipa vključuje priznane strokovnjake z dolgoletnimi izkušnjami."
    },
    {
      icon: CalendarCheck,
      title: "Fleksibilno naročanje",
      description: "Online ali telefonsko naročanje, ki se prilagodi vašemu urniku."
    },
    {
      icon: MessageCircle,
      title: "Online posveti",
      description: "Hitri nasveti in konzultacije brez obiska ordinacije, kadarkoli jih potrebujete."
    },
    {
      icon: Award,
      title: "Celovita skrb",
      description: "Od dermatologije do pediatrije – vse zdravstvene storitve na enem mestu."
    }
  ];

  const stats = [
    { value: "5000+", label: "Zadovoljnih pacientov" },
    { value: "50+", label: "Strokovnjakov" },
    { value: "98%", label: "Priporočil" },
    { value: "24h", label: "Odzivni čas" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Zakaj izbrati{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ASANTIS?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Medicinski center nove generacije, kjer je vaše zdravje resnično na prvem mestu. 
              Odkrijte, zakaj nam zaupa že več kot 5000 pacientov.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prednosti članstva pri ASANTIS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naša filozofija temelji na dostopni, kakovostni in celostni zdravstveni oskrbi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title} 
              className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Difference Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Kaj nas loči od ostalih?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Naročniški model</h3>
                    <p className="text-muted-foreground">Ena mesečna naročnina pokriva vse vaše osnovne zdravstvene potrebe. Brez dodatnih stroškov za preglede.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Osebni pristop</h3>
                    <p className="text-muted-foreground">Vsak pacient dobi osebni zdravstveni načrt in stalno podporo naše ekipe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Sodobna tehnologija</h3>
                    <p className="text-muted-foreground">Najnovejša diagnostična oprema in digitalne rešitve za lažje spremljanje zdravja.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Vse na enem mestu</h3>
                    <p className="text-muted-foreground">Od dermatologije, zobozdravstva do pediatrije – vsa oskrba pod eno streho.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card className="bg-gradient-hero border-primary/20">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Pripravljeni na spremembo?</h3>
                  <p className="text-muted-foreground mb-6">
                    Pridružite se tisočim, ki so že odkrili prednosti članstva pri ASANTIS. 
                    Prvi mesec brez obveznosti.
                  </p>
                  <Button size="lg" asChild className="w-full">
                    <NavLink to="/cenik">
                      Oglejte si pakete <ArrowRight className="ml-2 h-5 w-5" />
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Začnite danes
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Izberite paket, ki ustreza vašim potrebam, in izkusite zdravstveno oskrbo, 
              kot bi morala biti – dostopno, osebno in brez čakanja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/cenik">Primerjaj pakete</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">Postavite vprašanje</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default ZakajAsantis;