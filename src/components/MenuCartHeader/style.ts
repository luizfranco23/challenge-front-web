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
  display: flex;
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

export const ContainerProducts = styled.div``;
