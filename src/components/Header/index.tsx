import * as S from './style'
import React from 'react';
import Menu from '../../img/menu.png'
import Search from '../../img/search.svg'
import Count from '../../img/account.svg'
import Bag from '../../img/bag.png'
import Logo from '../../img/logo.svg'


export function Header() {
    return (
        <S.HeaderContainer>
            <S.Logo>
                <button><img src={Menu} alt="" /></button>
                <div><img src={Logo} alt="" /></div>
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
                <a href="/"><img src={Search} alt="" /></a>
                {<a id='acountheader' href="/"><img src={Count} alt="" /></a>}
                <a href="/"><img src={Bag} alt="" /></a>
            </S.HeaderIcons>
        </S.HeaderContainer>
    );
}