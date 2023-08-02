import React, { useState, useContext, createContext, ReactNode } from "react";
import { Wine } from "../types/IProducts";
import { CartItem } from "../types/cartItem";

// type CartItemData = {
//     id: number;
//     name: string;
//     image: string;
//     price: number;
//     quantity: number;
// };

type CartContextData = {
    cartItems: CartItem[];
    addToCart: (item: Wine) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextData>({} as CartContextData);

type CartProviderProps = {
    children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: Wine) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            setCartItems((prevItems) =>
                prevItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        }
    };

    const increaseQuantity = (productId: number) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        );
    };

    const decreaseQuantity = (productId: number) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            )
        );
    };

    const removeProduct = (productId: number) => {
        setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== productId));
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeProduct }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
