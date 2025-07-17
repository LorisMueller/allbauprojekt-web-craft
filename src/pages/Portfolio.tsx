import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Moderne Küchenrenovierung",
      category: "Küchenbau",
      description: "Komplette Küchenrenovierung mit modernen Geräten und Naturstein-Arbeitsplatten",
      image: "/pictures/kitchen4.jpeg"
    },
    {
      title: "Moderne Küchenrenovierung",
      category: "Küchenbau",
      description: "Komplette Küchenrenovierung mit modernen Geräten und Naturstein-Arbeitsplatten",
      image: "/pictures/kitchen5.jpeg"
    },
    {
      title: "Moderne Küchenrenovierung",
      category: "Küchenbau",
      description: "Komplette Küchenrenovierung mit modernen Geräten und Naturstein-Arbeitsplatten",
      image: "/pictures/kitchen3.jpeg"
    },
    {
      title: "Moderne Küchenrenovierung",
      category: "Küchenbau",
      description: "Komplette Küchenrenovierung mit modernen Geräten und Naturstein-Arbeitsplatten",
      image: "/pictures/kitchen1.jpeg"
    },
    {
      title: "Moderne Küchenrenovierung",
      category: "Küchenbau",
      description: "Komplette Küchenrenovierung mit modernen Geräten und Naturstein-Arbeitsplatten",
      image: "/pictures/kitchen2.jpeg"
    },
    {
      title: "Moderne Küchenrenovierung",
      category: "Küchenbau",
      description: "Komplette Küchenrenovierung mit modernen Geräten und Naturstein-Arbeitsplatten",
      image: "/pictures/kitchen6.jpeg"
    },
    {
      title: "Treppengestaltung",
      category: "Treppen",
      description: "Professionelle Treppenplanung und -gestaltung mit nachhaltigen Materialien",
      image: "/pictures/stairs1.jpeg"
    },
    {
      title: "Parkett-Installation",
      category: "Bodenbelag",
      description: "Hochwertige Parkettverlegung in Wohnimmobilie",
      image: "/pictures/floor1.jpeg"
    },
    {
      title: "Parkett-Installation",
      category: "Bodenbelag",
      description: "Hochwertige Parkettverlegung in Wohnimmobilie",
      image: "/pictures/floor2.jpeg"
    },
    {
      title: "Parkett-Installation",
      category: "Bodenbelag",
      description: "Hochwertige Parkettverlegung in Wohnimmobilie",
      image: "/pictures/floor3.jpeg"
    },
    {
      title: "Parkett-Installation",
      category: "Bodenbelag",
      description: "Hochwertige Parkettverlegung in Wohnimmobilie",
      image: "/pictures/floor4.jpeg"
    },
    {
      title: "Badezimmer-Transformation",
      category: "Badrenovierung",
      description: "Luxuriöse Badrenovierung mit Keramikfliesen und modernen Armaturen",
      image: "/pictures/bath1.jpeg"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unser Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Entdecken Sie unsere abgeschlossenen Projekte und sehen Sie die handwerkliche Qualität, die Allbauprojekt auszeichnet
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Arbeit spricht für sich
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jedes Projekt ist einzigartig und spiegelt unser Engagement für Qualität und Liebe zum Detail wider.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-professional transition-all duration-300 group">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="bg-background/90 text-base px-4 py-2">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-lg">{project.description}</p>
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
            Qualität & Individuelle Wünsche
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Einzigartige Qualität und individuelle Wünsche sind Teil unserer Überzeugung und werden von unserem Unternehmen vertreten. 
            Jedes Projekt ist so individuell und vielfältig wie die Menschen, mit denen wir arbeiten.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Abgeschlossene Projekte</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;