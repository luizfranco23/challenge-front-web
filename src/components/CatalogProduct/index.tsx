import * as S from "./style";
import React from 'react';
import Arrow from "../../../src/img/arrow.svg";
import Star from "../../../src/img/star.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Wine } from '../../../src/types/IProducts'

export default function CatalogContainer() {

  const [data, setData] = useState<Wine[]>([]);

  useEffect(() => {
    const localStorageId = localStorage.getItem("id");

    async function getProductId() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const productData = response.data.items;
        const filterData = productData.find((e: any) => e.id == localStorageId);
        setData(filterData ? [filterData] : []);
      } catch (error) {
        console.log(error);
      }
    }

    getProductId();
  }, []);

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
              <S.NoMember>NÃO SÓCIO R$ {data[0]?.priceNonMember}/UN</S.NoMember>
            </S.PriceProduct>

            <S.ComenterSommelier>
              <S.ComentTitle>Comentário do Sommelier</S.ComentTitle>
              <S.ComentSommelier>{data[0]?.sommelierComment}</S.ComentSommelier>
            </S.ComenterSommelier>

            <S.ButtonAddProduct>
              <S.AmountProduct>
                <div>-</div>
                <p>1</p>
                <div>+</div>
              </S.AmountProduct>
              <S.Feature />
              <S.AddProduct>Adicionar</S.AddProduct>
            </S.ButtonAddProduct>
          </S.InformationCatalog>
        </S.Catalog>
      ) : (
        <p>Loading...</p>
      )}
    </S.ContainerCatalog>
  );
}