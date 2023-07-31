import { Wine } from '../../src/types/IProducts';
import React from 'react';
import { CartItem } from '../types/cartItem';

export const addToCart = (
 item: Wine,
 cartItems: CartItem[],
 setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
 const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

 if (existingItem) {
  setCartItems(prevCartItems =>
   prevCartItems.map(cartItem =>
    cartItem.id === item.id
     ? { ...cartItem, quantity: cartItem.quantity + 1 }
     : cartItem
   )
  );
 } else {
  setCartItems(prevCartItems => [...prevCartItems, { ...item, quantity: 1 }]);
 }
};
