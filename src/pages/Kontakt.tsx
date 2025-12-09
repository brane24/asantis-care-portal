import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const Kontakt = () => {
  return <Layout>
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu smo za vas.  Pošljite nam sporočilo ali nas pokličite za več informacij. Čakamo na vas!      
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Pošljite sporočilo</CardTitle>
                <CardDescription>
                  Izpolnite obrazec in odgovorili vam bomo v najkrajšem možnem času.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ime in priimek</Label>
                    <Input id="name" placeholder="Janez Novak" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-pošta</Label>
                    <Input id="email" type="email" placeholder="janez.novak@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (opcijsko)</Label>
                    <Input id="phone" type="tel" placeholder="+386 40 123 456" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Sporočilo</Label>
                    <Textarea id="message" placeholder="Zanima me paket Ženska 360..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Pošlji sporočilo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telefon</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+386 40 123 456</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Dosegljivi med delovnim časom
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>E-pošta</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">info@asantis.si</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Odgovorimo v 24 urah
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Lokacija</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Ljubljana, Slovenija</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Lahek dostop z javnim prevozom in parkirišče
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Delovni čas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-sm">Ponedeljek - Petek: 8:00 - 20:00</p>
                  <p className="text-sm">Sobota: 9:00 - 14:00</p>
                  <p className="text-sm text-muted-foreground">Nedelja: Zaprto</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Kontakt;