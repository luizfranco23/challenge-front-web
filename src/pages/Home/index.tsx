import { CardProduct } from "../../components/CardProduct";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { FilterPrice } from "../../components/FilterPrice";
import * as S from "./style";
import { Wine } from "../../types/IProducts";

function HomeContainer() {
  const [filter, setFilter] = useState<Wine[]>([]);

  function getData(data: Wine[]) {
    setFilter(data);
  }



  return (
    <S.HomeContainer>
      <Header />
      <S.Container>
        <FilterPrice getDataFilter={getData} />
        <CardProduct productsFiltred={filter} />
      </S.Container>
    </S.HomeContainer>
  );
}

export default HomeContainer;
