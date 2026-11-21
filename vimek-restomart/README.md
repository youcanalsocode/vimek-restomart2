# Vimek Restomart (Angular 19, frontend only)

    npm install
    npm start          # http://localhost:4200
    npm run build      # output: dist/vimek-restomart/browser

## Edit content (no code changes needed)
Everything lives in `src/app/data/`:
- `site.data.ts`: phone, WhatsApp, email, address, hours, service area, hero slides, features, delivery steps, segments served
- `products.data.ts`: categories and items (no prices). Add `image: 'https://...'` to an item to show a real photo.
Empty email/address/hours/serviceArea are hidden automatically.

## Deploy on Vercel
Import the repo; `vercel.json` already sets build command, output directory and SPA rewrites.

## SEO
Per-page title and description, Open Graph tags, JSON-LD Organization, robots.txt and sitemap.xml are included.
For stronger indexing, add prerendering later: `ng add @angular/ssr`.
