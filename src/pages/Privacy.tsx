import Navigation from "@/components/Navigation";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Datenschutzerklärung</h1>
          <p className="text-sm text-muted-foreground mb-8">Stand: 2. März 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Verantwortliche Stelle</h2>
              <p>Allbauprojekt GmbH, Uznacherstrasse 79, 8722 Kaltbrunn, Schweiz</p>
              <p>E-Mail: allbau.a@bluewin.ch</p>
              <p>Telefon: +41 79 599 33 36</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Bearbeitete Personendaten</h2>
              <p>
                Beim Besuch dieser Website können technische Daten wie IP-Adresse, Datum/Uhrzeit, Browser-Informationen
                sowie aufgerufene Seiten in Server-Logfiles verarbeitet werden.
              </p>
              <p>
                Bei Kontaktaufnahme per Telefon oder E-Mail verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name,
                E-Mail, Telefonnummer, Inhalt der Anfrage), um Ihre Anfrage zu bearbeiten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Zweck und Rechtsgrundlagen</h2>
              <p>
                Die Datenbearbeitung erfolgt zur Bereitstellung der Website, zur Bearbeitung von Kontaktanfragen, zur
                Kommunikation mit Interessenten und Kunden sowie zur IT-Sicherheit und Stabilität.
              </p>
              <p>
                Soweit anwendbar stützen wir uns auf berechtigte Interessen, vorvertragliche Maßnahmen oder gesetzliche
                Pflichten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Weitergabe an Dritte</h2>
              <p>
                Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Leistungserbringung erforderlich ist, eine
                gesetzliche Verpflichtung besteht oder ein externer Dienstleister als Auftragsbearbeiter eingebunden ist.
              </p>
              <p>
                Für den technischen Betrieb der Website kann unser Hosting-Provider Zugriff auf technische Verbindungsdaten
                (insbesondere Server-Logdaten) erhalten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Aufbewahrung</h2>
              <p>
                Personendaten werden nur so lange gespeichert, wie es für die genannten Zwecke notwendig ist oder
                gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Ihre Rechte</h2>
              <p>
                Sie haben im Rahmen des anwendbaren Rechts insbesondere das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Bearbeitung, Widerspruch sowie Herausgabe oder Übertragung Ihrer Daten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Sicherheitsmaßnahmen zum Schutz Ihrer
                Personendaten vor unberechtigtem Zugriff, Verlust oder Missbrauch.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Tracking und externe Dienste</h2>
              <p>
                Auf dieser Website werden derzeit keine Analyse- oder Marketing-Tools (z. B. Google Analytics, Meta Pixel)
                eingesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Änderungen</h2>
              <p>
                Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt die jeweils auf dieser Website
                veröffentlichte Version.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
