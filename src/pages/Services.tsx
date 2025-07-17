import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, Wrench, PaintBucket, Trees, Truck } from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Bauarbeiten",
      description: "Neubau und Renovierungsprojekte aller Art",
      features: ["Neubauten", "Renovierungen", "Bauliche Veränderungen", "Fundamentarbeiten"]
    },
    {
      icon: PaintBucket,
      title: "Küche & Bad",
      description: "Komplette Küchen- und Badrenovierungen",
      features: ["Küchenbau", "Badrenovierungen", "Keramik & Naturstein", "Moderne Armaturen"]
    },
    {
      icon: Hammer,
      title: "Bodenbeläge",
      description: "Professionelle Bodenverlegung und -renovierung",
      features: ["Parkettverlegung", "Vinylböden", "Laminatböden", "Bodenrestaurierung"]
    },
    {
      icon: Wrench,
      title: "Komplette Renovierungen",
      description: "Vollständige Wohnungs- und Immobilienrenovierungen",
      features: ["Komplette Wohnungsrenovierungen", "Immobilienwartung", "Inneneinrichtung", "Projektkoordination"]
    },
    {
      icon: Trees,
      title: "Landschaftsbau",
      description: "Professionelle Garten- und Außenarbeiten",
      features: ["Gartengestaltung", "Landschaftsbau", "Außenanlagenpflege", "Saisonale Dienste"]
    },
    {
      icon: Truck,
      title: "Zusätzliche Dienste",
      description: "Entrümpelung, Entsorgung und Warenhandel",
      features: ["Entrümpelung", "Abfallentsorgung", "Materialversorgung", "Handelsdienste"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Von Bauarbeiten bis zur Renovierung - wir bieten das komplette Spektrum an Bauleistungen
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg py-2 px-4">günstig</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">unkompliziert</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">zuverlässig</Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Was wir tun
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unsere Leistungen können nicht in einen festen Rahmen gefasst werden, da es auf Ihre Vorstellungen und Wünsche ankommt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-professional transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-construction-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Bereit, Ihr Projekt zu starten?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Als eingespieltes Team führen wir unsere Arbeiten stets sauber, kompetent und zuverlässig durch.
          </p>
          <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90 text-lg px-8 py-3">
            <NavLink to="/contact">Kontakt aufnehmen</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;