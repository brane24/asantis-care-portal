import { Helmet } from "react-helmet";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Heart,
  FileText,
  MessageCircle,
  CalendarCheck,
  Stethoscope,
  Percent,
} from "lucide-react";

const KidsFamilyPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Kids & Family – zasebni pediatrični program | Asantis</title>
      </Helmet>

      <section className="container py-20 text-center">
        <Badge className="mb-4">💶 Cena</Badge>

        <div className="mb-8">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
            🧠 Prvi pregled
          </Badge>
          <p className="text-lg font-medium">
            Celostni preventivni pediatrični pregled
          </p>
          <p className="text-muted-foreground">
            Poglobljena začetna ocena zdravja, razvoja in tveganj
          </p>
          <p className="text-2xl font-bold mt-2">
            120 € <span className="text-sm font-normal">(enkratno)</span>
          </p>
        </div>

        <p className="text-sm text-muted-foreground mb-10">
          Po opravljenem pregledu se starši odločijo, ali želijo nadaljevati z
          naročniškim programom.
        </p>

        <h3 className="text-4xl font-bold mb-4">39 € / mesec / otrok</h3>

        <Button size="lg" asChild>
          <NavLink to="/kontakt">
            Naroči se <ArrowRight className="ml-2 h-5 w-5" />
          </NavLink>
        </Button>
      </section>
    </Layout>
  );
};

export default KidsFamilyPage;
