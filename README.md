<p align="center">
  <img src="public/brand/sb-mark-320.webp" width="160" alt="SouthBound" />
</p>

<h1 align="center">SouthBound</h1>

<p align="center">
  <b>Truck merch and giveaways</b>
</p>
<p align="center">
  Shirts, hoodies, caps and decals, with every order entered into the next giveaway.<br />
  Live at <a href="https://southboundofficial.website">southboundofficial.website</a>. Follow <a href="https://www.instagram.com/southbound_offical/">@southbound_offical</a>.
</p>
<p align="center">
  <sub>Published for reading. Proprietary — see <a href="LICENSE.md">LICENSE.md</a>. Outside contributions are not accepted.</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2026.40.2-0a0a0a?style=for-the-badge" alt="Version 2026.40.2" />
  <img src="https://img.shields.io/badge/React-19-0a0a0a?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7-0a0a0a?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-0a0a0a?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/Vercel-0a0a0a?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<br />

## Pages

| Route | Holds                                                                 |
| :---- | :-------------------------------------------------------------------- |
| `/`   | The current giveaway, the drop, how entries work, winners and the FAQ |

## Stack

| Layer       | Technology                |
| :---------- | :------------------------ |
| UI          | React 19 + React Router 7 |
| Build & dev | Vite 7                    |
| Styling     | Tailwind CSS 3            |
| Footer bar  | `@taylorurl/split-rail`   |
| Hosting     | Vercel                    |
| Versioning  | CalVer                    |

## Getting started

```bash
npm install
npm run dev           # Vite dev server
npm run build         # production build to dist
```

Node 22 or newer. The site talks to no backend and holds no keys.

The giveaway lives in `src/app/constants/giveaway.js`: the countdown and the prize show only once both an end time and a prize are filled in. Products, prices and categories live in `src/app/constants/shop.js`, and a product with no price shows as dropping soon rather than as something that can be bought. The Instagram handle lives in `src/app/constants/brand.js`.

### Scripts

| Script                 | Does                                         |
| :--------------------- | :------------------------------------------- |
| `npm run dev`          | Start the Vite dev server.                   |
| `npm run build`        | Production build to `dist`.                  |
| `npm run preview`      | Serve the built output.                      |
| `npm run lint`         | Lint with ESLint.                            |
| `npm run lint:fix`     | Lint and fix what ESLint can fix on its own. |
| `npm run format`       | Format the repo with Prettier.               |
| `npm run format:check` | Check formatting without writing.            |

## How it works

- **The marks are the client's own.** The SouthBound wordmark and the SB monogram are cut from the files the client supplied and served from `public/brand/` as WebP at the widths the page draws them.
- **Nothing is sold before it has a price.** A product without one renders a disabled button, so there is no path to a checkout that does not exist yet.
- **Search engines are kept off for now.** `vercel.json` sends `X-Robots-Tag: noindex` on every response. Remove that header when the site launches.
- **Browser errors reach the studio's monitoring.** A snippet in `index.html` reports uncaught errors, rejections, failed resource loads and 5xx responses, capped at ten per page.
- **Traffic is counted without cookies.** The analytics tracker loads after the page does and carries this site's public key.

## Project structure

```
southboundofficial-website/
├── api/
│   └── version.js          the commit the running deployment was built from
├── public/
│   ├── brand/              wordmark and monogram (WebP)
│   └── release.json        the version and branch this build reports
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/     Header, Footer
│   │   │   └── ui/         Countdown, Marks, InstagramIcon
│   │   ├── constants/      brand.js, giveaway.js, shop.js
│   │   ├── sections/       Hero, Shop, HowItWorks, Winners, Faq
│   │   ├── views/          Home, NotFound
│   │   └── App.jsx
│   ├── assets/fonts/       Big Shoulders Display, Archivo, Space Mono
│   ├── main.jsx            browser entry
│   └── index.css           fonts, base layer, components
├── index.html              head metadata, JSON-LD, the error reporter, the tracker
└── vercel.json             caching, the SPA fallback, the noindex header
```
