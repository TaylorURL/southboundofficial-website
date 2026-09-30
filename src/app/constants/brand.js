// Every fact about the brand the site states lives here, so a handle or an
// address that changes is one edit.
const buildEnv = (typeof import.meta === 'object' && import.meta.env) || {};

export const BRAND = {
  name: 'SouthBound',
  url: buildEnv.VITE_SITE_URL || 'https://southboundofficial.website',
  instagram: {
    handle: 'southbound_offical',
    url: 'https://www.instagram.com/southbound_offical/',
  },
};

// The bar's three triggers and the panel each one opens: a group of
// destinations with a line on where each leads, and one card beside them.
export const NAV = [
  {
    id: 'shop',
    label: 'Shop',
    heading: 'Categories',
    items: [
      { href: '/#shop-shirts', label: 'Shirts', note: 'Tees with the SouthBound wordmark' },
      { href: '/#shop-hoodies', label: 'Hoodies', note: 'The SB hoodie' },
      { href: '/#shop-caps', label: 'Caps', note: 'The SB snapback' },
      { href: '/#shop-decals', label: 'Decals', note: 'Die-cut SouthBound decals' },
    ],
    feature: {
      title: 'Every order is an entry',
      body: 'Anything you buy enters you in the giveaway open at checkout.',
      href: '/#shop',
      cta: 'Shop All',
    },
  },
  {
    id: 'giveaway',
    label: 'Giveaway',
    heading: 'The Giveaway',
    items: [
      {
        href: '/#giveaway',
        label: 'Current Giveaway',
        note: 'The prize and the time left to enter',
      },
      { href: '/#how', label: 'How It Works', note: 'Shop, check out, and you are entered' },
      {
        href: '/rules',
        label: 'Official Rules',
        note: 'Who can enter, the free entry and the draw',
      },
      { href: '/#winners', label: 'Past Winners', note: 'Everyone who has won so far' },
    ],
    feature: {
      title: 'No purchase necessary',
      body: 'The Official Rules explain how to enter for free by mail.',
      href: '/rules',
      cta: 'Read the Rules',
    },
  },
  {
    id: 'help',
    label: 'Help',
    heading: 'Help',
    items: [
      { href: '/#faq', label: 'FAQ', note: 'Entries, free entry and the draw' },
      { href: '/contact', label: 'Contact', note: 'Ask SouthBound a question' },
      { href: '/privacy', label: 'Privacy', note: 'What the site keeps and why' },
      { href: '/terms', label: 'Terms', note: 'The terms for using the site' },
    ],
    feature: {
      title: 'Announced on Instagram first',
      body: 'Every prize reveal and countdown goes up there before anywhere else.',
      href: BRAND.instagram.url,
      cta: `@${BRAND.instagram.handle}`,
      external: true,
    },
  },
];

export const LEGAL = [
  { href: '/rules', label: 'Official Rules' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
];
