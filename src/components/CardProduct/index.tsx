import React, { useState } from "react";
import * as S from "./style";
import useGetProducts from "../../services/GetDataProducts";
import { Link } from "react-router-dom";

export function CardProduct() {
  const { product, loading } = useGetProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const maxButtons = 3;

  const totalPages = Math.ceil(product.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product?.slice(indexOfFirstItem, indexOfLastItem);

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
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={currentPage === i ? "active" : ""}
        >
          [{i}]
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <S.Container>
      <S.FinderProducts>49 produtos encontrados</S.FinderProducts>
      <S.MainCardContainer>
        {currentItems?.map((item) => (
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
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        {getPageButtons()}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Próximo
        </button>
      </S.Pagination>
    </S.Container>
  );
}