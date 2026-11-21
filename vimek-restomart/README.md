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
1. Push this repo to GitHub (`youcanalsocode/vimek-restomart2`).
2. In Vercel: **Add New Project** → import that repo.
3. Leave Framework as Other / configured by `vercel.json`. Do not set a Root Directory — the repo-root `vercel.json` builds the nested `vimek-restomart` app and publishes `dist/vimek-restomart/browser`.
4. Deploy. Routes (`/products`, `/contact`) rewrite to `index.html`.

If you instead set Root Directory to `vimek-restomart` in the Vercel dashboard, the nested `vercel.json` is used.

## SEO
Per-page title and description, Open Graph tags, JSON-LD Organization, robots.txt and sitemap.xml are included.
For stronger indexing, add prerendering later: `ng add @angular/ssr`.
