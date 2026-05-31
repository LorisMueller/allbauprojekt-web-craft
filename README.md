# Allbauprojekt Web Craft

Website der **Allbauprojekt GmbH** (React + Vite + TypeScript).

## Voraussetzungen

- Node.js 18+ (empfohlen: aktuelle LTS)
- npm

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die App läuft danach lokal unter einer Vite-URL (z. B. `http://localhost:8080`).

## Produktions-Build

```bash
npm run build
```

Der Build liegt anschließend im Ordner:

- `dist/`

Optional lokal prüfen:

```bash
npm run preview
```

## Deployment auf Hostpoint

1. Build erstellen:
```bash
npm run build
```
2. Im Hostpoint Control Panel zu `Webhosting > Websites` gehen.
3. Beim Ziel-Webauftritt den **Document-Root** öffnen.
4. **Inhalt von `dist/`** in den Document-Root hochladen.

## SPA-Routing (.htaccess)

Da die Website `BrowserRouter` verwendet, muss Apache alle nicht vorhandenen Pfade auf `index.html` umleiten, damit direkte Aufrufe wie `/portfolio` funktionieren.

Im Document-Root eine `.htaccess` mit folgendem Inhalt anlegen (oder ergänzen):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## SSL

Im Hostpoint Control Panel unter `Websites > SSL-Verschlüsselung` mindestens **FreeSSL** aktivieren.

## Projektstruktur (kurz)

- `src/pages/` – Seiten (Start, Leistungen, Portfolio, Über uns, Kontakt, Rechtliches)
- `src/components/` – wiederverwendbare Komponenten (Navigation, Footer, UI)
- `public/` – statische Assets/Bilder

## Rechtliche Seiten

Die Website enthält:

- Impressum (`/impressum`)
- Datenschutzerklärung (`/datenschutz`)
- Cookie-/Tracking-Hinweis (`/cookies`)

Wichtig: Register-/UID-/MWST-Angaben im Impressum müssen mit den offiziellen Firmendaten übereinstimmen.

## Nützliche Scripts

```bash
npm run dev      # Entwicklung
npm run build    # Produktions-Build
npm run preview  # Build lokal testen
```

