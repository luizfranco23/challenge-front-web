// Import statements
import React, { useState } from "react";
import * as S from "./style";
import { Wine } from "../../types/IProducts";
import useGetProducts from "../../services/GetDataProducts";
import Pagination from "../Pagination"; // Importe o componente Pagination criado
import { useCart } from "../../contexts/CartContext";

type CardProductProps = {
  productsFiltred: Wine[];
};

export function CardProduct({ productsFiltred }: CardProductProps) {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.length > 0) {
      addToCart(product[0]);
    }
  };


  const { product } = useGetProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const maxButtons = 3;
  const totalPages = productsFiltred.length > 0
    ? Math.ceil(productsFiltred.length / itemsPerPage)
    : Math.ceil(product.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product?.slice(indexOfFirstItem, indexOfLastItem);
  const currentItemsFilter = productsFiltred?.slice(indexOfFirstItem, indexOfLastItem);

  const getId = (id: any) => {
    localStorage.setItem("id", id);
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <S.Container>
      <S.FinderProducts>{productsFiltred.length} produtos encontrados</S.FinderProducts>

      <S.MainCardContainer>
        {productsFiltred.length > 0
          ? currentItemsFilter.map((e) => (
            <S.ContainerCard key={e.id} onClick={() => getId(e.id)}>
              <S.Card to={`/produto/${e.id}`}>
                <S.ImageProduct>
                  <img src={e.image} alt="" />
                </S.ImageProduct>
                <S.NameProduct>
                  <p>{e.name}</p>
                </S.NameProduct>
                <S.Discount>
                  <div>R${e.priceNonMember}</div>
                  <S.Off>{e.discount}%OFF</S.Off>
                </S.Discount>
                <S.MemberClub>
                  <div>SÓCIO WINE</div>
                  <S.PriceMember>
                    <p>R$</p>
                    <div>{e.priceMember}</div>
                  </S.PriceMember>
                </S.MemberClub>
                <S.NoMember>NÃO SÓCIO WINE R${e.priceNonMember}</S.NoMember>
              </S.Card>
              <S.Button onClick={handleAddToCart} >ADICIONAR</S.Button>
            </S.ContainerCard>
          ))
          : currentItems?.map((item) => (
            <S.ContainerCard key={item.id} onClick={() => getId(item.id)}>
              <S.Card to={`/produto/${item.id}`}>
                <S.ImageProduct>
                  <img src={item.image} alt="" />
                </S.ImageProduct>
                <S.NameProduct>
                  <p>{item.name}</p>
                </S.NameProduct>
                <S.Discount>
                  <div>R${item.priceNonMember}</div>
                  <S.Off>{item.discount}%OFF</S.Off>
                </S.Discount>
                <S.MemberClub>
                  <div>SÓCIO WINE</div>
                  <S.PriceMember>
                    <p>R$</p>
                    <div>{item.priceMember}</div>
                  </S.PriceMember>
                </S.MemberClub>
                <S.NoMember>NÃO SÓCIO WINE R${item.priceNonMember}</S.NoMember>
              </S.Card>
              <S.Button onClick={handleAddToCart} >ADICIONAR</S.Button>
            </S.ContainerCard>
          ))}
      </S.MainCardContainer>

      <S.Pagination>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          maxButtons={maxButtons}
          onPageChange={onPageChange}
        />
      </S.Pagination>
    </S.Container>
  );
}
