import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const MatejaSirsePage = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <NavLink to="/o-nas">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Nazaj na ekipo
            </NavLink>
          </Button>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img 
                src="https://asantis.si/wp-content/uploads/2024/02/Mateja-Sirse-1.jpg" 
                alt="Mateja Sirše, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Ortopedija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Mateja Sirše, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialistka ortopedske kirurgije
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <a href="tel:+38631876104">
                    <Phone className="h-4 w-4 mr-2" />
                    Pokličite nas
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:info@asantis.si">
                    <Mail className="h-4 w-4 mr-2" />
                    Pišite nam
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">O meni</h2>
              
              <p>
                Študijsko pot sem začela na Medicinski fakulteti v Mariboru. Eno leto sem študirala na Univerzi v Mainzu v Nemčiji, kjer sem pridobila dodatna znanja iz psihosomatike in športne medicine. Že kot študentka sem delala v večih bolnišnicah v tujini, tudi v specializiranih rehabilitacijskih centrih, po končani fakulteti pa nekaj časa v ambulanti družinske medicine.
              </p>
              
              <p>
                Po končani Medicinski fakulteti sem pričela z opravljanjem specializacije iz ortopedske kirurgije. Tekom specializacije sem dodatna znanja pridobivala pri večih strokovnjakih doma in po svetu, tudi na Ortopedski bolnišnici Speising na Dunaju in na privatni ortopedski kliniki v Švici.
              </p>
              
              <p>
                Zanimanje za regenerativno ortopedijo sem nadgradila z doktorskim študijem s poudarkom na raziskavah vpliva naravnih učinkovin na matične celice in obnovo hrustanca. Za svoje znanstveno-raziskovalno delo sem prejela tudi nagrado International Medis Award.
              </p>
              
              <p>
                Sem avtorica večih znanstvenih člankov in strokovnih prispevkov na konferencah in članica večih domačih in mednarodnih ortopedskih društev.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                Na prvo mesto pa vedno dajem svoje bolnike, ki jim vedno skušam nuditi najboljšo oskrbo in prijazno podporo.
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default MatejaSirsePage;
