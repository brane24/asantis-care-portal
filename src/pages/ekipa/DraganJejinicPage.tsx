import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const DraganJejinicPage = () => {
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
                src="https://asantis.si/wp-content/uploads/2024/11/slika-JD-1.webp" 
                alt="Dragan Jejinić, dr. med."
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Dermatologija
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Dragan Jejinić, dr. med.
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specialist dermatolog z dodatnim znanjem iz operativne in estetske dermatologije
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
                Dragan Jejinić, dr. med. je specialist dermatolog z bogatimi izkušnjami na področju operativne in estetske dermatologije. Svoje znanje in veščine je pridobival tako doma kot v tujini, kjer se je izpopolnjeval v najsodobnejših tehnikah zdravljenja kožnih bolezni in estetskih posegov.
              </p>
              
              <p>
                Pri svojem delu združuje strokovno znanje s prijaznim in individualnim pristopom do vsakega pacienta. Posebej se posveča zdravljenju kožnih tumorjev, estetskim posegom in celostnemu zdravju kože.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
                V kliniki ASANTIS skrbimo za vaše zdravje kože z najsodobnejšimi metodami in individualnim pristopom.
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default DraganJejinicPage;
