import React, { useEffect } from 'react';
import * as S from './style';
import leftarrow from '../../img/left-arrow.png';
import { MenuCartProps } from '../../types/menuCart';
import { useCart } from '../../contexts/CartContext';
import { getTotalItems } from '../../hooks/getTotalItems';

export const MenuCart: React.FC<MenuCartProps> = ({ showMenuClick }) => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeProduct } = useCart();

    const totalItemsQuantity = getTotalItems(cartItems)

    useEffect(() => {
        localStorage.setItem('totalItemsQuantity', totalItemsQuantity.toString());
    }, [cartItems, totalItemsQuantity]);

    return (

        <S.ConteinerCart>
            <S.Cart>
                <S.BackPage onClick={showMenuClick}>
                    <img src={leftarrow} alt="Voltar" /> WineBox {`(${totalItemsQuantity})`}
                </S.BackPage>
                {cartItems.map((item) => {
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
                                <S.deleteProduct>
                                    <button onClick={() => removeProduct(item.id)}>x</button>
                                </S.deleteProduct>
                            </S.InformationProduct>
                        </S.ContainerProducts>
                    );
                })}
            </S.Cart>
            <S.Overlay onClick={showMenuClick} />
        </S.ConteinerCart>

    );

};
