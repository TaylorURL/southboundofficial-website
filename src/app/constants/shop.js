// The storefront. Prices and entry counts stay empty until they are set, and a
// product without a price shows as dropping soon rather than as something that
// can be bought. A category's `image` is a photo for its tile and a product's
// is its own; until one is set the tile or card carries the category's drawn
// plate.
//
// Photos live under /public/shop, 640 pixels wide and cut out of their
// backgrounds so they sit on any theme's ground.
const photo = (name, height) => ({ src: `/shop/${name}-640.webp`, width: 640, height });

const CLASSIC = {
  black: photo('decal-classic-black', 274),
  blue: photo('decal-classic-blue', 270),
  red: photo('decal-classic-red', 273),
  white: photo('decal-classic-white', 272),
};

export const CATEGORIES = [
  { id: 'shirts', plate: 'tee', label: 'Shirts', image: null },
  { id: 'hoodies', plate: 'hoodie', label: 'Hoodies', image: null },
  { id: 'caps', plate: 'cap', label: 'Caps', image: null },
  { id: 'decals', plate: 'decal', label: 'Decals', image: CLASSIC.red },
];

export const DROP = [
  { id: 'tee', name: 'SouthBound Tee', category: 'shirts', price: '' },
  { id: 'hoodie', name: 'SB Hoodie', category: 'hoodies', price: '' },
  { id: 'snapback', name: 'SB Snapback', category: 'caps', price: '' },
  {
    id: 'classic-decal-black',
    name: 'SouthBound Classic Decal, Black',
    category: 'decals',
    price: '',
    image: CLASSIC.black,
  },
  {
    id: 'classic-decal-blue',
    name: 'SouthBound Classic Decal, Light Blue',
    category: 'decals',
    price: '',
    image: CLASSIC.blue,
  },
  {
    id: 'classic-decal-red',
    name: 'SouthBound Classic Decal, Red',
    category: 'decals',
    price: '',
    image: CLASSIC.red,
  },
  {
    id: 'classic-decal-white',
    name: 'SouthBound Classic Decal, White',
    category: 'decals',
    price: '',
    image: CLASSIC.white,
  },
];
