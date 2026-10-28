<img src="public/brand/sb-mark-320.webp" width="160" alt="SouthBound" />

# SouthBound

Merch store and giveaway site for the SouthBound truck brand.

[southboundofficial.website](https://southboundofficial.website) · [Instagram](https://www.instagram.com/southbound_offical/)

<img src="https://img.shields.io/badge/version-2026.44.2-0a0a0a?style=for-the-badge" alt="Version 2026.44.2" />

Shirts, hoodies, caps and decals, where every order is an entry into the open giveaway. The site holds the shop, the current giveaway with its countdown, how entries work, the official rules with a free mail-in entry, and the winners.

Not launched yet. Prices and the first giveaway aren't filled in, so products show as dropping soon. `vercel.json` sends `X-Robots-Tag: noindex` on every path until then.

## How it's built

- **No backend.** React on Vite, prerendered. No API, no keys.
- **Content is constants.** Products and prices are in `src/app/constants/shop.js`. The current giveaway is in `src/app/constants/giveaway.js`.
- **Unset means unset.** An empty giveaway field stays empty. The hero shows the countdown and prize only once both a prize and an end time are set, and points to Instagram until then. No placeholder dates or prizes, since they'd be read as real.
- **Rules and hero read the same values.** The Official Rules page pulls from the same giveaway file, so the two can't disagree.

<details>
<summary>Decisions and tradeoffs</summary>

- `scripts/prerender.js` writes every route to its own document with its own title, description and canonical, the stylesheet inline, and the first-screen fonts preloaded.
- React puts image preloads in the body. The prerender lifts them into the head so they're found first.
- `middleware.js` checks a TaylorURL status endpoint and shows a holding page if the site is paused. Fails open. `api/version.js` returns the deployed commit, uncached.

</details>

<details>
<summary>Running it locally</summary>

```bash
npm install
npm run dev
```

Needs Node 22 or newer. There's no backend and no keys. `npm run build` builds to `dist/` and `npm run preview` serves it. `.env.example` only has `VITE_SITE_URL`, the domain used in canonical links and Open Graph tags.

</details>

## Built with

React 19, Vite 7, React Router 7, Tailwind CSS. Hosted on Vercel.

<details>
<summary>License</summary>

Proprietary. See [LICENSE.md](LICENSE.md).

</details>

Built and maintained by [TaylorURL](https://www.taylorurl.com).
