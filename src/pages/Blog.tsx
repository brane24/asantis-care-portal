import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 načinov kako preprečiti bolezni srca",
      excerpt: "Preventiva je ključ do zdravega srca. Odkrijte, kateri dejavniki tveganja so pod vašim nadzorom in kako jih optimizirati.",
      category: "Preventiva",
      date: "15. januar 2025",
      readTime: "5 min",
      slug: "5-nacinov-kako-prepreciti-bolezni-srca"
    },
    {
      title: "Žensko zdravje: Kdaj na ginekološki pregled?",
      excerpt: "Redni ginekološki pregledi so ključni za zgodnje odkrivanje morebitnih težav. Izveste, kako pogosto jih potrebujete glede na vašo starost.",
      category: "Ženska 360",
      date: "12. januar 2025",
      readTime: "4 min",
      slug: "zensko-zdravje-kdaj-na-ginekoloski-pregled"
    },
    {
      title: "Duševno zdravje: Kako prepoznati znake izgorelosti",
      excerpt: "Izgorelost je resna težava sodobnega časa. Naučite se prepoznati zgodnje znake in kako pravočasno ukrepati.",
      category: "MindCare",
      date: "8. januar 2025",
      readTime: "6 min",
      slug: "dusevno-zdravje-kako-prepoznati-znake-izgorelosti"
    },
    {
      title: "Bolečine v hrbtenici: Vaje za vsakodnevno življenje",
      excerpt: "Enostavne vaje, ki jih lahko izvajate doma ali v službi za krepitev hrbtenice in zmanjšanje bolečin.",
      category: "FreeMove",
      date: "5. januar 2025",
      readTime: "7 min",
      slug: "bolecine-v-hrbtenici-vaje-za-vsakodnevno-zivljenje"
    },
    {
      title: "Nega kože: Kaj morate vedeti o zaščiti pred soncem",
      excerpt: "Zaščita pred UV žarki je pomembna skozi vse leto. Odkrijte, kako pravilno izbrati in uporabljati zaščitna sredstva.",
      category: "Skin & Estetika",
      date: "2. januar 2025",
      readTime: "5 min",
      slug: "nega-koze-zascita-pred-soncem"
    },
    {
      title: "Otroci in preventiva: Pomembnost rednih pregledov",
      excerpt: "Preventivni pediatrični pregledi so ključni za zdrav razvoj vašega otroka. Kaj pričakovati na pregledu?",
      category: "Kids & Family",
      date: "29. december 2024",
      readTime: "4 min",
      slug: "otroci-in-preventiva-pomembnost-rednih-pregledov"
    }
  ];

  const categories = ["Vse", "Preventiva", "Ženska 360", "MindCare", "FreeMove", "Skin & Estetika", "Kids & Family"];

  return (
    <Layout>
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Zdravstveni blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Znanje za boljše zdravje
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Koristne informacije, nasveti strokovnjakov in najnovejše spoznanja 
            s področja medicine in preventivnega zdravja.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-8 border-b">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === "Vse" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={post.slug}
              className="flex flex-col hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full group" asChild>
                  <NavLink to={`/blog/${post.slug}`}>
                    Preberi več 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container py-16">
        <Card className="bg-gradient-hero border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ostanite obveščeni
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prijavite se na naše novice in prejemajte najnovejše članke ter 
              zdravstvene nasvete direktno v vaš nabiralnik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Vaš e-naslov"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button>Prijavi se</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Blog;
