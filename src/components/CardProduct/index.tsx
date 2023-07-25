import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Wine } from "../../types/IProducts";
import useGetProducts from "../../services/GetDataProducts";
import Pagination from "../Pagination";
import { MenuCart } from "../MenuCartHeader";

type CardProductProps = {
  productsFiltred: Wine[];
};

interface CartItem extends Wine {
  quantity: number;
}

export function CardProduct({ productsFiltred }: CardProductProps) {
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


  const addToCart = (item: Wine) => {
    // Verifica se o produto já existe no carrinho pelo ID
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    // Se o produto já estiver no carrinho, apenas atualiza a quantidade
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // Se o produto não estiver no carrinho, adiciona um novo item ao carrinho com quantidade 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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
              <S.Button onClick={() => addToCart(e)}>ADICIONAR</S.Button>
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
              <S.Button onClick={() => addToCart(item)}>ADICIONAR</S.Button>
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
