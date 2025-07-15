import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We stand for attention to detail and unlimited possibilities in every project we undertake."
    },
    {
      icon: Users,
      title: "Personal Contact",
      description: "As business owners, we not only coordinate but also work on-site, ensuring personal customer relationships."
    },
    {
      icon: Target,
      title: "Individual Solutions",
      description: "Every project is unique. We adapt our services to your specific needs and wishes."
    },
    {
      icon: Heart,
      title: "Authentic Relationships",
      description: "We don't just accept assignments - we live out authentic relationships with our customers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Allbauprojekt</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            A young company with the goal of living out relationships and authenticity with our customers
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Open to Everything
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  As the name of our company already suggests, we are not limited to specific types of work, 
                  but offer the full range for you. "Allbauprojekt" aims at carrying out construction work 
                  of all kinds including property maintenance as well as providing all related services.
                </p>
                <p>
                  We deliberately did not put a period, because construction work is just as individual 
                  and diverse as we humans are. Allbauprojekt – open to everything.
                </p>
                <p>
                  "Allbauprojekt" is a young company with the goal of not only accepting assignments 
                  but also living out relationships and authenticity with our customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=600&fit=crop"
                  alt="Construction team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-construction-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What drives us and defines our approach to every project
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

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Business owners who not only coordinate but also work hands-on with you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-professional">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                      alt="Management team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">Our Leadership Team</h3>
                    <p className="text-muted-foreground">
                      As business owners, we not only take on the coordination of the company but also 
                      lend a hand ourselves and work on-site for you. This hands-on approach ensures 
                      that every project receives the personal attention and quality it deserves.
                    </p>
                    <p className="text-muted-foreground">
                      Let our work convince you and contact us – no matter what your concern may be.
                    </p>
                    <Button asChild className="bg-hero-gradient hover:opacity-90">
                      <NavLink to="/contact">Get to Know Us</NavLink>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;