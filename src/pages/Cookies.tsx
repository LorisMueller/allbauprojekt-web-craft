import Navigation from "@/components/Navigation";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Cookie- und Tracking-Hinweis</h1>
          <p className="text-sm text-muted-foreground mb-8">Stand: 2. März 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie helfen dabei, eine
                Website technisch bereitzustellen und nutzerfreundlich zu betreiben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Welche Cookies wir verwenden</h2>
              <p>
                Diese Website verwendet aktuell nur technisch notwendige Funktionen für den Betrieb der Website. Es werden
                derzeit keine Analyse-, Marketing- oder Profiling-Cookies eingesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Server-Logdaten</h2>
              <p>
                Beim Aufruf der Website können technisch notwendige Logdaten (z. B. IP-Adresse, Zeitstempel, aufgerufene
                URL, Browsertyp) zur Sicherstellung von Stabilität und Sicherheit verarbeitet werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Einstellungen im Browser</h2>
              <p>
                Sie können Cookies in Ihrem Browser einschränken oder löschen. Bei der Deaktivierung notwendiger Cookies
                kann die Funktionalität der Website eingeschränkt sein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Einwilligung</h2>
              <p>
                Da aktuell keine nicht notwendigen Tracking-Cookies eingesetzt werden, wird derzeit kein separates
                Cookie-Consent-Banner angezeigt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Künftige Änderungen</h2>
              <p>
                Falls künftig Analyse-, Drittanbieter- oder Marketing-Tools eingesetzt werden, wird dieser Hinweis
                entsprechend ergänzt und angepasst.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
