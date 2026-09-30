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

// The bar's own row, on screens wide enough to hold it.
export const NAV = [
  { href: '/#giveaway', label: 'Giveaway' },
  { href: '/#shop', label: 'Shop' },
  { href: '/#how', label: 'How It Works' },
  { href: '/#faq', label: 'FAQ' },
];

// Everything the menu opens onto, in the order a visitor looks for it.
export const MENU = [
  { href: '/', label: 'Home' },
  { href: '/#shop', label: 'Shop Now' },
  { href: '/#giveaway', label: 'Current Giveaway' },
  { href: '/rules', label: 'Official Rules' },
  { href: '/#winners', label: 'Past Winners' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const LEGAL = [
  { href: '/rules', label: 'Official Rules' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
];
