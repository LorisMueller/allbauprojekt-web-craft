import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Building2, Users, Award } from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  const features = [
    "Attention to detail",
    "Unlimited possibilities", 
    "Personal customer contact",
    "Hands-on management",
    "Individual solutions",
    "Authentic relationships"
  ];

  const services = [
    {
      icon: Building2,
      title: "Construction & Renovation",
      description: "New construction and complete renovation projects"
    },
    {
      icon: Users,
      title: "Personal Service", 
      description: "Business owners working directly with you on-site"
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Unique quality and attention to detail in every project"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Professional construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Allbauprojekt
            </h1>
            <p className="text-xl md:text-3xl mb-8 opacity-90">
              Open to everything – unlimited possibilities
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto">
              We stand for attention to detail, unlimited possibilities, and personal customer contact. 
              Construction work as individual and diverse as we humans are.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-lg py-2 px-6">affordable</Badge>
              <Badge variant="secondary" className="text-lg py-2 px-6">uncomplicated</Badge>
              <Badge variant="secondary" className="text-lg py-2 px-6">reliable</Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                <NavLink to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
                <NavLink to="/contact">Get in Touch</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-construction-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A young company with the goal of not only accepting assignments but also living out 
              relationships and authenticity with our customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                As business owners, we not only take on the coordination of the company but also 
                lend a hand ourselves and work on-site for you.
              </p>
              <Button asChild className="bg-hero-gradient hover:opacity-90">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </div>
            
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-professional transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
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
              Our Services at a Glance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our services cannot be put into a fixed framework, as it depends on your imagination and wishes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Construction work of all kinds",
              "Kitchen construction", 
              "Ceramic and natural stone",
              "Parquet / vinyl / laminate",
              "Complete apartment renovations",
              "Gardening work",
              "Clear-outs and disposals",
              "Property maintenance"
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
              <NavLink to="/services">View All Services</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let Our Work Convince You
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us – no matter what your concern may be. We're ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              <NavLink to="/portfolio">See Our Portfolio</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
              <NavLink to="/contact">Start Your Project</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
