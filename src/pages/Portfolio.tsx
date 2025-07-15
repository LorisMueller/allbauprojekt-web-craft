import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Kitchen Renovation",
      category: "Kitchen Construction",
      description: "Complete kitchen renovation with modern appliances and natural stone countertops",
      image: "photo-1556909114-f6e7ad7d3136"
    },
    {
      title: "Bathroom Transformation",
      category: "Bathroom Renovation",
      description: "Luxury bathroom renovation with ceramic tiles and modern fixtures",
      image: "photo-1552321554-5fefe8c9ef14"
    },
    {
      title: "Complete Apartment Renovation", 
      category: "Full Renovation",
      description: "Total apartment makeover including flooring, walls, and electrical work",
      image: "photo-1560448204-e02f11c3d0e2"
    },
    {
      title: "Parquet Flooring Installation",
      category: "Flooring",
      description: "High-quality parquet flooring installation in residential property",
      image: "photo-1558618666-fcd25c85cd64"
    },
    {
      title: "Garden Landscaping",
      category: "Landscaping",
      description: "Professional garden design and landscaping with sustainable materials",
      image: "photo-1416879595882-3373a0480b5b"
    },
    {
      title: "New Construction Project",
      category: "Construction",
      description: "Complete new building construction from foundation to finishing",
      image: "photo-1541888946425-d81bb19240f5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover our completed projects and see the quality craftsmanship that defines Allbauprojekt
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Work Speaks for Itself
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project is unique and reflects our commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-professional transition-all duration-300 group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=500&h=300&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="bg-construction-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quality & Individual Wishes
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Unique quality and individual wishes are part of our convictions and are represented by our company. 
            Every project is as individual and diverse as the people we work with.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;