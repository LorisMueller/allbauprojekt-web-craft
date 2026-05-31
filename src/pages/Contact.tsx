import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+41 79 599 33 36"],
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: ["allbau.a@bluewin.ch"],
    },
    {
      icon: MapPin,
      title: "Unser Standort",
      details: ["Uznacherstrasse 79", "8722 Kaltbrunn"],
    },
    {
      icon: Clock,
      title: "Arbeitszeiten",
      details: ["Mo - Sa: 7:00 - 17:00", "So: Geschlossen"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Bereit, Ihr Projekt zu starten? Nehmen Sie noch heute Kontakt mit uns auf – egal was Ihr Anliegen ist
          </p>
        </div>
      </section>

      {/* Contact Info (full width) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Kontakt aufnehmen</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Wir sind da, um bei all Ihren Bau- und Renovierungsbedürfnissen zu helfen. Kontaktieren Sie uns über eine
                der folgenden Methoden.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-construction-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Bereit, Ihr Projekt zu starten?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Lassen Sie sich von unserer Arbeit überzeugen – wir sind bereit, jede Bauaufgabe anzugehen, die Sie im Sinn
            haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-hero-gradient hover:opacity-90" asChild>
              <a href="tel:+41795993336" aria-label="Jetzt anrufen: +41 79 599 33 36">
                Jetzt anrufen: +41 79 599 33 36
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
