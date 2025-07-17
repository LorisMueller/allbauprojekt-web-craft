import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building2, Users, Award, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('[data-scroll-target]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Liebe zum Detail",
    "Unbegrenzte Möglichkeiten", 
    "Persönlicher Kundenkontakt",
    "Individuelle Lösungen",
    "Authentische Beziehungen"
  ];

  const services = [
    {
      icon: Building2,
      title: "Bau & Renovierung",
      description: "Neubau und komplette Renovierungsprojekte"
    },
    {
      icon: Users,
      title: "Persönlicher Service", 
      description: "Geschäftsinhaber arbeiten direkt mit Ihnen vor Ort"
    },
    {
      icon: Award,
      title: "Handwerkliche Qualität",
      description: "Einzigartige Qualität und Liebe zum Detail in jedem Projekt"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Professionelle Bauarbeiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Allbauprojekt Gmbh
            </h1>
            <p className="text-xl md:text-3xl mb-8 opacity-90">
              Ihr Traum - Unser Projekt
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto">
              Wir stehen für Liebe zum Detail, unbegrenzte Möglichkeiten und persönlichen Kundenkontakt, denn Bauarbeiten so individuell und vielfältig wie wir Menschen sind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                <NavLink to="/services">
                  Unsere Leistungen entdecken
                </NavLink>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                <NavLink to="/contact">Kontakt aufnehmen</NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={scrollToNextSection}
            className="animate-bounce text-white/80 hover:text-white transition-colors duration-2000"
            aria-label="Nach unten scrollen"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-construction-gradient" data-scroll-target>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Was uns auszeichnet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ein junges Unternehmen mit dem Ziel, nicht nur Aufträge anzunehmen, sondern auch 
              Beziehungen und Authentizität mit unseren Kunden zu leben.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="grid gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Als Geschäftsinhaber übernehmen wir nicht nur die Koordination des Unternehmens, sondern 
                packen auch selbst mit an und arbeiten vor Ort für Sie.
              </p>
              <Button asChild className="bg-hero-gradient hover:opacity-90">
                <NavLink to="/about">Mehr über uns erfahren</NavLink>
              </Button>
            </div>
            
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-professional transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Unsere Leistungen im Überblick
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unsere Leistungen können nicht in einen festen Rahmen gefasst werden, da es auf Ihre Vorstellungen und Wünsche ankommt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Küchenbau", 
              "Keramik und Naturstein",
              "Parkett / Vinyl / Laminat",
              "Wohnungsrenovierungen",
              "Gartenarbeiten",
              "Räumungen und Entsorgungen",
              "Handel mit Waren aller Art",
              "Hauswartungen"
            ].map((service, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-professional transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-4"></div>
                  <p className="font-medium text-foreground">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90 text-lg px-8 py-3">
              <NavLink to="/services">Alle Leistungen ansehen</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-hero-gradient text-primary-foreground py-20 pb-72 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lassen Sie sich von unserer Arbeit überzeugen
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktieren Sie uns – egal was Ihr Anliegen ist. Wir sind bereit, Ihre Vision zum Leben zu erwecken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              <NavLink to="/portfolio">Unser Portfolio ansehen</NavLink>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              <NavLink to="/contact">Projekt starten</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;