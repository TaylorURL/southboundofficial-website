<p align="center">
  <img src="public/brand/sb-mark-320.webp" width="160" alt="SouthBound" />
</p>

<h1 align="center">SouthBound</h1>

<p align="center">Merch store and giveaway site for the SouthBound truck brand.</p>

<p align="center"><a href="https://southboundofficial.website">southboundofficial.website</a> · <a href="https://www.instagram.com/southbound_offical/">Instagram</a></p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2026.44.1-0a0a0a?style=for-the-badge" alt="Version 2026.44.1" />
</p>

SouthBound sells shirts, hoodies, caps and decals to the truck crowd, and every order is an entry into the giveaway that's open at checkout. Giveaways are announced on Instagram first. The site holds the shop, the current giveaway with its countdown, the official rules and the winners.

It hasn't launched yet. Prices and the first giveaway aren't filled in, so products show as dropping soon, and the site asks search engines not to index it.

## What's on the site

- A shop split into shirts, hoodies, caps and decals, each on its own page
- The current giveaway: the prize, a countdown and how to enter
- How orders earn entries and how the winner is drawn
- A free mail-in entry, covered in the FAQ and the official rules
- A winners page where each winner gets posted with their prize

## Running it locally

```bash
npm install
npm run dev
```

Needs Node 22 or newer. There's no backend and no keys. `npm run build` builds to `dist/` and `npm run preview` serves it. `.env.example` only has `VITE_SITE_URL`, the domain used in canonical links and Open Graph tags.

Products and prices are in `src/app/constants/shop.js`, and the current giveaway is in `src/app/constants/giveaway.js`. The countdown and prize only show once both a prize and an end time are set.

## Built with

React 19, Vite 7, React Router 7, Tailwind CSS. Hosted on Vercel.

## License

Proprietary. See [LICENSE.md](LICENSE.md).

Built and maintained by [TaylorURL](https://www.taylorurl.com).
