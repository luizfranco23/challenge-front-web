// Import statements
import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { Wine } from "../../types/IProducts";
import Arrow from '../../img/arrow.svg'
import useGetProducts from "../../services/GetDataProducts";

// Type definition
type CardProductProps = {
  productsFiltred: Wine[];
};

// Component definition
export function CardProduct({ productsFiltred }: CardProductProps) {
  // State and constants
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

  // Helper functions
  const getId = (id: any) => {
    localStorage.setItem("id", id);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const getPageButtons = () => {
    const pageButtons = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <S.ButtonNumberPage
          key={i}
          onClick={() => goToPage(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </S.ButtonNumberPage>
      );
    }
    return pageButtons;
  };

  // JSX rendering
  return (
    <S.Container>
      <S.FinderProducts>{productsFiltred.length} produtos encontrados</S.FinderProducts>

      <S.MainCardContainer>
        {productsFiltred.length > 0
          ? currentItemsFilter.map((e: any) => (
            <S.ContainerCard key={e.id} onClick={() => getId(e.id)}>
              <S.Card to={'/produto'}>
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
              <S.Button>ADICIONAR</S.Button>
            </S.ContainerCard>
          ))
          : currentItems?.map((item) => (
            <S.ContainerCard key={item.id} onClick={() => getId(item.id)}>
              <S.Card to={'/produto'}>
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
              <S.Button>ADICIONAR</S.Button>
            </S.ContainerCard>
          ))}
      </S.MainCardContainer>

      <S.Pagination>
        {getPageButtons()}
        <S.ButtonNextPage onClick={nextPage} disabled={currentPage === totalPages}>
          Próximo <img src={Arrow} alt="Próxima Página" />
        </S.ButtonNextPage>
      </S.Pagination>
    </S.Container>
  );
}
