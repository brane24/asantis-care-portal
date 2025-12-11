import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Cenik = () => {
  const healthPackages = [
    {
      name: "Srce & Ožilje",
      description: "Celosten program za srce, ožilje in presnovo",
      price: 39,
      period: "mesec",
      activationPrice: "169 €",
      features: [
        "Internistični pregled + laboratorij + EKG",
        "Ultrazvok žil (3 regije)",
        "1× mesečni posvet + spremljanje",
        "Dostop do zdravnika online",
        "Letni laboratorij + ocena tveganja",
        "Popusti na dodatne preiskave"
      ],
      link: "/paketi/srce-ozilje"
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
      link: "/paketi/zenska-360"
    },
    {
      name: "FreeMove",
      description: "Gibanje & Regeneracija",
      price: 49,
      period: "mesec",
      activationPrice: "99–129 €",
      features: [
        "Ortopedski pregled + funkcionalni testi",
        "2× fizioterapija mesečno (30–45 min)",
        "1× regeneracijska terapija mesečno",
        "Ortopedski nadzor vsakih 3–4 mesece",
        "Prioritetno naročanje (do 72 h)",
        "15% popust na dodatne storitve"
      ],
      link: "/paketi/freemove"
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
      link: "/paketi/mindcare"
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
      link: "/paketi/skin-estetika"
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
      link: "/paketi/kids-family"
    },
    {
      name: "Estetika & Vitalnost",
      description: "Estetsko pomlajevanje in vitalnost",
      price: 79,
      period: "mesec",
      features: [
        "Posvet z dermatologom 1x na 6 mesecev",
        "Neinvazivni estetski tretma 1x/mesec",
        "Prehransko svetovanje in program vitalnosti",
        "Popusti na botoks, filerje, laser"
      ],
      link: "/paketi/estetika-vitalnost"
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
      link: "/paketi/dental-basic"
    },
    {
      name: "Zobni Plus",
      description: "Osnovna preventiva in ohranjanje ustnega zdravja",
      price: 39,
      period: "mesec",
      features: [
        "Letni zobozdravstveni pregled",
        "Profesionalno čiščenje zobnega kamna 1x/leto",
        "2 brezplačni popravili (plombi) na leto",
        "20% popust na dodatne storitve"
      ],
      link: "/paketi/zobni-plus"
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
      link: "/paketi/dental-plus"
    }
  ];

  const servicePricing = [
    {
      category: "Plastična kirurgija",
      services: [
        { name: "Pregled pri specialistu", price: "90€ prvi / 60€ kontrola" },
        { name: "Kirurška odstranitev benigne kožne lezije", price: "200€ do 1cm / 250€ nad 1cm" },
        { name: "Vsaka naslednja lezija ob istem obisku", price: "100€" },
        { name: "Izrez maligne kožne lezije", price: "300€ - 600€" },
        { name: "Odstranitev podkožne lezije (lipom, cista, aterom)", price: "250€ do 2cm / 350€ 2-5cm / 450€ nad 5cm" },
        { name: "Histološki pregled tkiva", price: "80€ - 120€" },
        { name: "Korekcija brazgotine", price: "300€" },
        { name: "Sprostitev karpalnega kanala", price: "350€" },
        { name: "Sprostitev ulnarnega živca", price: "400€ - 700€" },
        { name: "Operacija kontraktura Dupuytren", price: "500€ - 1000€" },
        { name: "Kirurška sprostitev sprožilnega prsta", price: "250€" },
        { name: "Odstranitev gangliona - prst", price: "250€" },
        { name: "Odstranitev gangliona - zapestje", price: "400€" },
        { name: "Operativno zdravljenje de Quervainove bolezni", price: "400€" },
        { name: "Ablacija/odstranitev nohta", price: "180€" },
        { name: "Klinasta ekscizija nohtnega matriksa", price: "250€" },
        { name: "Korekcija razcepljene ušesne mečice (1 stran)", price: "200€" },
        { name: "Punkcija ganglijske ciste", price: "100€" },
      ]
    },
    {
      category: "Žilna kirurgija - terapija krčnih žil",
      services: [
        { name: "Ultrazvok krčnih žil (ena noga)", price: "120€" },
        { name: "Ultrazvok krčnih žil (obe nogi)", price: "160€" },
        { name: "Sklerozacija", price: "300€ - 600€" },
        { name: "Znotrajžilna laserska terapija (EVLT) - ena noga", price: "1500€" },
        { name: "Čezkožna laserska terapija", price: "200€ - 500€" },
      ]
    },
    {
      category: "Dermatologija",
      services: [
        { name: "Pregled specialist dermatolog", price: "90€ prvi / 60€ kontrola" },
        { name: "Pregled znamenj (do 10 znamenj)", price: "120€" },
        { name: "Pregled znamenj (nad 10 znamenj)", price: "150€" },
        { name: "Laserska odstranitev benigne lezije (do 1cm)", price: "150€" },
        { name: "Laserska odstranitev benigne lezije (nad 1cm)", price: "220€" },
        { name: "Vsaka naslednja lezija ob istem obisku", price: "80€" },
        { name: "Laserska odstranitev izrastkov na vratu/pazduhah (do 10)", price: "150€" },
        { name: "Laserska odstranitev izrastkov (10-20)", price: "250€" },
        { name: "Laserska odstranitev izrastkov (nad 20)", price: "350€" },
        { name: "Laserska terapija brazgotin - manjša", price: "150€" },
        { name: "Laserska terapija brazgotin - srednja", price: "250€" },
        { name: "Laserska terapija brazgotin - velika", price: "450€" },
        { name: "Laserska terapija brazgotin - cel obraz", price: "800€" },
      ]
    },
    {
      category: "Ginekologija",
      services: [
        { name: "Pregled + PAP test", price: "120€" },
        { name: "Pregled + PAP test + UZ", price: "150€" },
        { name: "Odvzem brisa na HPV", price: "160€" },
        { name: "Odvzem brisa na patogene bakterije", price: "150€" },
        { name: "Ginekološki ultrazvok", price: "90€" },
        { name: "Ultrazvočno vodenje nosečnosti (paket 3x UZ)", price: "260€" },
        { name: "Vstavitev/odstranitev/menjava materničnega vložka", price: "200€" },
        { name: "Laserska ginekološka terapija - prvi poseg", price: "350€" },
        { name: "Laserska ginekološka terapija - naslednji posegi", price: "200€" },
        { name: "Laserska terapija inkontinence - prvi poseg", price: "350€" },
        { name: "Laserska terapija inkontinence - naslednji posegi", price: "200€" },
      ]
    },
    {
      category: "Fizioterapija",
      services: [
        { name: "Prvi fizioterapevtski pregled + obravnava", price: "90€" },
        { name: "Mala obravnava", price: "60€" },
        { name: "Paket velikih obravnav (5x)", price: "360€" },
        { name: "Paket malih obravnav (5x)", price: "240€" },
      ]
    },
    {
      category: "Pediatrija",
      services: [
        { name: "Pregled specialist pediater/pulmolog/alergolog", price: "90€ prvi / 60€ kontrola" },
        { name: "Spirometrija (dodatno k pregledu)", price: "30€" },
        { name: "Bronhodilatatorni test (dodatno)", price: "60€" },
        { name: "Inhalacije ob težkem dihanju (dodatno)", price: "50€" },
        { name: "Metaholinski test", price: "180€" },
        { name: "Alergološko testiranje", price: "120€" },
        { name: "Ultrazvok pljuč", price: "120€" },
      ]
    },
    {
      category: "Medicinska estetika",
      services: [
        { name: "Aplikacija polnila (1ml)", price: "200€ - 300€" },
        { name: "Aplikacija botulinum toksina", price: "150€ - 300€" },
        { name: "Aplikacija tkivnega boosterja (1ml)", price: "250€" },
        { name: "Kratkopulzna laserska terapija", price: "200€ / paket 3x 480€" },
        { name: "Globoka radiofrekvenčna ablacija - posamezna", price: "600€" },
        { name: "Globoka radiofrekvenčna ablacija - paket 3x", price: "1500€" },
      ]
    },
    {
      category: "Ortopedija",
      services: [
        { name: "Prvi ortopedski pregled", price: "90€" },
        { name: "Kontrolni ortopedski pregled", price: "60€" },
        { name: "Blokada sklepa", price: "60€" },
        { name: "Kontrolni pregled z blokado", price: "90€" },
        { name: "Aplikacija hialuronske kisline v koleno", price: "200€" },
        { name: "Pregled pri ortopedu subspecialistu za hrbtenico", price: "150€" },
      ]
    },
    {
      category: "Ultrazvočna ambulanta",
      services: [
        { name: "Ultrazvok ven (krčne žile)", price: "160€" },
        { name: "Ultrazvok arterij nog", price: "160€" },
        { name: "Ultrazvok vratnih žil", price: "120€" },
        { name: "Ultrazvok mehkih tkiv in skeleta", price: "120€" },
      ]
    },
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
            Naročniški paketi
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mesečna naročnina za celovito zdravstveno oskrbo. 
            Ena članarina, jasne ugodnosti, brez presenečenj.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

      {/* Service Pricing */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cenik posameznih storitev</h2>
          <p className="text-lg text-muted-foreground">
            Vse cene v EUR. Storitve so na voljo brez čakalnih dob.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {servicePricing.map((category, index) => (
              <AccordionItem 
                key={category.category} 
                value={`item-${index}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {category.category}
                </AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[60%]">Storitev</TableHead>
                        <TableHead className="text-right">Cena</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.services.map((service, sIndex) => (
                        <TableRow key={sIndex}>
                          <TableCell className="font-medium">{service.name}</TableCell>
                          <TableCell className="text-right text-primary font-semibold">{service.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16">
        <div className="container">
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
