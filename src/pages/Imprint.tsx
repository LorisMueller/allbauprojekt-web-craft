import Navigation from "@/components/Navigation";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Impressum</h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Anbieterin</h2>
              <p>Allbauprojekt GmbH</p>
              <p>Uznacherstrasse 79</p>
              <p>8722 Kaltbrunn, Schweiz</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
              <p>Telefon: +41 79 599 33 36</p>
              <p>E-Mail: allbau.a@bluewin.ch</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Vertretungsberechtigte Person</h2>
              <p>Alain Legena</p>
              <p>Yuri Legena</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Es wird jedoch keine Gewähr für
                Richtigkeit, Vollständigkeit und Aktualität übernommen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Urheberrecht</h2>
              <p>
                Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Jede Verwertung außerhalb der Grenzen
                des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imprint;
