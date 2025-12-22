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
  Zap,
  MessageCircle,
  Car,
  Video
} from "lucide-react";
import { Helmet } from "react-helmet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ZobozdravnikNujnoPage = () => {
  const causes = [
    {
      cause: "Zobna gniloba (karies)",
      description: "Okužba zobovine povzroča bolečino na ugriz ali pri toplih/hladnih pijačah.",
      frequency: "Zelo pogosta"
    },
    {
      cause: "Vnetje zobnega živca (pulpitis)",
      description: "Močna, utripajoča bolečina, pogosto ponoči ali ob dotiku.",
      frequency: "Pogosta"
    },
    {
      cause: "Absces ali oteklina",
      description: "Okužba zoba ali dlesni, ki povzroči oteklino in lahko povišano temperaturo.",
      frequency: "Srednje pogosta"
    },
    {
      cause: "Izpad plombe ali zlom zoba",
      description: "Zob postane občutljiv in lahko boli na ugriz.",
      frequency: "Pogosta"
    },
    {
      cause: "Poškodba zoba",
      description: "Po udarcu ali padcu – pomembno je hitro ukrepanje.",
      frequency: "Manj pogosta"
    }
  ];

  const procedures = [
    { procedure: "Nujni pregled", description: "Klinični pregled + RTG slikanje po potrebi", duration: "20–30 min", price: "60–80 €" },
    { procedure: "Odstranitev bolečine", description: "Odprtje zoba, čiščenje kanala, zdravilo ali antibiotična terapija", duration: "30–45 min", price: "70–120 €" },
    { procedure: "Začasna plomba", description: "Sanacija poškodovanega zoba do dokončnega zdravljenja", duration: "20 min", price: "60–90 €" },
    { procedure: "Zdravljenje koreninskih kanalov", description: "Čiščenje in dezinfekcija kanala pod anestezijo", duration: "45–90 min", price: "po dogovoru" },
    { procedure: "Ekstrakcija (odstranitev)", description: "Če zob ni več rešljiv", duration: "30–60 min", price: "90–150 €" }
  ];

  const whyUs = [
    { icon: Clock, text: "Termin isti dan – običajno v 2 urah od klica" },
    { icon: Zap, text: "Digitalna RTG diagnostika na mestu" },
    { icon: Check, text: "Takojšnja odprava bolečine" },
    { icon: MessageCircle, text: "Brezplačno svetovanje po posegu" },
    { icon: Car, text: "V središču Ljubljane z lastnim parkiriščem" }
  ];

  const workingHours = [
    { day: "Ponedeljek – Petek", hours: "8:00 – 20:00" }
  ];

  const testimonials = [
    {
      quote: "Zobobol ponoči, ob 8:00 zjutraj sem bil že v ordinaciji. Ekipa je super, bolečina je izginila takoj po posegu.",
      author: "Andrej",
      location: "Ljubljana"
    },
    {
      quote: "Profesionalno, hitro in z nasmehom. Zobozdravnik, ki ti res pomaga, ko te boli.",
      author: "Sara",
      location: "Kranj"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Zobozdravnik nujno – zobobol Ljubljana | Asantis</title>
        <meta 
          name="description" 
          content="Nujni zobozdravnik v Ljubljani za takojšnje olajšanje zobobola. Termin isti dan, brez čakanja. RTG diagnostika in zdravljenje na mestu. Pokličite zdaj!" 
        />
        <meta name="keywords" content="zobozdravnik nujno Ljubljana, zobobol Ljubljana, nujni zobozdravnik, zobozdravnik brez čakanja, zobobol pomoč" />
        <link rel="canonical" href="https://asantis.si/zobozdravstvo/zobozdravnik-nujno-zobobol" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <span className="text-5xl">🦷</span>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-destructive/10 text-destructive border-destructive/20">
              Nujni zobozdravnik
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Zobozdravnik nujno – zobobol Ljubljana
            </h1>
            <p className="text-2xl font-semibold text-primary mb-4">
              Hitro olajšanje bolečine brez čakanja
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ko vas preseneti močan zobobol, je najpomembnejše, da pridete do zobozdravnika čim prej. V Asantis centru v Ljubljani sprejemamo nujne primere zobobola isti dan – brez napotnice in brez čakalne dobe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="bg-destructive hover:bg-destructive/90">
                <a href="tel:+38631876104">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokličite zdaj: +386 31 876 104
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezerviraj nujni termin
                </NavLink>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>Termin običajno v 2 urah od klica</span>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔥 Najpogostejši vzroki zobobola</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((item, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-primary">{item.cause}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <Badge variant="secondary" className="text-xs">{item.frequency}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">⚡ Kaj storimo pri nujnem zobobolu</h2>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Postopek</TableHead>
                        <TableHead>Kaj vključuje</TableHead>
                        <TableHead>Trajanje</TableHead>
                        <TableHead className="text-right">Cena (okvirno)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {procedures.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.procedure}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">{item.description}</TableCell>
                          <TableCell>{item.duration}</TableCell>
                          <TableCell className="text-right text-primary font-semibold">{item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center">
                  💬 <strong>Po posegu prejmete jasna navodila za domačo nego in predlog nadaljnjega zdravljenja.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">💎 Zakaj izbrati Asantis za nujni zobobol</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">📅 Delovni čas in nujni sprejem</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Table>
                    <TableBody>
                      {workingHours.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.day}</TableCell>
                          <TableCell className="text-right text-primary font-semibold">{item.hours}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Pokličite</p>
                      <a href="tel:+38631876104" className="text-primary hover:underline">+386 31 876 104</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">⭐ Mnenja pacientov</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </section>

      {/* Location */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">📍 Lokacija</h2>
            </div>
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Asantis medicinski center</h3>
                <p className="text-muted-foreground mb-6">Trg republike 3, Ljubljana – center</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span>Parkiranje v garažni hiši Trg republike</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>2 min hoje od glavne avtobusne postaje</span>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Prikaži na Google Zemljevidu
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              📞 Naročite se zdaj – zobozdravnik za zobobol
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ne čakajte, da bolečina mine sama. Rezervirajte nujni termin še danes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-destructive hover:bg-destructive/90">
                <a href="tel:+38631876104">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokličite: +386 31 876 104
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <NavLink to="/kontakt">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rezerviraj nujni pregled
                </NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default ZobozdravnikNujnoPage;
