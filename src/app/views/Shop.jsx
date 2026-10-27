import Shop from '@sections/Shop.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

export default function ShopPage() {
  usePageTitle('Shop | SouthBound Truck Merch');

  return <Shop page />;
}
