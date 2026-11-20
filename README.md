# NITRO React Router Website

A responsive multi-page React website based on the supplied NITRO Figma references.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Install and run
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Routes
- `/` — Home hero section
- `/shop` — five-product NITRO product lineup
- `/about` — Since 2002 section
- `/gallery` — responsive product gallery
- `/contact` — contact form UI
- unknown routes — 404 page

## Project structure
```text
src/
  components/
    SiteLayout.jsx
    SiteLayout.css
    ProductShowcase.jsx
    ProductShowcase.css
    SinceSection.jsx
    SinceSection.css
  pages/
    Home.jsx
    Home.css
    Shop.jsx
    About.jsx
    Gallery.jsx
    Contact.jsx
    NotFound.jsx
    SimplePage.css
  styles/
    global.css
  App.jsx
  main.jsx
public/
  nitro-can.jpg
  nitro-football-bg.jpg
  products/
    nitro-eng.png
    nitro-red.png
    nitro-green.png
    nitro-sky.png
    nitro-blue.png
```

## React Router notes
`BrowserRouter` is mounted once in `src/main.jsx`. `SiteLayout` renders the shared header and an `<Outlet />`; each `NavLink` navigates to its route without a full page reload.

The contact form is frontend-only and displays a confirmation message. Connect `handleSubmit` in `src/pages/Contact.jsx` to your API or email service to receive messages.
