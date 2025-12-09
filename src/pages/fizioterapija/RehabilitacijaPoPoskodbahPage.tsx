import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight,
  CheckCircle,
  Activity,
  Zap,
  Target,
  MessageCircle,
  Hand,
  Shield,
  TrendingUp,
  Heart
} from "lucide-react";

const RehabilitacijaPoPoskodbahPage = () => {
  const injuries = [
    "Zvin gležnja",
    "Poškodbe meniskusa",
    "Poškodbe sprednje križne vezi (ACL)",
    "Poškodbe rotatorne manšete",
    "Zlomi in imobilizacije",
  ];

  const processSteps = [
    { icon: Target, title: "Ocena stanja", description: "Ocena trenutnega stanja" },
    { icon: Hand, title: "Manualna terapija", description: "Manualna terapija za vzpostavitev gibljivosti" },
    { icon: Activity, title: "Gibalni vzorci", description: "Učenje pravilnih gibalnih vzorcev" },
    { icon: Zap, title: "Krepilne vaje", description: "Krepilne in stabilizacijske vaje" },
    { icon: TrendingUp, title: "Polna funkcija", description: "Napredovanje do polne funkcije" },
  ];

  const benefits = [
    { icon: Shield, text: "Preprečuje napačno celjenje" },
    { icon: Zap, text: "Skrajša čas okrevanja" },
    { icon: Target, text: "Zmanjša tveganje ponovitve" },
    { icon: Heart, text: "Poveča samozavest pri gibanju" },
  ];

  const faqs = [
    {
      question: "Kdaj naj začnem rehabilitacijo?",
      answer: "Pri večini poškodb čim prej – v varnem obsegu."
    },
    {
      question: "Ali morate sodelovati z ortopedom?",
      answer: "Da – komunikacijo po potrebi uredimo mi."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Rehabilitacija po poškodbah Ljubljana – strokovna fizioterapija</title>
        <meta 
          name="description" 
          content="Rehabilitacija po poškodbah sklepov, mišic, vezi in zlomih. Hitrejše okrevanje z individualnim programom. Naročite termin." 
        />
        <meta name="keywords" content="rehabilitacija po poškodbi, fizioterapija poškodba, ACL rehabilitacija, meniskus rehabilitacija, zlom rehabilitacija" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-base px-5 py-2">
              Fizioterapija – rehabilitacija
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Rehabilitacija po poškodbah –{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">varen in strokovno voden povratek v normalno gibanje</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Poškodbe mišic, kit, vezi ali sklepov zahtevajo natančno načrtovano rehabilitacijo. 
              Naša fizioterapija pospeši celjenje, okrepi pravilne gibalne vzorce in prepreči ponovitve poškodbe.
            </p>
            
            <Button size="lg" asChild className="text-lg">
              <NavLink to="/kontakt">
                📅 Naročite začetni pregled <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Injuries Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najpogostejše poškodbe
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {injuries.map((injury, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{injury}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kako poteka rehabilitacija
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="relative inline-block mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zakaj je individualna rehabilitacija ključna
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <benefit.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{benefit.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Card className="max-w-3xl mx-auto bg-gradient-hero border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Naročite začetni pregled in začnite z varno rehabilitacijo
              </h2>
              <Button size="lg" asChild>
                <NavLink to="/kontakt">
                  <MessageCircle className="mr-2 h-5 w-5" /> Rezervirajte termin
                </NavLink>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pogosta vprašanja
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default RehabilitacijaPoPoskodbahPage;
