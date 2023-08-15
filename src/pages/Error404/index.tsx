import * as S from "./style";
import { Header } from "../../components/Header";
import React from "react";
import Broken from '../../img/broken_glass.png'
import Arrow from '../../img/arrow.svg'

export default function Error404() {
    return (
        <S.ErrorContainer>
            <Header />
            <S.Container>
                <S.ErroPhrase>
                    <S.BackHome>
                        <a href="/"><img src={Arrow} alt="Voltar" /></a>
                        <a href="/">Voltar para Home</a>
                    </S.BackHome>
                    <S.Phrase>
                        <p>Error404</p>
                        <h1>Opa! A página que você está tentando acessar não existe ou não está disponível.</h1>
                    </S.Phrase>
                </S.ErroPhrase>
                <S.Image>
                    <img src={Broken} alt="" />
                </S.Image>
            </S.Container>
        </S.ErrorContainer>
    );
}