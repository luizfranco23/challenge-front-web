import React, { useState, useEffect } from 'react';
import * as S from './style'
import Menu from '../../img/menu.png';
import Search from '../../img/search.svg';
import Count from '../../img/account.svg';
import Bag from '../../img/bag.png';
import Logo from '../../img/logo.svg';
import { MenuCart } from '../MenuCart';
import { useCart } from '../../contexts/CartContext';
import { getTotalItems } from '../../hooks/getTotalItems';




export function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const { cartItems } = useCart();
    const totalItemsQuantity = getTotalItems(cartItems)

    useEffect(() => {
        localStorage.getItem('totalItemsQuantity');
    }, []);


    const showMenuClick = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            {showMenu && <MenuCart showMenu={showMenu} setShowMenu={setShowMenu} showMenuClick={showMenuClick} />}

            <S.HeaderContainer>
                <S.Logo>
                    <button>
                        <img src={Menu} alt="Menu" />
                    </button>
                    <div>
                        <a href="/"><img src={Logo} alt="Logo" /></a>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Clube</a>
                        </li>
                        <li>
                            <a href="/">Loja</a>
                        </li>
                        <li>
                            <a href="/">Produtos</a>
                        </li>
                        <li>
                            <a href="/">Ofertas</a>
                        </li>
                        <li>
                            <a href="/">Eventos</a>
                        </li>
                    </ul>
                </S.Logo>
                <S.HeaderIcons>
                    <a href="/">
                        <img src={Search} alt="Busca" />
                    </a>
                    <a id="acountheader" href="/">
                        <img src={Count} alt="Conta" />
                    </a>
                    <S.BagCart onClick={showMenuClick}>
                        <img src={Bag} alt="Carrinho" />
                        <S.TotalProducts>{totalItemsQuantity}</S.TotalProducts>
                    </S.BagCart>
                </S.HeaderIcons>
            </S.HeaderContainer>
        </>
    );
}
