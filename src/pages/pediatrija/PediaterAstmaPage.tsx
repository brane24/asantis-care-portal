import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Stethoscope, Heart, Calendar, Baby, Wind, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const PediaterAstmaPage = () => {
  const symptoms = [
    "Pogost ali dolgotrajen kašelj, zlasti ponoči ali po naporu",
    "Piskanje pri dihanju",
    "Težko dihanje, občutek tiščanja v prsih",
    "Kratka sapa med igro ali športom",
    "Simptomi se poslabšajo ob prehladih ali stiku z alergeni"
  ];

  const diagnostics = [
    "Pogovor in klinični pregled otroka",
    "Spirometrija (meritev pljučne funkcije)",
    "Alergološko testiranje",
    "Po potrebi RTG pljuč ali laboratorijske preiskave",
    "Dnevnik simptomov in spremljanje odziva na terapijo"
  ];

  const treatmentTypes = [
    "Vzdrževalna terapija (inhalatorji, kortikosteroidi)",
    "Izogibanje sprožilcem (alergeni, dim, okužbe)",
    "Redne kontrole pri pediatru vsakih 3–6 mesecev",
    "Izobraževanje staršev o pravilni uporabi inhalatorjev"
  ];

  const benefits = [
    { icon: Calendar, text: "Brez čakalnih dob" },
    { icon: Stethoscope, text: "Strokovnjaki z izkušnjami pri otroški pulmologiji" },
    { icon: Heart, text: "Celostna obravnava – od diagnostike do terapije" },
    { icon: Baby, text: "Prijazen pristop do otrok in staršev" },
    { icon: Activity, text: "Možnost paketne preventive za stalno spremljanje" }
  ];

  const faqs = [
    {
      question: "Kako pogosto mora otrok na kontrolo pri astmi?",
      answer: "Ob začetku zdravljenja na 1–3 mesece, nato po stabilizaciji 2× letno ali po potrebi."
    },
    {
      question: "Ali astma pri otroku mine?",
      answer: "Pri mnogih otrocih se simptomi z leti zmanjšajo ali popolnoma izzvenijo, a zahteva redno spremljanje."
    },
    {
      question: "Ali lahko otrok z astmo obiskuje športne aktivnosti?",
      answer: "Da, z ustreznim nadzorom in terapijo večina otrok lahko varno sodeluje v športu."
    }
  ];

  const relatedServices = [
    { title: "Otroški pulmolog Ljubljana", path: "/pediatrija/pediater-pulmolog" },
    { title: "Okužba dihal pri otroku", path: "/pediatrija/okuzba-dihal-pri-otroku" },
    { title: "Privat pediater Ljubljana", path: "/pediatrija/privat-pediater-ljubljana" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const medicalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asantis - Obravnava astme pri otroku",
    "description": "Celostna diagnostika in zdravljenje astme pri otrocih v Ljubljani",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "medicalSpecialty": "Pediatric Pulmonology"
  };

  return (
    <Layout>
      <Helmet>
        <title>Obravnava astme pri otroku – otroški pulmolog Ljubljana | Asantis</title>
        <meta 
          name="description" 
          content="Težko dihanje, kašelj ali piskanje pri otroku? Naši pediatri in otroški pulmolog v Ljubljani poskrbijo za celostno diagnostiko in zdravljenje astme. Naročite se še danes." 
        />
        <meta name="keywords" content="astma pri otroku, obravnava astme, pediater Ljubljana, otroški pulmolog, zdravljenje astme, kašelj pri otroku, piskanje pri dihanju, inhalator otrok, alergolog za otroke" />
        <link rel="canonical" href="https://asantis.si/pediatrija/pediater-astma-pri-otroku" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalServiceSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wind className="w-4 h-4" />
              Pediatrična pulmologija
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Obravnava astme pri otroku
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Podpora otrokom z dihalnimi težavami – strokovno, mirno in brez čakanja
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Astma je ena najpogostejših kroničnih bolezni dihal pri otrocih. V Asantis centru v Ljubljani 
              nudimo celostno obravnavo otroške astme – od prvih simptomov do dolgotrajnega nadzora in 
              spremljanja bolezni.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="w-5 h-5 mr-2" />
              Naročite pregled
            </Button>
          </div>
        </div>
      </section>

      {/* When to Suspect Asthma */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Kdaj posumiti na astmo pri otroku
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Astmo pogosto spremljajo ponavljajoči se simptomi, ki se lahko zamenjajo za običajen prehlad ali alergijo.
            </p>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Najpogostejši znaki:</h3>
              <div className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{symptom}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-foreground font-medium">
                  👉 Če se simptomi ponavljajo več kot 2–3× letno, priporočamo posvet s pediatrom ali otroškim pulmologom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Diagnostika astme pri otroku
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              V našem centru opravimo celostno diagnostiko
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {diagnostics.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20 text-center">
              <p className="text-foreground">
                💡 <strong>Zgodnja diagnoza</strong> omogoča boljši nadzor nad boleznijo in preprečevanje napadov astme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Zdravljenje in dolgoročno spremljanje
            </h2>
            <p className="text-muted-foreground text-center mb-4">
              Zdravljenje je vedno individualno prilagojeno – cilji so:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-primary/5 rounded-xl p-6 text-center border border-primary/20">
                <p className="text-foreground font-medium">Zmanjšati simptome in število poslabšanj</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 text-center border border-primary/20">
                <p className="text-foreground font-medium">Omogočiti otroku normalno telesno aktivnost</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 text-center border border-primary/20">
                <p className="text-foreground font-medium">Zmanjšati potrebo po urgentnih obiskih</p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Vrste zdravljenja:</h3>
              <div className="space-y-4">
                {treatmentTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Asantis */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
              Zakaj izbrati Asantis
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Lokacija: Asantis – zasebni pediatrični center, Ljubljana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
              Pogosta vprašanja
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Naročite svoj termin
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Hitro do pregleda – brez čakalnih vrst.<br />
              Rezervirajte termin pri našem pediatru ali otroškem pulmologu v Ljubljani.
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mb-6">
              <Phone className="w-5 h-5 mr-2" />
              Naročite termin
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a href="tel:+38612345678" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                01 / xxx xx xx
              </a>
              <a href="mailto:info@asantis.si" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                info@asantis.si
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Sorodne storitve
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path}
                  className="bg-card rounded-xl p-6 shadow-md border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center group"
                >
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PediaterAstmaPage;
