import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualitätsexzellenz",
      description: "Wir stehen für Liebe zum Detail und unbegrenzte Möglichkeiten in jedem Projekt, das wir übernehmen."
    },
    {
      icon: Users,
      title: "Persönlicher Kontakt",
      description: "Als Geschäftsinhaber koordinieren wir nicht nur, sondern arbeiten auch vor Ort und gewährleisten persönliche Kundenbeziehungen."
    },
    {
      icon: Target,
      title: "Individuelle Lösungen",
      description: "Jedes Projekt ist einzigartig. Wir passen unsere Leistungen an Ihre spezifischen Bedürfnisse und Wünsche an."
    },
    {
      icon: Heart,
      title: "Authentische Beziehungen",
      description: "Wir nehmen nicht nur Aufträge an - wir leben authentische Beziehungen mit unseren Kunden."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Über Allbauprojekt</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ein junges Unternehmen mit dem Ziel, Beziehungen und Authentizität mit unseren Kunden zu leben
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Alles aus einer Hand
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Bei Allbauprojekt erhalten Sie vielseitige Leistungen aus einer Hand. Von einzelnen
                  Renovationsarbeiten bis zu umfassenden Bau- und Unterhaltsarbeiten begleiten wir Sie
                  zuverlässig und mit einem klaren Blick für das Ganze.
                </p>
                <p>
                  Unser Anspruch ist es, Projekte ganzheitlich zu denken und sauber umzusetzen. So
                  entstehen stimmige Lösungen, bei denen Qualität, Koordination und persönliche
                  Betreuung zusammenkommen.
                </p>
                <p>
                  „Allbauprojekt" ist ein junges Unternehmen mit dem Ziel, nicht nur Aufträge anzunehmen, 
                  sondern auch Beziehungen und Authentizität mit unseren Kunden zu leben.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src="/pictures/aboutus.jpg"
                  srcSet="/pictures/aboutus.jpg 1x, /pictures/aboutus.jpg 2x"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  alt="Allbauprojekt Innenausbau und Gesamtleistung"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-construction-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Was uns antreibt und unseren Ansatz bei jedem Projekt definiert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lernen Sie unsere Geschäftsführung kennen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Geschäftsinhaber, die nicht nur koordinieren, sondern auch praktisch mit Ihnen arbeiten
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-professional">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                      alt="Führungsteam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">Unser Führungsteam</h3>
                    <p className="text-muted-foreground">
                      Als Geschäftsinhaber übernehmen wir nicht nur die Koordination des Unternehmens, sondern 
                      packen auch selbst mit an und arbeiten vor Ort für Sie. Dieser praktische Ansatz gewährleistet, 
                      dass jedes Projekt die persönliche Aufmerksamkeit und Qualität erhält, die es verdient.
                    </p>
                    <p className="text-muted-foreground">
                      Lassen Sie sich von unserer Arbeit überzeugen und kontaktieren Sie uns – egal was Ihr Anliegen ist.
                    </p>
                    <Button asChild className="bg-hero-gradient hover:opacity-90">
                      <NavLink to="/contact">Uns kennenlernen</NavLink>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
