import React, { useEffect, useState } from 'react';
import * as S from './style';
import leftarrow from '../../img/left-arrow.png';
import { Wine } from '../../types/IProducts';

interface MenuCartProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showMenuClick: () => void;
}

export const MenuCart: React.FC<MenuCartProps> = ({ showMenuClick }) => {
    const [cardProducts, setCardProducts] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('cart');
        if (localData) setCardProducts(JSON.parse(localData));
    }, []);




    return (
        <>
            <S.ConteinerCart>
                <S.Cart>
                    <S.BackPage onClick={showMenuClick}>
                        <img src={leftarrow} alt="Voltar" /> WineBox (5)
                    </S.BackPage>

                </S.Cart>
                <S.Overlay />
            </S.ConteinerCart>
        </>
    );
};


// {cardProducts.map((item: Wine) => {
//     return (
//         <div key={item.id}>
//             <div>{item.name}</div>
//         </div>
//     );
// })}