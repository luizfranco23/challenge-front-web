import { styled } from 'styled-components';
import { Colors } from '../../global/globalstyled';

export const HeaderContainer = styled.header`
 max-width: 100%;
 box-sizing: border-box;
 padding: 32px 152px;
 align-items: center;
 display: flex;
 justify-content: space-between;
 background: #fff;
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

 @media (max-width: 1218px) {
  padding: 25px 18px;
 }
`;

export const Logo = styled.div`
 display: flex;
 align-items: center;
 width: 50%;

 button {
  border: none;
  display: none;

  img {
   width: 21px;
   height: 16px;
   background: transparent;
  }

  @media (max-width: 1218px) {
   display: block;
   background: #fff;
   padding-right: 25px;
  }
 }

 ul {
  padding-left: 83px;
  display: flex;
  list-style: none;
  gap: 48px;
  li {
  }

  a {
   text-decoration: none;
   color: #555555;
   font-size: 18px;
  }

  @media (max-width: 1218px) {
   display: none;
  }
 }

 a {
  width: 100px;
  height: 28px;
  position: relative;

  @media (max-width: 1218px) {
   max-width: 100%;
   width: 78px;
   height: 22px;
   display: flex;
  }
 }

 a:hover::after {
  content: '';
  bottom: -230%;
  left: 0;
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: #d14b8f;
 }
`;

export const HeaderIcons = styled.div`
 width: 50%;
 display: flex;
 align-items: center;
 gap: 45px;
 justify-content: end;
 img {
  width: 57px;
  justify-content: end;
 }

 @media (max-width: 769px) {
  gap: 20px;
  #acountheader {
   display: none;
  }
 }
`;

export const BagCart = styled.div`
 position: relative;
`;

export const TotalProducts = styled.div`
 width: 23px;
 height: 23px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: ${Colors.greenTwo};
 background: ${Colors.white};
 box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
 border-radius: 50px;
 position: absolute;
 margin-left: 36px;
 top: 35px;
`;
