// The storefront. Prices and entry counts stay empty until they are set, and a
// product without a price shows as dropping soon rather than as something that
// can be bought. A category's `image` is a photo under /public for its tile;
// until one is set the tile and its products carry the category's drawn plate.
export const CATEGORIES = [
  { id: 'shirts', plate: 'tee', label: 'Shirts', image: '' },
  { id: 'hoodies', plate: 'hoodie', label: 'Hoodies', image: '' },
  { id: 'caps', plate: 'cap', label: 'Caps', image: '' },
  { id: 'decals', plate: 'decal', label: 'Decals', image: '' },
];

export const DROP = [
  { id: 'tee', name: 'SouthBound Tee', category: 'shirts', price: '' },
  { id: 'hoodie', name: 'SB Hoodie', category: 'hoodies', price: '' },
  { id: 'snapback', name: 'SB Snapback', category: 'caps', price: '' },
  {
    id: 'decal',
    name: 'SouthBound Die-Cut Decal',
    category: 'decals',

    price: '',
  },
];
