import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NavLink } from 'react-router-dom';
import { Heart, Activity, Clock, UserCheck, CheckCircle, ArrowRight, Stethoscope, TestTube, Zap, FileText, Calendar, Shield, Star, Users, Target, TrendingUp, Phone, AlertTriangle, Sparkles, BadgeCheck, CircleDollarSign, Scale, HeartPulse, Droplets, Syringe, ClipboardList, Timer, MessageCircle, Award, ChevronRight } from 'lucide-react';
const SrceOziljePage = () => {
  const programFeatures = [{
    icon: Stethoscope,
    title: "Internistični pregled",
    description: "Celovit pregled pri specialistu interne medicine"
  }, {
    icon: TestTube,
    title: "Razširjeni laboratorij",
    description: "Glukoza, inzulin, lipidogram, TSH, CRP, jetra, ledvice..."
  }, {
    icon: Activity,
    title: "EKG",
    description: "Elektrokardiogram za oceno srčnega ritma"
  }, {
    icon: HeartPulse,
    title: "UZ vratnih žil",
    description: "Ultrazvok karotidnih arterij"
  }, {
    icon: Droplets,
    title: "UZ arterij nog",
    description: "Ultrazvok arterij spodnjih okončin"
  }, {
    icon: Syringe,
    title: "UZ ven nog",
    description: "Ultrazvok venskega sistema nog"
  }];
  const monthlyBenefits = ["1× mesečni posvet ali kontrola (prehrana, krvni tlak, napredek, simptomi)", "Dostop do zdravnika (online)", "Popusti na UZ srca, razširjene laboratorije, specialiste", "Letni laboratorij + ocena tveganja", "Personaliziran coaching za presnovo in energijo"];
  const priceComparison = [{
    service: "Internist",
    individual: "90–120 €",
    package: "vključeno"
  }, {
    service: "Laboratorij",
    individual: "60–140 €",
    package: "vključeno"
  }, {
    service: "EKG",
    individual: "25–35 €",
    package: "vključeno"
  }, {
    service: "UZ vratnih arterij",
    individual: "80–120 €",
    package: "vključeno"
  }, {
    service: "UZ arterij nog",
    individual: "80–120 €",
    package: "vključeno"
  }, {
    service: "UZ ven nog",
    individual: "80–120 €",
    package: "vključeno"
  }, {
    service: "Osebni načrt",
    individual: "50–100 €",
    package: "vključeno"
  }, {
    service: "Mesečni posvet (12×)",
    individual: "600–840 €",
    package: "vključeno"
  }];
  const timeline = [{
    week: "1. teden",
    title: "Aktivacijski pregled",
    description: "Internist + laboratorij + EKG + ultrazvok žil"
  }, {
    week: "2. teden",
    title: "Pregled rezultatov",
    description: "Osebni zdravstveni načrt in priporočila"
  }, {
    week: "Vsak mesec",
    title: "Kontrolni posvet",
    description: "V živo ali online – spremljanje napredka"
  }, {
    week: "3.–12. mesec",
    title: "Spremljanje napredka",
    description: "Prilagoditve prehrane, gibanja in zdravljenja"
  }, {
    week: "12. mesec",
    title: "Letni pregled",
    description: "Laboratorij + ocena tveganja + zaključni plan"
  }];
  const targetAudience = [{
    icon: Users,
    text: "Starost 30–75 let"
  }, {
    icon: HeartPulse,
    text: "Osebe s povišanim krvnim tlakom, sladkorjem, holesterolom"
  }, {
    icon: Shield,
    text: "Ljudje z družinsko obremenjenostjo (infarkt, kap)"
  }, {
    icon: Activity,
    text: "Osebe s težkimi nogami, mravljinci, oteklinami"
  }, {
    icon: Scale,
    text: "Posamezniki z odvečnimi kilogrami, utrujenostjo, slabo energijo"
  }, {
    icon: Target,
    text: "Vsi, ki želijo preprečiti, ne le zdraviti"
  }];
  const testimonials = [{
    text: "Končno program, ki ni zahtevan samo enkrat letno, ampak me vodi vsak mesec.",
    author: "Marko, 52 let"
  }, {
    text: "UZ žil in laboratorij bi drugje plačal 400 €. Tukaj je vse vključeno.",
    author: "Jana, 45 let"
  }, {
    text: "Prvič imam občutek, da nekdo spremlja moje zdravje, ne le zdravi posledic.",
    author: "Peter, 61 let"
  }];
  const faqs = [{
    question: "Ali lahko opravim aktivacijo brez nakupa naročnine?",
    answer: "Ne, aktivacija je prvi korak 12-mesečnega programa. Program je zasnovan kot celota – začetna diagnostika in mesečno vodenje delujeta skupaj za najboljše rezultate."
  }, {
    question: "Zakaj naročnina traja vsaj 3 mesece?",
    answer: "Preventiva potrebuje čas. Minimalni commitment zagotavlja, da program deluje in da lahko spremljamo vaš napredek ter prilagodimo pristop."
  }, {
    question: "Kaj če zamudim mesečni posvet?",
    answer: "Prenese se 1 mesec, največ 2× letno. Poskrbimo, da ne izgubite koristi programa."
  }, {
    question: "Ali lahko opravim UZ srca?",
    answer: "Da, ultrazvok srca (ehokardiografija) je na voljo s popustom za člane programa."
  }, {
    question: "Kaj če imam simptome med meseci?",
    answer: "Člani imajo dostop do zdravnika preko online kanala za vsa vprašanja in dodatno svetovanje."
  }];
  const legalTerms = ["Program Srce & Ožilje je 12-mesečni preventivni program.", "Aktivacijska cena 169 € se plača ob prvem obisku in ni vračljiva.", "Minimalno trajanje naročnine je 3 mesece.", "Odpoved z 30-dnevnim rokom po minimalnem obdobju.", "Preventivne storitve ne nadomeščajo urgentne medicine.", "Storitve se črpajo skozi leto po presoji zdravnika."];
  return <Layout>
      <Helmet>
        <title>Srce & Ožilje – Preventivni program za srce in presnovo | ASANTIS</title>
        <meta name="description" content="Celosten 12-mesečni preventivni program za srce in ožilje. Aktivacijski pregled z internistom, laboratorijem, EKG in ultrazvoki žil + mesečna strokovna podpora." />
        <meta name="keywords" content="srce, ožilje, preventiva, ultrazvok žil, internist, EKG, holesterol, krvni tlak, Ljubljana" />
        <link rel="canonical" href="https://asantis.si/paketi/srce-ozilje" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-red-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>12-mesečni preventivni program</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              🫀 Srce & Ožilje – Celosten program za srce, ožilje in presnovo
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Preventivni pregled + ultrazvok žil + mesečna strokovna podpora. Za varno, stabilno in dolgoročno zdravo srce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Celovit začetni pregled s celotno diagnostiko</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>1× mesečni posvet + spremljanje</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold">Le 1 € na dan</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Rezerviraj aktivacijski pregled – 169 €
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5">
                <Calendar className="w-5 h-5 mr-2" />
                Postani član – 39 € / mesec
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS PROGRAM SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" />
                <span>Zakaj ukrepati zdaj?</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Zakaj več kot 60 % Slovencev odkrije bolezen srca prepozno?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Tihi simptomi</h3>
                  <p className="text-muted-foreground text-sm">Bolezni srca in ožilja se razvijajo brez jasnih znakov</p>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Skrita poslabšanja</h3>
                  <p className="text-muted-foreground text-sm">Sladkor, holesterol in ožilje se slabšajo brez opozorila</p>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Prepozno ukrepanje</h3>
                  <p className="text-muted-foreground text-sm">Zdravniki pogosto priporočajo pregled šele, ko je težava razvita</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-red-50 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Kako program Srce & Ožilje to spremeni?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Ker združi: <strong>diagnostiko + mesečno spremljanje + osebni načrt</strong>
                  </p>
                  <div className="bg-white/80 rounded-xl p-6 inline-block">
                    <p className="text-lg md:text-xl font-medium text-foreground">
                      "Ne čakajte na simptome. Zdaj lahko svoje tveganje za srčni infarkt in možgansko kap <span className="text-red-600 font-bold">znižate za 30–60 %</span>."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ACTIVATION PACKAGE SECTION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Kaj vključuje program?
              </h2>
              <p className="text-lg text-muted-foreground">
                Vse ključne storitve za varno in učinkovito preventivo srca in ožilja
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Activation Package */}
              <Card className="border-red-200 bg-gradient-to-br from-white to-red-50 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      <span>1. dan</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground line-through">300–420 €</p>
                      <p className="text-2xl font-bold text-red-600">169 €</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-6">A) Aktivacijski pregled</h3>
                  
                  <div className="space-y-3">
                    {programFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>)}
                    
                    <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Osebni zdravstveni načrt</h4>
                        <p className="text-sm text-muted-foreground">+ Ocena srčno-žilnega tveganja</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Subscription */}
              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>Mesečno</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">vrednost 50–70 €</p>
                      <p className="text-2xl font-bold text-primary">39 € / mesec</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-6">B) Mesečna naročnina</h3>
                  
                  <div className="space-y-3">
                    {monthlyBenefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-foreground">{benefit}</p>
                      </div>)}
                  </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <p className="text-center font-medium text-foreground">
                      = Le <span className="text-2xl font-bold text-primary">1 €</span> na dan za celovito preventivo
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOT EVERYTHING FOR 39€ SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Najpogostejši ugovor
                    </h3>
                    <p className="text-lg text-muted-foreground italic">
                      "Zakaj ne bi opravil vsega v prvem mesecu za 39 € in nato prekinil?"
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pl-4 border-l-4 border-primary/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">Ker program vključuje <strong>drago diagnostiko</strong> (UZ + laboratorij + internist), ki skupaj vreden 300–420 €.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground"><strong>Aktivacijski pregled</strong>Aktivacijski pregled je začetni strošek, s katerim opravimo celovito oceno zdravstvenega stanja.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">Mesečna naročnina je za strokovno vodenje in spremljanje zdravstvenega stanja, kar je bistvo preventive.<strong>strokovno vodenje in spremljanje</strong>, kar je bistvo preventive.</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-xl">
                  <p className="text-muted-foreground text-center">Z naročilom dobite izjemen začetni paket diagnostike za nizko ceno aktivacije, nato pa dobite celovito strokovno spremljanje skozi celo leto.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICE COMPARISON TABLE */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Primerjava s plačilom posamičnih storitev
              </h2>
              <p className="text-lg text-muted-foreground">
                Prihranite do 55 % v primerjavi s posameznimi storitvami
              </p>
            </div>

            <Card className="overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Storitev</th>
                      <th className="text-center p-4 font-semibold text-foreground">Posamezna cena</th>
                      <th className="text-center p-4 font-semibold text-primary">V paketu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceComparison.map((row, index) => <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/20'}>
                        <td className="p-4 text-foreground">{row.service}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.individual}</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center gap-1 text-primary font-medium">
                            <CheckCircle className="w-4 h-4" />
                            {row.package}
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-red-50 p-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Skupna vrednost</p>
                    <p className="text-xl font-bold text-foreground">1.065–1.355 €</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Cena paketa</p>
                    <p className="text-xl font-bold text-primary">169 € + 39 € × 12 = 637 €</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Prihranek</p>
                    <p className="text-xl font-bold text-red-600">428–718 € (40–55 %)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Potek programa
              </h2>
              <p className="text-lg text-muted-foreground">
                12-mesečno vodenje za optimalno preventivo
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                      <Card className="inline-block">
                        <CardContent className="p-4">
                          <p className="text-sm font-medium text-primary mb-1">{item.week}</p>
                          <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-white shadow-md z-10" />
                    
                    <div className="flex-1 pl-16 md:pl-0">
                      <Card className="md:hidden">
                        <CardContent className="p-4">
                          <p className="text-sm font-medium text-primary mb-1">{item.week}</p>
                          <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE SECTION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Za koga je program primeren?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetAudience.map((item, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground">{item.text}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                <span className="ml-2 text-lg font-semibold text-foreground">4.9 / 5</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Izkušnje naših članov
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => <Card key={index} className="bg-gradient-to-br from-white to-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-sm text-muted-foreground font-medium">– {testimonial.author}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Pogosta vprašanja
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* LEGAL TERMS SECTION */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-muted/30 border-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Pravne osnove
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  {legalTerms.map((term, index) => <li key={index}>{term}</li>)}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Začni svojo preventivo že danes
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bolje je preprečiti, kot zdraviti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Rezerviraj aktivacijski pregled – 169 €
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5">
                <Calendar className="w-5 h-5 mr-2" />
                Postani član – 39 € / mesec
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5" />
              <span>Imate vprašanja? Pokličite nas: </span>
              <a href="tel:+38631876104" className="font-semibold text-primary hover:underline">+386 31 876 104</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default SrceOziljePage;