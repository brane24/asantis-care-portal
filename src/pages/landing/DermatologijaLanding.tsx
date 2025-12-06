import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Calendar, 
  Star, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users,
  Scan,
  MessageCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import asantisLogo from "@/assets/asantis-logo.svg";

const DermatologijaLanding = () => {
  const conditions = [
    "Akne in mozolji",
    "Rozacea, dermatitis, luskavica",
    "Alergije, izpuščaji, srbenje",
    "Bradavice, herpes, glivice",
    "Izpadanje las, prhljaj, glivice na nohtih",
    "Preventivni pregled pigmentnih znamenj"
  ];

  const testimonials = [
    {
      text: "Po letih težav z aknami sem po treh obiskih pri Asantis dermatologinji končno brez vnetij. Topla priporočila!",
      author: "Maja",
      age: 32
    },
    {
      text: "Znamenje sem odstranil brez čakanja, pregled je bil natančen in prijazen.",
      author: "Tomaž",
      age: 45
    }
  ];

  const pricing = [
    { service: "Osnovni dermatološki pregled", price: "60 €" },
    { service: "Dermatoskopski pregled znamenj", price: "40 €" },
    { service: "Odstranitev znamenja ali bradavice", price: "od 80 €" }
  ];

  const faqs = [
    {
      question: "Ali potrebujem napotnico?",
      answer: "Ne, pregled je samoplačniški. Naročite se direktno pri nas."
    },
    {
      question: "Ali je možna odstranitev znamenj na istem obisku?",
      answer: "Da, če zdravnik oceni, da je to primerno."
    },
    {
      question: "Ali izvajate tudi pregled otrok?",
      answer: "Da, dermatološki pregledi so primerni tudi za otroke."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dermatolog Ljubljana – zasebni pregled in zdravljenje kože | Asantis</title>
        <meta 
          name="description" 
          content="Dermatološki pregled brez čakalnih vrst. Akne, dermatitis, luskavica, bradavice. Strokovna obravnava v centru Asantis Ljubljana. Naročite se danes!" 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Minimal Header */}
        <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
          <div className="container flex h-16 items-center justify-between">
            <img src={asantisLogo} alt="Asantis" className="h-8" />
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Pokličite nas</span>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-hero py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Za odrasle, mladostnike in otroke z akutnimi ali kroničnimi težavami s kožo
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Dermatološki pregled in zdravljenje bolezni kože –{" "}
                <span className="text-primary">brez napotnice in brez čakanja</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Zaupajte strokovnjakom za kožo. Hitri termini, individualna obravnava, sodobna diagnostika.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg gap-2">
                  <Calendar className="h-5 w-5" />
                  Rezervirajte termin zdaj
                </Button>
                <Button size="lg" variant="outline" className="text-lg gap-2">
                  <Phone className="h-5 w-5" />
                  Pokličite nas
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9 / 5</span>
                <span className="text-muted-foreground">Google ocena | +1000 zadovoljnih pacientov</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Imate težave s kožo, ki se ne umirijo?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Izpuščaji, akne, srbečica, luskavica ali spremembe na znamenjih?
                Dolge čakalne dobe in nejasne diagnoze lahko stanje samo poslabšajo.
                <strong className="text-foreground"> Zgodnje zdravljenje prinese hitrejše izboljšanje in lepšo kožo brez brazgotin.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Strokovna pomoč dermatologa – hitro, strokovno, diskretno
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Brez čakanja</h3>
                    <p className="text-sm text-muted-foreground">
                      Pregled brez napotnice – naročite se še danes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Scan className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Sodobna diagnostika</h3>
                    <p className="text-sm text-muted-foreground">
                      Dermatoskopski pregled znamenj, diagnoza in zdravljenje.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Izkušeni specialisti</h3>
                    <p className="text-sm text-muted-foreground">
                      Vrhunski specialisti dermatologije s sodobno opremo.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Rezervirajte termin v manj kot 1 minuti
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Najpogostejše bolezni, ki jih obravnavamo
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {conditions.map((condition) => (
                  <div key={condition} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{condition}</span>
                  </div>
                ))}
              </div>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="py-4 text-center">
                  <p className="text-sm">
                    🩺 <em>Zgodnje odkrivanje sprememb lahko prepreči resne zaplete.</em>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Kako poteka dermatološki pregled?
              </h2>
              
              <div className="space-y-6">
                {[
                  "Kratek pogovor o težavi in preteklih terapijah.",
                  "Pregled kože in dermatoskopija znamenj.",
                  "Določitev diagnoze in individualni načrt zdravljenja.",
                  "Po potrebi odstranitev znamenja ali kontrolni pregled."
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
              
              <Card className="mt-8 bg-muted/50">
                <CardContent className="py-4 flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Trajanje pregleda: 20–30 minut
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Izkušnje naših pacientov
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <MessageCircle className="h-8 w-8 text-primary/30 mb-4" />
                      <p className="italic mb-4">"{testimonial.text}"</p>
                      <p className="text-sm font-semibold">
                        – {testimonial.author}, {testimonial.age}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">Povprečna ocena: 4.9 / 5</span>
                <span className="text-muted-foreground">(Google Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Jasen cenik brez presenečenj
              </h2>
              
              <Card className="mb-8">
                <CardContent className="p-0">
                  <table className="w-full">
                    <tbody>
                      {pricing.map((item, index) => (
                        <tr key={index} className={index !== pricing.length - 1 ? "border-b" : ""}>
                          <td className="p-4">{item.service}</td>
                          <td className="p-4 text-right font-bold text-primary">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20 mb-8">
                <CardContent className="py-4 text-center">
                  <p className="text-sm">
                    💎 <em>Možnost vključitve v paket Asantis Skin+ za popuste in kontrolne preglede v ceni.</em>
                  </p>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <Button size="lg" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Rezervirajte svoj termin zdaj
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Pogosta vprašanja
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Vaša koža si zasluži najboljšo nego
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ne odlašajte – pravočasna diagnoza je ključ do zdrave kože.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg gap-2">
                  <Calendar className="h-5 w-5" />
                  Rezervirajte termin dermatologa zdaj
                </Button>
                <Button size="lg" variant="outline" className="text-lg gap-2">
                  <Phone className="h-5 w-5" />
                  Pokličite nas
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="border-t py-6">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <img src={asantisLogo} alt="Asantis" className="h-6" />
            <p>© {new Date().getFullYear()} Asantis. Vse pravice pridržane.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DermatologijaLanding;