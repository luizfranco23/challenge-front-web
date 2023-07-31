import { Wine } from '../../src/types/IProducts';
import React from 'react';
import { CartItem } from '../types/cartItem';

export const addToCart = (
  item: Wine,
  cartItems: CartItem[],
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>,
  quantity = 1 
) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    setCartItems(prevCartItems =>
      prevCartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity } // Adiciona a quantidade fornecida ou 1 (padrão) à quantidade existente
          : cartItem
      )
    );
  } else {
    setCartItems(prevCartItems => [...prevCartItems, { ...item, quantity }]);
  }
};
