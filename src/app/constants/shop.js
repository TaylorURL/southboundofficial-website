// The storefront. Prices and entry counts stay empty until they are set, and a
// product without a price shows as dropping soon rather than as something that
// can be bought.
export const CATEGORIES = [
  { id: 'shirts', label: 'Shirts' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 'caps', label: 'Caps' },
  { id: 'decals', label: 'Decals' },
];

export const DROP = [
  { id: 'tee', name: 'SouthBound Tee', category: 'Shirts', mark: 'wordmark', price: '' },
  { id: 'hoodie', name: 'SB Hoodie', category: 'Hoodies', mark: 'monogram', price: '' },
  { id: 'snapback', name: 'SB Snapback', category: 'Caps', mark: 'monogram', price: '' },
  {
    id: 'decal',
    name: 'SouthBound Die-Cut Decal',
    category: 'Decals',
    mark: 'wordmark',
    price: '',
  },
];
