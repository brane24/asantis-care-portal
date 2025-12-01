import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Heart, Users, Award, Clock } from "lucide-react";

const ONas = () => {
  const values = [
    {
      icon: Heart,
      title: "Skrb za paciente",
      description: "Vsak pacient je za nas edinstven. Zagotavljamo individualen pristop in kakovostno oskrbo."
    },
    {
      icon: Users,
      title: "Multidisciplinarna ekipa",
      description: "Sodelovanje strokovnjakov različnih področij za celostno obravnavo."
    },
    {
      icon: Award,
      title: "Odličnost",
      description: "Stremimo k najvišjim standardom medicinske oskrbe in stalnem strokovnem razvoju."
    },
    {
      icon: Clock,
      title: "Dostopnost",
      description: "Hitri termini, prednostno naročanje in online posveti za vaše udobje."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            O ASANTIS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medicinski center nove generacije
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Združujemo najboljše strokovnjake, sodobno opremo in inovativen pristop 
            za celostno skrb za vaše zdravje.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Naša zgodba</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            ASANTIS je nastal iz želje po spremembi – želje po zdravstvu, ki je dostopno, 
            razumljivo in usmerjeno v preventivo. Združili smo vrhunske strokovnjake 
            različnih področij in ustvarili prostor, kjer je v ospredju vaše zdravje in počutje.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Z jasnimi paketi storitev in mesečno naročnino smo odpravili nejasnosti 
            in nepredvidene stroške. Naš cilj je, da imate dostop do kakovostne 
            zdravstvene oskrbe takrat, ko jo potrebujete.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="text-center hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
                <CardDescription className="text-sm">
                  {value.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Naša ekipa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strokovnjaki z dolgoletnimi izkušnjami in predanostjo vašemu zdravju
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4"></div>
                <CardTitle>Dr. Ana Novak</CardTitle>
                <CardDescription>Specialistka interne medicine</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  15+ let izkušenj na področju preventive in zdravljenja presnovnih bolezni
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-secondary mx-auto mb-4"></div>
                <CardTitle>Dr. Maja Horvat</CardTitle>
                <CardDescription>Specialistka ginekologije</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strokovno znanje in sočuten pristop za žensko zdravje v vseh življenjskih obdobjih
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4"></div>
                <CardTitle>Dr. Marko Kovač</CardTitle>
                <CardDescription>Specialist psihiatrije</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sodoben pristop k duševnemu zdravju s poudarkom na preventivi in terapiji
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pridružite se naši skupnosti
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Izberite paket, ki ustreza vašim potrebam, in izkusite novo raven 
              zdravstvene oskrbe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/cenik">Poglejte pakete</NavLink>
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

export default ONas;
