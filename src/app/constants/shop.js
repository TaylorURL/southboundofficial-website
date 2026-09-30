// The storefront. Prices and entry counts stay empty until they are set, and a
// product without a price shows as dropping soon rather than as something that
// can be bought. A category's `image` is a photo under /public for its tile;
// until one is set the tile carries the brand mark.
export const CATEGORIES = [
  { id: 'shirts', label: 'Shirts', mark: 'wordmark', image: '' },
  { id: 'hoodies', label: 'Hoodies', mark: 'monogram', image: '' },
  { id: 'caps', label: 'Caps', mark: 'monogram', image: '' },
  { id: 'decals', label: 'Decals', mark: 'wordmark', image: '' },
];

export const DROP = [
  { id: 'tee', name: 'SouthBound Tee', category: 'shirts', mark: 'wordmark', price: '' },
  { id: 'hoodie', name: 'SB Hoodie', category: 'hoodies', mark: 'monogram', price: '' },
  { id: 'snapback', name: 'SB Snapback', category: 'caps', mark: 'monogram', price: '' },
  {
    id: 'decal',
    name: 'SouthBound Die-Cut Decal',
    category: 'decals',
    mark: 'wordmark',
    price: '',
  },
];
