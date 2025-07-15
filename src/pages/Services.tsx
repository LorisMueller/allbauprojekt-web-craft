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
      title: "Construction Work",
      description: "New construction and renovation projects of all kinds",
      features: ["New buildings", "Renovations", "Structural modifications", "Foundation work"]
    },
    {
      icon: PaintBucket,
      title: "Kitchen & Bathroom",
      description: "Complete kitchen and bathroom renovations",
      features: ["Kitchen construction", "Bathroom renovations", "Ceramic & natural stone", "Modern fixtures"]
    },
    {
      icon: Hammer,
      title: "Flooring",
      description: "Professional flooring installation and renovation",
      features: ["Parquet installation", "Vinyl flooring", "Laminate flooring", "Floor restoration"]
    },
    {
      icon: Wrench,
      title: "Complete Renovations",
      description: "Full apartment and property renovations",
      features: ["Complete apartment renovations", "Property maintenance", "Interior design", "Project coordination"]
    },
    {
      icon: Trees,
      title: "Landscaping",
      description: "Professional gardening and outdoor work",
      features: ["Garden design", "Landscaping", "Outdoor maintenance", "Seasonal services"]
    },
    {
      icon: Truck,
      title: "Additional Services",
      description: "Clearing, disposal, and goods trading",
      features: ["Clear-outs", "Waste disposal", "Material supply", "Trade services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            From construction to renovation - we offer the complete range of building services
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg py-2 px-4">affordable</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">uncomplicated</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">reliable</Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our services cannot be put into a fixed framework, as it depends on your imagination and wishes.
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            As a well-coordinated team, we always carry out our work cleanly, competently, and reliably.
          </p>
          <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90 text-lg px-8 py-3">
            <NavLink to="/contact">Get in Touch</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;