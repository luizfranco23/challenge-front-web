import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../../global/globalstyled';

export const ConteinerCart = styled.div``;

const slideInFromRight = keyframes`
  0% {
    right: -400px; 
  }
  100% {
    right: 0;
  }
`;

export const Cart = styled.div`
 position: fixed;
 background: #fff;
 width: 400px;
 background: ${Colors.grayOne};
 z-index: 1;
 right: 0;
 top: 0;
 height: 100%;
 box-shadow: -10px 0px 15px -5px rgba(0, 0, 0, 0.2);
 animation: ${slideInFromRight} 0.5s forwards;
`;

export const Overlay = styled.div`
 position: fixed;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.3);
 z-index: 0;
`;

export const BackPage = styled.div`
 display: flex;
 gap: 10px;
 padding-left: 20px;
 font-size: 20px;
 cursor: pointer;
 background: #fff;
 align-items: center;
 width: 100%;
 height: 80px;
 img {
  width: 27px;
 }
`;

export const ContainerProducts = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.2);
 align-items: center;
`;
export const NameProduct = styled.div`
 width: 70%;
 margin-top: 10px;
 font-size: 16px;
`;

export const InformationProduct = styled.div`
 display: flex;
 width: 100%;
`;

export const ImageProduct = styled.div`
 padding-left: 10px;
 img {
  width: 70px;
 }
`;

export const Product = styled.div`
 display: flex;
 margin-top: 60px;
 width: 60px;
 height: 30px;
 font-size: 17px;
 align-items: center;
 justify-content: center;
 border-radius: 3px;
 gap: 20px;
 padding: 0 10px;
 border: 1.5px solid ${Colors.gray};
 color: ${Colors.gray};
`;

export const RemoveProduct = styled.div`
 color: ${Colors.gray};
 cursor: pointer;
`;

export const AmountProduct = styled.div``;

export const AddProduct = styled.div`
 color: ${Colors.gray};
 cursor: pointer;
`;

export const TotalPrice = styled.div`
 color: ${Colors.pink};
 font-weight: bold;
 font-size: 1.2rem;
 margin-left: 15%;
 display: flex;
 align-items: end;
 justify-content: center;
 margin-top: 60px;
 height: 30px;
`;

export const deleteProduct = styled.div`
 button {
  position: absolute;
  margin-top: 15px;
  margin-left: 30px;
  border-radius: 50px;
  width: 20px;
  color: ${Colors.gray};
  border: 0.5px solid ${Colors.black};
  height: 20px;
 }
`;
