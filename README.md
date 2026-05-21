# LR clinic — Website

Premium bilingual (RU / KZ) website for LR clinic — Dentistry & Aligners (Astana).

## Run locally

This is a plain HTML/CSS/JS site — no build step required.

### Option A — just open the file
Double-click `index.html`. It works directly in any modern browser.

### Option B — local server (recommended)
A small HTTP server gives you proper relative paths and works better with all browsers.

```powershell
# Python (pre-installed on most systems)
python -m http.server 5173

# or with Node.js
npx serve .
```

Then open: http://localhost:5173

## Structure

```
website/
├─ index.html        # all 11 sections
├─ styles.css        # premium minimal styling
├─ script.js         # i18n (RU/KZ), reveal animations, nav, FAQ
└─ assets/
   └─ logo.png       # LR clinic logo
```

## Editing copy

All text lives in `script.js` inside the `dict` object (two top-level keys: `ru` and `kz`). Edit the strings there — they're applied by `data-i18n` attributes in `index.html`.

## Contacts wired in

- WhatsApp: `+7 778 170 3160` (hero CTA, family CTA, sticky FAB, footer)
- Instagram, Threads, 2GIS (footer)
- Address: Astana, Askar Tokpanov street 8/5 (footer + 2GIS link)

## Design system

- **Fonts**: Cormorant Garamond (display) + Manrope (sans)
- **Palette**: warm cream `#FAFAF7`, soft beige `#F4F1EC`, taupe `#B5A89A` (matches logo), muted slate-blue `#6B8AA8`, ink `#14130F`
- **Style**: Apple-level whitespace × Swiss grid × medical trust
