import CatalogContainer from "../../components/CatalogProduct";
import React from "react";
import { Header } from "../../components/Header";
import * as S from './style'

export default function Catalog() {
    return (
        <S.CatalogContainer>
            <Header />
            <CatalogContainer />
        </S.CatalogContainer>
    );
}