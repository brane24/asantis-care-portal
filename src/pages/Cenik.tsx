import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Cenik = () => {
  const healthPackages = [
    {
      name: "Srce & Presnova",
      description: "Preventiva, energija in dolgoročno zdravje",
      price: 39,
      period: "mesec",
      features: [
        "Internistični preventivni pregled",
        "Laboratorijske preiskave (sladkor, maščobe, jetra, ščitnica)",
        "EKG",
        "Kontrolni posvet",
        "Pisni zdravstveni načrt",
        "Popusti na dodatne preiskave"
      ],
      link: "/storitve/srce-presnova"
    },
    {
      name: "Ženska 360",
      description: "Celostna skrb za žensko zdravje",
      price: 65,
      period: "mesec",
      popular: true,
      features: [
        "Ginekološki pregled + PAP + UZ",
        "Klinični pregled dojk",
        "Hormonski / internistični pregled",
        "Osnovni dermatološki pregled",
        "Online posvet",
        "Popusti na dodatne storitve"
      ],
      link: "/storitve/zenska-360"
    },
    {
      name: "FreeMove",
      description: "Bolečina & gibanje",
      price: 69,
      period: "mesec",
      features: [
        "Ortopedski pregled",
        "Funkcionalna fizioterapevtska ocena",
        "6-8 fizioterapevtskih obravnav",
        "Kontrolni pregled",
        "Individualni program vaj",
        "Popusti na dodatne terapije"
      ],
      link: "/storitve/freemove"
    },
    {
      name: "MindCare",
      description: "Duševno zdravje, fokus in ravnovesje",
      price: 99,
      period: "mesec",
      pricePrefix: "od ",
      features: [
        "Začetni psihiatrični pregled",
        "4 kontrolni posveti",
        "8-10 psihoterapevtskih srečanj",
        "Možnost hitrih online posvetov",
        "Posebne cene za TMS terapijo"
      ],
      link: "/storitve/mindcare"
    },
    {
      name: "Skin & Estetika",
      description: "Zdrava koža, preventiva in estetske rešitve",
      price: 49,
      period: "mesec",
      features: [
        "Dermatološki pregled znamenj",
        "Digitalna dermatoskopija",
        "Kontrolni pregled",
        "Popusti na odstranjevanje sprememb",
        "Popusti na laser in pomlajevanje"
      ],
      link: "/storitve/skin-estetika"
    },
    {
      name: "Kids & Family",
      description: "Privat pediater za vašo družino",
      price: 39,
      period: "mesec / otrok",
      features: [
        "Letni preventivni pregled",
        "2 akutna pregleda",
        "Online posveti za starše",
        "Prioritetno naročanje",
        "Popust za več otrok"
      ],
      link: "/storitve/kids-family"
    }
  ];

  const dentalPackages = [
    {
      name: "Dental Care BASIC",
      description: "Osnova zdravega nasmeha",
      price: 29,
      period: "mesec",
      features: [
        "Preventivni zobozdravstveni pregled",
        "Odstranjevanje zobnega kamna + poliranje",
        "RTG po indikaciji",
        "Popusti na plombe in posege",
        "Prednostno naročanje"
      ],
      link: "/storitve/zobozdravstvo"
    },
    {
      name: "Dental Care PLUS",
      description: "Več preventive + manjši poseg vključen",
      price: 49,
      period: "mesec",
      features: [
        "2× preventivni pregled",
        "2× zobni kamen",
        "1 manjša plomba vključena",
        "Višji popusti na estetske posege",
        "Višji popusti na protetične posege"
      ],
      link: "/storitve/zobozdravstvo"
    }
  ];

  const faqItems = [
    {
      question: "Ali lahko kadarkoli prekličem naročnino?",
      answer: "Da, naročnino lahko prekličete kadarkoli brez dodatnih stroškov. Preklic začne veljati ob koncu tekočega obračunskega obdobja."
    },
    {
      question: "Ali ponujate brezplačno preizkusno obdobje?",
      answer: "Prvi mesec je pri izbranih paketih ponujen po posebni uvedbeni ceni. Kontaktirajte nas za več informacij."
    },
    {
      question: "Kaj če potrebujem več storitev kot je vključenih v paketu?",
      answer: "Vsi člani prejemajo ugodne popuste na dodatne storitve. Pakete lahko tudi nadgradite ali kombinirate."
    },
    {
      question: "Kako poteka plačilo?",
      answer: "Plačilo poteka varno preko Stripe platforme z mesečnim obračunom. Sprejemamo vse glavne kreditne kartice."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Pregledni paketi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cenik in paketi
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ena članarina. Jasna vrednost. Brez presenečenj.
            Izberite paket glede na svoje potrebe.
          </p>
        </div>
      </section>

      {/* Health Packages */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Osnovni zdravstveni paketi</h2>
          <p className="text-lg text-muted-foreground">
            Celostna skrb za vse vidike vašega zdravja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {healthPackages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative flex flex-col hover:shadow-soft transition-all duration-300 ${
                pkg.popular ? 'border-primary shadow-soft' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-secondary border-0">
                  ⭐ Najbolj izbran
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
                <div className="pt-4">
                  <div className="flex items-baseline">
                    {pkg.pricePrefix && (
                      <span className="text-lg text-muted-foreground mr-1">
                        {pkg.pricePrefix}
                      </span>
                    )}
                    <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {pkg.price}€
                    </span>
                    <span className="text-muted-foreground ml-2">/ {pkg.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <NavLink to={pkg.link}>Izberi paket</NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Dental Packages */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zobozdravstvo</h2>
            <p className="text-lg text-muted-foreground">
              Ločeno, a povezano – za vaš zdrav nasmeh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dentalPackages.map((pkg) => (
              <Card key={pkg.name} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {pkg.price}€
                      </span>
                      <span className="text-muted-foreground ml-2">/ {pkg.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant="outline">
                    <NavLink to={pkg.link}>Izberi paket</NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pogosta vprašanja</h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <Card key={item.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Imate dodatna vprašanja?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Naša ekipa vam z veseljem pomaga izbrati pravi paket za vaše potrebe.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/kontakt">Kontaktirajte nas</NavLink>
            </Button>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Cenik;
