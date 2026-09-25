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

export const NAV = [
  { href: '/#giveaway', label: 'Giveaway' },
  { href: '/#shop', label: 'Shop' },
  { href: '/#how', label: 'How It Works' },
  { href: '/#faq', label: 'FAQ' },
];
