import React, { useEffect, useState } from 'react';
import * as S from './style';
import leftarrow from '../../img/left-arrow.png';
import { CartItem } from '../../types/cartItem';
import { MenuCartProps } from '../../types/menuCart';
import { getTotalItemsCount } from '../../hooks/getTotalItemsCount';

export const MenuCart: React.FC<MenuCartProps> = ({ showMenuClick }) => {
    const [cardProducts, setCardProducts] = useState<CartItem[]>([]);

    useEffect(() => {
        const localData = localStorage.getItem('cart');
        if (localData) setCardProducts(JSON.parse(localData));
    }, []);

    useEffect(() => {
        localStorage.setItem('card', JSON.stringify(cardProducts));
    }, [cardProducts]);

    const updateCartItems = (newCartItems: CartItem[]) => {
        setCardProducts(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    const increaseQuantity = (productId: number) => {
        const updatedCartItems = cardProducts.map((product) =>
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        );
        updateCartItems(updatedCartItems);
    };

    const decreaseQuantity = (productId: number) => {
        const updatedCartItems = cardProducts.map((product) =>
            product.id === productId
                ? product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : { ...product, quantity: 0 }
                : product
        );
        updateCartItems(updatedCartItems.filter((product) => product.quantity > 0));
    };

    const removeProduct = (productId: number) => {
        const updatedCartItems = cardProducts.filter((product) => product.id !== productId);
        setCardProducts(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems))
        console.log(cardProducts);

    };


    return (
        <>
            <S.ConteinerCart>
                <S.Cart>
                    <S.BackPage onClick={showMenuClick}>
                        <img src={leftarrow} alt="Voltar" /> WineBox({getTotalItemsCount(cardProducts)})
                    </S.BackPage>
                    {cardProducts.map((item: CartItem) => {
                        return (
                            <S.ContainerProducts key={item.id}>
                                <S.NameProduct>{item.name}</S.NameProduct>
                                <S.InformationProduct>
                                    <S.ImageProduct>
                                        <img src={item.image} alt="produto do carrinho" />
                                    </S.ImageProduct>
                                    <S.Product>
                                        <S.RemoveProduct onClick={() => decreaseQuantity(item.id)}>-</S.RemoveProduct>
                                        <S.AmountProduct>{item.quantity}</S.AmountProduct>
                                        <S.AddProduct onClick={() => increaseQuantity(item.id)}>+</S.AddProduct>
                                    </S.Product>
                                    <S.TotalPrice>R$ {(item.price * item.quantity).toFixed(2)}</S.TotalPrice>
                                    <S.deleteProduct> <button onClick={() => removeProduct(item.id)}>x</button></S.deleteProduct>
                                </S.InformationProduct>
                            </S.ContainerProducts>
                        );
                    })}
                </S.Cart>
                <S.Overlay onClick={showMenuClick} />
            </S.ConteinerCart>
        </>
    );
};
