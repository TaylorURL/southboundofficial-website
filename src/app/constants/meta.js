// Each route's title and description, written into its own document at build
// time so a crawler and a slow phone both get them without running the bundle.
import { CATEGORIES } from '@constants/shop.js';

export const ORIGIN = 'https://southboundofficial.website';

export const META = {
  '/': {
    title: 'SouthBound | Truck Merch and Giveaways',
    description:
      'SouthBound merch for the truck crowd. Shirts, hoodies, caps and decals, with every order entered into the giveaway open at checkout.',
  },
  '/shop': {
    title: 'Shop | SouthBound Truck Merch',
    description:
      'Shop the SouthBound drop by category: shirts, hoodies, caps and decals. Every order is entered into the giveaway open at checkout.',
  },
  ...Object.fromEntries(
    CATEGORIES.map((category) => [
      `/shop/${category.id}`,
      {
        title: `${category.label} | SouthBound Truck Merch`,
        description: `${category.label} from the SouthBound drop. Every order is entered into the giveaway open at checkout.`,
      },
    ]),
  ),
  '/giveaway': {
    title: 'Current Giveaway | SouthBound Giveaways',
    description:
      'The SouthBound giveaway open right now: the prize, the time left to enter, and how an order or a free entry gets you in.',
  },
  '/how-it-works': {
    title: 'How It Works | SouthBound Giveaways',
    description:
      'Shop, check out and you are entered. How SouthBound giveaway entries work, and how the winner is drawn.',
  },
  '/winners': {
    title: 'Winners | SouthBound Giveaways',
    description: 'Every SouthBound giveaway winner and the prize they took home.',
  },
  '/faq': {
    title: 'FAQ | SouthBound Giveaways',
    description:
      'Answers on SouthBound giveaway entries, the free entry by mail, how the winner is picked and where giveaways are announced.',
  },
  '/rules': {
    title: 'Official Rules | SouthBound Giveaways',
    description:
      'Official Rules for SouthBound giveaways: who can enter, how to enter with an order or free by mail, the prize, the odds and how the winner is picked.',
  },
  '/contact': {
    title: 'Contact | SouthBound Truck Merch',
    description: 'Reach SouthBound by direct message on Instagram at @southbound_offical.',
  },
  '/privacy': {
    title: 'Privacy | SouthBound Truck Merch',
    description: 'What the SouthBound site records when you visit, and who sees it.',
  },
  '/terms': {
    title: 'Terms | SouthBound Truck Merch',
    description: 'The terms of using the SouthBound site.',
  },
};
