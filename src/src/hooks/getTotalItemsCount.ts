import { CartItem } from '../types/cartItem';

export function getTotalItemsCount(cardProducts: CartItem[]): number {
  const totalCount = cardProducts.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  return totalCount;
}
