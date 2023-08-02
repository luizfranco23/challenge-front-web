import { CartItem } from '../types/cartItem';

export function getTotalItems(cartItems: CartItem[]) {
  return cartItems.reduce(
    (total: number, item: { quantity: number }) => total + item.quantity,
    0
  );
}
