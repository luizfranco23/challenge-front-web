import { CardProduct } from "../../components/CardProduct";
import React from "react";
import { Header } from "../../components/Header";
import { FilterPrice } from "../../components/FilterPrice";
import * as S from "./style";

export default function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <S.Container>
        <FilterPrice />
        <CardProduct />
      </S.Container>
    </S.HomeContainer>
  );
}
