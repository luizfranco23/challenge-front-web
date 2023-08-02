import * as S from "./style";
import React, { useEffect, useState } from 'react';
import Arrow from "../../../src/img/arrow.svg";
import Star from "../../../src/img/star.png";
import useGetProductById from "../../services/GetIdProducts";
import { addToCart } from "../../hooks/cartUtils";
import { CartItem } from "../../types/cartItem";

export default function CatalogContainer() {

  const { data } = useGetProductById();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <S.ContainerCatalog>
      {data.length > 0 ? (
        <S.Catalog>
          <S.ImageProduct>
            <img src={data[0].image} alt="" />
          </S.ImageProduct>
          <S.InformationCatalog>
            <S.NameProduct>
              <S.RegionProduct>
                <S.Region>
                  <S.RegionProducText>Vinhos</S.RegionProducText>
                  <img src={Arrow} alt="Arrow" />
                  <S.RegionProducText>{data[0]?.country}</S.RegionProducText>
                  <img src={Arrow} alt="Arrow" />
                  <p>{data[0]?.region}</p>
                </S.Region>
                <S.TitleProduct>{data[0]?.name}</S.TitleProduct>

                <S.Country>
                  <img src={data[0]?.flag} alt="" />
                  <p>{data[0]?.country}</p>
                  <p>{data[0]?.type}</p>
                  <p>{data[0]?.classification}</p>
                  <p>{data[0]?.size}</p>
                  <S.Star>
                    {Array.from({ length: data[0]?.rating }, (_, index) => (
                      <img key={index} src={Star} alt="Avaliação" />
                    ))}
                  </S.Star>
                  <p>({data[0]?.avaliations})</p>
                </S.Country>
              </S.RegionProduct>
            </S.NameProduct>
            <S.PriceProduct>
              <S.PriceMember>
                <p>R$</p>
                <div>{data[0]?.priceMember}</div>
              </S.PriceMember>
              <S.NoMember>NÃO SÓCIO R$ {data[0]?.priceNonMember}UN</S.NoMember>
            </S.PriceProduct>

            <S.ComenterSommelier>
              <S.ComentTitle>Comentário do Sommelier</S.ComentTitle>
              <S.ComentSommelier>{data[0]?.sommelierComment}</S.ComentSommelier>
            </S.ComenterSommelier>

            <S.ButtonAddProduct>
              <S.AmountProduct>
                <div onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</div>
                <p>{quantity}</p>
                <div onClick={() => setQuantity(quantity + 1)}>+</div>
              </S.AmountProduct>

              <S.Feature />
              <S.AddProduct onClick={() => addToCart(data[0], cartItems, setCartItems, quantity)}>Adicionar</S.AddProduct>
            </S.ButtonAddProduct>
          </S.InformationCatalog>
        </S.Catalog>
      ) : (
        <p>Loading...</p>
      )}
    </S.ContainerCatalog>
  );
}
