import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
const contactSchema = z.object({
  name: z.string().min(2, "Ime mora vsebovati vsaj 2 znaka").max(100, "Ime je predolgo"),
  email: z.string().email("Vnesite veljaven email naslov").max(255, "Email je predolg"),
  phone: z.string().optional().refine(val => !val || val.length >= 9, "Telefonska številka je prekratka"),
  message: z.string().min(10, "Sporočilo mora vsebovati vsaj 10 znakov").max(1000, "Sporočilo je predolgo (max 1000 znakov)")
});
type ContactFormData = z.infer<typeof contactSchema>;
const Kontakt = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const {
        data: response,
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: data
      });
      if (error) {
        console.error("Error sending message:", error);
        toast.error("Napaka pri pošiljanju sporočila. Prosimo, poskusite znova.");
        return;
      }
      if (response?.error) {
        toast.error(response.error);
        return;
      }
      toast.success("Sporočilo uspešno poslano! Odgovorili vam bomo v najkrajšem možnem času.");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Prišlo je do napake. Prosimo, poskusite znova.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Layout>
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu smo za vas. Pošljite nam sporočilo ali nas pokličite za več informacij. Čakamo na vaš klic ali sporočilo!
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Ime in priimek</FormLabel>
                          <FormControl>
                            <Input placeholder="Janez Novak" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>E-pošta</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="janez.novak@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Telefon (opcijsko)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+386 40 123 456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="message" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Sporočilo</FormLabel>
                          <FormControl>
                            <Textarea rows={5} placeholder="Zanima me paket:" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Pošiljam...
                        </> : "Pošlji sporočilo"}
                    </Button>
                  </form>
                </Form>
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
                <p className="text-lg">+386 31 876 104</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Dosegljivi pon-pet od 8h - 20h
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
                <p className="text-lg">Poljanski nasip 44, 1000 Ljubljana</p>
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
                  <p className="text-sm text-muted-foreground">Sobota: Zaprto</p>
                  <p className="text-sm text-muted-foreground">Nedelja: Zaprto</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="container pb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Poljanski nasip 44, 1000 Ljubljana</span>
            </CardTitle>
            <CardDescription>
              Lahek dostop z javnim prevozom (avtobusne postaje Klinični center, Roška, Cukrarna ali Gornje poljane) in brezplačno na našem parkirišču pred kliniko.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.0123456789!2d14.5172!3d46.0498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329e8a8a8a8a%3A0x1234567890abcdef!2sPoljanski%20nasip%2044%2C%201000%20Ljubljana!5e0!3m2!1sen!2ssi!4v1702100000000" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Asantis Medical Center - Poljanski nasip 44, Ljubljana" className="w-full h-full" />
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>;
};
export default Kontakt;