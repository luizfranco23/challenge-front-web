import { styled } from 'styled-components';
import { Colors } from '../../global/globalstyled';

export const ErrorContainer = styled.div``;

export const Container = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-around;
`;

export const ErroPhrase = styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 200px;
 margin-top: 30px;
 gap: 150px;
`;
export const BackHome = styled.div`
 display: flex;
 align-items: center;
 gap: 4px;

 a {
  text-decoration: none;
  font-style: none;
  color: ${Colors.pink};
 }

 img {
  width: 10px;
  transform: rotateY(180deg);
 }
`;

export const Phrase = styled.div`
 display: flex;
 width: 80%;
 flex-direction: column;
`;

export const Image = styled.div`
 width: 50%;
 align-items: flex-end;
 justify-content: center;
 display: flex;
 padding-right: 400px;
 margin-top: 115px;

 img {
  width: 450px;
 }
`;
