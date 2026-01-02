import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from 'react-router-dom';
import {
  Activity,
  Clock,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  FileText,
  Calendar,
  Shield,
  Star,
  Target,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Zap,
  Heart,
  Dumbbell,
  Move,
  RefreshCcw,
  RotateCcw,
  Bone,
  HandMetal,
  Timer,
  User,
  Percent,
  BadgeCheck,
  CircleDollarSign,
} from 'lucide-react';

const FreeMovePage = () => {
  const activationFeatures = [
    {
      icon: Stethoscope,
      title: "Ortopedski pregled + funkcionalni testi",
      description: "Celovita ocena stanja sklepov, mišic in hrbtenice"
    },
    {
      icon: Activity,
      title: "Ultrazvok (po potrebi)",
      description: "Diagnostika mehkih tkiv in sklepov"
    },
    {
      icon: Move,
      title: "Fizioterapevtska analiza",
      description: "Analiza gibljivosti in moči"
    },
    {
      icon: User,
      title: "3D ali analogna ocena drže",
      description: "Identifikacija nepravilnosti v drži"
    },
    {
      icon: Target,
      title: "Identifikacija vzrokov bolečine",
      description: "Ne le simptomi – iščemo pravi vzrok"
    },
    {
      icon: FileText,
      title: "Osebni 3-mesečni program",
      description: "Navodila za domače vaje + rehabilitacijski načrt"
    },
  ];

  const monthlyBenefits = [
    { icon: Dumbbell, text: "2× fizioterapija (30–45 min)" },
    { icon: Zap, text: "1× regeneracijska terapija (manualna / laser / tecar / udarni val)" },
    { icon: Stethoscope, text: "Ortopedski nadzor vsakih 3–4 mesece" },
    { icon: Clock, text: "Prioritetno naročanje (do 72 h)" },
    { icon: Percent, text: "20% popust na dodatne storitve" },
    { icon: RefreshCcw, text: "Prilagajanje programa glede na napredek" },
  ];

  const priceComparison = [
    { service: "Ortoped", individual: "80–100 €", package: "vključeno (vsake 3 mesece)" },
    { service: "Fizioterapija ×2", individual: "80–110 €", package: "vključeno" },
    { service: "Regeneracija", individual: "30–40 €", package: "vključena" },
  ];

  const timeline = [
    {
      step: "Korak 1",
      title: "Celostni preventivni pregled",
      description: "Ortoped + fizioterapevt + ocena tveganj + osebni načrt"
    },
    {
      step: "Korak 2",
      title: "Prvi mesec",
      description: "Intenzivna terapija + uvodna regeneracija"
    },
    {
      step: "Korak 3",
      title: "2.–12. mesec",
      description: "Redne terapije, prilagoditve, kontrole"
    },
    {
      step: "Korak 4",
      title: "Stabilizacija",
      description: "Preverjanje rezultatov, dolgoročni nadzor"
    },
  ];

  const results = [
    {
      icon: Heart,
      title: "Manj bolečin in boljše gibanje",
      description: "Hitrejše odpravljanje težav zaradi redne in usklajene obravnave."
    },
    {
      icon: Shield,
      title: "Stabilnost sklepov in preprečevanje poškodb",
      description: "Redne terapije zmanjšajo tveganja za ponovitev."
    },
    {
      icon: Zap,
      title: "Hitrejše okrevanje",
      description: "Kombinacija ortopedije + fizioterapije + regeneracije je najhitrejša pot."
    },
  ];

  const faqs = [
    {
      question: "Kaj če nimam težav vsak mesec?",
      answer: "Preventiva je razlog, da težav ne bo — to je glavni cilj programa. Redne terapije vzdržujejo gibljivost in preprečujejo ponovitev težav."
    },
    {
      question: "Zakaj naročnina, če je prvi pregled enkraten?",
      answer: "Ker je pregled diagnoza in načrt, napredek pa se gradi z rednim izvajanjem terapij in kontrol. Naročnina vam zagotovi kontinuiteto, hitrejši dostop in ugodnosti — brez obveznosti."
    },
    {
      question: "Ali lahko prenesem storitve v naslednji mesec?",
      answer: "Ne — terapije morajo biti izvedene sproti zaradi medicinskih razlogov. Kontinuirana obravnava je ključna za uspeh programa."
    },
    {
      question: "Kaj dobim v celostnem preventivnem pregledu?",
      answer: "Pregled pri ortopedu in fizioterapevtu, oceno tveganj, razlago možnosti zdravljenja ter osebni načrt terapij. To je temelj za varno in učinkovito rehabilitacijo ali preventivo."
    },
    {
      question: "Ali lahko prekinem naročnino?",
      answer: "Da. Naročnino lahko odpoveste z odpovednim rokom 30 dni. Pregled ostane samostojna storitev."
    },
  ];

  const legalTerms = [
    "Pregled (150 €) je samostojna storitev in ni pogoj za naročnino.",
    "Naročnina: brez minimalne vezave; odpoved z odpovednim rokom 30 dni.",
    "Storitve se izvajajo po strokovni indikaciji in osebnem načrtu (časovno razporejeno).",
    "Neizkoriščene storitve: se ne prenašajo v naslednji mesec, razen če je drugače dogovorjeno iz medicinskih razlogov.",
    "Neprenosljivo: članstvo ni prenosljivo na druge osebe.",
    "Plačila: avtomatska mesečna bremenitev."
  ];

  return (
    <Layout>
      <Helmet>
        <title>Gibanje & Regeneracija | Ortoped in fizioterapija | ASANTIS</title>
        <meta name="description" content="Celosten program za odpravo bolečin in stabilnost sklepov. Ortoped, fizioterapevt, regeneracija, brez čakalnih vrst. Celostni preventivni pregled + možnost naročnine. Ljubljana." />
        <meta name="keywords" content="ortopedija, fizioterapija, rehabilitacija, bolečina v hrbtenici, koleno, rama, športne poškodbe, Ljubljana" />
        <link rel="canonical" href="https://asantis.si/paketi/freemove" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-emerald-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Move className="w-4 h-4" />
              <span>Za ljudi z bolečinami v hrbtenici, kolenu, rami in športnimi poškodbami</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Gibanje & Regeneracija – celostna ortopedska in fizioterapevtska obravnava
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Hitrejše okrevanje, manj bolečin in dolgoročna stabilnost sklepov. Združujemo ortopedijo, fizioterapijo in regeneracijske terapije v en program – brez čakalnih vrst.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700 shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Začni s preventivnim pregledom
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5">
                <ChevronRight className="w-5 h-5 mr-2" />
                Preveri kaj vključuje
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Pregled vključuje ortopeda + fizioterapevta + jasno diagnostično in terapevtsko usmeritev.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PACKAGE SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Zakaj mesečni paket in ne enkratne terapije?
              </h2>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-emerald-50 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-6">
                    Večina težav mišično-skeletnega sistema ni posledica enkratne poškodbe, ampak postopnih sprememb v drži, gibljivosti in obremenitvah.
                  </p>
                  <div className="bg-white/80 rounded-xl p-6 mb-6">
                    <p className="text-lg font-medium text-foreground mb-4">
                      <span className="text-emerald-600">En obisk pomaga za nekaj dni.</span><br />
                      <span className="font-bold">Stalna obravnava pa reši vzrok.</span>
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Naš paket omogoča redno fizioterapijo, regeneracijo in ortopedski nadzor — zato so rezultati hitrejši in trajnejši.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ACTIVATION SECTION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Activation Package */}
              <Card className="border-emerald-200 bg-gradient-to-br from-white to-emerald-50 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      <span>Diagnostični start</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-600">150 €</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-6">Celostni gibalni preventivni menedžerski pregled</h3>
                  
                  <div className="space-y-3">
                    {activationFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-emerald-100/50 rounded-xl border border-emerald-200">
                    <p className="text-sm text-foreground font-medium">
                      ⚠️ Ta pregled NI uvodni posvet — je medicinska osnova za varno in učinkovito rehabilitacijo.
                    </p>
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
                      <p className="text-2xl font-bold text-primary">69 € / mesec</p>
                      <p className="text-sm text-muted-foreground">brez obvezne vezave</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-6">Naročnina – podpora za stabilno gibanje</h3>
                  
                  <div className="space-y-3">
                    {monthlyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-foreground pt-1">{benefit.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-medium text-foreground mb-2">Pogoji:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Brez minimalne vezave</li>
                      <li>• Neprenosljivo</li>
                      <li>• Ne prenaša se mesečnih terapij</li>
                      <li>• Odpoved z odpovednim rokom 30 dni</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Kaj dosežemo s programom?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <Card key={index} className="border-emerald-200 bg-gradient-to-br from-white to-emerald-50/50 text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 mx-auto">
                      <result.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{result.title}</h3>
                    <p className="text-muted-foreground text-sm">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Kako poteka pot pacienta
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="h-full bg-white border-emerald-200">
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {index + 1}
                      </div>
                      <p className="text-xs text-emerald-600 font-medium mb-1">{item.step}</p>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Zakaj je paket 3× bolj smiseln kot posamične terapije?
              </h2>
            </div>

            <Card className="overflow-hidden border-emerald-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Storitev</th>
                      <th className="px-6 py-4 text-center font-semibold">Redna cena</th>
                      <th className="px-6 py-4 text-center font-semibold bg-emerald-700">V paketu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceComparison.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'}>
                        <td className="px-6 py-4 font-medium text-foreground">{row.service}</td>
                        <td className="px-6 py-4 text-center text-muted-foreground">{row.individual}</td>
                        <td className="px-6 py-4 text-center font-medium text-emerald-600 bg-emerald-50">{row.package}</td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-100 border-t-2 border-emerald-300">
                      <td className="px-6 py-4 font-bold text-foreground">Skupni mesečni strošek</td>
                      <td className="px-6 py-4 text-center font-bold text-foreground">150–180 €</td>
                      <td className="px-6 py-4 text-center font-bold text-emerald-700 bg-emerald-200">69 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full font-medium">
                <BadgeCheck className="w-5 h-5" />
                <span>Prihranek ~65%. V paketu dobite še nadzor, plan, prioritetno obravnavo.</span>
              </div>
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
                Pogosta vprašanja in ugovori
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-border px-6">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* LEGAL TERMS SECTION */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border bg-muted/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Pravne osnove</h3>
                <ul className="space-y-2">
                  {legalTerms.map((term, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-muted-foreground">{index + 1}.</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Prvi korak k življenju brez bolečin
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              "Program, ki rešuje vzrok – ne le simptomov."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Začni s preventivnim pregledom
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-emerald-500">
                <Calendar className="w-5 h-5 mr-2" />
                Rezerviraj posvet
              </Button>
            </div>
            <p className="text-sm text-emerald-200 mt-6">
              "Ujemi prosti termin v 72 urah." | "Izboljšanje gibanja in manj bolečin že v prvih tednih."
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeMovePage;
