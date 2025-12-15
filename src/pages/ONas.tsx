import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Heart, Users, Award, Clock } from "lucide-react";
import monikaSmrkoljImg from "@/assets/monika-smrkolj.jpg";
import domenHostnikImg from "@/assets/domen-hostnik.jpg";

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

  const team = [
    {
      name: "Branko Pirš, dr. med.",
      role: "Specialist dermatolog",
      description: "Specialist dermatolog z dodatnim znanjem flebologije in dermatološke onkologije.",
      image: "https://asantis.si/wp-content/uploads/2024/02/Branko-Pirs.jpg",
      link: "/ekipa/branko-pirs"
    },
    {
      name: "dr. Ana Kotnik Pirš, dr. med.",
      role: "Specialistka pediatrije",
      description: "Specialistka pediatrije z dodatnim znanjem iz otroške pulmologije in alergologije.",
      image: "https://asantis.si/wp-content/uploads/2023/12/Zdravnica-Ana-Kotnik-Pirs-pediater.webp",
      link: "/ekipa/ana-kotnik-pirs"
    },
    {
      name: "Jani Petrović, dr. med.",
      role: "Specialist dermatološke estetike",
      description: "Specialist za posege iz dermatološke estetike – aplikacija botulinum toksina in polnil.",
      image: "https://asantis.si/wp-content/uploads/2024/02/JANI-PETROVIC.webp",
      link: "/ekipa/jani-petrovic"
    },
    {
      name: "Aleš Porčnik, dr. med.",
      role: "Specialist plastične kirurgije",
      description: "Specialist plastične, estetske in rekonstruktivne kirurgije z dodatnim znanjem rekonstrukcije živcev.",
      image: "https://asantis.si/wp-content/uploads/2023/12/Ales-Porcnik-kiurg-plastik.webp",
      link: "/ekipa/ales-porcnik"
    },
    {
      name: "Gregor Čadež, dipl. fizot.",
      role: "Fizioterapevt",
      description: "Fizioterapevt s specialnimi znanji iz manualne medicine.",
      image: "https://asantis.si/wp-content/uploads/2023/12/Gregor-Cadez-fizioterapevt.webp",
      link: "/ekipa/gregor-cadez"
    },
    {
      name: "Domen Hostnik, dr. dent. med.",
      role: "Zobozdravnik",
      description: "Zobozdravnik z dodatnim znanjem iz ortodontike in implantologije.",
      image: domenHostnikImg,
      link: "/ekipa/domen-hostnik"
    },
    {
      name: "Petra Šket, dr. med.",
      role: "Specialistka ginekologije",
      description: "Specialistka ginekologije z dodatnim znanjem iz operativne ginekologije.",
      image: "https://asantis.si/wp-content/uploads/2024/02/PETRA-SKET.jpg",
      link: "/ekipa/petra-sket"
    },
    {
      name: "Monika Smrkolj, dr. med.",
      role: "Specialistka psihiatrije",
      description: "Specialistka psihiatrije s specialnimi znanji iz transkranialne magnetne stimulacije.",
      image: monikaSmrkoljImg,
      link: "/ekipa/monika-smrkolj"
    },
    {
      name: "Mateja Sirše, dr. med.",
      role: "Specialistka ortopedske kirurgije",
      description: "Specialistka ortopedske kirurgije.",
      image: "https://asantis.si/wp-content/uploads/2024/02/Mateja-Sirse-1.jpg",
      link: "/ekipa/mateja-sirse"
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
            Zdravniki, terapevti in osebje, ki skrbi za vas in vaše družine
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <NavLink 
                key={member.name} 
                to={member.link}
                className="block"
              >
                <Card 
                  className="text-center hover:shadow-soft transition-all duration-300 animate-fade-in cursor-pointer h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                    />
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </NavLink>
            ))}
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
