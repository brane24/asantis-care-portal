import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Activity, Brain, Smile, Baby, Users, CheckCircle, ArrowRight, Sparkles, CircleDot, Scale, Scan } from "lucide-react";
const Index = () => {
  const services = [{
    icon: Heart,
    title: "Srce & Ožilje",
    description: "Celosten program za srce, ožilje in presnovo z mesečno strokovno podporo.",
    price: "39",
    link: "/paketi/srce-ozilje",
    color: "text-red-500"
  }, {
    icon: Users,
    title: "Ženska 360",
    description: "Najcelovitejši ženski zdravstveni paket: ginekologija, dojke, koža, hormoni, ščitnica.",
    price: "39",
    link: "/paketi/zenska-360",
    color: "text-pink-500",
    popular: true
  }, {
    icon: Activity,
    title: "FreeMove",
    description: "Gibanje & Regeneracija – celostna ortopedska in fizioterapevtska obravnava.",
    price: "49",
    link: "/paketi/freemove",
    color: "text-emerald-500"
  }, {
    icon: Brain,
    title: "MindCare",
    description: "Osebni psihiater, stalna podpora in načrt zdravljenja — brez čakalnih vrst.",
    price: "69",
    link: "/paketi/mindcare",
    color: "text-purple-500"
  }, {
    icon: Smile,
    title: "SkinCare Medical",
    description: "Medicinski dermatološki paket za akne, znamenja in problematično kožo.",
    price: "49",
    link: "/paketi/skincare-medical",
    color: "text-amber-500"
  }, {
    icon: Baby,
    title: "Kids & Family",
    description: "Privat pediater za vašo družino, ko ga najbolj potrebujete.",
    price: "39",
    link: "/paketi/kids-family",
    color: "text-green-500"
  }, {
    icon: Sparkles,
    title: "Estetika & Vitalnost",
    description: "Estetsko pomlajevanje, kožna diagnostika in svetovanje o vitalnosti.",
    price: "79",
    link: "/paketi/estetika-vitalnost",
    color: "text-rose-500"
  }, {
    icon: CircleDot,
    title: "Zobni Plus",
    description: "Celosten zobni paket z diagnostiko, 3D skenom in prednostnimi termini.",
    price: "29",
    link: "/paketi/zobni-plus",
    color: "text-cyan-500"
  }, {
    icon: Scale,
    title: "Slim+ Medikacija",
    description: "Izguba teže pod zdravniškim nadzorom z GLP-1 terapijo in celostno podporo.",
    price: "129",
    link: "/paketi/hujsanje",
    color: "text-orange-500"
  }];
  const benefits = ["Prednostno naročanje brez čakalnih dob", "Online posveti kadarkoli potrebujete", "Letni preventivni pregledi vključeni", "Popusti na dodatne storitve in terapije", "Osebni zdravstveni načrt", "Multidisciplinarna ekipa strokovnjakov"];
  return <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Medicinski center nove generacije
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Celostna zdravstvena oskrba.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                En mesečni znesek. Brez skrbi.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Preventiva, specialisti in terapije – organizirano, pregledno in dolgoročno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <NavLink to="/cenik">
                  Izberi svoj paket <ArrowRight className="ml-2 h-5 w-5" />
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
            Naše storitve in paketi za vas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vsaka storitev je skrbno zasnovana z jasnimi paketi, 
            ki pokrivajo vse potrebe od preventive do terapije.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <NavLink key={service.title} to={service.link} className="block">
              <Card className="relative hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer h-full" style={{
            animationDelay: `${index * 100}ms`
          }}>
                {service.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-secondary border-0">
                    ⭐ Najbolj izbran
                  </Badge>}
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 mx-auto ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {service.price}€
                    </span>
                    <span className="text-muted-foreground ml-2">/ mesec</span>
                  </div>
                  <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                    Več o paketu <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </NavLink>)}
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
              {benefits.map((benefit, index) => <div key={benefit} className="flex items-start space-x-3 animate-slide-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>)}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <NavLink to="/o-nas">Spoznajte našo ekipo</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pogosta vprašanja o paketih
            </h2>
            <p className="text-lg text-muted-foreground">
              Vse, kar morate vedeti o zdravstvenih paketih Asantis
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Zakaj bi izbral paket in ne posamičnih storitev?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ker se zdravstveno stanje spreminja skozi leto. Paket vam omogoča stalno spremljanje in pravočasne kontrole, kar znižuje tveganja, pospeši napredek in je dolgoročno ceneje kot kupovanje posameznih pregledov.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Ali bom paket sploh izkoristil? Ne želim plačevati nečesa, česar ne bom potreboval.
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Paketi so oblikovani glede na realne potrebe posameznika. Večina vključuje 1–2 ključna pregleda + dodatne obravnave, ki jih večina uporabnikov potrebuje vsako leto. Ničesar ni "preveč".
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Ali lahko združim dva paketa?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Da. Večina ljudi ima težave le z 1–2 zdravstvenima področjema. Pakete lahko kombinirate (npr. Ženska 360 + Skin, FreeMove + Hujšanje), pogosto le začasno.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Kaj pa, če bom želel paket pozneje zamenjati ali prekiniti?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Paketi so fleksibilni. Brez ponovnih administracij lahko zamenjate paket, dodate začasnega, zmanjšate ali povečate intenzivnost, ali nadaljujete le z osnovnimi pregledi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Ali lahko znotraj paketa menjam zdravnike ali terapevte?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Da, v okviru razpoložljivosti. Vedno poskrbimo za kontinuiteto obravnave.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Kaj pa dodatne preiskave? So vključene?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Osnovne storitve so vključene. Napredne ali nadstandardne preiskave so na voljo s paketnim popustom, kar je ceneje kot samostojni nakup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Kaj če trenutno nimam večjih zdravstvenih težav?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ravno takrat je paket najbolj smiseln. Cilj je preventiva, da težave sploh ne nastanejo — ne čakanje na poslabšanje.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Ali lahko paket koristi celotna družina?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Vsak član ima svoj paket, lahko pa združite več družinskih paketov (npr. Kids & Family + Zobni Plus).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Koliko časa traja paket?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Paket traja 12 mesecev, storitve pa so časovno razporejene tako, da imate pregled, terapijo ali posvet v optimalnem trenutku.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Ali je paket res finančno ugodnejši?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Da. Povprečno je skupna vrednost storitev v enem letu 35–60% višja od cene paketa. Poleg tega dobite prednostno naročanje in stalno dostopnost, česar posamični pregledi ne ponujajo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
    </Layout>;
};
export default Index;