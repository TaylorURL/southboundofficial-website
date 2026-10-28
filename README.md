<img src="public/brand/sb-mark-320.webp" width="160" alt="SouthBound" />

# SouthBound

Merch store and giveaway site for the SouthBound truck brand.

[southboundofficial.website](https://southboundofficial.website) · [Instagram](https://www.instagram.com/southbound_offical/)

<img src="https://img.shields.io/badge/version-2026.44.3-0a0a0a?style=for-the-badge" alt="Version 2026.44.3" />

Shirts, hoodies, caps and decals, where every order is an entry into the open giveaway. The site has the shop, the current giveaway with its countdown, how entries work, the official rules with a free mail-in entry, and the winners.

Not launched yet. Prices and the first giveaway aren't filled in, so products show as dropping soon, and `vercel.json` sends `X-Robots-Tag: noindex` on every path until then.

Products and prices are in `src/app/constants/shop.js` and the giveaway is in `src/app/constants/giveaway.js`. The Official Rules page reads the same giveaway file as the hero, so they can't disagree. An empty field stays empty. The countdown and prize only show once both a prize and an end time are set, and until then the hero points to Instagram. A placeholder date on a giveaway page would get read as a real one.

There's no API and no keys. `scripts/prerender.js` writes each route to its own document with its title, description, canonical, the stylesheet inline and the first-screen fonts preloaded. It also lifts React's image preloads out of the body and into the head.

```bash
npm install
npm run dev
npm run build    # to dist/, npm run preview serves it
```

Node 22 or newer. `VITE_SITE_URL` sets the domain for canonicals and Open Graph. React 19, React Router 7, Vite 7 and Tailwind CSS, on Vercel. Proprietary, see [LICENSE.md](LICENSE.md).

Built and maintained by [TaylorURL](https://www.taylorurl.com).
